!function(s){"object"==typeof module&&module.exports?module.exports=s():"function"==typeof define&&define.amd&&define(s)}(function(){return function(t,e,p,s,o){return s(p(e&&e.posts),function(s){return'\r\n<li data-pid="'+t.__escape(p(e&&e.posts&&e.posts[s]&&e.posts[s].pid))+'" class="clearfix widget-posts">\r\n\t<a href="'+(p(e&&e.posts&&e.posts[s]&&e.posts[s].user&&e.posts[s].user.userslug)?t.__escape(p(e&&e.relative_path))+"/user/"+t.__escape(p(e&&e.posts&&e.posts[s]&&e.posts[s].user&&e.posts[s].user.userslug)):"#")+'">\r\n\r\n\t\t'+(p(e&&e.posts&&e.posts[s]&&e.posts[s].user&&e.posts[s].user.picture)?'\r\n\t\t<img title="'+t.__escape(p(e&&e.posts&&e.posts[s]&&e.posts[s].user&&e.posts[s].user.username))+'" class="avatar avatar-sm not-responsive" src="'+t.__escape(p(e&&e.posts&&e.posts[s]&&e.posts[s].user&&e.posts[s].user.picture))+'" />\r\n\t\t':'\r\n\t\t<div title="'+t.__escape(p(e&&e.posts&&e.posts[s]&&e.posts[s].user&&e.posts[s].user.username))+'" class="avatar avatar-sm not-responsive" style="background-color: '+t.__escape(p(e&&e.posts&&e.posts[s]&&e.posts[s].user&&e.posts[s].user["icon:bgColor"]))+';">'+t.__escape(p(e&&e.posts&&e.posts[s]&&e.posts[s].user&&e.posts[s].user["icon:text"]))+"</div>\r\n\t\t")+"\r\n\t</a>\r\n\t<div>\r\n\t\t"+t.__escape(p(e&&e.posts&&e.posts[s]&&e.posts[s].content))+'\r\n\t\t<p class="fade-out"></p>\r\n\t</div>\r\n\t<span class="pull-right post-preview-footer">\r\n\t\t<span class="timeago" title="'+t.__escape(p(e&&e.posts&&e.posts[s]&&e.posts[s].timestampISO))+'"></span> &bull;\r\n\t\t<a href="'+t.__escape(p(e&&e.relative_path))+"/post/"+t.__escape(p(e&&e.posts&&e.posts[s]&&e.posts[s].pid))+'">[[global:read_more]]</a>\r\n\t</span>\r\n</li>\r\n'})}});