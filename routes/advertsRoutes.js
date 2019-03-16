var express = require("express");
var router  = express.Router();
var BuyandSell = require("../models/advertsModels")

//////////////////////////////////////////////////////////////////////////////////////////////////////////
////PROVINCE DATA
//////////////////////////////////////////////////////////////////////////////////////////////////////////
     var province =["Far-North","North","Adamawa","Northwest","Southwest",
     "Littoral","Centre","West","South","East"];

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////CITY DATA
///////////////////////////////////////////////////////////////////////////////////////////////////////
   var cityData = {   farNorth :["Bogo","Dargala","Gawaza","Maroua", "Meri","Ndoukoula","Petté",
                     "Blangoua", "Darak","Fotokol","Goulfey",
                      "Hile-Alifa","Koussér","iLogone-Birni","Makary","Waza","Zina",
                     "Datcheka", "Gobo","Gueme","Guere","Kai-Kai"," Kalfou","Kay-Hay","Maga",
                     "Tchati-Bali","Wina", "Yagoua" ],
          north :["Bashéo"," Bibemi","Garoua ","Gashiga"," Lagdo ","Mayo"," Hourna",
                        " Ngong"," Pitoa"," Touroua","Beka","Poli","Poli","Figuil",
                        "Guider","Mayo-Oulo","Mandingring","Tcholliré","Touboro","Rey Bouba"],
         adamawa :["Ngaoundal","Tibati,Galim-Tignère","Mayo-Baléo","Tignère",
                       "Kontcha","Mayo-Banyo","Mbéré","Belel","Mbe","Nganha",
                       "Ngaoundéré" ,"Ngaoundéré","Nyambaka","Martap"],
        northWest :["Bali","Boyo","Njinikom","Elak-Oku","Jakiri","Kumbo",
                       "Mbiame","Nkum","Nkor","Ako","Misaje","Ndu","Nkambé","Nwa",
                        "Benakuma","Furu-Awa","Wum","Zhoa","Bafut","Bali","Bamenda",
                        "Santa","Tubah","Andek","Batibo","Mbengwi","Njikwa","Widikum",
                        "Ndop","Balikumbat","Babessi"],
        southWest :["Buea","Limbe","Muyuka","Tiko","Bangem","Tombel","Nguti","Alou",
                        "Menji","Wabane","Akwaya","Eyumojock","Upper-Bayang","Mamfe-Central",
                         "Konye","Kumba","Mbonge","Bamusso","Dikome-Balue","Ekondo-Titi",
                         "Idabato","Isanguele","Kombo-Abedimo","Kombo-Itindi","Mundemba",
                          "Toko"],
        littoral :["Baré","Bonaléa","Dibombari","Ebone","Loum","Manjo","Mbanga",
                        "Melong","Mombo","Nkongsamba","Penja","Ndobian","Nkondjock","Yabassi","Yingui","Dizangué",
                       "Dibamba","Édéa","Massock","Mouanko","Ndom","Ngambe","Ngwei","Nyanon","Pouma","Douala"],
        center :["Bibey","Lembe-Yezoum","Mbandjock","Minta","Nanga-Eboko","Nkoteng",
                     "Nsem","Batchenga","Ebebda","Elig-Mfomo","Evodoula","Lobo","Monatélé",
                     "Obala","Okola","Saa","Bafia","Bokito","Deuk","Kiiki","Kon-Yambetta",
                     "Makénéné","Ndikiniméki","Nitoukou","Ombessa","Mbangassina","Ngambè-Tikar","Ngoro",
                     "Ntui","Yoko","Afanloum","Awaé","Edzendouan","linchpin",
                     "Mfou","Nkolafamba","Olanguina","Soa","Akono","Bikok","Mbankomo",
                     "Ngoumou","Yaoundé","Biyouha","Bondjock","Bot-Makak","Dibang",
                      "Éséka","Makak","Matomb","Messondo","Ngog-Mapubi","Ngui-Bassal",
                     "Akonolinga","Ayos","Endom","Kobdombo","Mengang","Akoeman","Dzeng",
                      "Mbalmayo","Mengueme","Ngomedzap","Nkolmetet"],
       west :["Babadjou","Batcham","Galim","Mbouda","Bana","Bafang","Bafang","Bandja",
                  "Banka","Kékem","Bakou","Batche","Baham","Bamendjou","Bangou","Batié","Bayangam","Bandjoun","Demding",
                   "Dschang","Fokoué","Fongo-Tongo","Nkong-Zem","Penka-Michel","Santchou","Bafoussam","Bamougoum",
                    "Lafé-Baleng","Bangangté","Bassamba","Bazou","Tonga","Balengou","Bangourain","Foumban",
                     "Foumbot","Kouoptamo","Koutaba","Magba","Malentouen","Massangam","Njimom"],
    south :["Bengbis","Djoum","Meyomessala","Meyomessi","Mintom","Oveng","Sangmélima",
                 "Zoétélé","Biwong-Bane","Biwong-Bulu","Ebolowa","Efoulan","Mengong","Mvangane","Ngoulemakong",
                 "Akom II","Bipindi","Campo","Kribi","Lokundje","Lolodorf","Mvengue","Niete","Ambam",
                  "Ma-an","Olamze"],
    east :["Gari-Gombo","Moloundou","Salapoumbé","Yokadouma","Abong-Mbang","Angossas",
                "Atok","Dimako","Doumaintang","Doumé","Lomié","Mboma","Messamena","Messok","Mindourou",
               "Ngoyla","Nguelemendouka","Somalomo","Batouri","Kentzou","Kette","Mbang","Ndelele","Nguelebok",
                "Ouli","Bélabo","Bertoua","Bétaré-Oya","Diang","Garoua-Boulaï","Mandjou","Ngoura"] }






///////////////////////////////////////////////////////////////
//Province  route
///////////////////////////////////////////////////////////////
router.get("/province",function(req,res){
    //console.log(typeof req.params.id)
     var province =["Far-North","North","Adamawa","Northwest","Southwest",
     "Littoral","Centre","West","South","East"];
     res.render("province",{province:province})
  })  
///////////////////////////////////////////////////////////////////////////////////////
//Cities route
//////////////////////////////////////////////////////////////////////////////////////
router.get("/:province/city",function(req,res){
    //console.log( req.params.province)
     
    if (req.params.province ==="Far-North"){
        var newFarNorth = cityData.farNorth.sort();
        newFarNorth.push(req.params.province);
    res.render("towns",{cities:newFarNorth});
    } else if (req.params.province ==="North"){
         var newNorth = cityData.north.sort();
        newNorth.push(req.params.province);
       res.render("towns",{cities:newNorth}); 
    }else if (req.params.province ==="Adamawa"){
      var newAdamawa =  cityData.adamawa.sort();
        newAdamawa.push(req.params.province);
       res.render("towns",{cities:newAdamawa}); 
    } else if (req.params.province ==="Northwest"){
        var newNorthWest = cityData.northWest.sort()
        newNorthWest.push(req.params.province);
       res.render("towns",{cities:newNorthWest}); 
    } else if (req.params.province ==="Southwest"){
     var    newSouthWest = cityData.southWest.sort()
        newSouthWest.push(req.params.province);
       res.render("towns",{cities:newSouthWest}); 
    } else if (req.params.province ==="Littoral"){
        var newLitoral = cityData.littoral.sort()
        newLitoral.push(req.params.province);
       res.render("towns",{cities:newLitoral}); 
    } else if (req.params.province ==="Centre"){
        var newCenter = cityData.center.sort()
        newCenter.push(req.params.province);
       res.render("towns",{cities:newCenter}); 
    }else if (req.params.province ==="West"){
     var newWest = cityData.west.sort()
        newWest.push(req.params.province);
       res.render("towns",{cities:newWest}); 
    }else if (req.params.province ==="South"){
        var newSouth = cityData.south.sort()
        newSouth.push(req.params.province);
       res.render("towns",{cities:newSouth}); 
    }else if (req.params.province ==="East"){
     var newEast =cityData.east.sort()
        newEast.push(req.params.province);
       res.render("towns",{cities:newEast}); 
    }
  })  
///////////////////////////////////////////////////////////////////////////////////////
//Category route
//////////////////////////////////////////////////////////////////////////////////////  
  
router.get("/:province/:city/category",function(req,res){
   //storing the province and city into a variable to push to the category variable 
  var province = req.params.province;
  var city = req.params.city;
  
 var category=["funiture","cars","cloths","cosmetics","bycicles","Cars","Books",
 "Jewelry","Houses and Land",
 "Parts","Electronics","Equipment","Households","Toys","Tools", " Services","Wanted",
 "Others","Shoes"]
 
 category.push(province);
 category.push(city);
 
          res.render("category",{category:category});
    
  
})
///////////////////////////////////////////////////////////////
//Display all  Items in a specific city and category
///////////////////////////////////////////////////////////////
router.get("/:province/:city/:category",function(req,res){
    
    var province= req.params.province;
    var city = req.params.city;
    var category = req.params.category ;
    
 BuyandSell.find({category: category, city: city,},function(err,items){
      if(err){
          console.log("ERROR")
      }else{

          res.render("index",{items:items,currentUser:req.user});
      }
  })
})
////////////////////////////////////////////////////////////////////
//NEW ROUTE --- DISPLAYS FORM 
///////////////////////////////////////////////////////////////////
router.get("/buyandsell/addNewItem",isLoggedIn, function(req,res){
          res.render("addNewItem",{citydata:cityData,province:province});
})
///////////////////////////////////////////////////////////////////////////
//CREATE ROUTE 
///////////////////////////////////////////////////////////////////////////
router.post("/items",isLoggedIn,function(req,res){
//EXTRACTING username and id and putting it inside the req.body 
var advertinfo =req.body.item;
advertinfo.authorid =req.user._id,
advertinfo.authorusername =req.user.username

// var author ={
//     id : req.user._id,
//     username :req.user.username
// }
 

BuyandSell.create(advertinfo,function(err,newItem){
   console.log(newItem)
    if(err){
        res.render("addNewItem");
    }else{
        res.redirect("/profile");
    }
});
});
///////////////////////////////////////////////////////////////////////////////////////////
///////////SHOW ROUTE
///////////////////////////////////////////////////////////////////////////////////////////

router.get("/items/:id",function(req,res){
    //console.log(req.params.id);
    BuyandSell.findById(req.params.id,function(err,founditem){
       //console.log(founditem);
        if(err){
            res.redirect("/items");
        }else{
            res.render("showMoreInfo",{oneitem:founditem});
        }
     })
})

///////////////////////////////////////////////////////////////////////////////////////////
///////////Edit ROUTE
///////////////////////////////////////////////////////////////////////////

router.get("/buyandsell/items/:id/edit",function(req,res){
 BuyandSell.findById(req.params.id,function(err,foundItem){
     if(err){
         res.redirect("/items");
     }else{
        res.render("edit",{editItem:foundItem,citydata:cityData,province:province});  
     }
 });
})
////EJS CODE FOR EDITING AND DELETING


//////////////////////////////////////////////////////////////////////////////////////////
// UPDATE ROUTE
/////////////////////////////////////////////////////////////////////////////////////////
router.put("/items/:id",function(req,res){
BuyandSell.findByIdAndUpdate(req.params.id,req.body.item,function(err,updatedItem){
    if(err){
        res.redirect("/items");
    }else{
        res.redirect("/items/"+ req.params.id);
    }
});
});

router.delete("/items/:id",function(req,res){
    
   
BuyandSell.findByIdAndRemove(req.params.id,function(err){
    if(err){
        res.redirect("/items")
    }else{
        res.redirect("/items")
    }
})
})

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/login")
    }

module.exports = router
