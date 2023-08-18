'use strict';
const {VALUE} = require('../shared/symbols.js');
const {AMPERSAND, QUOTE, LT, GT} = require('../shared/constants.js');
const {emptyAttributes} = require('../shared/attributes.js');
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
            name : `${name}="${value.replace(AMPERSAND, '&amp;').replace(QUOTE, '&quot;').replace(LT, '&lt;').replace(GT, '&gt;')}"`;
  }
}
exports.XmlAttr = XmlAttr
