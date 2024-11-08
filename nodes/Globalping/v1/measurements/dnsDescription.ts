import type { INodeProperties } from 'n8n-workflow';

export const dnsOptions = [
	{
		name: 'DNS',
		value: 'measurementDns',
		action: 'Creates a new dns measurement and returns the status and results',
	},
];

export const dnsFields: INodeProperties[] = [
	{
		displayName: 'DNS Options',
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
					'The destination port for the data packets.\n' +
					'\n' +
					'Constraints: Min 0┃Max 65535 Default: 53',
				default: 53,
				typeOptions: {
					maxValue: 65535,
					minValue: 0,
				},
			},
			{
				displayName: 'Protocol',
				name: 'protocol',
				type: 'options',
				description: 'The transport protocol to use.\n' + '\n' + 'Default: TCP Allowed: TCP┃UDP',
				options: [
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
				displayName: 'Query',
				name: 'query',
				type: 'collection',
				default: {},
				description: 'The DNS query properties',
				options: [
					{
						displayName: 'Type',
						name: 'type',
						type: 'options',
						description:
							'The type of DNS query.\n' +
							'\n' +
							'Default: A Allowed: A┃AAAA┃ANY┃CNAME┃DNSKEY┃DS┃HTTPS┃MX┃NS┃NSEC┃PTR┃RRSIG┃SOA┃TXT┃SRV',
						options: [
							{
								name: 'A',
								value: 'A',
							},
							{
								name: 'AAAA',
								value: 'AAAA',
							},
							{
								name: 'ANY',
								value: 'ANY',
							},
							{
								name: 'CNAME',
								value: 'CNAME',
							},
							{
								name: 'DNSKEY',
								value: 'DNSKEY',
							},
							{
								name: 'DS',
								value: 'DS',
							},
							{
								name: 'HTTPS',
								value: 'HTTPS',
							},
							{
								name: 'MX',
								value: 'MX',
							},
							{
								name: 'NS',
								value: 'NS',
							},
							{
								name: 'NSEC',
								value: 'NSEC',
							},
							{
								name: 'PTR',
								value: 'PTR',
							},
							{
								name: 'RRSIG',
								value: 'RRSIG',
							},
							{
								name: 'SOA',
								value: 'SOA',
							},
							{
								name: 'SRV',
								value: 'SRV',
							},
							{
								name: 'TXT',
								value: 'TXT',
							},
						],
						default: 'A',
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
			{
				displayName: 'Trace',
				name: 'trace',
				type: 'boolean',
				description:
					'Toggles tracing of the delegation path from the root servers down to the target domain name.\n' +
					'\n' +
					'Default: false',
				default: false,
			},
		],
		displayOptions: {
			show: {
				resource: ['measurements'],
				operation: ['measurementDns'],
			},
		},
	},
];
