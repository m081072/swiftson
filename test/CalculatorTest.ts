/// <reference path="../typings/mocha/mocha.d.ts" />
import * as calculator from '../lib/index';

describe('Calculator', () => {

    describe('#add', () => {
        it('should add two numbers together', () => {
            var result : number = calculator.add(2, 3);
            if (result !== 5) {
                throw new Error('Expected 2 + 3 = 5 but was ' + result);
            }
        });
    });
});