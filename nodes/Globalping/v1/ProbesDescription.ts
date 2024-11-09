import type { INodeProperties } from 'n8n-workflow';

export const probesOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['probes'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'list',
				action:
					'Returns a list of all probes currently online and their metadata such as location and assigned tags. For advanced use-cases.',
			},
		],
		default: 'list',
	},
];

export const probesFields: INodeProperties[] = [];
