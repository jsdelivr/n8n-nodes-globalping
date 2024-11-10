import { parseMeasurementTarget } from '../nodes/Globalping/GenericFunctions';

describe('parseMeasurementTarget', () => {
	describe('URL/Hostname parsing', () => {
		it('should parse a simple hostname', () => {
			const result = parseMeasurementTarget('example.com');
			expect(result).toEqual({
				type: 'url',
				protocol: 'HTTPS',
				host: 'example.com',
				port: 443,
				path: '/',
				query: ''
			});
		});

		it('should parse a hostname with protocol', () => {
			const result = parseMeasurementTarget('https://example.com');
			expect(result).toEqual({
				type: 'url',
				protocol: 'HTTPS',
				host: 'example.com',
				port: 443,
				path: '/',
				query: ''
			});
		});

		it('should parse a URL with port, path and query', () => {
			const result = parseMeasurementTarget('https://example.com:8080/path/to/resource?param=value&other=123');
			expect(result).toEqual({
				type: 'url',
				protocol: 'HTTPS',
				host: 'example.com',
				port: 8080,
				path: '/path/to/resource',
				query: 'param=value&other=123'
			});
		});

		it('should parse a subdomain URL', () => {
			const result = parseMeasurementTarget('api.example.com');
			expect(result).toEqual({
				type: 'url',
				protocol: 'HTTPS',
				host: 'api.example.com',
				port: 443,
				path: '/',
				query: ''
			});
		});
	});

	describe('IPv4 parsing', () => {
		it('should parse a simple IPv4 address', () => {
			const result = parseMeasurementTarget('192.168.1.1');
			expect(result).toEqual({
				type: 'ipv4',
				protocol: 'HTTP',
				host: '192.168.1.1',
				port: 80,
				path: '/',
				query: ''
			});
		});

		it('should parse an IPv4 address with protocol', () => {
			const result = parseMeasurementTarget('https://192.168.1.1');
			expect(result).toEqual({
				type: 'ipv4',
				protocol: 'HTTPS',
				host: '192.168.1.1',
				port: 443,
				path: '/',
				query: ''
			});
		});

		it('should parse an IPv4 address with port and path', () => {
			const result = parseMeasurementTarget('192.168.1.1:8080/api/status');
			expect(result).toEqual({
				type: 'ipv4',
				protocol: 'HTTP',
				host: '192.168.1.1',
				port: 8080,
				path: '/api/status',
				query: ''
			});
		});
	});

	describe('IPv6 parsing', () => {
		it('should parse a simple IPv6 address', () => {
			const result = parseMeasurementTarget('[2001:db8::1]');
			expect(result).toEqual({
				type: 'ipv6',
				protocol: 'HTTP',
				host: '[2001:db8::1]',
				port: 80,
				path: '/',
				query: ''
			});
		});

		it('should parse an IPv6 address with protocol', () => {
			const result = parseMeasurementTarget('https://[2001:db8::1]');
			expect(result).toEqual({
				type: 'ipv6',
				protocol: 'HTTPS',
				host: '[2001:db8::1]',
				port: 443,
				path: '/',
				query: ''
			});
		});

		it('should parse an IPv6 address with port and query', () => {
			const result = parseMeasurementTarget('[2001:db8::1]:3000/status?health=check');
			expect(result).toEqual({
				type: 'ipv6',
				protocol: 'HTTP',
				host: '[2001:db8::1]',
				port: 3000,
				path: '/status',
				query: 'health=check'
			});
		});
	});

	describe('Error handling', () => {
		it('should throw an error for invalid URLs', () => {
			expect(() => parseMeasurementTarget('not a valid url')).toThrow('Invalid target format');
		});

		it('should throw an error for malformed IPv6 addresses', () => {
			expect(() => parseMeasurementTarget('[2001:db8::1')).toThrow('Invalid target format');
		});

		it('should throw an error for empty input', () => {
			expect(() => parseMeasurementTarget('')).toThrow('Invalid target format');
		});
	});
});
