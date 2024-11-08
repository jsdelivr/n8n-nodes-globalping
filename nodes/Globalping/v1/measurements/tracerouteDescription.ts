import type { INodeProperties } from 'n8n-workflow';

export const tracerouteOptions = [
	{
		name: 'Traceroute',
		value: 'measurementTraceroute',
		action: 'Creates a new traceroute measurement and returns the status and results',
	},
];

export const tracerouteFields: INodeProperties[] = [
	{
		displayName: 'Traceroute Options',
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
					'The transport protocol to use.\n' + '\n' + 'Default: ICMP Allowed: ICMP┃TCP┃UDP',
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
				default: 'ICMP',
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
		],
		displayOptions: {
			show: {
				resource: ['measurements'],
				operation: ['measurementTraceroute'],
			},
		},
	},
];
