import { Component, HostBinding } from '@angular/core';
import { BaseComponent, ConfigService } from 'tabby-core';

/** @hidden */
@Component({
	template: require('./awsSettingsTab.component.pug'),
})
export class AWSSettingsTabComponent extends BaseComponent {
	@HostBinding('class.content-box') true;
	connected = false;

	constructor(public config: ConfigService /*, private aws: AWSService*/) {
		super();
		/*this.subscribeUntilDestroyed(this.config.changed$, async () => {
			this.connected = false
			await this.aws.listInstances() // TODO: replace with some other healthcheck
			this.connected = true
		})*/
	}
}
