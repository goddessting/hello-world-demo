const express = require('express');
const app = new express();

app.use(express.static(__dirname + '/'));   //提供项目根目录下的所有静态文件

app.listen(3000, () => {                 //监听端口为3000
    console.log('server start');
});