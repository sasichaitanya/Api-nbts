var registerCtrl = require("./registerCtrl.js");

function registerRoute (app){
    app.get("/register",registerCtrl.get);
    app.post("/nkart/api/register",registerCtrl.post);
    app.get("/login",registerCtrl.login);
    app.post("/nkart/api/login",registerCtrl.authenticate);
    app.get("/nkart/api/getprofiles",registerCtrl.getprofile);
    app.get("/nkart/api/getprofiles/:id",registerCtrl.getprofileById);
}

module.exports= registerRoute;