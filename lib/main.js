const query = require('cli-interact').getNumber;
const strQuery =require('cli-interact').question;

let studentsList = [];

function initialize() {
    return query(`1. 添加学生
2. 生成成绩单
3. 退出
请输入你的选择（1～3）：`);
}

function verifyIputs(str) {
    // language=JSRegexp
    const reg = /[\u4e00-\u9fa5]+,[0-9]\d*,[1-9]\d{0}(,[\u4e00-\u9fa5]+:[0-9]\d?){1,4}/;
    return reg.test(str);
}

function add() {
    let str = strQuery(`请输入学生信息（格式: 姓名,学号,班级,学科:成绩, ...），按回车提交：`);
    while (!verifyIputs(str)){
        str = strQuery(`请按正确的格式输入（格式: 姓名,学号,班级,学科:成绩, ...）：`);
    }
    let arr = str.split(',');
    let obj = {
        name:arr[0],
        id:arr[1],
        clazz:arr[2],
        score:{}
    };
    for(let i in arr){
        if(i>2){
            obj.score[arr[i].split(':')[0]]=Number(arr[i].split(':')[1]);
        }
    };
    studentsList.push(obj);
    console.log(`学生${obj.name}的成绩被添加`);
    console.log(studentsList);
    main();
}

function verifyId(str) {
    for(let item of studentsList){
        if(str.indexOf(item.id)===-1){
            return false;
        }
    }
    return true;
}

function stuAver(arr) {

}

function stuTotal(arr) {

}

function clazzAver() {

}

function clazzMedian() {

}

function generateReport() {
    let stuId = strQuery(`请输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：`);
    while(!verifyId(stuId)){
        stuId = strQuery(`请按正确的格式输入要打印的学生的学号（格式： 学号, 学号,...），按回车提交：`);
    }
    stuAver(stuId.split(','));
    stuTotal(stuId.split(','));
    let clazzAver = clazzAver();
    let clazzMedian = clazzMedian();
    console.log('ok!');
    main();
}

function main(){
    let option = initialize();
    if(option===1){
        add();
    }else if(option===2){
        generateReport();
    }else if(option===3){
        return ;
    }else{
        console.log(`请输入正确的选项！`);
        main();
    }
}

main();
module.exports = main;
