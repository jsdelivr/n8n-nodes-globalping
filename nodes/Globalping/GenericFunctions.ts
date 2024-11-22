import type {
	IDataObject,
	IExecuteFunctions,
	IHookFunctions,
	ILoadOptionsFunctions,
	IHttpRequestMethods,
	IHttpRequestOptions,
	ITriggerFunctions,
	IPollFunctions,
} from 'n8n-workflow';
import { URL } from 'url';
import { ParsedTarget } from './types';

export async function globalpingApiRequest(
	this:
		| ITriggerFunctions
		| IPollFunctions
		| IHookFunctions
		| IExecuteFunctions
		| ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: object,
	query?: IDataObject,
	uri?: string | undefined,
	option: IDataObject = {},
): Promise<any> {
	const useToken = this.getNodeParameter('useToken', 0) as string;

	const options: IHttpRequestOptions = {
		headers: {
			'User-Agent': 'n8n-node'
		},
		method,
		body,
		qs: query,
		url: uri || `https://api.globalping.io${endpoint}`,
		json: true,
	};

	if (Object.keys(option).length !== 0) {
		Object.assign(options, option);
	}

	if (Object.keys(body).length === 0) {
		delete options.body;
	}

	if (useToken) {
		return await this.helpers.requestWithAuthentication.call(this, 'globalpingApi', options);
	} else {
		return await this.helpers.request.call(this, options);
	}
}

export function parseMeasurementTarget(target: string): ParsedTarget {
	// Add default protocol if none provided
	let withoutProtocol = false;
	if (!target.includes('://')) {
		target = `https://${target}`;
		withoutProtocol = true;
	}

	// Parse using URL
	let parsedUrl: URL;
	try {
		parsedUrl = new URL(target);
	} catch (error) {
		throw new Error(`Invalid target format: ${target}`);
	}

	// Determine the type based on host format
	let type: ParsedTarget['type'];
	const host = parsedUrl.hostname;

	// IPv6 check
	if (host.includes(':') && host.includes('[')) {
		type = 'ipv6';
	}
	// IPv4 check
	else if (/^(\d{1,3}\.){3}\d{1,3}$/.test(host)) {
		type = 'ipv4';
	}
	// URL/hostname
	else {
		type = 'url';
	}

	let protocol = parsedUrl.protocol.replace(':', '').toUpperCase();

	if (['ipv6', 'ipv4'].includes(type) && withoutProtocol) {
		protocol = 'HTTP';
	}

	let port = parsedUrl.port || '';

	if (protocol === 'HTTP') {
		port = parsedUrl.port || '80';
	} else if (protocol === 'HTTPS') {
		port = parsedUrl.port || '443';
	}

	return {
		type,
		protocol,
		host: parsedUrl.hostname,
		port: parseInt(port, 10),
		path: parsedUrl.pathname,
		query: parsedUrl.search.replace('?', ''),
	};
}
