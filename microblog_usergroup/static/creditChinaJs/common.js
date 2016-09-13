/**
 * @file 一些通用方法文件
 * @author ×××
 */

define(
    function (require) {
        var exports = {};

        /**
         * 判断是否支持placeholder
         * @return {boolean} 支持返回true 不支持返回false
         */
        exports.placeholderSupport = function () {
            return 'placeholder' in document.createElement('input');
        };

        exports.start = function () {
        };

        // 引入stringifyJSON
        (function() {
    
            "use strict";
            
            var escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, 
                meta = {
                    '\b' : '\\b',
                    '\t' : '\\t',
                    '\n' : '\\n',
                    '\f' : '\\f',
                    '\r' : '\\r',
                    '"' : '\\"',
                    '\\' : '\\\\'
                };
            
            function quote(string) {
                return '"' + string.replace(escapable, function(a) {
                    var c = meta[a];
                    return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4);
                }) + '"';
            }
            
            function f(n) {
                return n < 10 ? "0" + n : n;
            }
            
            function str(key, holder) {
                var i, v, len, partial, value = holder[key], type = typeof value;
                        
                if (value && typeof value === "object" && typeof value.toJSON === "function") {
                    value = value.toJSON(key);
                    type = typeof value;
                }
                
                switch (type) {
                case "string":
                    return quote(value);
                case "number":
                    return isFinite(value) ? String(value) : "null";
                case "boolean":
                    return String(value);
                case "object":
                    if (!value) {
                        return "null";
                    }
                    
                    switch (Object.prototype.toString.call(value)) {
                    case "[object Date]":
                        return isFinite(value.valueOf()) ? 
                            '"' + value.getUTCFullYear() + "-" + f(value.getUTCMonth() + 1) + "-" + f(value.getUTCDate()) + 
                            "T" + f(value.getUTCHours()) + ":" + f(value.getUTCMinutes()) + ":" + f(value.getUTCSeconds()) + "Z" + '"' : 
                            "null";
                    case "[object Array]":
                        len = value.length;
                        partial = [];
                        for (i = 0; i < len; i++) {
                            partial.push(str(i, value) || "null");
                        }
                        
                        return "[" + partial.join(",") + "]";
                    default:
                        partial = [];
                        for (i in value) {
                            if (Object.prototype.hasOwnProperty.call(value, i)) {
                                v = str(i, value);
                                if (v) {
                                    partial.push(quote(i) + ":" + v);
                                }
                            }
                        }
                        
                        return "{" + partial.join(",") + "}";
                    }
                }
            }
            
            function stringifyJSON(value) {
                if (window.JSON && window.JSON.stringify) {
                    return window.JSON.stringify(value);
                }
                
                return str("", {"": value});
            }
            
            // Expose stringifyJSON to the global object
            exports.stringifyJSON = stringifyJSON;
        }());

        /*处理国际数字记数法*/
        exports.formatNumber = function (num){
           var b=parseInt(num).toString();
           var len=b.length;
           if(len<=3){return b;}
           var r=len%3;
           return r>0?b.slice(0,r)+","+b.slice(r,len).match(/\d{3}/g).join(","):b.slice(r,len).match(/\d{3}/g).join(",");
         }
 

        /**
         * 获取url内的参数
         * @param  {string} name 参数名称
         * @return {string}      参数值
         */
        exports.getUrlParam = function (name) {
            var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
            var r = window.location.search.substr(1).match(reg);

            if (r != null) {
                return decodeURIComponent(r[2]);
            }

            return null;
        };

        /**
         * 获取hash内参数的值
         * @param  {string} name 参数
         * @return {string}      参数值
         */
        exports.getHashParam = function (name) {
            var reg = new RegExp('(^|&)' + name + '[=-]([^&]*)(&|$)');
            var r = window.location.hash.substr(1).match(reg);

            if (r != null) {
                return decodeURIComponent(r[2]);
            }

            return null;
        };

        /**
         * json数据转为string
         * @param  {Object} json json数据
         * @return {string}      json拼成的字符串
         */
        exports.json2UrlData = function (json) {
            var arr = [];

            for(var key in json) {
                if (json.hasOwnProperty(key)) {
                    arr.push(['&',key, '=', json[key]].join(''));
                }
            }

            return arr.join('').substr(1);
        };

        /**
         * 返回key
         * @param  {[type]} propertyName [description]
         * @param  {[type]} parentKey    [description]
         * @return {[type]}              [description]
         */
        exports.getKey = function (propertyName, parentKey) {
            return parentKey ? parentKey : propertyName;
        };

        /**
         * 序列化数组的重写
         * @override
         */
        exports.serializeArray = function (prefix, array) {
            var encodedKey = prefix ? encodeURIComponent(prefix) : '';
            var encoded = [];
            for (var i = 0; i < array.length; i++) {
                var item = array[i];
                encoded[i] = exports.serializeData('', item);
            }
            var result = '';
            if (encodedKey) {
                for (var j = 0, len = encoded.length; j < len; j++) {
                    result += '&' + encodedKey + '=' + encoded[j];
                }
            }
            else {
                return encoded.join('&');
            }

            return result.slice(1);
        };

        /**
         * 序列化查询字符串
         * @param  {string} prefix 前缀
         * @param {Object} data 要序列化的对象
         * @return {string}       query字符串
         */
        exports.serializeData = function (prefix, data) {
            if (arguments.length === 1) {
                data = prefix;
                prefix = '';
            }

            if (data == null) {
                data = '';
            }
            var getKey = exports.getKey;
            var encodedKey = prefix ? encodeURIComponent(prefix) : '';

            var type = Object.prototype.toString.call(data);
            switch (type) {
                case '[object Array]':
                    return exports.serializeArray(prefix, data);
                case '[object Object]':
                    var result = [];
                    for (var name in data) {
                        var propertyKey = getKey(name, prefix);
                        var propertyValue =
                            exports.serializeData(propertyKey, data[name]);

                        if (propertyValue) {
                            result.push(propertyValue);
                        }
                    }
                    return result.join('&');
                default:
                    return encodedKey
                        ? encodedKey + '=' + encodeURIComponent(data)
                        : encodeURIComponent(data);
            }
        };


        /**
         * 获取当前页面的hash值
         * @return {string} 返回网址的hash值
         */
        function getHash() {
            var index = location.href.indexOf('#');
            var hash = index === -1 ? '' : location.href.slice(index);

            if (hash.indexOf('#') === 0) {
                hash = hash.slice(1);
            }

            return hash;
        }

        var callbackHandler;

        /**
         * 处理hash的变化事件
         */
        function forwardHash() {
            var hash = getHash();

            callbackHandler(hash);
        }

        var rollTimer;
        var startupTimer;

        /**
         * 绑定页面hashchange的事件
         * @param  {Function} callback  hashchange时的回调
         * @param  {boolean} firstTime 是否默认执行一次
         */
        exports.bindHashChange = function (callback, firstTime) {
            callbackHandler = callback || function () {};

            if (window.addEventListener) {
                window.addEventListener('hashchange', forwardHash, false);
            }
            else if ('onhashchange' in window && document.documentMode > 7) {
                window.attachEvent('onhashchange', forwardHash);
            }
            else {
                rollTimer = setInterval(forwardHash, 100);
            }

            // 第一次初始化
            if (firstTime) {
                startupTimer = setTimeout(forwardHash, 0);
            }
        };

        exports.unBindHashChange = function () {
            if (rollTimer) {
                clearInterval(rollTimer);
                rollTimer = null;
            }
            if (startupTimer) {
                clearTimeout(startupTimer);
                startupTimer = null;
            }

            if (window.removeEventListener) {
                window.removeEventListener('hashchange', forwardHash, false);
            }
            else if ('onhashchange' in window && document.documentMode > 7) {
                window.detachEvent('onhashchange', forwardHash);
            }
        };

        return exports;
    }
);
