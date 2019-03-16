var express = require("express"),
methodOverride =require("method-override"),
mongoose = require("mongoose"),
passport = require("passport"),
localStrategy = require("passport-local"),
bodyParser = require("body-parser"),
BuyandSell = require("./models/advertsModels"),
User = require("./models/user"),
app = express();

var advertsRoute = require("./routes/advertsRoutes"),
    indexRoutes  = require("./routes/index")

var PORT = 3000;    
//APP CONFIG
mongoose.connect("mongodb://localhost/buyandsell");
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

// BuyandSell.create({
//         title:"adidas Ultraboost Shoes",
//         price:90,
//         Location:"Bamenda",
//         picture1:"https://assets.adidas.com/images/w_600,f_auto,q_auto/efc2b74777524a0fa122a8250086ce3e_9366/Ultraboost_Shoes_Grey_BB6150_01_standard.jpg",
//         picture2 :"https://www.adidas.com.sg/dis/dw/image/v2/bcbs_prd/on/demandware.static/-/Sites-adidas-products/default/dw35f6c06c/zoom/F36156_01_standard.jpg?sh=600&strip=false",
//         picture3:"https://assets.adidas.com/images/w_600,f_auto,q_auto/efc2b74777524a0fa122a8250086ce3e_9366/Ultraboost_Shoes_Grey_BB6150_01_standard.jpg",
//         picture4 :"https://www.adidas.com.sg/dis/dw/image/v2/bcbs_prd/on/demandware.static/-/Sites-adidas-products/default/dw35f6c06c/zoom/F36156_01_standard.jpg?sh=600&strip=false",
//         picture5:"https://assets.adidas.com/images/w_600,f_auto,q_auto/efc2b74777524a0fa122a8250086ce3e_9366/Ultraboost_Shoes_Grey_BB6150_01_standard.jpg",
//         picture6 :"https://www.adidas.com.sg/dis/dw/image/v2/bcbs_prd/on/demandware.static/-/Sites-adidas-products/default/dw35f6c06c/zoom/F36156_01_standard.jpg?sh=600&strip=false",
//         picture7:"https://assets.adidas.com/images/w_600,f_auto,q_auto/efc2b74777524a0fa122a8250086ce3e_9366/Ultraboost_Shoes_Grey_BB6150_01_standard.jpg",
//         picture8 :"https://www.adidas.com.sg/dis/dw/image/v2/bcbs_prd/on/demandware.static/-/Sites-adidas-products/default/dw35f6c06c/zoom/F36156_01_standard.jpg?sh=600&strip=false",
//         condition:"Used",
//         category:"Shoes",
//         province:"Northwest",
//         city:"Bamenda",
//         sellername:"Banadzem Valery",
//         selleremail:"tikavalery@yahoo.com",
//         sellerphonenumber:"5102891478",
//         authorid:"5c8d4630ce79053788ba8ab2",
//         authorusername:"tikavalery",  
//     })
/////////////////////////////////////////////////////////////////////////////////////////////
//PASSPORT CONFIGURATION
//////////////////////////////////////////////////////////////////////////////////////////
app.use(require("express-session")({
    secret:"best app ever",
    resave:false,
    saveUninitialized:false
    
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser =req.user;
    next();
})

app.use(indexRoutes);
app.use(advertsRoute);


// app.listen(process.env.PORT,process.env.IP,function(){
//     console.log("server is running")
// })

app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
  
