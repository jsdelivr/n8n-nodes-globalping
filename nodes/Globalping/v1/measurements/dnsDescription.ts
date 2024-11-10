import type { INodeProperties } from 'n8n-workflow';

export const dnsOptions = [
	{
		name: 'DNS',
		value: 'measurementDns',
		action: 'DNS resolve. All types, latency data and optional tracing.',
	},
];

export const dnsFields: INodeProperties[] = [
	{
		displayName: 'DNS Options',
		name: 'measurementOptions',
		type: 'collection',
		default: {},
		description: 'Additional optional settings',
		options: [
			{
				displayName: 'Query Type',
				name: 'queryType',
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
			{
				displayName: 'DNS Resolver',
				name: 'resolver',
				type: 'string',
				description:
					'The DNS resolver to use for the query. Defaults to the local resolver.\n' +
					'\n' +
					'ANY OF\n' +
					'1 ipv4\n' +
					'The IPv4 address of the resolver.\n' +
					'\n' +
					'2 ipv6\n' +
					'The IPv6 address of the resolver.\n' +
					'\n' +
					'3 hostname\n' +
					'The Fully Qualified Domain Name (FQDN) of the resolver.',
				default: '',
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
