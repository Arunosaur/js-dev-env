import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
import {describe} from "mocha";

describe('Our first test', () => {
   it('should pass', () => {
      expect(true).to.equal(true);
   })
});

describe('index.html', () => {
   it('it should say users', (done) => {
      const index = fs.readFileSync('./src/index.html', "utf-8");
      const {JSDOM} = jsdom;
      const {window} = new JSDOM();
      const {document} = (new JSDOM(index)).window;
      const h1 = document.getElementsByTagName("h1")[0];
      expect(h1.innerHTML).to.equal("Users");
      done();
      window.close();
   })
});