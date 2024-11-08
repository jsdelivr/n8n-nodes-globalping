import type { INodeProperties } from 'n8n-workflow';

export const httpOptions = [
	{
		name: 'HTTP',
		value: 'measurementHttp',
		action: 'Creates a new http measurement and returns the status and results',
	},
];

export const httpFields: INodeProperties[] = [
	{
		displayName: 'Http Options',
		name: 'measurementOptions',
		type: 'collection',
		default: {},
		description: 'Additional optional fields depending on the measurement type',
		options: [
			{
				displayName: 'IP Version',
				name: 'ipVersion',
				type: 'options',
				description:
					'EXPERIMENTAL: The IP version to use. Only allowed if the target is a hostname.' +
					'\n' +
					'Allowed: 4┃6',
				options: [
					{
						name: '4',
						value: 4,
					},
					{
						name: '6',
						value: 6,
					},
				],
				default: 4,
			},
			{
				displayName: 'Port',
				name: 'port',
				type: 'number',
				description:
					'The port number to use.\n' + '\n' + 'Constraints: Min 0┃Max 65535 Default: 80',
				default: 80,
				typeOptions: {
					maxValue: 65535,
					minValue: 0,
				},
			},
			{
				displayName: 'Protocol',
				name: 'protocol',
				type: 'options',
				description:
					'The transport protocol to use.\n' + '\n' + 'Default: HTTPS Allowed: HTTP┃HTTPS┃HTTP2',
				options: [
					{
						name: 'HTTP',
						value: 'HTTP',
					},
					{
						name: 'HTTPS',
						value: 'HTTPS',
					},
					{
						name: 'HTTP2',
						value: 'HTTP2',
					},
				],
				default: 'HTTP',
			},
			{
				displayName: 'Request',
				name: 'request',
				type: 'collection',
				default: {},
				description: 'The HTTP request properties',
				options: [
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
					{
						displayName: 'Host',
						name: 'host',
						type: 'string',
						description:
							'An optional override for the Host header. The default value is based on the target.',
						default: '',
					},
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
						default: 'GET',
					},
					{
						displayName: 'Path',
						name: 'path',
						type: 'string',
						description: 'The path portion of the URL',
						default: '',
					},
					{
						displayName: 'Query',
						name: 'query',
						type: 'string',
						description: 'The query string portion of the URL',
						default: '',
					},
				],
			},
			{
				displayName: 'Resolver',
				name: 'resolver',
				type: 'string',
				description:
					'A DNS resolver to use for the query. Defaults to the probe system resolver.\n' +
					'\n' +
					'ANY OF\n' +
					'1 ipv4\n' +
					'The IPv4 address of the resolver.\n' +
					'\n' +
					'2 ipv6\n' +
					'EXPERIMENTAL: The IPv6 address of the resolver.\n' +
					'\n' +
					'3 hostname\n' +
					'The Fully Qualified Domain Name (FQDN) of the resolver.',
				default: '',
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
