!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function p(t,s,e,r,i){return'<div class="recent-replies">\r\n\t<ul class="suggested-topics">\r\n\t'+p.blocks.topics(t,s,e,r,i)+"\r\n\t</ul>\r\n</div>\r\n\r\n<script>\r\n'use strict';\r\n/* globals app*/\r\n\r\nif (window.jQuery) {\r\n\tapp.createUserTooltips();\r\n} else {\r\n\twindow.addEventListener('load', app.createUserTooltips);\r\n}\r\n<\/script>\r\n"}return p.blocks={topics:function(s,e,r,t){return t(r(e&&e.topics),function(t){return'\r\n<li class="clearfix widget-topics">\r\n\t<a href="'+(r(e&&e.topics&&e.topics[t]&&e.topics[t].user&&e.topics[t].user.userslug)?s.__escape(r(e&&e.relative_path))+"/user/"+s.__escape(r(e&&e.topics&&e.topics[t]&&e.topics[t].user&&e.topics[t].user.userslug)):"#")+'">\r\n\t\t'+(r(e&&e.topics&&e.topics[t]&&e.topics[t].user&&e.topics[t].user.picture)?'\r\n\t\t<img title="'+s.__escape(r(e&&e.topics&&e.topics[t]&&e.topics[t].user&&e.topics[t].user.username))+'" class="avatar avatar-sm not-responsive" src="'+s.__escape(r(e&&e.topics&&e.topics[t]&&e.topics[t].user&&e.topics[t].user.picture))+'" />\r\n\t\t':'\r\n\t\t<div title="'+s.__escape(r(e&&e.topics&&e.topics[t]&&e.topics[t].user&&e.topics[t].user.username))+'" class="avatar avatar-sm not-responsive" style="background-color: '+s.__escape(r(e&&e.topics&&e.topics[t]&&e.topics[t].user&&e.topics[t].user["icon:bgColor"]))+';">'+s.__escape(r(e&&e.topics&&e.topics[t]&&e.topics[t].user&&e.topics[t].user["icon:text"]))+"</div>\r\n\t\t")+'\r\n\t</a>\r\n\r\n\t<p>\r\n\t\t<a href="'+s.__escape(r(e&&e.relative_path))+"/topic/"+s.__escape(r(e&&e.topics&&e.topics[t]&&e.topics[t].slug))+'">'+s.__escape(r(e&&e.topics&&e.topics[t]&&e.topics[t].title))+'</a>\r\n\t</p>\r\n\t<span class="pull-right post-preview-footer">\r\n\t\t<span class="timeago" title="'+s.__escape(r(e&&e.topics&&e.topics[t]&&e.topics[t].lastposttimeISO))+'"></span>\r\n\t</span>\r\n</li>\r\n'})}},p});