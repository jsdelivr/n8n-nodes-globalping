import type { INodeProperties } from 'n8n-workflow';

export const pingOptions = [
	{
		name: 'Ping',
		value: 'measurementPing',
		action: 'Creates a new ping measurement and returns the status and results',
	},
];

export const pingFields: INodeProperties[] = [
	{
		displayName: 'Ping Options',
		name: 'measurementOptions',
		type: 'collection',
		default: {},
		description: 'Additional optional fields depending on the measurement type',
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
				operation: ['measurementPing'],
			},
		},
	},
];
