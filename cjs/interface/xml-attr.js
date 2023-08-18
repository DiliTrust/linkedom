'use strict';
const {VALUE} = require('../shared/symbols.js');
const {emptyAttributes} = require('../shared/attributes.js');
const {escape} = require('../shared/text-escaper.js');
const {Attr} = require('./attr.js');

/**
 * @implements globalThis.Attr
 */
class XmlAttr extends Attr {
  constructor(ownerDocument, name, value = '') {
    super(ownerDocument, name, value);
  }

  toString() {
    const {name, [VALUE]: value} = this;
    return emptyAttributes.has(name) && !value ?
            name : `${name}="${escape(value)}"`;
  }
}
exports.XmlAttr = XmlAttr
