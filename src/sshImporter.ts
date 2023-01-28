import { PartialProfile } from 'tabby-core';
import { Injectable } from '@angular/core';
import { SSHProfile, SSHProfileImporter } from 'tabby-ssh';
import { AWSService } from './services/aws.service';

@Injectable({ providedIn: 'root' })
export class AWSSSHImporter extends SSHProfileImporter {
	constructor(private aws: AWSService) {
		super();
		console.log('aaaaa');
	}

	async getProfiles(): Promise<PartialProfile<SSHProfile>[]> {
		const instances = await this.aws.listInstances();

		console.log(instances);
		return instances.map((i) => ({
			id: `aws:${i.id}`,
			name: i.name,
			type: 'ssh',
			group: 'AWS Instances',
			options: {
				host: i.connectAddress,
			},
		}));
	}
}
