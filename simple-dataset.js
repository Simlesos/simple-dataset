/**
 * Created by sumizu.
 */

(function(){

    var setter = function (fn) {
        return function (key, value) {
            if (typeof key === "object" && !value) {
                for (var prop in key) {
                    if (key.hasOwnProperty(prop)) fn.call(this, prop, key[prop]);
                }
            } else {
                fn.call(this, key, value);
            }
        }
    };

    Node.prototype.getDataset = function () {
        return this.dataset || (function (node) {
                var dataset = {},
                    attrName;
                for (var i = 0, attr; attr = node.attributes[i++];) {
                    if (/^data-.*/i.test(attr.name)) {
                        attrName = attr.name.replace(/^data-/i, "").replace(/-(.)/g, function ($, $1) {
                            return $1.toUpperCase();
                        });
                        dataset[attrName] = attr.value;
                    }
                }
                return dataset;
            })(this)
    };

    Node.prototype.setDataset = setter(function (key, value) {
        var dataset = this.dataset || this.getDataset(),
            hasDataset = {}.toString.call(dataset) === "[object DOMStringMap]",
            attrName;
        if (hasDataset) {
            dataset[key] = value;
        } else {
            attrName = "data-" + key.replace(/[A-Z]/g, function ($) {
                    return "-" + $.toLowerCase();
                });
            this.setAttribute(attrName, value);
        }
    });

    Node.prototype.removeDataset = function(key){
        if(this.dataset){
            delete this.dataset[key];
        }else{
            var attrName = "data-" + key.replace(/[A-Z]/g, function($){
                    return "-" + $.toLowerCase();
                });
            this.removeAttribute(attrName);
        }
    };
})();
