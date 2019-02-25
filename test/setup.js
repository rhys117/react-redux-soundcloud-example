import React from 'react';
import { expect } from 'chai';
import jsdom from 'jsdom';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({adapter: new Adapter()});

const {JSDOM} = jsdom;
const {document} = (new JSDOM('<!doctype html><html><body></body></html>', {
  url: "http://localhost"
})).window;

global.document = document;
global.window = document.defaultView;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

global.React = React;
global.expect = expect;