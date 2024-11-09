import type { INodeProperties } from 'n8n-workflow';

export const mtrOptions = [
	{
		name: 'MTR',
		value: 'measurementMtr',
		action: 'Creates a new mtr measurement and returns the status and results',
	},
];

export const mtrFields: INodeProperties[] = [
	{
		displayName: 'MTR Options',
		name: 'measurementOptions',
		type: 'collection',
		default: {},
		description: 'Additional optional fields depending on the measurement type',
		options: [
			{
				displayName: 'Port',
				name: 'port',
				type: 'number',
				description:
					'The destination port for the data packets.\n' +
					'\n' +
					'Constraints: Min 0┃Max 65535 Default: 80',
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
					'The transport protocol to use.\n' + '\n' + 'Default: ICMP Allowed: ICMP|TCP┃UDP',
				options: [
					{
						name: 'ICMP',
						value: 'ICMP',
					},
					{
						name: 'TCP',
						value: 'TCP',
					},
					{
						name: 'UDP',
						value: 'UDP',
					},
				],
				default: 'TCP',
			},
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
				displayName: 'Packets',
				name: 'packets',
				type: 'number',
				description:
					'The number of packets to send.\n' + '\n' + 'Constraints: Min 1┃Max 16 Default: 3',
				default: 3,
				typeOptions: {
					maxValue: 16,
					minValue: 1,
				},
			},
		],
		displayOptions: {
			show: {
				resource: ['measurements'],
				operation: ['measurementMtr'],
			},
		},
	},
];
