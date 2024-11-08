# n8n-nodes-globalping

This is an n8n community node. It lets you use Globalping API in your n8n workflows.

The Globalping API node allows you to perform network measurements such as ping, traceroute, mtr, http and DNS lookups from a specified location. Use this node to test network connections or troubleshoot connectivity issues from various regions.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  <!-- delete if no auth needed -->  
[Compatibility](#compatibility)  
[Usage](#usage)  <!-- delete if not using this section -->  
[Resources](#resources)  
[Version history](#version-history)  <!-- delete if not using this section -->

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Operations
 1. Measurements:
   - ```Ping``` - creates a new measurement with type ```ping```. Set parameters according to [API docs](https://globalping.io/docs/api.globalping.io#tag--Measurements). Set ```Attempts```, the maximum number of requests required to retrieve a measurement. Set ```Timeout```, timeout duration (in seconds) between attempts.
   - ```Traceroute``` - creates a new measurement with type ```traceroute```. Set parameters according to [API docs](https://globalping.io/docs/api.globalping.io#tag--Measurements). Set ```Attempts```, the maximum number of requests required to retrieve a measurement. Set ```Timeout```, timeout duration (in seconds) between attempts.
   - ```DNS``` - creates a new measurement with type ```dns```. Set parameters according to [API docs](https://globalping.io/docs/api.globalping.io#tag--Measurements). Set ```Attempts```, the maximum number of requests required to retrieve a measurement. Set ```Timeout```, timeout duration (in seconds) between attempts.
   - ```MTR``` - creates a new measurement with type ```mtr```. Set parameters according to [API docs](https://globalping.io/docs/api.globalping.io#tag--Measurements). Set ```Attempts```, the maximum number of requests required to retrieve a measurement. Set ```Timeout```, timeout duration (in seconds) between attempts.
   - ```HTTP``` - creates a new measurement with type ```http```. Set parameters according to [API docs](https://globalping.io/docs/api.globalping.io#tag--Measurements). Set ```Attempts```, the maximum number of requests required to retrieve a measurement. Set ```Timeout```, timeout duration (in seconds) between attempts.
 2. Probes
	 - ```List``` - returns a list of all probes currently online and their metadata such as location and assigned tags.
 3. Limits
	 - ```List``` - returns rate limits for the current user if authenticated or ip address if not authenticated.

## Credentials

The API is public, free to use, and doesn't require authentication. However, it implements rate limits to ensure fair usage and reliability, and some of the limits are higher for authenticated users. Sign up on the [Globalping Dashboard](https://dash.globalping.io/) to enjoy the higher limits.

If you have a token you should set ```Access token``` in ```Credentials``` of your workflow.

## Compatibility

```n8n``` version ```1.50.1``` or higher

## Usage

 Create a workflow and add Globalping node with operation you need.

## Resources

* [n8n community nodes documentation](https://docs.n8n.io/integrations/community-nodes/)
* [Globalping API documentation](https://globalping.io/docs/api.globalping.io)
* [Globalping Dashboard](https://dash.globalping.io/)

## Version history

1.0.0 - initial version


