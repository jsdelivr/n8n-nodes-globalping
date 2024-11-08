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
		headers: {},
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
