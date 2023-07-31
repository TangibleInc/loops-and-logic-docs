---
id: date
title: Date
tags:
  - Dynamic Tags
  - Dates
---
The `Date` tag displays a date. When used as a closed tag like `<Date />`, it shows today's date by default.

## Convert

When used as an open tag, the `Date` tag can accept a given date in a fairly flexible format.

```html
<Date>now</Date>
<Date>today</Date>
<Date>yesterday</Date>
<Date>2012-12-22</Date>
<Date>-1 week</Date>
<Date>+3 months</Date>
<Date>+5 years</Date>
```

### From format

The most reliable date formats to use are timestamps, `Y-m-d`, and `Y-m-d H:i:s`.

Some formats present difficulty for comparison, such as `d/m/Y` or `m.d.Y` (which are unclear if day or month comes first), and `Ymd` (which cannot be distinguished from timestamp).

Use the `from_format` attribute to convert such values to a standard format.

**Example**

```html
<Date from_format="d/m/Y">2/3/2022</Date>
<Date from_format="m.d.Y">2.3.2022</Date>
```

The `Field` tag also has the `from_format` attribute.

```html
<Field some_field date_format=timestamp from_format="d/m/Y" />
```

## Format

By default, the `Date` tag uses the date format defined in the admin under Settings -> General -> Date Format.

Use the `format` attribute to format the date differently.

```html
<Date format="Y-m-d H:i:s" />
```

Result: 2022-07-18 18:57:25

The date format syntax is based on PHP's [DateTime::format](https://www.php.net/manual/en/datetime.format.php).

Note that timezone-related formats `e`, `p`, and `T` are not supported.

### Common formats

- `Y-m-d H:i:s` (2022-07-18 18:57:25)
- `F j, Y, g:i a` (July 18, 2022, 6:57 pm)
- `m.d.y` (07.18.22)
- `d/m/y` (18/07/22)

### Timestamp

Use the format `timestamp`, or `U`, to get a UNIX timestamp which can be further converted reliably.

```html
<Date format=timestamp />
```

### Ago

Use the format `ago` to express a past date relative to now.

```html
<Date format=ago>2021-01-01</Date>
```

Result: 1 year ago

## Locale

Use the `locale` attribute to translate the result.

```html
<Date locale=fr />
```

Result: juillet 18, 2022

#### Language codes

It accepts language codes based on [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

Here is the complete list of 830 locales supported.

```
a, a_BE, aa, aa_DJ, aa_ER, aa_ER, aa_ET, ae, ae_CH, af, af_NA, af_ZA, agq, agr, agr_PE, ak, ak_GH, al, al_ET, am, am_ET, an, an_ES, anp, anp_IN, ar, ar_AE, ar_BH, ar_DJ, ar_DZ, ar_EG, ar_EH, ar_ER, ar_IL, ar_IN, ar_IQ, ar_JO, ar_KM, ar_KW, ar_LB, ar_LY, ar_MA, ar_MR, ar_OM, ar_PS, ar_QA, ar_SA, ar_SD, ar_SO, ar_SS, ar_SY, ar_Shakl, ar_TD, ar_TN, ar_YE, as, as_IN, asa, ast, ast_ES, ayc, ayc_PE, az, az_AZ, az_Cyrl, az_IR, az_Latn, bas, be, be_BY, be_BY@latin, bem, bem_ZM, ber, ber_DZ, ber_MA, bez, bg, bg_BG, bhb, bhb_IN, bho, bho_IN, bi, bi_VU, bm, bn, bn_BD, bn_IN, bo, bo_CN, bo_IN, br, br_FR, brx, brx_IN, bs, bs_BA, bs_Cyrl, bs_Latn, byn, byn_ER, ca, ca_AD, ca_ES, ca_ES_Valencia, ca_FR, ca_IT, ccp, ccp_IN, ce, ce_RU, cgg, chr, chr_US, cmn, cmn_TW, crh, crh_UA, cs, cs_CZ, csb, csb_PL, cu, cv, cv_RU, cy, cy_GB, da, da_DK, da_GL, dav, de, de_AT, de_BE, de_CH, de_DE, de_IT, de_LI, de_LU, dje, doi, doi_IN, dsb, dsb_DE, dua, dv, dv_MV, dyo, dz, dz_BT, ebu, ee, ee_TG, el, el_CY, el_GR, en, en_001, en_150, en_AG, en_AI, en_AS, en_AT, en_AU, en_BB, en_BE, en_BI, en_BM, en_BS, en_BW, en_BZ, en_CA, en_CC, en_CH, en_CK, en_CM, en_CX, en_CY, en_DE, en_DG, en_DK, en_DM, en_ER, en_FI, en_FJ, en_FK, en_FM, en_GB, en_GD, en_GG, en_GH, en_GI, en_GM, en_GU, en_GY, en_HK, en_IE, en_IL, en_IM, en_IN, en_IO, en_ISO, en_JE, en_JM, en_KE, en_KI, en_KN, en_KY, en_LC, en_LR, en_LS, en_MG, en_MH, en_MO, en_MP, en_MS, en_MT, en_MU, en_MW, en_MY, en_NA, en_NF, en_NG, en_NL, en_NR, en_NU, en_NZ, en_PG, en_PH, en_PK, en_PN, en_PR, en_PW, en_RW, en_SB, en_SC, en_SD, en_SE, en_SG, en_SH, en_SI, en_SL, en_SS, en_SX, en_SZ, en_TC, en_TK, en_TO, en_TT, en_TV, en_TZ, en_UG, en_UM, en_US, en_US_Posix, en_VC, en_VG, en_VI, en_VU, en_WS, en_ZA, en_ZM, en_ZW, eo, es, es_419, es_AR, es_BO, es_BR, es_BZ, es_CL, es_CO, es_CR, es_CU, es_DO, es_EA, es_EC, es_ES, es_GQ, es_GT, es_HN, es_IC, es_MX, es_NI, es_PA, es_PE, es_PH, es_PR, es_PY, es_SV, es_US, es_UY, es_VE, et, et_EE, eu, eu_ES, ewo, fa, fa_AF, fa_IR, ff, ff_CM, ff_GN, ff_MR, ff_SN, fi, fi_FI, fil, fil_PH, fo, fo_DK, fo_FO, fr, fr_BE, fr_BF, fr_BI, fr_BJ, fr_BL, fr_CA, fr_CD, fr_CF, fr_CG, fr_CH, fr_CI, fr_CM, fr_DJ, fr_DZ, fr_FR, fr_GA, fr_GF, fr_GN, fr_GP, fr_GQ, fr_HT, fr_KM, fr_LU, fr_MA, fr_MC, fr_MF, fr_MG, fr_ML, fr_MQ, fr_MR, fr_MU, fr_NC, fr_NE, fr_PF, fr_PM, fr_RE, fr_RW, fr_SC, fr_SN, fr_SY, fr_TD, fr_TG, fr_TN, fr_VU, fr_WF, fr_YT, fur, fur_IT, fy, fy_DE, fy_NL, ga, ga_IE, gd, gd_GB, gez, gez_ER, gez_ET, gl, gl_ES, gom, gom_Latn, gsw, gsw_CH, gsw_FR, gsw_LI, gu, gu_IN, guz, gv, gv_GB, ha, ha_GH, ha_NE, ha_NG, hak, hak_TW, haw, he, he_IL, hi, hi_IN, hif, hif_FJ, hne, hne_IN, hr, hr_BA, hr_HR, hsb, hsb_DE, ht, ht_HT, hu, hu_HU, hy, hy_AM, i18n, ia, ia_FR, id, id_ID, ig, ig_NG, ii, ik, ik_CA, in, is, is_IS, it, it_CH, it_IT, it_SM, it_VA, iu, iu_CA, iw, ja, ja_JP, jgo, jmc, jv, ka, ka_GE, kab, kab_DZ, kam, kde, kea, khq, ki, kk, kk_KZ, kkj, kl, kl_GL, kln, km, km_KH, kn, kn_IN, ko, ko_KP, ko_KR, kok, kok_IN, ks, ks_IN, ks_IN@devanagari, ksb, ksf, ksh, ku, ku_TR, kw, kw_GB, ky, ky_KG, lag, lb, lb_LU, lg, lg_UG, li, li_NL, lij, lij_IT, lkt, ln, ln_AO, ln_CD, ln_CF, ln_CG, lo, lo_LA, lrc, lrc_IQ, lt, lt_LT, lu, luo, luy, lv, lv_LV, lzh, lzh_TW, mag, mag_IN, mai, mai_IN, mas, mas_TZ, mer, mfe, mfe_MU, mg, mg_MG, mgh, mgo, mhr, mhr_RU, mi, mi_NZ, miq, miq_NI, mjw, mjw_IN, mk, mk_MK, ml, ml_IN, mn, mn_MN, mni, mni_IN, mo, mr, mr_IN, ms, ms_BN, ms_MY, ms_SG, mt, mt_MT, mua, my, my_MM, mzn, nan, nan_TW, nan_TW@latin, naq, nb, nb_NO, nb_SJ, nd, nds, nds_DE, nds_NL, ne, ne_IN, ne_NP, nhn, nhn_MX, niu, niu_NU, nl, nl_AW, nl_BE, nl_BQ, nl_CW, nl_NL, nl_SR, nl_SX, nmg, nn, nn_NO, nnh, no, nr, nr_ZA, nso, nso_ZA, nus, nyn, o, o_SN, oc, oc_FR, om, om_ET, om_KE, or, or_IN, os, os_RU, pa, pa_Arab, pa_Guru, pa_IN, pa_PK, pap, pap_AW, pap_CW, pl, pl_PL, prg, ps, ps_AF, pt, pt_AO, pt_BR, pt_CH, pt_CV, pt_GQ, pt_GW, pt_LU, pt_MO, pt_MZ, pt_PT, pt_ST, pt_TL, qu, qu_BO, qu_EC, quz, quz_PE, raj, raj_IN, rm, rn, ro, ro_MD, ro_RO, rof, ru, ru_BY, ru_KG, ru_KZ, ru_MD, ru_RU, ru_UA, rw, rw_RW, rwk, sa, sa_IN, sah, sah_RU, saq, sat, sat_IN, sbp, sc, sc_IT, sd, sd_IN, sd_IN@devanagari, se, se_FI, se_NO, se_SE, seh, ses, sg, sgs, sgs_LT, sh, shi, shi_Latn, shi_Tfng, shn, shn_MM, shs, shs_CA, si, si_LK, sid, sid_ET, sk, sk_SK, sl, sl_SI, sm, sm_WS, smn, sn, so, so_DJ, so_ET, so_KE, so_SO, sq, sq_AL, sq_MK, sq_XK, sr, sr_Cyrl, sr_Cyrl_BA, sr_Cyrl_ME, sr_Cyrl_XK, sr_Latn, sr_Latn_BA, sr_Latn_ME, sr_Latn_XK, sr_ME, sr_RS, sr_RS@latin, ss, ss_ZA, st, st_ZA, sv, sv_AX, sv_FI, sv_SE, sw, sw_CD, sw_KE, sw_TZ, sw_UG, szl, szl_PL, ta, ta_IN, ta_LK, ta_MY, ta_SG, tcy, tcy_IN, te, te_IN, teo, teo_KE, tet, tg, tg_TJ, th, th_TH, the, the_NP, ti, ti_ER, ti_ET, tig, tig_ER, tk, tk_TM, tl, tl_PH, tlh, tn, tn_ZA, to, to_TO, tpi, tpi_PG, tr, tr_CY, tr_TR, ts, ts_ZA, tt, tt_RU, tt_RU@iqtelif, twq, tzl, tzm, tzm_Latn, ug, ug_CN, uk, uk_UA, unm, unm_US, ur, ur_IN, ur_PK, uz, uz_Arab, uz_Cyrl, uz_Latn, uz_UZ, uz_UZ@cyrillic, vai, vai_Latn, vai_Vaii, ve, ve_ZA, vi, vi_VN, vo, vun, wa, wa_BE, wae, wae_CH, wal, wal_ET, wo, wo_SN, xh, xh_ZA, xog, yav, yi, yi_US, yo, yo_BJ, yo_NG, yue, yue_HK, yue_Hans, yue_Hant, yuw, yuw_PG, zgh, zh, zh_CN, zh_HK, zh_Hans, zh_Hans_HK, zh_Hans_MO, zh_Hans_SG, zh_Hant, zh_Hant_HK, zh_Hant_MO, zh_Hant_TW, zh_MO, zh_SG, zh_TW, zh_YUE, zu, zu_ZA 
```

### All locale

Use the `all_locale` attribute to set the default locale for all subsequent uses of the `Date` tag.

For example:

```html
<Date all_locale=fr />
```

After this, the Date tag will translate everything to French.

```html
<Date format="l j F Y" />
```

Result: lundi 18 juillet 2022

To get the current default locale:

```html
<Date all_locale />
```

Result: fr

## Time zone

By default, the `Date` tag uses the time zone setting in the admin under Settings -> General -> Timezone.

Use the `timezone` attribute to convert to a different time zone.

```html
<Date format="Y-m-d H:i:s" timezone="America/New_York" />
```

Result: 2022-07-18 14:57:25

The time zone syntax is based on PHP's DateTimeZone class. Here is [the list of supported time zones](https://www.php.net/manual/en/timezones.php).

#### Common time zones

##### The United States

|Common name|Time zone|
|---|---|
|Eastern|`America/New_York`|
|Central|`America/Chicago`|
|Mountain|`America/Denver`|
|Mountain no DST|`America/Phoenix`|
|Pacific|`America/Los_Angeles`|
|Alaska|`America/Anchorage`|
|Hawaii|`America/Adak`|
|Hawaii no DST|`Pacific/Honolulu`|

##### Canada

|Common name|Time zone|
|---|---|
|Newfoundland|`America/St_Johns`|
|Atlantic|`America/Halifax`|
|Atlantic no DST|`America/Blanc-Sablon`|
|Eastern|`America/Toronto`|
|Eastern no DST|`America/Atikokan`|
|Central|`America/Winnipeg`|
|Central no DST|`America/Regina`|
|Mountain|`America/Edmonton`|
|Mountain no DST|`America/Creston`|
|Pacific|`America/Vancouver`|

### Time zone setting

To get the time zone set in the admin:

```html
<Setting timezone_string />
```

## Add/subtract

Use the `add` or `subtract` attribute to adjust a given date.

```html
<Date add="1 week">2020-01-01</Date>
<Date subtract="1 week">2020-01-01</Date>
```

Result:

January 8, 2020  
December 25, 2019

## Field value

Use the `Field` tag to pass a field value to the `Date` tag.

```html
<Date><Field publish_date /></Date>
```

The `Field` tag has the attribute `date_format` as a shortcut.

```html
<Field publish_date date_format="F j, Y" />
```

### From format

Use the `from_format` attribute to convert from a non-standard format.

```html
<Field some_field date_format="timestamp" from_format="d/m/Y" />
```

See [Convert: From Format](#from-format) for an explanation.

## Examples

- [How to create a button that dynamically links to the current month's posts](/docs/how-to/dynamic-link-current-month-date-archive)