(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.mapify = factory();
  }
})(this, function () {

  'use strict';

  var canMap = { 'array': mapArray, 'object': mapObject };

  function getType(item) {
    return Object.prototype.toString.call(item).toLowerCase().slice(8, -1);
  }

  function mapObject(item, fn, ctx) {
    var mapped = {};
    for (var prop in item) {
      mapped[prop] = fn.call((ctx || item), item[prop], prop, item);
    }
    return mapped;
  }

  function mapArray(items, fn, ctx) {
    var mapped = [];
    for (var i = items.length; i--;) {
      mapped.unshift(fn.call((ctx || items), items[i], i, items));
    }
    return mapped;
  }

  function map() {
    var toMap = canMap[getType(arguments[0])];
    return (
      toMap ?
      toMap.apply(null, Array.prototype.slice.call(arguments, 0)) :
      (function () {
        throw new Error('Cannot map ' + typeof item);
      })()
    );
  }

  return function (item, fn, ctx) {
    return map(item, fn, ctx);
  };

});
