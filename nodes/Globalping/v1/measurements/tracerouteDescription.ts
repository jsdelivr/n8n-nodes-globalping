import type { INodeProperties } from 'n8n-workflow';

export const tracerouteOptions = [
	{
		name: 'Traceroute',
		value: 'measurementTraceroute',
		action: 'Traceroute. Raw output, latency data, all protocols and ports.',
	},
];

export const tracerouteFields: INodeProperties[] = [
	{
		displayName: 'Traceroute Options',
		name: 'measurementOptions',
		type: 'collection',
		default: {},
		description: 'Additional optional settings',
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
		],
		displayOptions: {
			show: {
				resource: ['measurements'],
				operation: ['measurementTraceroute'],
			},
		},
	},
];
