const Users = require('../models/users');
const path = require('path');

exports.mainPage = function(req,res) {
    res.sendFile(path.join(__dirname+'/../../public/html/bougainvilleIndex.html'));
}
exports.contactPage = function(req,res){
    res.sendFile(path.join(__dirname+'/../../public/html/contact.html'));
}
exports.fragmentsPage = function(req,res){
    res.sendFile(path.join(__dirname+'/../../public/html/fragments.html'));
}
exports.shopPage = function(req,res){
    res.sendFile(path.join(__dirname+'/../../public/html/shop.html'));
}
exports.timelinePage = function(req,res){
    res.sendFile(path.join(__dirname+'/../../public/html/timeline.html'));
}
exports.resumePage = function(req,res){
    res.sendFile(path.join(__dirname+'/../../public/html/resume.html'));
}
exports.subscribePage = function(req,res){
    res.sendFile(path.join(__dirname+'/../../public/html/subscribe.html'));
}
exports.connectPage = function(req,res){
    res.sendFile(path.join(__dirname+'/../../public/html/connect.html'));
}
exports.profilPage = function(req,res){
    res.sendFile(path.join(__dirname+'/../../public/html/profil/:id.html'));
}