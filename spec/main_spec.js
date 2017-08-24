"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

const main = require("../lib/main.js");


describe("学生成绩单命令行版", function(){
    sinon.spy(console, 'log');

    it("学生添加正确", function(){

        let result = main();
        let expect_string = '';
        
        expect(expect_string).to.equal(result);
    });

    // it("测试用例2", function(){
    //
    //     main();
    //     var result = _.flatten(console.log.args).join("\n");
    //     var expect_string = '';
    //
    //     expect(expect_string).to.equal(result);
    // });
});