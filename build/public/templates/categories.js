!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function a(t,e,s,r,o){return(s(e&&e.breadcrumbs&&e.breadcrumbs.length)?'\r\n<ol class="breadcrumb">\r\n\t'+a.blocks.breadcrumbs(t,e,s,r,o)+"\r\n</ol>\r\n":"")+'\r\n<div widget-area="header">\r\n\t'+a.blocks["widgets.header"](t,e,s,r,o)+'\r\n</div>\r\n<div class="row">\r\n\t<div class="'+(s(e&&e.widgets&&e.widgets.sidebar&&e.widgets.sidebar.length)?"col-lg-9 col-sm-12":"col-lg-12")+'">\r\n\t\t<h1 class="categories-title">[[pages:categories]]</h1>\r\n\t\t<ul class="categories" itemscope itemtype="http://www.schema.org/ItemList">\r\n\t\t\t'+a.blocks.categories(t,e,s,r,o)+'\r\n\t\t</ul>\r\n\t</div>\r\n\t<div widget-area="sidebar" class="col-lg-3 col-sm-12 '+(s(e&&e.widgets&&e.widgets.sidebar&&e.widgets.sidebar.length)?"":"hidden")+'">\r\n\t\t'+a.blocks["widgets.sidebar"](t,e,s,r,o)+'\r\n\t</div>\r\n</div>\r\n<div widget-area="footer">\r\n\t'+a.blocks["widgets.footer"](t,e,s,r,o)+"\r\n</div>\r\n"}return a.blocks={"widgets.footer":function(t,e,s,r){return r(s(e&&e.widgets&&e.widgets.footer),function(t){return"\r\n\t"+s(e&&e.widgets&&e.widgets.footer&&e.widgets.footer[t]&&e.widgets.footer[t].html)+"\r\n\t"})},"widgets.sidebar":function(t,e,s,r){return r(s(e&&e.widgets&&e.widgets.sidebar),function(t){return"\r\n\t\t"+s(e&&e.widgets&&e.widgets.sidebar&&e.widgets.sidebar[t]&&e.widgets.sidebar[t].html)+"\r\n\t\t"})},categories:function(r,o,a,t,e){return t(a(o&&o.categories),function(s){return'\r\n\t\t\t<li component="categories/category" data-cid="'+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].cid))+'" data-numRecentReplies="1" class="row clearfix">\r\n\t<meta itemprop="name" content="'+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].name))+'">\r\n\r\n\t<div class="content col-xs-12 '+(a(o&&o.config&&o.config.hideCategoryLastPost)?"col-md-10 col-sm-12":"col-md-7 col-sm-9")+'">\r\n\t\t<div class="icon pull-left" style="'+r.__escape(e(o,r,"generateCategoryBackground",[a(o&&o.categories&&o.categories[s])]))+'">\r\n\t\t\t<i class="fa fa-fw '+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].icon))+'"></i>\r\n\t\t</div>\r\n\r\n\t\t<h2 class="title">\r\n\t\t\t'+(a(o&&o.categories&&o.categories[s]&&o.categories[s].isSection)?"\r\n"+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].name))+"\r\n":"\r\n"+(a(o&&o.categories&&o.categories[s]&&o.categories[s].link)?'\r\n<a href="'+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].link))+'" itemprop="url">\r\n':'\r\n<a href="'+r.__escape(a(o&&o.config&&o.config.relative_path))+"/category/"+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].slug))+'" itemprop="url">\r\n')+"\r\n"+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].name))+"\r\n</a>\r\n")+"\r\n\t\t</h2>\r\n\t\t<div>\r\n\t\t\t"+(a(o&&o.categories&&o.categories[s]&&o.categories[s].descriptionParsed)?'\r\n\t\t\t<div class="description">\r\n\t\t\t\t'+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].descriptionParsed))+"\r\n\t\t\t</div>\r\n\t\t\t":"")+"\r\n\t\t\t"+(a(o&&o.config&&o.config.hideSubCategories)?"":"\r\n\t\t\t"+r.__escape(e(o,r,"generateChildrenCategories",[a(o&&o.categories&&o.categories[s])]))+"\r\n\t\t\t")+'\r\n\t\t</div>\r\n\t\t<span class="visible-xs pull-right">\r\n\t\t\t'+(a(o&&o.categories&&o.categories[s]&&o.categories[s].teaser&&o.categories[s].teaser.timestampISO)?'\r\n\t\t\t<a class="permalink" href="'+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].teaser&&o.categories[s].teaser.url))+'">\r\n\t\t\t\t<small class="timeago" title="'+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].teaser&&o.categories[s].teaser.timestampISO))+'"></small>\r\n\t\t\t</a>\r\n\t\t\t':"")+"\r\n\t\t</span>\r\n\t</div>\r\n\r\n\t"+(a(o&&o.categories&&o.categories[s]&&o.categories[s].link)?"":'\r\n\t<div class="col-md-1 hidden-sm hidden-xs stats">\r\n\t\t<span class="'+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s]["unread-class"]))+' human-readable-number" title="'+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].totalTopicCount))+'">'+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].totalTopicCount))+'</span><br />\r\n\t\t<small>[[global:topics]]</small>\r\n\t</div>\r\n\t<div class="col-md-1 hidden-sm hidden-xs stats">\r\n\t\t<span class="'+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s]["unread-class"]))+' human-readable-number" title="'+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].totalPostCount))+'">'+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].totalPostCount))+"</span><br />\r\n\t\t<small>[[global:posts]]</small>\r\n\t</div>\r\n\t"+(a(o&&o.config&&o.config.hideCategoryLastPost)?"":'\r\n\t<div class="col-md-3 col-sm-3 teaser hidden-xs" component="topic/teaser">\r\n\t\t<div class="card" style="border-color: '+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].bgColor))+'">\r\n\t'+(a(o&&o.categories&&o.categories[s]&&o.categories[s].posts)?t(a(o&&o.categories&&o.categories[s]&&o.categories[s].posts),function(t,e){return"\r\n\t"+(0===e?'\r\n\t<div component="category/posts">\r\n\t\t<p>\r\n\t\t\t<a href="'+r.__escape(a(o&&o.config&&o.config.relative_path))+"/user/"+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].posts&&o.categories[s].posts[t]&&o.categories[s].posts[t].user&&o.categories[s].posts[t].user.userslug))+'">\r\n\t\t\t\t'+(a(o&&o.categories&&o.categories[s]&&o.categories[s].posts&&o.categories[s].posts[t]&&o.categories[s].posts[t].user&&o.categories[s].posts[t].user.picture)?'\r\n\t\t\t\t<img class="user-img" title="'+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].posts&&o.categories[s].posts[t]&&o.categories[s].posts[t].user&&o.categories[s].posts[t].user.username))+'" alt="'+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].posts&&o.categories[s].posts[t]&&o.categories[s].posts[t].user&&o.categories[s].posts[t].user.username))+'" src="'+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].posts&&o.categories[s].posts[t]&&o.categories[s].posts[t].user&&o.categories[s].posts[t].user.picture))+'">\r\n\t\t\t\t':'\r\n\t\t\t\t<span class="user-icon user-img" title="'+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].posts&&o.categories[s].posts[t]&&o.categories[s].posts[t].user&&o.categories[s].posts[t].user.username))+'" style="background-color: '+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].posts&&o.categories[s].posts[t]&&o.categories[s].posts[t].user&&o.categories[s].posts[t].user["icon:bgColor"]))+';">'+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].posts&&o.categories[s].posts[t]&&o.categories[s].posts[t].user&&o.categories[s].posts[t].user["icon:text"]))+"</span>\r\n\t\t\t\t")+'\r\n\t\t\t</a>\r\n\t\t\t<a class="permalink" href="'+r.__escape(a(o&&o.config&&o.config.relative_path))+"/topic/"+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].posts&&o.categories[s].posts[t]&&o.categories[s].posts[t].topic&&o.categories[s].posts[t].topic.slug))+(a(o&&o.categories&&o.categories[s]&&o.categories[s].posts&&o.categories[s].posts[t]&&o.categories[s].posts[t].index)?"/"+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].posts&&o.categories[s].posts[t]&&o.categories[s].posts[t].index)):"")+'">\r\n\t\t\t\t<small class="timeago" title="'+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].posts&&o.categories[s].posts[t]&&o.categories[s].posts[t].timestampISO))+'"></small>\r\n\t\t\t</a>\r\n\t\t</p>\r\n\t\t<div class="post-content">\r\n\t\t\t'+r.__escape(a(o&&o.categories&&o.categories[s]&&o.categories[s].posts&&o.categories[s].posts[t]&&o.categories[s].posts[t].content))+"\r\n\t\t</div>\r\n\t</div>\r\n\t":"")+"\r\n\t"}):t(a(o&&o.posts),function(t,e){return"\r\n\t"+(0===e?'\r\n\t<div component="category/posts">\r\n\t\t<p>\r\n\t\t\t<a href="'+r.__escape(a(o&&o.config&&o.config.relative_path))+"/user/"+r.__escape(a(o&&o.posts&&o.posts[t]&&o.posts[t].user&&o.posts[t].user.userslug))+'">\r\n\t\t\t\t'+(a(o&&o.posts&&o.posts[t]&&o.posts[t].user&&o.posts[t].user.picture)?'\r\n\t\t\t\t<img class="user-img" title="'+r.__escape(a(o&&o.posts&&o.posts[t]&&o.posts[t].user&&o.posts[t].user.username))+'" alt="'+r.__escape(a(o&&o.posts&&o.posts[t]&&o.posts[t].user&&o.posts[t].user.username))+'" src="'+r.__escape(a(o&&o.posts&&o.posts[t]&&o.posts[t].user&&o.posts[t].user.picture))+'">\r\n\t\t\t\t':'\r\n\t\t\t\t<span class="user-icon user-img" title="'+r.__escape(a(o&&o.posts&&o.posts[t]&&o.posts[t].user&&o.posts[t].user.username))+'" style="background-color: '+r.__escape(a(o&&o.posts&&o.posts[t]&&o.posts[t].user&&o.posts[t].user["icon:bgColor"]))+';">'+r.__escape(a(o&&o.posts&&o.posts[t]&&o.posts[t].user&&o.posts[t].user["icon:text"]))+"</span>\r\n\t\t\t\t")+'\r\n\t\t\t</a>\r\n\t\t\t<a class="permalink" href="'+r.__escape(a(o&&o.config&&o.config.relative_path))+"/topic/"+r.__escape(a(o&&o.posts&&o.posts[t]&&o.posts[t].topic&&o.posts[t].topic.slug))+(a(o&&o.posts&&o.posts[t]&&o.posts[t].index)?"/"+r.__escape(a(o&&o.posts&&o.posts[t]&&o.posts[t].index)):"")+'">\r\n\t\t\t\t<small class="timeago" title="'+r.__escape(a(o&&o.posts&&o.posts[t]&&o.posts[t].timestampISO))+'"></small>\r\n\t\t\t</a>\r\n\t\t</p>\r\n\t\t<div class="post-content">\r\n\t\t\t'+r.__escape(a(o&&o.posts&&o.posts[t]&&o.posts[t].content))+"\r\n\t\t</div>\r\n\t</div>\r\n\t":"")+"\r\n\t"}))+"\r\n\r\n\t"+(a(o&&o.categories&&o.categories[s]&&o.categories[s].posts&&o.categories[s].posts.length)?"":'\r\n\t<div component="category/posts">\r\n\t\t<div class="post-content">\r\n\t\t\t[[category:no_new_posts]]\r\n\t\t</div>\r\n\t</div>\r\n\t')+"\r\n</div>\r\n\r\n\t</div>\r\n\t")+"\r\n\t")+"\r\n</li>\r\n\r\n\t\t\t"})},"widgets.header":function(t,e,s,r){return r(s(e&&e.widgets&&e.widgets.header),function(t){return"\r\n\t"+s(e&&e.widgets&&e.widgets.header&&e.widgets.header[t]&&e.widgets.header[t].html)+"\r\n\t"})},breadcrumbs:function(r,o,a,t){return t(a(o&&o.breadcrumbs),function(t,e,s){return"\r\n\t<li"+(e===s-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" '+(e===s-1?'class="active"':"")+">\r\n\t\t"+(e!==s-1?'<a href="'+r.__escape(a(o&&o.breadcrumbs&&o.breadcrumbs[t]&&o.breadcrumbs[t].url))+'" itemprop="url">':"")+'\r\n\t\t\t<span itemprop="title">\r\n\t\t\t\t'+r.__escape(a(o&&o.breadcrumbs&&o.breadcrumbs[t]&&o.breadcrumbs[t].text))+"\r\n\t\t\t\t"+(e===s-1?"\r\n\t\t\t\t"+(a(o&&o["feeds:disableRSS"])?"":"\r\n\t\t\t\t"+(a(o&&o.rssFeedUrl)?'<a target="_blank" href="'+r.__escape(a(o&&o.rssFeedUrl))+'"><i class="fa fa-rss-square"></i></a>':""))+"\r\n\t\t\t\t":"")+"\r\n\t\t\t</span>\r\n\t\t"+(e!==s-1?"</a>":"")+"\r\n\t</li>\r\n\t"})}},a});