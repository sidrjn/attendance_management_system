const LocalStrategy = require('passport-local').Strategy;
const record = require('../models/att_record');
const config = require('../config/database');
// const bcrypt = require('bcryptjs');

module.exports = (passport)=>{
    passport.use(new LocalStrategy((username, password, done)=>{
        mongoose.connect(url,{ useNewUrlParser: true }, (err, db)=> {
            if (err) throw err;
            db.collection("teachers_ac").find({}).toArray((err, user)=> {
                if (err) throw err;
                else{
                    for(var i=0;i<user.length;i++){
                        if(username!==user[i].username){
                        return done(null, false);
                       }
                       if(password!==result[i].password){
                        return done(null, false);
                       }
                       return done(null, user);
                    }
                }
            });
        });
    }));
}