import type { INodeProperties } from 'n8n-workflow';
import { pingFields, pingOptions } from './measurements/pingDescription';
import { tracerouteFields, tracerouteOptions } from './measurements/tracerouteDescription';
import { dnsFields, dnsOptions } from './measurements/dnsDescription';
import { mtrFields, mtrOptions } from './measurements/mtrDescription';
import { httpFields, httpOptions } from './measurements/httpDescription';

const operations: string[] = [
	'measurementPing',
	'measurementTraceroute',
	'measurementDns',
	'measurementMtr',
	'measurementHttp',
];

export const measurementsOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['measurements'],
			},
		},
		options: [...pingOptions, ...tracerouteOptions, ...dnsOptions, ...mtrOptions, ...httpOptions],
		default: '',
	},
];

export const measurementsFields: INodeProperties[] = [
	{
		displayName: 'Target',
		name: 'measurementTarget',
		type: 'string',
		default: '',
		required: true,
		description:
			'A publicly reachable measurement target. Typically a hostname, an IPv4 address, or IPv6 address, depending on the measurement type. Support for IPv6 targets is currently considered experimental.',
		displayOptions: {
			show: {
				resource: ['measurements'],
				operation: operations,
			},
		},
	},
	// location
	{
		displayName: 'Locations',
		name: 'measurementLocationsUi',
		placeholder: 'Add location',
		type: 'fixedCollection',
		default: {},
		typeOptions: {
			multipleValues: true,
		},
		displayOptions: {
			show: {
				resource: ['measurements'],
				operation: operations,
			},
		},
		options: [
			{
				name: 'measurementLocations',
				displayName: 'Locations',
				values: [
					{
						displayName: 'Location',
						name: 'magic',
						type: 'string',
						description:
							'The location where the test should run from. This is a smart field that can accept locations such as:\n' +
							'\n' +
							'Continents (europe, north america, south asia)\n' +
							'Countries (usa, germany, india)\n' +
							'US States (new york, texas)\n' +
							'Cities (new york city, london, amsterdam)\n' +
							'ASNs (396982)\n' +
							'ISP names (verizon, t-mobile, hetzner, amazon, google)\n' +
							'Cloud region names (us-east-2)\n' +
							'\n' +
							'Note that only English variations of names are supported.',
						default: '',
						placeholder: 'Poland+Google+aws-us-east-1',
					},
				],
			},
		],
	},
	{
		displayName: 'Limit',
		name: 'measurementLimit',
		type: 'number',
		description:
			"The maximum number of probes that should run the measurement. The result count might be lower if there aren't enough probes available in the specified locations. Mutually exclusive with the limit property that can be set for individual locations.\n" +
			'\n' +
			'Constraints: Min 1┃Max 500 Default: 1',
		default: 1,
		typeOptions: {
			maxValue: 500,
			minValue: 1,
		},
	},
	...pingFields,
	...tracerouteFields,
	...dnsFields,
	...mtrFields,
	...httpFields,
];
