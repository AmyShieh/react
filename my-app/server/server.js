/**
 * Created by Amy on 2017/12/13.
 */
// const express = require('express');
//
// // 新建app
// const app = express();
// app.get('/',function (req,res) {
//     res.send('<h1>hello world</h1>');
// })
// app.listen(7190,function () {
//     console.log('Node App start at port 7190');
// })

const express = require('express');
const mongoose = require('mongoose');

// 连接mongo 并且使用test这个集合
const DB_URL = 'mongodb://127.0.0.1:27017/test'
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function () {
    console.log("mongodb has connected successfully");
})
// 类似于mysql的表 mongo里又文档、字段概念
const User = mongoose.model('user', new mongoose.Schema({
    user:{type:String,require:true},
    age:{type:Number,require:true},
}))
// 新增
// User.create({
//     user:'dad',
//     age:47
// },function (err, doc) {
//     if(!err){
//         console.log(doc);
//     }else{
//         console.log(err);
//     }
// })
const app = express();
app.get('/',function (req,res) {
    res.send('<h2>Test</h2>');
});
app.get('/data',function (req,res) {
    User.find({user:"amy"},function (err,doc) {
        res.json(doc);
    })
    // res.json({name:'amy',type:'girl',lagend:'alive',test:'nodemon'})
})
// app.get('/delete',function (req,res) {
//     User.remove({age:18},function (err,doc) {
//         console.log(doc)
//     })
// })
// User.update({'user':'alive'},{'$set':{age:22}},function (err,doc) {
//     console.log(doc);
// })
app.listen(7190,function () {
    console.log("port 7190")
})