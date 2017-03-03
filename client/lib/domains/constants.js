/**
 * External dependencies
 */
import keyMirror from 'key-mirror';

const type = keyMirror( {
	MAPPED: null,
	REGISTERED: null,
	SITE_REDIRECT: null,
	WPCOM: null
} );

const registrar = {
	OPENHRS: 'OpenHRS',
	OPENSRS: 'OpenSRS',
	WWD: 'WWD',
	MAINTENANCE: 'Registrar TLD Maintenance'
};

const tlds = {
	com: 'domain_reg',
	net: 'domain_reg',
	org: 'domain_reg',
	me: 'dotme_domain',
	co: 'dotco_domain',
	'com.br': 'dotcomdotbr_domain',
	info: 'dotinfo_domain',
	'net.br': 'dotnetdotbr_domain',
	biz: 'dotbiz_domain',
	mobi: 'dotmobi_domain',
	mx: 'dotmx_domain',
	es: 'dotes_domain',
	nl: 'dotnl_domain',
	be: 'dotbe_domain',
	fm: 'dotfm_domain',
	tv: 'dottv_domain',
	us: 'dotus_domain',
	'in': 'dotin_domain',
	wtf: 'dotwtf_domain',
	coffee: 'dotcoffee_domain',
	live: 'dotlive_domain',
	wales: 'dotwales_domain',
	blog: 'dotblog_domain',
	rocks: 'dotrocks_domain',
	site: 'dotsite_domain',
	cloud: 'dotcloud_domain',
	club: 'dotclub_domain',
	today: 'dottoday_domain',
	vip: 'dotvip_domain',
};

export default {
	type,
	registrar,
	tlds
};
