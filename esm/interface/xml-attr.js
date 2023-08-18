import {VALUE} from '../shared/symbols.js';
import {AMPERSAND,QUOTE,LT,GT} from '../shared/constants.js';
import {emptyAttributes} from '../shared/attributes.js';
import {Attr} from './attr.js';

/**
 * @implements globalThis.Attr
 */
export class XmlAttr extends Attr {
  constructor(ownerDocument, name, value = '') {
    super(ownerDocument, name, value);
  }

  toString() {
    const {name, [VALUE]: value} = this;
    return emptyAttributes.has(name) && !value ?
            name : `${name}="${value.replace(AMPERSAND, '&amp;').replace(QUOTE, '&quot;').replace(LT, '&lt;').replace(GT, '&gt;')}"`;
  }
}
