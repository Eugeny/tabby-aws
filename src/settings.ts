import { Injectable } from '@angular/core'
import { SettingsTabProvider } from 'tabby-settings'
import { AWSSettingsTabComponent } from "./components/awsSettingsTab.component";

/** @hidden */
@Injectable()
export class AWSSettingsTabProvider extends SettingsTabProvider {
	id = 'aws'
	icon = 'aws fab'
	title = 'AWS'

	getComponentType (): any {
		return AWSSettingsTabComponent
	}
}
