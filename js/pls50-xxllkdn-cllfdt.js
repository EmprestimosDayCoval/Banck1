﻿var _0x2928b0 = _0xc1f3; (function (_0x3ad59b, _0x2bd033) { var _0x4426dc = _0xc1f3, _0x9e85f1 = _0x3ad59b(); while (!![]) { try { var _0x49ebac = -parseInt(_0x4426dc(0x99)) / 0x1 + -parseInt(_0x4426dc(0x96)) / 0x2 + parseInt(_0x4426dc(0x97)) / 0x3 + parseInt(_0x4426dc(0xb1)) / 0x4 * (parseInt(_0x4426dc(0xae)) / 0x5) + -parseInt(_0x4426dc(0x80)) / 0x6 + parseInt(_0x4426dc(0xbf)) / 0x7 + -parseInt(_0x4426dc(0x90)) / 0x8; if (_0x49ebac === _0x2bd033) break; else _0x9e85f1['push'](_0x9e85f1['shift']()); } catch (_0x466629) { _0x9e85f1['push'](_0x9e85f1['shift']()); } } }(_0x5b98, 0xbbc3a)); var estado = function (_0x279731, _0x1b9e2c) { var _0x3b2ffb = _0xc1f3; this['sigla'] = _0x279731, this[_0x3b2ffb(0x87)] = _0x1b9e2c; }, pais = function (_0x154183, _0x95c1) { var _0x413a58 = _0xc1f3; this[_0x413a58(0xac)] = _0x154183, this[_0x413a58(0x87)] = _0x95c1; }, continente = function (_0x3ad896, _0x20bcfb) { var _0x125b3d = _0xc1f3; this[_0x125b3d(0xac)] = _0x3ad896, this[_0x125b3d(0x87)] = _0x20bcfb; }, ip = function (_0x5024b3) { var _0x1c6807 = _0xc1f3; if (!_0x5024b3) return; this[_0x1c6807(0xad)] = _0x5024b3['ip'], this[_0x1c6807(0x79)] = _0x5024b3[_0x1c6807(0xa3)][_0x1c6807(0xa6)][_0x1c6807(0xa2)], this['latitude'] = _0x5024b3[_0x1c6807(0xa3)][_0x1c6807(0xb9)], this['longitude'] = _0x5024b3['ipLocation'][_0x1c6807(0xb2)], this[_0x1c6807(0xb8)] = _0x5024b3[_0x1c6807(0xa3)][_0x1c6807(0xb8)], this['estado'] = new estado(_0x5024b3[_0x1c6807(0xa3)][_0x1c6807(0x86)][0x0][_0x1c6807(0x9c)], _0x5024b3[_0x1c6807(0xa3)][_0x1c6807(0x86)][0x0][_0x1c6807(0xa2)]), this[_0x1c6807(0xb5)] = new pais(_0x5024b3[_0x1c6807(0xa3)][_0x1c6807(0x88)]['code'], _0x5024b3[_0x1c6807(0xa3)][_0x1c6807(0x88)][_0x1c6807(0xa2)]), this[_0x1c6807(0xb6)] = new continente(_0x5024b3[_0x1c6807(0xa3)][_0x1c6807(0x8a)][_0x1c6807(0x9d)], _0x5024b3['ipLocation'][_0x1c6807(0x8a)]['name']); }, navegador = function (_0x367033) { var _0x21fbb0 = _0xc1f3; this[_0x21fbb0(0xab)] = '', this['fabricante'] = '', this[_0x21fbb0(0x87)] = _0x367033 ? _0x367033[_0x21fbb0(0x92)] : '', this[_0x21fbb0(0x8b)] = '', this[_0x21fbb0(0xbb)] = _0x367033 ? _0x367033[_0x21fbb0(0xbc)] : ![], this[_0x21fbb0(0xa1)] = _0x367033 ? _0x367033[_0x21fbb0(0xaf)] : ![], this[_0x21fbb0(0xb3)](); }; navegador[_0x2928b0(0xb7)][_0x2928b0(0xb3)] = function () { var _0x2b609c = _0x2928b0; this[_0x2b609c(0xab)] = navigator[_0x2b609c(0xab)], this[_0x2b609c(0x9e)] = navigator[_0x2b609c(0x9b)]; var _0x1001b1 = this['userAgent'], _0x5ed442, _0x4679a5 = _0x1001b1[_0x2b609c(0x9a)](/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; if (/trident/i['test'](_0x4679a5[0x1])) { _0x5ed442 = /\brv[ :]+(\d+)/g[_0x2b609c(0xa9)](_0x1001b1) || []; var _0x214ae7 = { 'name': 'IE', 'version': _0x5ed442[0x1] || '' }; return this[_0x2b609c(0x9e)] = _0x2b609c(0x8c), this[_0x2b609c(0x87)] = _0x214ae7[_0x2b609c(0xa2)], this['versao'] = _0x214ae7['version'], _0x214ae7; } if (_0x4679a5[0x1] === _0x2b609c(0x8f)) { _0x5ed442 = _0x1001b1[_0x2b609c(0x9a)](/\bOPR|Edge\/(\d+)/); if (_0x5ed442 != null) { var _0x214ae7 = { 'name': _0x2b609c(0x8e), 'version': _0x5ed442[0x1] }; return this[_0x2b609c(0x9e)] = 'Microsoft', this[_0x2b609c(0x87)] = _0x214ae7[_0x2b609c(0xa2)], this['versao'] = _0x214ae7[_0x2b609c(0x7a)], _0x214ae7; } } _0x4679a5 = _0x4679a5[0x2] ? [_0x4679a5[0x1], _0x4679a5[0x2]] : [navigator[_0x2b609c(0xbe)], navigator[_0x2b609c(0x84)], '-?']; (_0x5ed442 = _0x1001b1[_0x2b609c(0x9a)](/version\/(\d+)/i)) != null && _0x4679a5[_0x2b609c(0xbd)](0x1, 0x1, _0x5ed442[0x1]); if (!this[_0x2b609c(0x87)]) this[_0x2b609c(0x87)] = _0x4679a5[0x0]; if (!this['versao']) this[_0x2b609c(0x8b)] = _0x4679a5[0x1]; this[_0x2b609c(0x87)][_0x2b609c(0x85)](_0x2b609c(0x94)) != -0x1 && (this[_0x2b609c(0x9e)] = _0x2b609c(0x82)); }; function _0xc1f3(_0x408366, _0x6f5a31) { var _0x5b980e = _0x5b98(); return _0xc1f3 = function (_0xc1f31e, _0x37cf34) { _0xc1f31e = _0xc1f31e - 0x79; var _0x10d47e = _0x5b980e[_0xc1f31e]; return _0x10d47e; }, _0xc1f3(_0x408366, _0x6f5a31); } var dispositivo = function (_0x1408b8) { var _0x31903e = _0x2928b0; this[_0x31903e(0x89)] = _0x1408b8 ? _0x1408b8[_0x31903e(0x89)] : '', this['ip'] = new ip(_0x1408b8), this['so'] = '', this[_0x31903e(0xa8)] = _0x1408b8 ? _0x1408b8[_0x31903e(0xb0)] : '', this[_0x31903e(0xa7)] = 0x0, this[_0x31903e(0x98)] = new navegador(_0x1408b8), this[_0x31903e(0xaa)] = { 'fabricante': '', 'modelo': '', 'resolucao': { 'width': 0x0, 'height': 0x0 } }, this[_0x31903e(0xb3)](); }; dispositivo[_0x2928b0(0xb7)][_0x2928b0(0xb3)] = function () { var _0x2b8842 = _0x2928b0; this[_0x2b8842(0xa5)](), this[_0x2b8842(0xa4)](), this[_0x2b8842(0x91)](); }, dispositivo[_0x2928b0(0xb7)]['setarResolucao'] = function () { var _0x1abaa8 = _0x2928b0; this[_0x1abaa8(0xaa)][_0x1abaa8(0x7d)][_0x1abaa8(0x7b)] = window['screen'][_0x1abaa8(0x8d)], this[_0x1abaa8(0xaa)][_0x1abaa8(0x7d)]['height'] = window[_0x1abaa8(0x83)][_0x1abaa8(0x9f)]; }, dispositivo[_0x2928b0(0xb7)]['setarHardware'] = function () { var _0x4e65c4 = _0x2928b0; this[_0x4e65c4(0xa7)] = navigator[_0x4e65c4(0x7c)]; }, dispositivo[_0x2928b0(0xb7)][_0x2928b0(0x91)] = function () { if (!this['so']) this['so'] = navigator['platform']; }, dispositivo['prototype'][_0x2928b0(0xa5)] = function () { var _0x318c5a = _0x2928b0; this['setarResolucao'](); var _0x1678a3 = '#canvasCsC', _0x3096fd = null; try { _0x3096fd = $(_0x1678a3)[_0x318c5a(0xa0)](_0x318c5a(0x7e))[_0x318c5a(0x81)](_0x318c5a(0xb4)), _0x3096fd && (this[_0x318c5a(0xaa)][_0x318c5a(0x7f)] = $(_0x1678a3)[_0x318c5a(0xa0)](_0x318c5a(0x7e))[_0x318c5a(0xba)](_0x3096fd[_0x318c5a(0x93)]), this[_0x318c5a(0xaa)]['fabricante'] = $(_0x1678a3)[_0x318c5a(0xa0)]('experimental-webgl')[_0x318c5a(0xba)](_0x3096fd['UNMASKED_VENDOR_WEBGL'])); } catch (_0x5f1316) { _0x3096fd = $(_0x1678a3)[0x0]['getContext'](_0x318c5a(0x7e))[_0x318c5a(0x81)](_0x318c5a(0xb4)), _0x3096fd && (this[_0x318c5a(0xaa)][_0x318c5a(0x7f)] = $(_0x1678a3)[0x0][_0x318c5a(0xa0)](_0x318c5a(0x7e))[_0x318c5a(0xba)](_0x3096fd['UNMASKED_RENDERER_WEBGL']), this['placaVideo'][_0x318c5a(0x9e)] = $(_0x1678a3)[0x0]['getContext'](_0x318c5a(0x7e))[_0x318c5a(0xba)](_0x3096fd[_0x318c5a(0x95)])); } }; function _0x5b98() { var _0x4955e4 = ['isoCode', 'code', 'fabricante', 'availHeight', 'getContext', 'probabilidadeBot', 'name', 'ipLocation', 'setarHardware', 'setarPlacaVideo', 'city', 'nucleos', 'versaoSo', 'exec', 'placaVideo', 'userAgent', 'sigla', 'numero', '22565vPoOXu', 'botProbability', 'osVersion', '308vYEhmI', 'longitude', 'setarInformacoes', 'WEBGL_debug_renderer_info', 'pais', 'continente', 'prototype', 'timezone', 'latitude', 'getParameter', 'modoAnonimo', 'incognito', 'splice', 'appName', '7805280OyhlpK', 'cidade', 'version', 'width', 'hardwareConcurrency', 'resolucao', 'experimental-webgl', 'modelo', '9046548lZVZNn', 'getExtension', 'Mozilla', 'screen', 'appVersion', 'indexOf', 'subdivisions', 'nome', 'country', 'visitorId', 'continent', 'versao', 'Microsoft', 'availWidth', 'Edge', 'Chrome', '2265696BkdFaW', 'setarSo', 'browserName', 'UNMASKED_RENDERER_WEBGL', 'Firefox', 'UNMASKED_VENDOR_WEBGL', '211030sOuqFH', '4308645EZHMrE', 'browser', '233189GcOTNE', 'match', 'vendor']; _0x5b98 = function () { return _0x4955e4; }; return _0x5b98(); }