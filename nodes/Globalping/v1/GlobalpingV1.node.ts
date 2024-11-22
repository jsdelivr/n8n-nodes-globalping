import {
	type IDataObject,
	type IExecuteFunctions,
	type IHttpRequestMethods,
	type INodeExecutionData,
	type INodeType,
	type INodeTypeBaseDescription,
	type INodeTypeDescription,
	sleep,
} from 'n8n-workflow';

import { probesFields, probesOperations } from './ProbesDescription';
import { limitsFields, limitsOperations } from './LimitsDescription';
import { globalpingApiRequest, parseMeasurementTarget } from '../GenericFunctions';
import { measurementsFields, measurementsOperations } from './MeasurementsDescription';
import {
	DnsOptions,
	HttpOptions,
	MeasurementLocation,
	MeasurementRequestBody,
	MtrOptions,
	PingOptions,
	TracerouteOptions,
} from '../types';

const versionDescription: INodeTypeDescription = {
	displayName: 'Globalping',
	name: 'globalping',
	icon: 'file:globalping.svg',
	group: ['transform'],
	version: 1,
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Consume the Globalping API',
	defaults: {
		name: 'Globalping',
	},
	inputs: ['main'],
	outputs: ['main'],
	credentials: [
		{
			name: 'globalpingApi',
			required: false,
		},
	],
	properties: [
		{
			displayName: 'Authentication',
			name: 'useToken',
			type: 'boolean',
			description: 'Whether to use a token for requests. If disabled, requests will not include a token.',
			default: false,
		},
		{
			displayName: 'Resource',
			name: 'resource',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Measurement',
					value: 'measurements',
				},
				{
					name: 'Probe',
					value: 'probes',
				},
				{
					name: 'Limit',
					value: 'limits',
				},
			],
			default: 'measurements',
		},
		...probesOperations,
		...probesFields,
		...limitsOperations,
		...limitsFields,
		...measurementsOperations,
		...measurementsFields,
	],
};

export class GlobalpingV1 implements INodeType {
	description: INodeTypeDescription;

	constructor(baseDescription: INodeTypeBaseDescription) {
		this.description = {
			...baseDescription,
			...versionDescription,
		};
	}

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];
		const resource = this.getNodeParameter('resource', 0);
		const operation = this.getNodeParameter('operation', 0);

		let method: IHttpRequestMethods = 'GET';
		let body: IDataObject = {};
		let qs: IDataObject = {};
		let endpoint = '';
		let responseData;

		for (let i = 0; i < items.length; i++) {
			try {
				if (resource === 'probes') {
					if (operation === 'list') {
						//https://globalping.io/docs/api.globalping.io#tag--Probes

						method = 'GET';
						endpoint = '/v1/probes';

						body = {};

						responseData = await globalpingApiRequest.call(this, method, endpoint, body, qs);
					}
				}

				if (resource === 'limits') {
					if (operation === 'list') {
						//https://globalping.io/docs/api.globalping.io#tag--Limits

						method = 'GET';
						endpoint = '/v1/limits';

						body = {};

						responseData = await globalpingApiRequest.call(this, method, endpoint, body, qs);
					}
				}

				if (resource === 'measurements') {
					//https://globalping.io/docs/api.globalping.io#tag--Measurements
					const executeData = this.getExecuteData();
					const params = executeData.node.parameters as any;

					let requestBody = {} as MeasurementRequestBody;

					const parsedTarget = parseMeasurementTarget(this.getNodeParameter('measurementTarget', i) as string);

					requestBody.target = parsedTarget.host;

					let measurementLocationsUi = this.getNodeParameter('measurementLocationsUi', i) as any;
					if (measurementLocationsUi) {
						if (measurementLocationsUi.measurementLocations) {
							requestBody.locations = [];
							for (let location of measurementLocationsUi.measurementLocations) {
								let locationObject = {} as MeasurementLocation;

								if (location.magic && location.magic !== '') {
									locationObject.magic = location.magic;
								}

								if (Object.keys(locationObject).length > 0) {
									requestBody.locations.push(locationObject);
								}
							}
						}
					}

					let measurementLimit = this.getNodeParameter('measurementLimit', i) as number;

					if(measurementLimit && measurementLimit !== 1) {
						requestBody.limit = measurementLimit;
					}

					if (operation === 'measurementPing') {
						requestBody.type = 'ping';
						let measurementOptions = {} as PingOptions;

						if (params.packets && params.packets !== 3) {
							measurementOptions.packets = this.getNodeParameter('packets', i) as number;
						}

						if (Object.keys(measurementOptions).length > 0) {
							requestBody.measurementOptions = measurementOptions;
						}
					}

					if (operation === 'measurementTraceroute') {
						requestBody.type = 'traceroute';
						let measurementOptions = {} as TracerouteOptions;

						if (params.measurementOptions.port && params.measurementOptions.port !== 80) {
							measurementOptions.port = (this.getNodeParameter('measurementOptions', i) as any).port;
						}

						if (
							params.measurementOptions.protocol &&
							params.measurementOptions.protocol !== 'ICMP'
						) {
							measurementOptions.protocol = (this.getNodeParameter('measurementOptions', i) as any).protocol;
						}

						if (Object.keys(measurementOptions).length > 0) {
							requestBody.measurementOptions = measurementOptions;
						}
					}

					if (operation === 'measurementDns') {
						requestBody.type = 'dns';
						let measurementOptions = {} as DnsOptions;

						if (
							params.measurementOptions.queryType &&
							params.measurementOptions.queryType !== 'A'
						) {
							measurementOptions.query = {} as DnsOptions['query'];
							measurementOptions.query.type = (this.getNodeParameter('measurementOptions', i) as any).queryType;
						}

						if (params.measurementOptions.resolver && params.measurementOptions.resolver !== '') {
							measurementOptions.resolver = (this.getNodeParameter('measurementOptions', i) as any).resolver;
						}

						if (Object.keys(measurementOptions).length > 0) {
							requestBody.measurementOptions = measurementOptions;
						}
					}

					if (operation === 'measurementMtr') {
						requestBody.type = 'mtr';
						let measurementOptions = {} as MtrOptions;

						if (params.measurementOptions.port && params.measurementOptions.port !== 80) {
							measurementOptions.port = (this.getNodeParameter('measurementOptions', i) as any).port;
						}

						if (
							params.measurementOptions.protocol &&
							params.measurementOptions.protocol !== 'ICMP'
						) {
							measurementOptions.protocol = (this.getNodeParameter('measurementOptions', i) as any).protocol;
						}

						if (params.measurementOptions.packets && params.measurementOptions.packets !== 3) {
							measurementOptions.packets = (this.getNodeParameter('measurementOptions', i) as any).packets;
						}

						if (Object.keys(measurementOptions).length > 0) {
							requestBody.measurementOptions = measurementOptions;
						}
					}

					if (operation === 'measurementHttp') {
						requestBody.type = 'http';
						let measurementOptions = {} as HttpOptions;
						measurementOptions.request = {} as HttpOptions['request'];

						measurementOptions.request.host = parsedTarget.host;
						measurementOptions.request.path = parsedTarget.path;
						measurementOptions.port = parsedTarget.port;

						if (parsedTarget.query !== '') {
							measurementOptions.request.query = parsedTarget.query;
						}

						if (parsedTarget.type === 'ipv4') {
							measurementOptions.ipVersion = 4;
						} else if (parsedTarget.type === 'ipv6') {
							measurementOptions.ipVersion = 6;
						}

						if (params.measurementOptions.method && params.measurementOptions.method !== 'HEAD') {
							measurementOptions.request.method = (this.getNodeParameter('measurementOptions', i) as any).method;
						}

						let headersUi = (this.getNodeParameter('measurementOptions', i) as any).headersUi;
						if (headersUi) {
							if (headersUi.headers) {
								let headers: {
									[K: string]: string;
								} = {};
								for (let header of headersUi.headers) {
									if (header.key !== '') {
										headers[header.key] = header.value;
									}
								}
								if (Object.keys(headers).length > 0) {
									measurementOptions.request.headers = headers;
								}
							}
						}

						if (Object.keys(measurementOptions).length > 0) {
							requestBody.measurementOptions = measurementOptions;
						}
					}

					method = 'POST';
					endpoint = '/v1/measurements';

					responseData = await globalpingApiRequest.call(this, method, endpoint, requestBody, qs);

					if (responseData) {
						const measurementId = responseData.id;
						const attempts = 60;
						const timeout = 1;

						method = 'GET';
						endpoint = `/v1/measurements/${measurementId}`;

						for (let i = attempts; i >= 1; i--) {
							responseData = await globalpingApiRequest.call(this, method, endpoint, body, qs);
							if (responseData.status !== 'in-progress') {
								break;
							} else {
								await sleep(timeout * 1000);
							}
						}
					}
				}

				const executionData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray(responseData as IDataObject[]),
					{ itemData: { item: i } },
				);

				returnData.push(...executionData);
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({ json: { error: error.message } });
					continue;
				}
				throw error;
			}
		}
		return [returnData];
	}
}
