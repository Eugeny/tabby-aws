import { Injectable } from '@angular/core';
import { ConfigService, Logger, LogService } from 'tabby-core';
import { DescribeInstancesCommand, EC2Client } from '@aws-sdk/client-ec2';

export interface Instance {
	id: string;
	name: string;
	ip: string;
	connectAddress: string;
}

@Injectable({ providedIn: 'root' })
export class AWSService {
	logger: Logger;

	constructor(log: LogService, private config: ConfigService) {
		this.logger = log.create('docker');
	}

	async listInstances(): Promise<Instance[]> {
		const cmd = new DescribeInstancesCommand({});
		const data = await this.getClient().send(cmd); // TODO: try-catch this

		this.logger.info(data);

		return (
			data.Reservations?.flatMap((r) => r.Instances ?? [])?.map((i) => ({
				id: i.InstanceId,
				name: i.Tags?.find((t) => t.Key === 'Name')?.Value ?? i.InstanceId,
				ip: i.PublicIpAddress ?? i.PrivateIpAddress,
				connectAddress: i.PublicDnsName ?? i.PrivateIpAddress,
			})) ?? []
		);
	}

	private getClient(): EC2Client {
		const opts = {
			region: this.config.store.aws.region,
			credentials: {
				accessKeyId: this.config.store.aws.accessKeyId,
				secretAccessKey: this.config.store.aws.secretAccessKey,
			},
		};
		return new EC2Client(opts);
	}
}
