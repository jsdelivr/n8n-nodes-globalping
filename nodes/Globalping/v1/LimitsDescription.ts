import type { INodeProperties } from 'n8n-workflow';

export const limitsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['limits'],
			},
		},
		options: [
			{
				name: 'List',
				value: 'list',
				action:
					'Returns rate limits for the current user if authenticated or ip address if not authenticated',
			},
		],
		default: 'list',
	},
];

export const limitsFields: INodeProperties[] = [];
