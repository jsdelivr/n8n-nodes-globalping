import type { INodeTypeBaseDescription, IVersionedNodeType } from 'n8n-workflow';
import { VersionedNodeType } from 'n8n-workflow';

import { GlobalpingV1 } from './v1/GlobalpingV1.node';

export class Globalping extends VersionedNodeType {
	constructor() {
		const baseDescription: INodeTypeBaseDescription = {
			displayName: 'Globalping',
			name: 'globalping',
			icon: 'file:globalping.svg',
			group: ['transform'],
			subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
			description: 'Globalping API official node',
			defaultVersion: 1,
		};

		const nodeVersions: IVersionedNodeType['nodeVersions'] = {
			1: new GlobalpingV1(baseDescription),
		};

		super(nodeVersions, baseDescription);
	}
}
