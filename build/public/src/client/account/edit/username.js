"use strict";define("forum/account/edit/username",["forum/account/header"],function(e){var r={};r.init=function(){e.init();$("#submitBtn").on("click",function e(){var r={uid:$("#inputUID").val(),username:$("#inputNewUsername").val(),password:$("#inputCurrentPassword").val()};if(!r.username){return}if(r.username===r.password){return app.alertError("[[user:username_same_as_password]]")}var a=$(this);a.addClass("disabled").find("i").removeClass("hide");socket.emit("user.changeUsernameEmail",r,function(e,n){a.removeClass("disabled").find("i").addClass("hide");if(e){return app.alertError(e.message)}var t=utils.slugify(r.username);if(r.username&&t&&parseInt(r.uid,10)===parseInt(app.user.uid,10)){$('[component="header/profilelink"]').attr("href",config.relative_path+"/user/"+t);$('[component="header/profilelink/edit"]').attr("href",config.relative_path+"/user/"+t+"/edit");$('[component="header/profilelink/settings"]').attr("href",config.relative_path+"/user/"+t+"/settings");$('[component="header/username"]').text(r.username);$('[component="header/usericon"]').css("background-color",n["icon:bgColor"]).text(n["icon:text"])}ajaxify.go("user/"+t+"/edit")});return false})};return r});
//# sourceMappingURL=public/src/client/account/edit/username.js.map