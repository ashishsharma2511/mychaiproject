const { addNumbers } = require('../app');

const assert=require('chai').assert;
const sayHello=require('../app').sayHello;
const addnum=require('../app').addNumbers;
//const app=require('../app');
describe('App',function(){
    it('app should return hello',function(){
        assert.equal(sayHello(),'Hello');
    });

    it('app should return addition',function(){
        assert.equal(addNumbers(10,12),22);
    });
});