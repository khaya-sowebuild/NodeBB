!function(s){"object"==typeof module&&module.exports?module.exports=s():"function"==typeof define&&define.amd&&define(s)}(function(){function r(s,t,o,e,p){return'<div class="card" style="border-color: '+s.__escape(o(t&&t.bgColor))+'">\r\n\t'+r.blocks.posts(s,t,o,e,p)+"\r\n\r\n\t"+(o(t&&t.posts&&t.posts.length)?"":'\r\n\t<div component="category/posts">\r\n\t\t<div class="post-content">\r\n\t\t\t[[category:no_new_posts]]\r\n\t\t</div>\r\n\t</div>\r\n\t')+"\r\n</div>\r\n"}return r.blocks={posts:function(o,e,p,s){return s(p(e&&e.posts),function(s,t){return"\r\n\t"+(0===t?'\r\n\t<div component="category/posts">\r\n\t\t<p>\r\n\t\t\t<a href="'+o.__escape(p(e&&e.config&&e.config.relative_path))+"/user/"+o.__escape(p(e&&e.posts&&e.posts[s]&&e.posts[s].user&&e.posts[s].user.userslug))+'">\r\n\t\t\t\t'+(p(e&&e.posts&&e.posts[s]&&e.posts[s].user&&e.posts[s].user.picture)?'\r\n\t\t\t\t<img class="user-img" title="'+o.__escape(p(e&&e.posts&&e.posts[s]&&e.posts[s].user&&e.posts[s].user.username))+'" alt="'+o.__escape(p(e&&e.posts&&e.posts[s]&&e.posts[s].user&&e.posts[s].user.username))+'" src="'+o.__escape(p(e&&e.posts&&e.posts[s]&&e.posts[s].user&&e.posts[s].user.picture))+'">\r\n\t\t\t\t':'\r\n\t\t\t\t<span class="user-icon user-img" title="'+o.__escape(p(e&&e.posts&&e.posts[s]&&e.posts[s].user&&e.posts[s].user.username))+'" style="background-color: '+o.__escape(p(e&&e.posts&&e.posts[s]&&e.posts[s].user&&e.posts[s].user["icon:bgColor"]))+';">'+o.__escape(p(e&&e.posts&&e.posts[s]&&e.posts[s].user&&e.posts[s].user["icon:text"]))+"</span>\r\n\t\t\t\t")+'\r\n\t\t\t</a>\r\n\t\t\t<a class="permalink" href="'+o.__escape(p(e&&e.config&&e.config.relative_path))+"/topic/"+o.__escape(p(e&&e.posts&&e.posts[s]&&e.posts[s].topic&&e.posts[s].topic.slug))+(p(e&&e.posts&&e.posts[s]&&e.posts[s].index)?"/"+o.__escape(p(e&&e.posts&&e.posts[s]&&e.posts[s].index)):"")+'">\r\n\t\t\t\t<small class="timeago" title="'+o.__escape(p(e&&e.posts&&e.posts[s]&&e.posts[s].timestampISO))+'"></small>\r\n\t\t\t</a>\r\n\t\t</p>\r\n\t\t<div class="post-content">\r\n\t\t\t'+o.__escape(p(e&&e.posts&&e.posts[s]&&e.posts[s].content))+"\r\n\t\t</div>\r\n\t</div>\r\n\t":"")+"\r\n\t"})}},r});