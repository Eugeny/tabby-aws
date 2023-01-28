import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import TabbyCoreModule, { ConfigProvider } from 'tabby-core';
import { AWSConfigProvider } from './config';
import { AWSSettingsTabComponent } from './components/awsSettingsTab.component';
import { AWSSettingsTabProvider } from './settings';
import { SettingsTabProvider } from 'tabby-settings';
import { FormsModule } from '@angular/forms';
import { AWSSSHImporter } from './sshImporter';
import { SSHProfileImporter } from 'tabby-ssh';

@NgModule({
	imports: [CommonModule, FormsModule, TabbyCoreModule, NgbModule],
	providers: [
		{ provide: ConfigProvider, useClass: AWSConfigProvider, multi: true },
		{ provide: SettingsTabProvider, useClass: AWSSettingsTabProvider, multi: true },
		{ provide: SSHProfileImporter, useExisting: AWSSSHImporter, multi: true },
	],
	entryComponents: [AWSSettingsTabComponent],
	declarations: [AWSSettingsTabComponent],
})
export default class AWSModule {}
