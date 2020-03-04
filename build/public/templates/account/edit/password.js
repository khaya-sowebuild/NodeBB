!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function n(t,r,e,a,s){return'<div class="account">\r\n\t'+(e(r&&r.breadcrumbs&&r.breadcrumbs.length)?'\r\n<ol class="breadcrumb">\r\n\t'+n.blocks.breadcrumbs(t,r,e,a,s)+"\r\n</ol>\r\n":"")+'\r\n\r\n<div class="cover" component="account/cover" style="background-image: url('+t.__escape(e(r&&r["cover:url"]))+"); background-position: "+t.__escape(e(r&&r["cover:position"]))+';">\r\n\t<div class="avatar-wrapper" data-uid="'+t.__escape(e(r&&r.uid))+'">\r\n\t\t'+(e(r&&r.picture)?'\r\n\t\t<img src="'+t.__escape(e(r&&r.picture))+'" class="avatar avatar-xl avatar-rounded" />\r\n\t\t':'\r\n\t\t<div class="avatar avatar-xl avatar-rounded" style="background-color: '+t.__escape(e(r&&r["icon:bgColor"]))+';" title="'+t.__escape(e(r&&r.username))+'">'+t.__escape(e(r&&r["icon:text"]))+"</div>\r\n\t\t")+'\r\n\t\t<i component="user/status" class="fa fa-circle status '+t.__escape(e(r&&r.status))+'" title="[[global:'+t.__escape(e(r&&r.status))+']]"></i>\r\n\r\n\t\t'+(e(r&&r.loggedIn)?"\r\n\t\t"+(e(r&&r.isSelf)?"":'\r\n\t\t<button class="btn-morph fab '+(e(r&&r.isFollowing)?"heart":"plus")+(e(r&&r.banned)?" hide":"")+'" title="'+(e(r&&r.isFollowing)?"[[global:unfollow]]":"[[global:follow]]")+'">\r\n\t\t\t<span>\r\n\t\t\t\t<span class="s1"></span>\r\n\t\t\t\t<span class="s2"></span>\r\n\t\t\t\t<span class="s3"></span>\r\n\t\t\t</span>\r\n\t\t</button>\r\n\t\t')+"\r\n\t\t":"")+'\r\n\t</div>\r\n\r\n\t<div class="container">\r\n\t\t<div class="btn-group account-fab bottom-sheet">\r\n\t<button type="button" class="fab dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\r\n\t\t<i class="fa fa-ellipsis-v"></i>\r\n\t</button>\r\n\t<ul class="dropdown-menu dropdown-menu-right">\r\n\t\t'+(e(r&&r.isSelf)?"":"\r\n\t\t"+(e(r&&r.banned)?"":"\r\n\t\t"+(e(r&&r.config&&r.config.disableChat)?"":'\r\n\t\t<li class="'+(e(r&&r.hasPrivateChat)?"":"hidden")+'">\r\n\t\t\t<a component="account/chat" href="#">[[user:chat_with, '+t.__escape(e(r&&r.username))+']]</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component="account/new-chat" href="#">[[user:new_chat_with, '+t.__escape(e(r&&r.username))+"]]</a>\r\n\t\t</li>\r\n\t\t")+'\r\n\t\t<li>\r\n\t\t\t<a component="account/flag" href="#">[[user:flag-profile]]</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component="account/block" href="#">'+(e(r&&r.isBlocked)?"[[user:unblock_user]]":"[[user:block_user]]")+'</a>\r\n\t\t</li>\r\n\t\t<li class="divider"></li>\r\n\t\t')+"\r\n\t\t")+'\r\n\t\t<li>\r\n\t\t\t<a href="'+t.__escape(e(r&&r.config&&r.config.relative_path))+"/user/"+t.__escape(e(r&&r.userslug))+'" class="inline-block" id="profile">[[user:profile]]</a>\r\n\t\t</li>\r\n\t\t'+(e(r&&r.showHidden)?'\r\n\t\t<li><a href="'+t.__escape(e(r&&r.config&&r.config.relative_path))+"/user/"+t.__escape(e(r&&r.userslug))+'/edit">[[user:edit]]</a></li>\r\n\t\t<li><a href="'+t.__escape(e(r&&r.config&&r.config.relative_path))+"/user/"+t.__escape(e(r&&r.userslug))+'/settings">[[user:settings]]</a></li>\r\n\t\t':"")+"\r\n\r\n\t\t"+(e(r&&r.isSelf)?"":"\r\n\t\t"+(e(r&&r.canBan)?'\r\n\t\t<li class="'+(e(r&&r.banned)?"hide":"")+'">\r\n\t\t\t<a component="account/ban" href="#">[[user:ban_account]]</a>\r\n\t\t</li>\r\n\t\t<li class="'+(e(r&&r.banned)?"":"hide")+'">\r\n\t\t\t<a component="account/unban" href="#">[[user:unban_account]]</a>\r\n\t\t</li>\r\n\t\t':"")+"\r\n\t\t"+(e(r&&r.isAdmin)?'\r\n\t\t<li>\r\n\t\t\t<a component="account/delete" href="#" class="">[[user:delete_account]]</a>\r\n\t\t</li>\r\n\t\t':"")+"\r\n\t\t")+'\r\n\r\n\t\t<li class="divider"></li>\r\n\t\t<li><a href="'+t.__escape(e(r&&r.config&&r.config.relative_path))+"/user/"+t.__escape(e(r&&r.userslug))+'/following">[[user:following]]</a></li>\r\n\t\t<li><a href="'+t.__escape(e(r&&r.config&&r.config.relative_path))+"/user/"+t.__escape(e(r&&r.userslug))+'/followers">[[user:followers]]</a></li>\r\n\t\t'+(e(r&&r.showHidden)?'\r\n\t\t<li><a href="'+t.__escape(e(r&&r.config&&r.config.relative_path))+"/user/"+t.__escape(e(r&&r.userslug))+'/blocks">[[user:blocks]]</a></li>\r\n\t\t':"")+'\r\n\t\t<li class="divider"></li>\r\n\t\t<li><a href="'+t.__escape(e(r&&r.config&&r.config.relative_path))+"/user/"+t.__escape(e(r&&r.userslug))+'/topics">[[global:topics]]</a></li>\r\n\t\t<li><a href="'+t.__escape(e(r&&r.config&&r.config.relative_path))+"/user/"+t.__escape(e(r&&r.userslug))+'/posts">[[global:posts]]</a></li>\r\n\t\t'+(e(r&&r["reputation:disabled"])?"":'\r\n\t\t<li><a href="'+t.__escape(e(r&&r.config&&r.config.relative_path))+"/user/"+t.__escape(e(r&&r.userslug))+'/best">[[global:best]]</a></li>\r\n\t\t')+'\r\n\t\t<li><a href="'+t.__escape(e(r&&r.config&&r.config.relative_path))+"/user/"+t.__escape(e(r&&r.userslug))+'/groups">[[global:header.groups]]</a></li>\r\n\r\n\t\t'+(e(r&&r.showHidden)?'\r\n\t\t<li><a href="'+t.__escape(e(r&&r.config&&r.config.relative_path))+"/user/"+t.__escape(e(r&&r.userslug))+'/categories">[[user:watched_categories]]</a></li>\r\n\t\t<li><a href="'+t.__escape(e(r&&r.config&&r.config.relative_path))+"/user/"+t.__escape(e(r&&r.userslug))+'/bookmarks">[[user:bookmarks]]</a></li>\r\n\t\t<li><a href="'+t.__escape(e(r&&r.config&&r.config.relative_path))+"/user/"+t.__escape(e(r&&r.userslug))+'/watched">[[user:watched]]</a></li>\r\n\t\t<li><a href="'+t.__escape(e(r&&r.config&&r.config.relative_path))+"/user/"+t.__escape(e(r&&r.userslug))+'/ignored">[[user:ignored]]</a></li>\r\n\t\t'+(e(r&&r["reputation:disabled"])?"":'\r\n\t\t<li><a href="'+t.__escape(e(r&&r.config&&r.config.relative_path))+"/user/"+t.__escape(e(r&&r.userslug))+'/upvoted">[[global:upvoted]]</a></li>\r\n\t\t'+(e(r&&r["downvote:disabled"])?"":'\r\n\t\t<li><a href="'+t.__escape(e(r&&r.config&&r.config.relative_path))+"/user/"+t.__escape(e(r&&r.userslug))+'/downvoted">[[global:downvoted]]</a></li>\r\n\t\t')+"\r\n\t\t")+'\r\n\t\t<li><a href="'+t.__escape(e(r&&r.config&&r.config.relative_path))+"/user/"+t.__escape(e(r&&r.userslug))+'/uploads">[[global:uploads]]</a></li>\r\n\t\t':"")+"\r\n\r\n\t\t"+n.blocks.profile_links(t,r,e,a,s)+"\r\n\t</ul>\r\n</div>\r\n\r\n\r\n\t\t"+(e(r&&r.allowCoverPicture)?'\r\n\t\t<div class="controls">\r\n\t\t\t<span class="upload"><i class="fa fa-fw fa-4x fa-upload"></i></span>\r\n\t\t\t<span class="resize"><i class="fa fa-fw fa-4x fa-arrows"></i></span>\r\n\t\t\t<span class="remove"><i class="fa fa-fw fa-4x fa-times"></i></span>\r\n\t\t</div>\r\n\t\t<div class="save">[[groups:cover-save]] <i class="fa fa-fw fa-floppy-o"></i></div>\r\n\t\t<div class="indicator">[[groups:cover-saving]] <i class="fa fa-fw fa-refresh fa-spin"></i></div>\r\n\t\t':"")+'\r\n\t</div>\r\n</div>\r\n\r\n\r\n\t<form class="edit-form">\r\n\t\t\x3c!-- disables autocomplete on FF --\x3e<input type="password" style="display:none">\r\n\r\n\t\t'+(e(r&&r.isSelf)?'\r\n\t\t<div class="form-group">\r\n\t\t\t<label class="control-label" for="inputCurrentPassword">[[user:current_password]]</label>\r\n\t\t\t<div class="controls">\r\n\t\t\t\t<input autocomplete="off" class="form-control" type="password" id="inputCurrentPassword" placeholder="[[user:current_password]]" value=""'+(e(r&&r.hasPassword)?"":" disabled")+">\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t":"")+'\r\n\r\n\t\t<div class="form-group">\r\n\t\t\t<label class="control-label" for="inputNewPassword">[[user:password]]</label>\r\n\t\t\t<input class="form-control" type="password" id="inputNewPassword" placeholder="[[user:password]]" value="">\r\n\t\t\t<span class="form-feedback" id="password-notify"></span>\r\n\t\t</div>\r\n\r\n\t\t<div class="form-group">\r\n\t\t\t<label class="control-label" for="inputNewPasswordAgain">[[user:confirm_password]]</label>\r\n\t\t\t<input class="form-control" type="password" id="inputNewPasswordAgain" placeholder="[[user:confirm_password]]" value="">\r\n\t\t\t<span class="form-feedback" id="password-confirm-notify"></span>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class="form-actions">\r\n\t\t\t<a id="changePasswordBtn" href="#" class="btn btn-primary btn-block"><i class="hide fa fa-spinner fa-spin"></i> [[user:change_password]]</a>\r\n\t\t</div>\r\n\t</form>\r\n</div>'}return n.blocks={profile_links:function(e,a,s,t){return t(s(a&&a.profile_links),function(t,r){return"\r\n\t\t"+(0===r?'\r\n\t\t<li class="divider"></li>\r\n\t\t':"")+'\r\n\t\t<li id="'+e.__escape(s(a&&a.profile_links&&a.profile_links[t]&&a.profile_links[t].id))+'" class="plugin-link '+(s(a&&a.profile_links&&a.profile_links[t]&&a.profile_links[t].public)?"public":"private")+'"><a href="'+e.__escape(s(a&&a.config&&a.config.relative_path))+"/user/"+e.__escape(s(a&&a.userslug))+"/"+e.__escape(s(a&&a.profile_links&&a.profile_links[t]&&a.profile_links[t].route))+'">'+(s(a&&a.profile_links&&a.profile_links[t]&&a.profile_links[t].icon)?'<i class="fa fa-fw '+e.__escape(s(a&&a.profile_links&&a.profile_links[t]&&a.profile_links[t].icon))+'"></i> ':"")+e.__escape(s(a&&a.profile_links&&a.profile_links[t]&&a.profile_links[t].name))+"</a></li>\r\n\t\t"})},breadcrumbs:function(a,s,n,t){return t(n(s&&s.breadcrumbs),function(t,r,e){return"\r\n\t<li"+(r===e-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" '+(r===e-1?'class="active"':"")+">\r\n\t\t"+(r!==e-1?'<a href="'+a.__escape(n(s&&s.breadcrumbs&&s.breadcrumbs[t]&&s.breadcrumbs[t].url))+'" itemprop="url">':"")+'\r\n\t\t\t<span itemprop="title">\r\n\t\t\t\t'+a.__escape(n(s&&s.breadcrumbs&&s.breadcrumbs[t]&&s.breadcrumbs[t].text))+"\r\n\t\t\t\t"+(r===e-1?"\r\n\t\t\t\t"+(n(s&&s["feeds:disableRSS"])?"":"\r\n\t\t\t\t"+(n(s&&s.rssFeedUrl)?'<a target="_blank" href="'+a.__escape(n(s&&s.rssFeedUrl))+'"><i class="fa fa-rss-square"></i></a>':""))+"\r\n\t\t\t\t":"")+"\r\n\t\t\t</span>\r\n\t\t"+(r!==e-1?"</a>":"")+"\r\n\t</li>\r\n\t"})}},n});