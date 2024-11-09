import type { INodeProperties } from 'n8n-workflow';

export const pingOptions = [
	{
		name: 'Ping',
		value: 'measurementPing',
		action: 'PING. Raw output, latency data, max 16 packets.',
	},
];

export const pingFields: INodeProperties[] = [
	{
		displayName: 'Ping Options',
		name: 'measurementOptions',
		type: 'collection',
		default: {},
		description: 'Additional optional settings',
		options: [
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
			{
				displayName: 'IP Version',
				name: 'ipVersion',
				type: 'options',
				description:
					'The IP version to use. Only allowed if the target is a hostname.' +
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
				operation: ['measurementPing'],
			},
		},
	},
];
