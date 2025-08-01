# @globalping/n8n-nodes-globalping
The official [Globalping](https://globalping.io/) integration for your n8n workflows.

It supports both self-hosted and cloud n8n instances thanks to our [verified integration](https://n8n.io/integrations/globalping/).

The Globalping node allows you to perform network measurements such as `ping`, `traceroute`, `mtr`, `http` and `DNS` lookups from a specified location. 
You can use this node to test network connections, do latency checks or troubleshoot connectivity issues from various regions.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)
[Usage](#usage) 

## Installation - Recommended

1. Open the editor, and click + in the top right to open the Nodes panel
2. Search for Globalping using the search bar and click install.
3. Once Globalping is installed, just drag, drop, and connect it like any other node in a workflow.

<img width="769" height="436" alt="globalping-n8n" src="https://github.com/user-attachments/assets/a4014755-3af0-4ff4-aa79-8eccc1efbc1d" />


## Installation - NPM based

1. Go to n8n Settings in bottom left
2. Select "Community nodes"
3. Enter `@globalping/n8n-nodes-globalping` and install

<img width="673" alt="n8n globalping" src="https://github.com/user-attachments/assets/1772ec9d-e5a5-47f8-983f-31e8f33a9c9a">


## Operations

- All measurements support both IPv4 and IPv6 endpoints, as long as you manually enable it per measurement.
- The location field is smart enough to accept many different types of inputs. [Learn more about the magic location field](https://github.com/jsdelivr/globalping?tab=readme-ov-file#test-with-magic-).
- While the Globalping network is large and is constantly expanding we can't guarantee a probe in every single location. [Explore our online probes on our website](https://globalping.io/network)

 	### Measurements:
 	- `Ping` - Ping an endpoint using ICMP. Default 3 packets.
 	- `Traceroute` - Traceroute an endpoint using ICMP, TCP or UDP on any port. 
 	- `DNS` - Resolve a DNS record of any type. By default the local resolver is used but a different one can be provided. For troubleshooting purposes the `trace` function can be enabled.
 	- `MTR` - MTR an endpoint using ICMP, TCP or UDP on any port. 
 	- `HTTP` - Make an HTTP GET or HEAD request to any URL. Responses are limited to first 10kb. Note that the `Host` and `User-Agent` headers are reserved and internally overridden.

	 ### Probes:
 	- `List` - returns a list of all probes currently online and their metadata such as location and assigned tags.

	 ### Limits:
 	- `List` - returns rate limits for the current user if authenticated or IP address if not authenticated.

## Credentials

Globalping is free to use, and doesn't require authentication. However, it implements rate limits to ensure fair usage and reliability. 
Sign up on the [Globalping Dashboard](https://dash.globalping.io/) to enjoy higher limits. [Learn more about limits](https://globalping.io/credits).

To take advantage of the higher limits you need to generate a token in the dashboard and store it in n8n by setting ```Access token``` in ```Credentials``` of your workflow.

## Usage

 Create a workflow and add Globalping node with operation you need. Make sure to enable "Authentication" in each step if you have provided your token and want to use it.

 <img width="1920" alt="globalping n8n usage" src="https://github.com/user-attachments/assets/09021705-4e78-4973-866d-92291b659fd4">



