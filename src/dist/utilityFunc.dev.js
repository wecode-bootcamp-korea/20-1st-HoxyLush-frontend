"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasObject = void 0;

var hasObject = function hasObject(obj) {
  return Boolean(Object.keys(obj).length);
};

exports.hasObject = hasObject;