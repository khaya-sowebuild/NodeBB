!function(e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd&&define(e)}(function(){return function(e,t,n,s,a){return'<h1 class="text-center">[[pages:maintenance.text, '+e.__escape(n(t&&t.site_title))+']]</h1>\r\n<h2 class="text-center"><i class="fa fa-wrench fa-3x"></i></h2>\r\n'+(n(t&&t.message)?'\r\n<div class="row maintenance">\r\n\t<div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">\r\n\t\t<p class="lead text-center">[[pages:maintenance.messageIntro]]</p>\r\n\t\t<div class="well">\r\n\t\t\t'+e.__escape(n(t&&t.message))+"\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n":"")}});