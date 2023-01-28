import { ConfigProvider } from 'tabby-core'

/** @hidden */
export class AWSConfigProvider extends ConfigProvider {
	defaults = {
		aws: {
			accessKeyId: null,
			secretAccessKey: null,
			region: null,
		},
	}

	platformDefaults = { }
}
