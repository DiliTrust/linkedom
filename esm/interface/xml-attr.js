import {VALUE} from '../shared/symbols.js';
import {emptyAttributes} from '../shared/attributes.js';
import {escape} from '../shared/text-escaper.js';
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
            name : `${name}="${escape(value)}"`;
  }
}
