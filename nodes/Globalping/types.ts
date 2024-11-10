/**
 * A two-letter continent code.
 * Allowed: **AF**┃**AN**┃**AS**┃**EU**┃**NA**┃**OC**┃**SA**
 * */
export type MeasurementContinent = 'AF' | 'AN' | 'AS' | 'EU' | 'NA' | 'OC' | 'SA';

/**
 * A geographic region name based on {@link https://unstats.un.org/unsd/methodology/m49/|UN Standard Country or Area Codes for Statistical Use (M49)}.
 * */
export type MeasurementRegion =
	| 'Northern Africa'
	| 'Eastern Africa'
	| 'Middle Africa'
	| 'Southern Africa'
	| 'Western Africa|Caribbean'
	| 'Central America'
	| 'South America'
	| 'Northern America'
	| 'Central Asia'
	| 'Eastern Asia'
	| 'South-eastern Asia'
	| 'Southern Asia'
	| 'Western Asia'
	| 'Eastern Europe'
	| 'Northern Europe'
	| 'Southern Europe'
	| 'Western Europe'
	| 'Australia and New Zealand'
	| 'Melanesia'
	| 'Micronesia'
	| 'Polynesia';

/**
 * A two-letter country code based on {@link https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements|ISO 3166-1 alpha-2.}
 * */
export type MeasurementCountry =
	| 'AA'
	| 'AB'
	| 'AC'
	| 'AD'
	| 'AE'
	| 'AF'
	| 'AG'
	| 'AH'
	| 'AI'
	| 'AJ'
	| 'AK'
	| 'AL'
	| 'AM'
	| 'AN'
	| 'AO'
	| 'AP'
	| 'AQ'
	| 'AR'
	| 'AS'
	| 'AT'
	| 'AU'
	| 'AV'
	| 'AW'
	| 'AX'
	| 'AY'
	| 'AZ'
	| 'BA'
	| 'BB'
	| 'BC'
	| 'BD'
	| 'BE'
	| 'BF'
	| 'BG'
	| 'BH'
	| 'BI'
	| 'BJ'
	| 'BK'
	| 'BL'
	| 'BM'
	| 'BN'
	| 'BO'
	| 'BP'
	| 'BQ'
	| 'BR'
	| 'BS'
	| 'BT'
	| 'BU'
	| 'BV'
	| 'BW'
	| 'BX'
	| 'BY'
	| 'BZ'
	| 'CA'
	| 'CB'
	| 'CC'
	| 'CD'
	| 'CE'
	| 'CF'
	| 'CG'
	| 'CH'
	| 'CI'
	| 'CJ'
	| 'CK'
	| 'CL'
	| 'CM'
	| 'CN'
	| 'CO'
	| 'CP'
	| 'CQ'
	| 'CR'
	| 'CS'
	| 'CT'
	| 'CU'
	| 'CV'
	| 'CW'
	| 'CX'
	| 'CY'
	| 'CZ'
	| 'DA'
	| 'DB'
	| 'DC'
	| 'DD'
	| 'DE'
	| 'DF'
	| 'DG'
	| 'DH'
	| 'DI'
	| 'DJ'
	| 'DK'
	| 'DL'
	| 'DM'
	| 'DN'
	| 'DO'
	| 'DP'
	| 'DQ'
	| 'DR'
	| 'DS'
	| 'DT'
	| 'DU'
	| 'DV'
	| 'DW'
	| 'DX'
	| 'DY'
	| 'DZ'
	| 'EA'
	| 'EB'
	| 'EC'
	| 'ED'
	| 'EE'
	| 'EF'
	| 'EG'
	| 'EH'
	| 'EI'
	| 'EJ'
	| 'EK'
	| 'EL'
	| 'EM'
	| 'EN'
	| 'EO'
	| 'EP'
	| 'EQ'
	| 'ER'
	| 'ES'
	| 'ET'
	| 'EU'
	| 'EV'
	| 'EW'
	| 'EX'
	| 'EY'
	| 'EZ'
	| 'FA'
	| 'FB'
	| 'FC'
	| 'FD'
	| 'FE'
	| 'FF'
	| 'FG'
	| 'FH'
	| 'FI'
	| 'FJ'
	| 'FK'
	| 'FL'
	| 'FM'
	| 'FN'
	| 'FO'
	| 'FP'
	| 'FQ'
	| 'FR'
	| 'FS'
	| 'FT'
	| 'FU'
	| 'FV'
	| 'FW'
	| 'FX'
	| 'FY'
	| 'FZ'
	| 'GA'
	| 'GB'
	| 'GC'
	| 'GD'
	| 'GE'
	| 'GF'
	| 'GG'
	| 'GH'
	| 'GI'
	| 'GJ'
	| 'GK'
	| 'GL'
	| 'GM'
	| 'GN'
	| 'GO'
	| 'GP'
	| 'GQ'
	| 'GR'
	| 'GS'
	| 'GT'
	| 'GU'
	| 'GV'
	| 'GW'
	| 'GX'
	| 'GY'
	| 'GZ'
	| 'HA'
	| 'HB'
	| 'HC'
	| 'HD'
	| 'HE'
	| 'HF'
	| 'HG'
	| 'HH'
	| 'HI'
	| 'HJ'
	| 'HK'
	| 'HL'
	| 'HM'
	| 'HN'
	| 'HO'
	| 'HP'
	| 'HQ'
	| 'HR'
	| 'HS'
	| 'HT'
	| 'HU'
	| 'HV'
	| 'HW'
	| 'HX'
	| 'HY'
	| 'HZ'
	| 'IA'
	| 'IB'
	| 'IC'
	| 'ID'
	| 'IE'
	| 'IF'
	| 'IG'
	| 'IH'
	| 'II'
	| 'IJ'
	| 'IK'
	| 'IL'
	| 'IM'
	| 'IN'
	| 'IO'
	| 'IP'
	| 'IQ'
	| 'IR'
	| 'IS'
	| 'IT'
	| 'IU'
	| 'IV'
	| 'IW'
	| 'IX'
	| 'IY'
	| 'IZ'
	| 'JA'
	| 'JB'
	| 'JC'
	| 'JD'
	| 'JE'
	| 'JF'
	| 'JG'
	| 'JH'
	| 'JI'
	| 'JJ'
	| 'JK'
	| 'JL'
	| 'JM'
	| 'JN'
	| 'JO'
	| 'JP'
	| 'JQ'
	| 'JR'
	| 'JS'
	| 'JT'
	| 'JU'
	| 'JV'
	| 'JW'
	| 'JX'
	| 'JY'
	| 'JZ'
	| 'KA'
	| 'KB'
	| 'KC'
	| 'KD'
	| 'KE'
	| 'KF'
	| 'KG'
	| 'KH'
	| 'KI'
	| 'KJ'
	| 'KK'
	| 'KL'
	| 'KM'
	| 'KN'
	| 'KO'
	| 'KP'
	| 'KQ'
	| 'KR'
	| 'KS'
	| 'KT'
	| 'KU'
	| 'KV'
	| 'KW'
	| 'KX'
	| 'KY'
	| 'KZ'
	| 'LA'
	| 'LB'
	| 'LC'
	| 'LD'
	| 'LE'
	| 'LF'
	| 'LG'
	| 'LH'
	| 'LI'
	| 'LJ'
	| 'LK'
	| 'LL'
	| 'LM'
	| 'LN'
	| 'LO'
	| 'LP'
	| 'LQ'
	| 'LR'
	| 'LS'
	| 'LT'
	| 'LU'
	| 'LV'
	| 'LW'
	| 'LX'
	| 'LY'
	| 'LZ'
	| 'MA'
	| 'MB'
	| 'MC'
	| 'MD'
	| 'ME'
	| 'MF'
	| 'MG'
	| 'MH'
	| 'MI'
	| 'MJ'
	| 'MK'
	| 'ML'
	| 'MM'
	| 'MN'
	| 'MO'
	| 'MP'
	| 'MQ'
	| 'MR'
	| 'MS'
	| 'MT'
	| 'MU'
	| 'MV'
	| 'MW'
	| 'MX'
	| 'MY'
	| 'MZ'
	| 'NA'
	| 'NB'
	| 'NC'
	| 'ND'
	| 'NE'
	| 'NF'
	| 'NG'
	| 'NH'
	| 'NI'
	| 'NJ'
	| 'NK'
	| 'NL'
	| 'NM'
	| 'NN'
	| 'NO'
	| 'NP'
	| 'NQ'
	| 'NR'
	| 'NS'
	| 'NT'
	| 'NU'
	| 'NV'
	| 'NW'
	| 'NX'
	| 'NY'
	| 'NZ'
	| 'OA'
	| 'OB'
	| 'OC'
	| 'OD'
	| 'OE'
	| 'OF'
	| 'OG'
	| 'OH'
	| 'OI'
	| 'OJ'
	| 'OK'
	| 'OL'
	| 'OM'
	| 'ON'
	| 'OO'
	| 'OP'
	| 'OQ'
	| 'OR'
	| 'OS'
	| 'OT'
	| 'OU'
	| 'OV'
	| 'OW'
	| 'OX'
	| 'OY'
	| 'OZ'
	| 'PA'
	| 'PB'
	| 'PC'
	| 'PD'
	| 'PE'
	| 'PF'
	| 'PG'
	| 'PH'
	| 'PI'
	| 'PJ'
	| 'PK'
	| 'PL'
	| 'PM'
	| 'PN'
	| 'PO'
	| 'PP'
	| 'PQ'
	| 'PR'
	| 'PS'
	| 'PT'
	| 'PU'
	| 'PV'
	| 'PW'
	| 'PX'
	| 'PY'
	| 'PZ'
	| 'QA'
	| 'QB'
	| 'QC'
	| 'QD'
	| 'QE'
	| 'QF'
	| 'QG'
	| 'QH'
	| 'QI'
	| 'QJ'
	| 'QK'
	| 'QL'
	| 'QM'
	| 'QN'
	| 'QO'
	| 'QP'
	| 'QQ'
	| 'QR'
	| 'QS'
	| 'QT'
	| 'QU'
	| 'QV'
	| 'QW'
	| 'QX'
	| 'QY'
	| 'QZ'
	| 'RA'
	| 'RB'
	| 'RC'
	| 'RD'
	| 'RE'
	| 'RF'
	| 'RG'
	| 'RH'
	| 'RI'
	| 'RJ'
	| 'RK'
	| 'RL'
	| 'RM'
	| 'RN'
	| 'RO'
	| 'RP'
	| 'RQ'
	| 'RR'
	| 'RS'
	| 'RT'
	| 'RU'
	| 'RV'
	| 'RW'
	| 'RX'
	| 'RY'
	| 'RZ'
	| 'SA'
	| 'SB'
	| 'SC'
	| 'SD'
	| 'SE'
	| 'SF'
	| 'SG'
	| 'SH'
	| 'SI'
	| 'SJ'
	| 'SK'
	| 'SL'
	| 'SM'
	| 'SN'
	| 'SO'
	| 'SP'
	| 'SQ'
	| 'SR'
	| 'SS'
	| 'ST'
	| 'SU'
	| 'SV'
	| 'SW'
	| 'SX'
	| 'SY'
	| 'SZ'
	| 'TA'
	| 'TB'
	| 'TC'
	| 'TD'
	| 'TE'
	| 'TF'
	| 'TG'
	| 'TH'
	| 'TI'
	| 'TJ'
	| 'TK'
	| 'TL'
	| 'TM'
	| 'TN'
	| 'TO'
	| 'TP'
	| 'TQ'
	| 'TR'
	| 'TS'
	| 'TT'
	| 'TU'
	| 'TV'
	| 'TW'
	| 'TX'
	| 'TY'
	| 'TZ'
	| 'UA'
	| 'UB'
	| 'UC'
	| 'UD'
	| 'UE'
	| 'UF'
	| 'UG'
	| 'UH'
	| 'UI'
	| 'UJ'
	| 'UK'
	| 'UL'
	| 'UM'
	| 'UN'
	| 'UO'
	| 'UP'
	| 'UQ'
	| 'UR'
	| 'US'
	| 'UT'
	| 'UU'
	| 'UV'
	| 'UW'
	| 'UX'
	| 'UY'
	| 'UZ'
	| 'VA'
	| 'VB'
	| 'VC'
	| 'VD'
	| 'VE'
	| 'VF'
	| 'VG'
	| 'VH'
	| 'VI'
	| 'VJ'
	| 'VK'
	| 'VL'
	| 'VM'
	| 'VN'
	| 'VO'
	| 'VP'
	| 'VQ'
	| 'VR'
	| 'VS'
	| 'VT'
	| 'VU'
	| 'VV'
	| 'VW'
	| 'VX'
	| 'VY'
	| 'VZ'
	| 'WA'
	| 'WB'
	| 'WC'
	| 'WD'
	| 'WE'
	| 'WF'
	| 'WG'
	| 'WH'
	| 'WI'
	| 'WJ'
	| 'WK'
	| 'WL'
	| 'WM'
	| 'WN'
	| 'WO'
	| 'WP'
	| 'WQ'
	| 'WR'
	| 'WS'
	| 'WT'
	| 'WU'
	| 'WV'
	| 'WW'
	| 'WX'
	| 'WY'
	| 'WZ'
	| 'XA'
	| 'XB'
	| 'XC'
	| 'XD'
	| 'XE'
	| 'XF'
	| 'XG'
	| 'XH'
	| 'XI'
	| 'XJ'
	| 'XK'
	| 'XL'
	| 'XM'
	| 'XN'
	| 'XO'
	| 'XP'
	| 'XQ'
	| 'XR'
	| 'XS'
	| 'XT'
	| 'XU'
	| 'XV'
	| 'XW'
	| 'XX'
	| 'XY'
	| 'XZ'
	| 'YA'
	| 'YB'
	| 'YC'
	| 'YD'
	| 'YE'
	| 'YF'
	| 'YG'
	| 'YH'
	| 'YI'
	| 'YJ'
	| 'YK'
	| 'YL'
	| 'YM'
	| 'YN'
	| 'YO'
	| 'YP'
	| 'YQ'
	| 'YR'
	| 'YS'
	| 'YT'
	| 'YU'
	| 'YV'
	| 'YW'
	| 'YX'
	| 'YY'
	| 'YZ'
	| 'ZA'
	| 'ZB'
	| 'ZC'
	| 'ZD'
	| 'ZE'
	| 'ZF'
	| 'ZG'
	| 'ZH'
	| 'ZI'
	| 'ZJ'
	| 'ZK'
	| 'ZL'
	| 'ZM'
	| 'ZN'
	| 'ZO'
	| 'ZP'
	| 'ZQ'
	| 'ZR'
	| 'ZS'
	| 'ZT'
	| 'ZU'
	| 'ZV'
	| 'ZW'
	| 'ZX'
	| 'ZY'
	| 'ZZ';

/**
 * The measurement type.
 * */
export type MeasurementType = 'ping' | 'traceroute' | 'dns' | 'mtr' | 'http';

/**
 * A two-letter {@link https://www.faa.gov/air_traffic/publications/atpubs/cnt_html/appendix_a.html|US state code}.
 * */
export type USStatesCode =
	| 'AL'
	| 'KY'
	| 'OH'
	| 'AK'
	| 'LA'
	| 'OK'
	| 'AZ'
	| 'ME'
	| 'OR'
	| 'AR'
	| 'MD'
	| 'PA'
	| 'AS'
	| 'MA'
	| 'PR'
	| 'CA'
	| 'MI'
	| 'RI'
	| 'CO'
	| 'MN'
	| 'SC'
	| 'CT'
	| 'MS'
	| 'SD'
	| 'DE'
	| 'MO'
	| 'TN'
	| 'DC'
	| 'MT'
	| 'TX'
	| 'FL'
	| 'NE'
	| 'TT'
	| 'GA'
	| 'NV'
	| 'UT'
	| 'GU'
	| 'NH'
	| 'VT'
	| 'HI'
	| 'NJ'
	| 'VA'
	| 'ID'
	| 'NM'
	| 'VI'
	| 'IL'
	| 'NY'
	| 'WA'
	| 'IN'
	| 'NC'
	| 'WV'
	| 'IA'
	| 'ND'
	| 'WI'
	| 'KS'
	| 'MP'
	| 'WY';

/**
 * An array of locations from which to run the measurement. Each object specifies a location using one or more keys, such as country, city, ASN, etc.
 * */
export type MeasurementLocation = {
	/**
	 * A two-letter continent code.
	 * */
	continent?: MeasurementContinent | string;

	/**
	 * A geographic region name based on {@link https://unstats.un.org/unsd/methodology/m49/|UN Standard Country or Area Codes for Statistical Use (M49)}.
	 * */
	region?: MeasurementRegion | string;

	/**
	 * A two-letter country code based on {@link https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements|ISO 3166-1 alpha-2.}
	 * */
	country?: MeasurementCountry | string;

	/**
	 * A two-letter {@link https://www.faa.gov/air_traffic/publications/atpubs/cnt_html/appendix_a.html|US state code} or null
	 * */
	state?: USStatesCode | null;

	/**
	 * A city name in English.
	 * */
	city?: string;

	/**
	 * An autonomous system number (ASN).
	 * */
	asn?: number;

	/**
	 * A network name, such as "Google LLC" or "DigitalOcean, LLC".
	 * */
	network?: string;

	/**
	 * An array of additional values to fine-tune probe selection:
	 * - Probes hosted in {@link https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions|AWS} and {@link https://cloud.google.com/compute/docs/regions-zones#available|Google Cloud} are automatically assigned the service region code. For example: **aws-eu-west-1** and **gcp-us-south1**.
	 * - Probes are automatically assigned **datacenter-network** and **eyeball-network** tags to distinguish between datacenter and end-user locations.
	 * */
	tags?: string[];

	/**
	 * Locations defined in a single string instead of the respective location properties. The API performs fuzzy matching on the **country**, **city**, **state**, **continent**, **region**, **asn** (using **AS** prefix, e.g., **AS123**), **tags**, and **network** values. Supports full names, ISO codes (where applicable), and common aliases. Multiple conditions can be combined using the **+** character.
	 * */
	magic?: string;

	/**
     * The maximum number of probes that should run the measurement in this location. The result count might be lower if there aren't enough probes available in this location. Mutually exclusive with the global limit property.

     * Constraints: Min **1**┃Max **200** Default: **1**
     * */
	limit?: number;
};

/**
 * Use the request body to set the measurement parameters.
 * */
export type MeasurementRequestBody = {
	/**
	 * The measurement type.
	 * Allowed: **ping**┃**traceroute**┃**dns**┃**mtr**┃**http**
	 * */
	type: MeasurementType | string;

	/**
	 * A publicly reachable measurement target. Typically a hostname, an IPv4 address, or IPv6 address, depending on the measurement **type**. Support for IPv6 targets is currently considered experimental.
	 * */
	target: string;

	/**
     * Indicates whether you want to get partial results while the measurement is still running:

     * - If **true**, partial results are returned as soon as they are available, and you can present them to the user in real time. Note that only the first 5 tests from the **results** array will update in real time.
     * - If **false**, the result of each test is updated only after the test finishes.

     * Default: **false**
     * */
	inProgressUpdates?: boolean;

	/**
	 * One of:
	 * - An array of locations from which to run the measurement. Each object specifies a location using one or more keys, such as country, city, ASN, etc.
	 * - The **id** of a previous measurement whose probes you want to reuse. The probes are returned in the same order as in the previous measurement. Measurement type and options are not reused and need to be specified in the request. Note that this option only works for the lifetime of the original measurement and will result in a **422** response for expired or invalid **id** values.
	 * */
	locations?: MeasurementLocation[] | string;

	/**
	 * The maximum number of probes that should run the measurement. The result count might be lower if there aren't enough probes available in the specified locations. Mutually exclusive with the limit property that can be set for individual locations.
	 * Constraints: Min **1**┃Max **200** Default: **1**
	 * */
	limit?: number;

	/**
	 * Additional optional fields depending on the measurement **type**.
	 * */
	measurementOptions?: PingOptions | TracerouteOptions | DnsOptions | MtrOptions | HttpOptions;
};

/**
 *
 * */
export type PingOptions = {
	/**
	 * The number of packets to send.
	 * Constraints: Min **1**┃Max **16** Default: **3**
	 * */
	packets: number;

	/**
	 * EXPERIMENTAL: The IP version to use. Only allowed if the target is a hostname.
	 * Allowed: **4**┃**6**
	 * */
	ipVersion: 4 | 6;
};

/**
 *
 * */
export type TracerouteOptions = {
	/**
	 * The destination port for the data packets.
	 * Constraints: Min **0**┃Max **65535** Default: **80**
	 * */
	port: number;

	/**
	 * The transport protocol to use.
	 * Default: ICMP Allowed: **ICMP**┃**TCP**┃**UDP**
	 * */
	protocol: 'ICMP' | 'TCP' | 'UDP' | string;

	/**
	 * EXPERIMENTAL: The IP version to use. Only allowed if the target is a hostname.
	 * Allowed: **4**┃**6**
	 * */
	ipVersion: 4 | 6;
};

/**
 *
 * */
export type DnsOptions = {
	/**
	 * The DNS query properties.
	 * */
	query: {
		/**
		 * The type of DNS query.
		 * Default: **A** Allowed: A┃AAAA┃ANY┃CNAME┃DNSKEY┃DS┃HTTPS┃MX┃NS┃NSEC┃PTR┃RRSIG┃SOA┃TXT┃SRV
		 * */
		type:
			| 'A'
			| 'AAAA'
			| 'ANY'
			| 'CNAME'
			| 'DNSKEY'
			| 'DS'
			| 'HTTPS'
			| 'MX'
			| 'NS'
			| 'NSEC'
			| 'PTR'
			| 'RRSIG'
			| 'SOA'
			| 'TXT'
			| 'SRV';
	};

	/**
	 * A DNS resolver to use for the query. Defaults to the probe system resolver.
	 *
	 * Any of:
	 * - **ipv4**
	 *   The IPv4 address of the resolver.
	 * - **ipv6**
	 * EXPERIMENTAL: The IPv6 address of the resolver.
	 * - **hostname**
	 * The Fully Qualified Domain Name (FQDN) of the resolver.
	 * */
	resolver: string;

	/**
	 * The port number to send the query to.
	 * Constraints: Min **0**┃Max **65535** Default: **53**
	 * */
	port: number;

	/**
	 * The protocol to use for the DNS query.
	 * Default: **UDP** Allowed: **TCP**┃**UDP**
	 * */
	protocol: 'TCP' | 'UDP';

	/**
	 * EXPERIMENTAL: The IP version to use. Only allowed if the target is a hostname.
	 * Allowed: **4**┃**6**
	 * */
	ipVersion: 4 | 6;

	/**
	 * Toggles tracing of the delegation path from the root servers down to the target domain name.
	 * Default: **false**
	 * */
	trace: boolean;
};

/**
 *
 * */
export type MtrOptions = {
	/**
	 * The port number to use.
	 * Constraints: Min **0**┃Max **65535** Default: **80**
	 * */
	port: number;

	/**
	 * The transport protocol to use.
	 * Default: **ICMP** Allowed: **ICMP**┃**TCP**┃**UDP**
	 * */
	protocol: 'ICMP' | 'TCP' | 'UDP';

	/**
	 * EXPERIMENTAL: The IP version to use. Only allowed if the target is a hostname.
	 * Allowed: **4**┃**6**
	 * */
	ipVersion: 4 | 6;

	/**
	 * The number of packets to send to each hop.
	 * Constraints: Min **1**┃Max **16** Default: **3**
	 * */
	packets: number;
};

/**
 *
 * */
export type HttpOptions = {
	request: {
		/**
		 * An optional override for the **Host** header. The default value is based on the **target**.
		 * */
		host: string;
		/**
		 * The path portion of the URL.
		 * */
		path: string;
		/**
		 * The query string portion of the URL.
		 * */
		query: string;

		/**
		 * The HTTP method to use.
		 * Default: **HEAD** Allowed: **HEAD**┃**GET**
		 * */
		method: 'HEAD' | 'GET';

		/**
		 * Additional request headers. Note that the **Host** and **User-Agent** are reserved and internally overridden.
		 * */
		headers: {
			[K: string]: string;
		};
	};

	/**
	 * A DNS resolver to use for the query. Defaults to the probe system resolver.
	 *
	 * Any of:
	 * - **ipv4**
	 * The IPv4 address of the resolver.
	 * - **ipv6**
	 * EXPERIMENTAL: The IPv6 address of the resolver.
	 * - **hostname**
	 * The Fully Qualified Domain Name (FQDN) of the resolver.
	 * */
	resolver: string;

	/**
     * The port number to use.

     Constraints: Min **0**┃Max **65535** Default: **80**
     * */
	port: number;

	/**
	 * The transport protocol to use.
	 * Default: **HTTPS** Allowed: **HTTP**┃**HTTPS**┃**HTTP2**
	 * */
	protocol: 'HTTP' | 'HTTPS' | 'HTTP2';

	/**
	 * EXPERIMENTAL: The IP version to use. Only allowed if the target is a hostname.
	 * Allowed: **4**┃**6**
	 * */
	ipVersion: 4 | 6;
};

/**
 * Contains information about the newly created measurement.
 * */
export type MeasurementPostResponseBody = {
	/**
	 * The measurement ID.
	 * Tip: You can use the ID to create a new measurement request, reusing the same probes.
	 * */
	id: string;

	/**
	 * The actual number of probes that performed the measurement tests. Smaller or equal to **limit**, depending on probe availability.
	 * */
	probesCount: number;
};

export type MeasurementGetResponseBody = {
	/**
	 * The measurement ID.
	 * */
	id: string;

	/**
	 * The measurement type.
	 * Allowed: **ping**┃**traceroute**┃**dns**┃**mtr**┃**http**
	 * */
	type: MeasurementType;

	/**
	 * A publicly reachable measurement target. Typically a hostname, an IPv4 address, or IPv6 address, depending on the measurement **type**. Support for IPv6 targets is currently considered experimental.
	 * */
	target: string;

	/**
	 * The current measurement status. Any value other than in-progress is final.
	 * Allowed: in-progress┃finished
	 * */
	status: 'in-progress' | 'finished';

	/**
	 * The date and time when the measurement was created.
	 * */
	createdAt: string;

	/**
	 * The date and time when the measurement was last updated.
	 * */
	updatedAt: string;

	/**
	 * The actual number of probes that performed the measurement tests. Smaller or equal to **limit**, depending on probe availability.
	 * */
	probesCount: number;

	/**
	 * The locations you specified when creating the measurement. If you passed in an **id** of a previous measurement, the value will be filled in from that measurement.
	 * */
	locations?: MeasurementLocation[];

	/**
	 * The limit you specified when creating the measurement if different from the default value.
	 * Constraints: Min **1**┃Max **500** Default: **1**
	 * */
	limit?: number;

	/**
	 * The options you specified when creating the measurement if different from the default.
	 * */
	measurementOptions?: PingOptions | TracerouteOptions | DnsOptions | MtrOptions | HttpOptions;

	/**
	 * An array containing the measurement results.
	 * */
	results: MeasurementResult[];
};

export type MeasurementResult = {
	probe: {
		/**
		 * A two-letter continent code.
		 * */
		continent: MeasurementContinent;

		/**
		 * A geographic region name based on {@link https://unstats.un.org/unsd/methodology/m49/|UN Standard Country or Area Codes for Statistical Use (M49)}.
		 * */
		region: MeasurementRegion;

		/**
		 * A two-letter country code based on {@link https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements|ISO 3166-1 alpha-2.}
		 * */
		country: MeasurementCountry;

		/**
		 * A two-letter {@link https://www.faa.gov/air_traffic/publications/atpubs/cnt_html/appendix_a.html|US state code} or null
		 * */
		state: USStatesCode | null;

		/**
		 * A city name in English.
		 * */
		city: string;

		/**
		 * An autonomous system number (ASN).
		 * */
		asn: number;

		/**
		 * A network name, such as "Google LLC" or "DigitalOcean, LLC".
		 * */
		network: string;

		/**
		 * The latitude of probe location.
		 * */
		latitude: number;

		/**
		 * The longitude of probe location.
		 * */
		longitude: number;

		/**
		 * An array of additional values to fine-tune probe selection:
		 * - Probes hosted in {@link https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions|AWS} and {@link https://cloud.google.com/compute/docs/regions-zones#available|Google Cloud} are automatically assigned the service region code. For example: **aws-eu-west-1** and **gcp-us-south1**.
		 * - Probes are automatically assigned **datacenter-network** and **eyeball-network** tags to distinguish between datacenter and end-user locations.
		 * */
		tags?: string[];

		/**
		 * An array of the default resolvers configured on the probe.
		 * Any of
		 * - ipv4
		 * The IPv4 address of the resolver.
		 * - ipv6
		 * EXPERIMENTAL: The IPv6 address of the resolver.
		 * - const
		 * Indicates that the resolver points to a private IP address.
		 * Value: **private**
		 * */
		resolvers: string[];
	};

	result:
		| InProgressTestResult
		| FailedTestResult
		| OfflineTestResult
		| FinishedPingTestResult
		| FinishedTracerouteTestResult
		| FinishedDnsTestResult
		| FinishedMtrTestResult
		| FinishedHttpTestResult;
};

export interface TestResult {
	/**
	 * The current test status. Any value other than **in-progress** is final.
	 * */
	status: 'in-progress' | 'failed' | 'offline' | 'finished';

	/**
	 * The raw output of the test. Can be presented to users but is not meant to be parsed by clients. Please use the individual values provided in other fields for automated processing.
	 * */
	rawOutput: string;
}

/**
 * InProgressTestResult: Represents an in-progress test where most fields are not yet available.
 * */
export interface InProgressTestResult extends TestResult {}

/**
 * FailedTestResult: Represents a **failed** test where most fields are not available.
 * */
export interface FailedTestResult extends TestResult {}

/**
 * OfflineTestResult: Represents an **offline** test where the requested probe was not available to run the test and most fields are not available. Only possible when you pass the **id** of a previous measurement in the **locations** field.
 * */
export interface OfflineTestResult extends TestResult {}

/**
 * FinishedPingTestResult: Represents a **finished** ping test.
 * */
export interface FinishedPingTestResult extends TestResult {
	/**
	 * The resolved IP address of the **target**.
	 * */
	resolvedAddress: string | null;

	/**
	 * The resolved hostname of the **target**.
	 * */
	resolvedHostname: string | null;

	/**
	 * Summary **rtt** and packet loss statistics. All times are in milliseconds.
	 * */
	stats: {
		/**
		 * The lowest rtt value.
		 * */
		min: number | null;

		/**
		 * The average **rtt** value.
		 * */
		avg: number | null;

		/**
		 * The highest **rtt** value.
		 * */
		max: number | null;

		/**
		 * The number of packets sent.
		 * */
		total: number;

		/**
		 * The number of received packets.
		 * */
		rcv: number;

		/**
		 * The number of dropped packets (**total** - **rcv**).
		 * */
		drop: number;

		/**
		 * The percentage of dropped packets.
		 * */
		loss: number;
	};

	/**
	 * An array containing details for each packet. All times are in milliseconds.
	 * */
	timings: {
		/**
		 * The round-trip time for this packet.
		 * */
		rtt: number;
		/**
		 * The time-to-live value of this packet.
		 * */
		ttl: number;
	}[];
}

export interface FinishedTracerouteTestResult extends TestResult {
	/**
	 * The resolved IP address of the **target**.
	 * */
	resolvedAddress: string | null;

	/**
	 * The resolved hostname of the **target**.
	 * */
	resolvedHostname: string | null;

	/**
	 * An array containing details about each hop.
	 * */
	hops: {
		/**
		 * The resolved IP address of the **target**.
		 * */
		resolvedAddress: string | null;

		/**
		 * The resolved hostname of the **target**.
		 * */
		resolvedHostname: string | null;

		timings: {
			/**
			 * The round-trip time for this packet.
			 * */
			rtt: number;
		}[];
	}[];
}

export interface FinishedDnsTestResult extends TestResult {}

/**
 * FinishedSimpleDnsTestResult: Represents a **finished** DNS test with **trace** disabled.
 * */
export interface FinishedSimpleDnsTestResult extends FinishedDnsTestResult {
	/**
	 * The DNS {@link https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#table-dns-parameters-6|response code}.
	 * */
	statusCode: number;

	/**
	 * The DNS {@link https://www.iana.org/assignments/dns-parameters/dns-parameters.xhtml#table-dns-parameters-6|response code name}.
	 * */
	statusCodeName: string;

	/**
	 * The hostname or IP of the resolver that answered the query.
	 * */
	resolver: string;

	/**
	 * An array of the received resource records.
	 * */
	answers: {
		/**
		 * The record domain name.
		 * */
		name: string;

		/**
		 * The record type.
		 * */
		type: string;

		/**
		 * The record time-to-live value in seconds.
		 * */
		ttl: number;

		/**
		 * The record class.
		 * */
		class: string;

		/**
		 * The record value.
		 * */
		value: string;
	}[];

	/**
	 * Details about the query times. All times are in milliseconds.
	 * */
	timings: {
		/**
		 * The total query time.
		 * */
		total: number;
	};
}

/**
 * FinishedTraceDnsTestResult: Represents a **finished** DNS test with **trace** enabled.
 * */
export interface FinishedTraceDnsTestResult extends FinishedDnsTestResult {
	/**
	 * An array containing details about each hop.
	 * */
	hops: {
		/**
		 * The hostname or IP of the resolver that answered the query.
		 * */
		resolver: string;

		/**
		 * An array of the received resource records.
		 * */
		answers: {
			/**
			 * The record domain name.
			 * */
			name: string;

			/**
			 * The record type.
			 * */
			type: string;

			/**
			 * The record time-to-live value in seconds.
			 * */
			ttl: number;

			/**
			 * The record class.
			 * */
			class: string;

			/**
			 * The record value.
			 * */
			value: string;
		}[];

		/**
		 * Details about the query times. All times are in milliseconds.
		 * */
		timings: {
			/**
			 * The total query time.
			 * */
			total: number;
		};
	}[];
}

/**
 * FinishedMtrTestResult: Represents a **finished** MTR test.
 * */
export interface FinishedMtrTestResult extends TestResult {
	/**
	 * The resolved IP address of the **target**.
	 * */
	resolvedAddress: string | null;

	/**
	 * The resolved hostname of the **target**.
	 * */
	resolvedHostname: string | null;

	hops: {
		/**
		 * The resolved IP address of the **target**.
		 * */
		resolvedAddress: string | null;

		/**
		 * The resolved hostname of the **target**.
		 * */
		resolvedHostname: string | null;

		/**
		 * An array containing the ASNs assigned to this hop.
		 * */
		asn: number[];

		/**
		 * Summary **rtt** and packet loss statistics. All times are in milliseconds.
		 * */
		stats: {
			/**
			 * The lowest **rtt** value.
			 * */
			min: number;

			/**
			 * The average **rtt** value.
			 * */
			avg: number;

			/**
			 * The highest **rtt** value.
			 * */
			max: number;

			/**
			 * The standard deviation of the **rtt** values.
			 * */
			stDev: number;

			/**
			 * The lowest jitter value.
			 * */
			jMin: number;

			/**
			 * The average jitter value.
			 * */
			jAvg: number;

			/**
			 * The highest jitter value.
			 * */
			jMax: number;

			/**
			 * The number of packets sent.
			 * */
			total: number;

			/**
			 * The number of received packets.
			 * */
			rcv: number;

			/**
			 * The number of dropped packets (**total** - **rcv**).
			 * */
			drop: number;

			/**
			 * The percentage of dropped packets.
			 * */
			loss: number;
		};

		/**
		 * An array containing details for each packet. All times are in milliseconds.
		 * */
		timings: {
			/**
			 * The round-trip time for this packet.
			 * */
			rtt: number;
		}[];
	}[];
}

export interface FinishedHttpTestResult extends TestResult {
	/**
	 * The raw HTTP response headers.
	 * */
	rawHeaders: string;

	/**
	 * The raw HTTP response body or **null** if there was no body in response. Note that only the first 10 kb are returned.
	 * */
	rawBody: string | null;

	/**
	 * Indicates whether the **rawBody** value was truncated due to being too big.
	 * */
	truncated: boolean;

	/**
	 * The HTTP response headers.
	 * */
	headers: {
		[K: string]: string;
	};

	/**
	 * The HTTP response status code.
	 * */
	statusCode: number;

	/**
	 * The HTTP response status code name.
	 * */
	statusCodeName: string;

	/**
	 * The resolved IP address of the **target**.
	 * */
	resolvedAddress: string | null;

	/**
	 * Details about the HTTP request times. All times are in milliseconds.
	 * */
	timings: {
		/**
		 * The total HTTP request time.
		 * */
		total: number | null;

		/**
		 * The time required to perform the DNS lookup.
		 * */
		dns: number | null;

		/**
		 * The time from performing the DNS lookup to establishing the TCP connection.
		 * */
		tcp: number | null;

		/**
		 * The time from establishing the TCP connection to establishing the TLS session.
		 * */
		tls: number | null;

		/**
		 * The time from establishing the TCP/TLS connection to the first response byte.
		 * */
		firstByte: number | null;

		/**
		 * The time from the first response byte to downloading the entire response.
		 * */
		download: number | null;
	};

	tls: TlsCertificate | null;
}

/**
 * TlsCertificate
 * */
export type TlsCertificate = {
	/**
	 * Indicates whether a trusted authority signed the certificate.
	 * */
	authorized: boolean;

	/**
	 * The reason for rejecting the certificate if **authorized** is **false**.
	 * */
	error: string;

	/**
	 * The creation date and time of the certificate.
	 * */
	createdAt: string;

	/**
	 * The expiration date and time of the certificate.
	 * */
	expiresAt: string;

	/**
	 * Information about the certificate subject.
	 * */
	subject: {
		/**
		 * The subject's common name.
		 * */
		CN: string;

		/**
		 * The subject's alternative names.
		 * */
		alt: string;
	};

	/**
	 * Information about the certificate issuer.
	 * */
	issuer: {
		/**
		 * The issuer's country.
		 * */
		C: string;

		/**
		 * The issuer's organization.
		 * */
		O: string;

		/**
		 * The issuer's common name.
		 * */
		CN: string;
	};

	/**
	 * The type of the used key, or **null** for unrecognized types.
	 * Allowed: **RSA**┃**EC**┃**null**
	 * */
	keyType: 'RSA' | 'EC' | null;

	/**
	 * The size of the used key, or **null** for unrecognized types.
	 * */
	keyBits: number | null;

	/**
	 * The certificate serial number as a : separated HEX string.
	 * */
	serialNumber: string;

	/**
	 * The SHA-256 digest of the DER-encoded certificate as a : separated HEX string.
	 * */
	fingerprint256: string;

	/**
	 * The public key as a : separated HEX string, or **null** for unrecognized types.
	 * */
	publicKey: string | null;
};

export type ParsedTarget = {
	type: 'url' | 'ipv4' | 'ipv6';
	protocol: string;
	host: string;
	port: number;
	path: string;
	query: string;
};
