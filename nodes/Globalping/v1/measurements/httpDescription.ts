import type { INodeProperties } from 'n8n-workflow';

export const httpOptions = [
	{
		name: 'HTTP',
		value: 'measurementHttp',
		action: 'HTTP Request. GET or HEAD, raw output, latency and TLS data. Limited to 10kb.',
	},
];

export const httpFields: INodeProperties[] = [
	{
		displayName: 'HTTP Options',
		name: 'measurementOptions',
		type: 'collection',
		default: {},
		description: 'Additional optional settings',
		options: [
			{
				displayName: 'Method',
				name: 'method',
				type: 'options',
				description: 'The HTTP method to use.\n' + '\n' + 'Default: HEAD Allowed: HEAD┃GET',
				options: [
					{
						name: 'HEAD',
						value: 'HEAD',
					},
					{
						name: 'GET',
						value: 'GET',
					},
				],
				default: 'HEAD',
			},
			{
				displayName: 'Headers',
				name: 'headersUi',
				placeholder: 'Add header',
				type: 'fixedCollection',
				description:
					'Additional request headers. Note that the Host and User-Agent are reserved and internally overridden.',
				default: {},
				typeOptions: {
					multipleValues: true,
				},
				options: [
					{
						name: 'headers',
						displayName: 'Headers',
						values: [
							{
								displayName: 'Key',
								name: 'key',
								type: 'string',
								description: 'Header key',
								default: '',
							},
							{
								displayName: 'Value',
								name: 'value',
								type: 'string',
								description: 'Header value',
								default: '',
							},
						],
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['measurements'],
				operation: ['measurementHttp'],
			},
		},
	},
];
