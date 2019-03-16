var express = require("express");
var router  = express.Router();
var passport = require("passport");
var User   = require("../models/user");
var BuyandSell = require("../models/advertsModels")

//////////////////////////////////////////////////////////////////////////////////////////////
//Index route
////////////////////////////////////////////////////////////////////////////////////////////////////
router.get("/",function(req,res){
          res.render("home");
  })
  
////====================================================================================
////AUTHENTICATION ROUTES
////==========================================================================================
/// ShOW REGISTRATION FORM
router.get("/register",function(req,res){
    res.render("register");
})
//// ROUTE TO HANDLE SIGN UP LOGIC
router.post("/register",function(req,res){
    var newUser = new User({username: req.body.username});
   User.register(newUser, req.body.password,function(err,user){
       if (err){
           console.log(err);
           return res.render("register");
       }
       passport.authenticate("local")(req,res,function(){
           res.redirect("/profile");
       });
   });
});
// SHOW LOGIN FORM
router.get("/login",function(req,res){
    res.render("login");
})
// ROUTE FOR HANDING LOGIN LOGIS
router.post("/login",passport.authenticate("local",
{
    successRedirect:"/profile",
    failureRedirect:"/login"
}),function(req,res){
   console.log("thank you");
})
// ROUTE TO DISPLAY SELLER PROFILE PAGE
router.get("/profile",isLoggedIn,function(req,res){
   console.log( req.user.username)
   console.log( req.user.phonenumber)
    BuyandSell.find({authorusername:req.user.username },function(err,selleritem){
      //console.log(selleritem);
        if(err){
            res.redirect("/");
        }else{
           // res.render("profile",{selleritem:selleritem});
        }
       res.render("profile",{selleritem:selleritem});  
     })
   // res.render("profile",{selleritem:selleritem});
})

router.get("/selleritem/items/:id",function(req,res){
    //console.log(req.params.id);
    BuyandSell.findById(req.params.id,function(err,founditem){
       //console.log(founditem);
        if(err){
            res.redirect("/items");
        }else{
            res.render("sellerMoreInfo",{oneitem:founditem});
        }
     })
})

/// lOGOUT ROUTE
router.get("/logout",function(req,res){
    req.logout()
    res.redirect("/")
})

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/login")
    }
    
module.exports = router