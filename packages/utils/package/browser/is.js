"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFF = exports.isPhantomJS = exports.isChrome = exports.isIOS = exports.isAndroid = exports.isEdge = exports.isIE11 = exports.isIE9 = exports.isIE = exports.UA = exports.weexPlatform = exports.isWeex = exports.isBrowser = void 0;
exports.isBrowser = typeof window !== 'undefined';
exports.isWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
exports.weexPlatform = exports.isWeex && WXEnvironment.platform.toLowerCase();
exports.UA = exports.isBrowser && window.navigator.userAgent.toLowerCase();
exports.isIE = exports.UA && /msie|trident/.test(exports.UA);
exports.isIE9 = exports.UA && exports.UA.indexOf('msie 9.0') > 0;
exports.isIE11 = navigator.userAgent.indexOf('Trident') > -1 && navigator.userAgent.indexOf('rv:11.0') > -1;
exports.isEdge = exports.UA && exports.UA.indexOf('edge/') > 0;
exports.isAndroid = (exports.UA && exports.UA.indexOf('android') > 0) || exports.weexPlatform === 'android';
exports.isIOS = (exports.UA && /iphone|ipad|ipod|ios/.test(exports.UA)) || exports.weexPlatform === 'ios';
exports.isChrome = exports.UA && /chrome\/\d+/.test(exports.UA) && !exports.isEdge;
exports.isPhantomJS = exports.UA && /phantomjs/.test(exports.UA);
exports.isFF = typeof exports.UA == 'string' && exports.UA.match(/firefox\/(\d+)/);
//# sourceMappingURL=is.js.map