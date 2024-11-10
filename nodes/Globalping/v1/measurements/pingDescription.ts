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
		displayName: 'Packets',
		name: 'packets',
		type: 'number',
		description: 'The number of packets to send.\n' + '\n' + 'Constraints: Min 1┃Max 16 Default: 3',
		default: 3,
		typeOptions: {
			maxValue: 16,
			minValue: 1,
		},
		displayOptions: {
			show: {
				resource: ['measurements'],
				operation: ['measurementPing'],
			},
		},
	},
];
