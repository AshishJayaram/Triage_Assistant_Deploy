var express = require("express");
var app=express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride=require("method-override");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
var User = require("./models/user");
var flash = require("connect-flash");


var url = process.env.DATABASEURL || "mongodb://localhost/doctor_work"
mongoose.connect(url);
//mongoose.connect("mongodb+srv://doctorwork:ramaiah@cluster0.z32pr.mongodb.net/emergency?retryWrites=true&w=majority");

app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));
app.use(methodOverride("_method"));
app.use(express.static("public"));
app.use(flash());

app.use(require("express-session")({
    secret:"Sorry Chirayu xD",
    resave:false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



var doctorSchema = new mongoose.Schema({
    name:String,
    age:Number,
    gender:String,
    created:String,
    doctor:String,
    ofbSwelling:{type:String,default:"No"},
    ofbDeformity:{type:String,default:"No"},
    ofbInjury:{type:String,default:"No"},
    ofbOthers:{type:String,default:"No"},
    ofbSuction:{type: String,default:"No"},
    ofbChinlift:{type: String,default:"No"},
    ofbJawthrust:{type: String,default:"No"},
    
    ostSecretions:{type:String,default:"No"},
    ostVomiting:{type:String,default:"No"},
    ostBloodloss:{type:String,default:"No"},
    ostHeadtilt:{type:String,default:"No"},
    ostChinlift:{type:String,default:"No"},
    ostJawthrust:{type:String,default:"No"},
    
    airSounds:{type:String,default:"No"},
    airSnoring:{type:String,default:"No"},
    airGrunting:{type:String,default:"No"},
    airStrider:{type:String,default:"No"},
    airGnurfling:{type:String,default:"No"},
    airH:{type:String,default:"No"},
    airIncomprehensive:{type:String,default:"No"},
    airSuction:{type:String,default:"No"},
    airHeadtilt:{type:String,default:"No"},
    airChinlift:{type:String,default:"No"},
    airJawthrust:{type:String,default:"No"},
    
    feelSwelling:{type:String,default:"No"},
    feelDeformity:{type:String,default:"No"},
    feelInjury:{type:String,default:"No"},
    feelOthers:{type:String,default:"No"},
    feelFurthermanual:{type:String,default:"Not required"},
    feelSuction:{type:String,default:"No"},
    feelChinLift:{type:String,default:"No"},
    feelInvention:{type:String,default:"Not required"},
    feelFurthernotmanual:{type:String,default:"Not required"},
    address:{type:String,default:"N/A"},
    
    //breathing
    cynosis:{type:String,default:"No"},
    ccage:{type:String,default:"No"},
    resp:{type:String,default:"No"},
    scm:{type:String,default:"No"},
    bi11:{type:String,default:"No"},
    bi12:{type:String,default:"No"},
    bi21:{type:String,default:"No"},
    bi22:{type:String,default:"No"},
    bi23:{type:String,default:"No"},
    bi24:{type:String,default:"No"},
    bi25:{type:String,default:"No"},
    bi26:{type:String,default:"No"},
    bi261:{type:String,default:"No"},
    bi262:{type:String,default:"No"},
    bi263:{type:String,default:"No"},
    bi271:{type:String,default:"No"},
    bi272:{type:String,default:"No"},
    bi273:{type:String,default:"No"},
    bi274:{type:String,default:"No"},
    bi275:{type:String,default:"No"},
    bi281:{type:String,default:"No"},
    bi282:{type:String,default:"No"},
    bi283:{type:String,default:"No"},
    bi284:{type:String,default:"No"},
    bi285:{type:String,default:"No"},
    ant:{type:String,default:"No"},
    post:{type:String,default:"No"},
    frem:{type:String,default:"No"},
    sem:{type:String,default:"No"},
    tend:{type:String,default:"No"},
    
    //circulation
    gap: {type:String, default:"No option selected"},
    atcrt:{type:String, default:"No option selected"},
    jvp:{type:String, default:"No option selected"},
    od:{type:String, default:"No option selected"},
    ci1:{type:String,default:"No"},
    cinorm:{type:String,default:"No"},
    ci12:{type:String,default:"No"},
    ci13:{type:String,default:"No"},
    ci14:{type:String,default:"No"},
    ci15:{type:String,default:"No"},
    ci2:{type:String,default:"No"},
    ci21:{type:String,default:"No"},
    ci22:{type:String,default:"No"},
    ci3:{type:String,default:"No"},
    ci31:{type:String,default:"No"},
    ci32:{type:String,default:"No"},
    ci33:{type:String,default:"No"},
    ci34:{type:String,default:"No"},
    ci4:String,
    ci5:{type:String,default:"No"},
    ci51:{type:String,default:"No"},
    ci52:{type:String,default:"No"},
    ci61:{type:String,default:"Non-Haemorrhagic"},
    ci62:{type:String,default:"No"},
    ci71:{type:String,default:"No"},
    ci72:{type:String,default:"No"},
    ci73:{type:String,default:"No"},
    ci74:{type:String,default:"No"},
    ci81:{type:String,default:"No"},
    ci82:{type:String,default:"No"},
    ci91:{type:String,default:"No"},
    ci92:{type:String,default:"No"},
    ci10:String,
    ci11:String,
    cf1:{type:String,default:"No"},
    cf11:{type:String,default:"No"},
    cf12:{type:String,default:"No"},
    cf2:{type:String,default:"No"},
    cf21:{type:String,default:"No"},
    cf22:{type:String,default:"No"},
    cf23:{type:String,default:"No"},
    cf24:{type:String,default:"No"},
    cf3:{type:String,default:"No"},
    cf31:{type:String,default:"No"},
    cf32:{type:String,default:"No"},
    cf4:{type:String,default:"No"},
    cf41:{type:String,default:"No"},
    cf42:{type:String,default:"No"},
    cf421:{type:String,default:"No"},
    cf422:{type:String,default:"No"},
    cf4221:{type:String,default:"No"},
    cf4222:{type:String,default:"No"},
    cf4223:{type:String,default:"No"},
    cf4224:{type:String,default:"No"},
    cf4225:{type:String,default:"No"},
    cf4226:{type:String,default:"No"},
    cf4227:{type:String,default:"No"},
    cf4211:{type:String,default:"No"},
    cf4212:{type:String,default:"No"},
    cf4213:{type:String,default:"No"},
    cf4214:{type:String,default:"No"},
    cf4215:{type:String,default:"No"},
    cf4216:{type:String,default:"No"},
    cf4217:{type:String,default:"No"},
    cf51:{type:String,default:"No"},
    cf52:{type:String,default:"No"},
    
    //disability
    d1:{type:String,default:"No"},
    d2:{type:String,default:"No"},
    d21:{type:String,default:"No"},
    d22:{type:String,default:"No"},
    d3:{type:String,default:"No"},
    d31:{type:String,default:"No"},
    d32:{type:String,default:"No"},
    d4:{type:String,default:"No"},
    d41:{type:String,default:"No"},
    d42:{type:String,default:"No"},
    d51:{type:String,default:"Normal Tone"},
    d52:{type:String,default:"No"},
    d521:{type:String,default:"No"},
    d522:{type:String,default:"No"},
    d53:{type:String,default:"No"},
    d531:{type:String,default:"No"},
    d532:{type:String,default:"No"},
    d533:{type:String,default:"No"},
    d631:{type:String,default:"No"},
    d632:{type:String,default:"No"},
    d641:{type:String,default:"No"},
    d642:{type:String,default:"No"},
    
    //exposure
    e11:{type:String,default:"No"},
    e21:{type:String,default:"No"},
    e31:String,
    e32:String,
    e33:String,
    e34:String,
    e35:String,
    e36:String,
    e37:String,
    e38:String,
    e41:String,
    e42:String,
    e43:String,
    e44:String,
    e45:String,
    e46:String,
    e47:String,
    e48:String,
    e5:String,
    e6:String,
    e7:String,
    
    //MEES Score
    RR:String,
    HR:String,
    CR:String,
    Pain:String,
    OS:String,
    BP:String,
    GCS:String,
    MEESScore:String
    
    
    
    
});

var doctor=mongoose.model("doctor",doctorSchema);

app.get("/",function(req,res){
    res.render("landing");
});

app.get("/home",function(req,res){
    res.render("home");
})


app.get("/home/about",function(req,res){
    res.render("about");
})


app.get("/home/getstarted",function(req,res){
    res.render("getstarted");
})

app.get("/home/contact",function(req,res){
    res.render("contact");
})


app.get("/doctorblogs",isLoggedIn,function(req,res){
    doctor.find({},function(err,doctorblogs){
        
        if(err)
        console.log(err);
        else
        res.render("doctorindex",{doctorblogs:doctorblogs,CurrentUser:req.user,message:req.flash("error")});
    })
})

app.get("/doctorblogs/doctornew",function(req,res){
    res.render("newdoctor");
})


app.get("/doctorblogs/home/circ",function(req,res){
    res.render("circ");
})

app.get("/doctorblogs/:id",isLoggedIn,function(req,res){
    doctor.findById(req.params.id,function(err,foundblog){
        if(err)
        res.redirect("/doctorblogs");
        else
        res.render("doctorshow",{doctorblog:foundblog,CurrentUser:req.user,message:req.flash("error")});
    })
})

app.get("/doctorblogs/:id/print",isLoggedIn,function(req,res){
    doctor.findById(req.params.id,function(err,foundblog){
        if(err)
        res.redirect("/doctorblogs");
        else
        res.render("doctorprint",{doctorblog:foundblog,CurrentUser:req.user})
    })
})

app.get("/doctorblogs/:id/edit",function(req,res){
    if(req.isAuthenticated()){
    doctor.findById(req.params.id,function(err,foundblog){
        if(err){
            
        console.log(err);
        res.redirect("/doctorblogs");}
        else{
            if(req.user.username==="admin@draruna")
        res.render("doctoredit",{doctorblog:foundblog});
            else
            res.redirect("/doctorblogs");
        }
    });}
    else
    {
        
        res.redirect("/mainlogin");
    }
});

app.put("/doctorblogs/:id",function(req,res){
    doctor.findByIdAndUpdate(req.params.id,req.body.doc,function(err,updatedBlog){
        if(err)
        res.redirect("/doctorblogs");
        else
        req.flash("error","Updated Selected Patient Details")
        res.redirect("/doctorblogs/"+req.params.id);
    })
})

app.delete("/doctorblogs/:id",function(req,res){
    if(req.isAuthenticated()){
        if(req.user.username==="admin@draruna"){
    doctor.findByIdAndRemove(req.params.id,function(err){
        if(err)
        res.redirect("/doctorblogs");
        else{
        req.flash("error","Deleted the Selected Patient Details")
        res.redirect("/doctorblogs");}
    });
    }
        else
        {
            res.redirect("/doctorblogs");
        }
    }
    else
    res.redirect("/doctorblogs");
    
})


//authentication route


app.get("/mainlogin",function(req,res){
    res.render("mainlogin",{message:req.flash("error")});
    });


app.get("/register",function(req,res){
    if(req.user.username==="admin@draruna")
    res.render("register");
    else
    res.redirect("/doctorblogs");
});


app.post("/register",function(req,res){
    req.body.username
    req.body.password
    
    User.register(new User({username:req.body.username}),req.body.password,function(err,user){
        if(err){
            req.flash("error",err);
            return res.render("register");
        }
        passport.authenticate("local")(req,res,function(){
            req.flash("error","Succefully Signed Up A New Member")
            res.redirect("/register");
        });
    });
    
});


app.get("/login",function(req,res){
    res.render("login",{message :req.flash("error")});
})

app.post("/login",passport.authenticate("local",{
    successRedirect: "/doctorblogs", 
    failureRedirect: "/login"
}),function(req,res){
    
});

app.get("/logout",function(req,res){
    req.logout();
    req.flash("error","Successfully logged you out");
    res.redirect("/mainlogin");
});

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error","you need to logged in first");
    res.redirect("/login");
};




app.post("/doctorblogs",function(req,res){
    doctor.create(req.body.doc,function(err,newdoctor){
        if(err)
        res.render("newdoctor");
        else
        res.redirect("/doctorblogs");
    })
});



app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server is Running");
    
});
