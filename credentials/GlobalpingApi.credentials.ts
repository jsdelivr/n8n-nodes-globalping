import { IAuthenticateGeneric, ICredentialType, INodeProperties } from 'n8n-workflow';

export class GlobalpingApi implements ICredentialType {
	name = 'globalpingApi';
	displayName = 'Globalping API';
	documentationUrl = 'https://globalping.io/docs/api.globalping.io';
	properties: INodeProperties[] = [
		{
			displayName: 'Access token',
			name: 'accessToken',
			type: 'string',
			default: '',
			typeOptions: {
				password: true,
			},
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.accessToken}}',
			},
		},
	};
}
