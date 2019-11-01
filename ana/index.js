const chalk = require('chalk');
const log = console.log;

let fs = require('fs');
let path = require('path');//解析需要遍历的文件夹
let filePath = path.resolve('./pages');
//调用文件遍历方法
fileDisplay(filePath);
//文件遍历方法
function fileDisplay(filePath) {
    //根据文件路径读取文件，返回文件列表
    fs.readdir(filePath, function (err, files) {
        if (err) {
            console.warn(err)
        } else {
            //遍历读取到的文件列表
            let len = files.length;
            log(`${filePath}目录的\n子文件夹个数：${chalk.green(len)}\n文件个数${chalk.green(len * 4)}`)
        }
    });
}