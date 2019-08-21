const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bp = require('body-parser');
const session = require('express-session');
const config = require('./config/database')

// mongoose.connect('mongodb://localhost/amsystem',{ useNewUrlParser: true });
//let db = mongoose.connection;
var url = "mongodb://localhost/amsystem" ;
mongoose.connect(url,{ useNewUrlParser: true }, (err, db)=> {
    if (err){
        throw err;
    }
db.collection("student_info").find({}).toArray((err, result)=> {
    if (err) {
        throw err;
    }else{
        global.student = result;
    }
});
});

//body-parser
app.use(bp.urlencoded({extended:false}));
app.use(bp.json());

// db.on('err',()=>{
//     console.log(err)
// });

app.use('/public',express.static(path.join(__dirname,'static')));
app.set('view engine','ejs');

//session middleware
app.use(session({
    secret: 'kjugdfks',
    resave: false,
    saveUninitialized: true
}));

//Homepage
app.get('/',(req,res)=>{
        res.render('homepage');
});
//Branch
app.get('/branch',(req,res)=>{
    res.render('branch');
});
//about
app.get('/about',(req,res)=>{
    res.render('about');
});

//contact
app.get('/contacts',(req,res)=>{
    res.render('contacts');
});
//teachhers
app.get('/teacher',(req,res)=>{
    res.render('teacher');
});


//attendance
// app.get('/attendance',(req,res)=>{
//     res.render('attendance');
// });

//login get
app.get('/login',(req,res)=>{
     res.render('login');
})
//login post
mongoose.connect(url,{ useNewUrlParser: true }, (err, db)=> {
    if (err) throw err;
  app.post('/login', (req,res)=>{
    db.collection("teachers_ac").find({}).toArray((err, result)=> {
        if (err) {
            throw err;
        }else{
            userid = req.body.userid;
            pass = req.body.password;
            
                    for(var i=0;i<result.length;i++){
                        if((userid==result[i].teacherId) && (pass==result[i].password)){
                            global.n = result[i].name
                            res.redirect('/attendance',);

                } }}

           
        });
});
});

app.get('/attendance' ,(req,res,student)=>{
    var student = global.student;
    var n = global.n;
    res.render('attendance',{
        n:n,
        student:student
    });
});

const Record = require('./models/att_record');
app.post('/attendance', (req,res)=>{
    var date = new Date();
    var now =  date.toISOString().slice(0, 10);
    //fetched data
    const name = req.body.name;
    const roll = req.body.roll;
    const status = req.body.status;
    const teacher = req.body.teachers;
    for(var i=0;i<3;i++){
    let record = new Record();
    record.name = name[i];
    record.roll = roll[i];
    record.status = status[i];
    record.date = now;
    record.teacher = teacher;
    console.log(name[i]);
    console.log(roll[i]);
    console.log(status[i]);
    console.log(now);
    console.log(teacher);
    
    record.save((err)=>{
        if (err){
            console.log(err);
            return;
        }
        else{
            res.redirect('/attendance')
        }
    
        });
    }
 
});
app.get('/attendance/nitesh', (req, res)=>{
    Record.find({}, (err, articles)=>{
        if(err){
            console.log(err);
        }
        else {
            res.render('nitesh',{
                articles : articles
            });
        }
    });
});

app.get('/attendance/deepak_yadav', (req, res)=>{
    Record.find({}, (err, articles)=>{
        if(err){
            console.log(err);
        }
        else {
            res.render('deepak_yadav',{
                articles : articles
            });
        }
    });
});
app.get('/attendance/deepak_kr', (req, res)=>{
    Record.find({}, (err, articles)=>{
        if(err){
            console.log(err);
        }
        else {
            res.render('deepak_kr',{
                articles : articles
            });
        }
    });
});
app.get('/attendance/monesh', (req, res)=>{
    Record.find({}, (err, articles)=>{
        if(err){
            console.log(err);
        }
        else {
            res.render('monesh',{
                articles : articles
            });
        }
    });
});
app.get('/attendance/rinku', (req, res)=>{
    Record.find({}, (err, articles)=>{
        if(err){
            console.log(err);
        }
        else {
            res.render('rinku',{
                articles : articles
            });
        }
    });
});

app.get('/attendance/neha',(req,res)=>{
    Record.find({}, (err, articles)=>{
        if(err){
            console.log(err);
        }
        else {
            res.render('neha',{
                articles : articles
            });
        }
    });
});

app.get('/logout', (req, res, next)=>{
    req.logout();
    res.redirect('/')
})

//server
app.listen(9000);
