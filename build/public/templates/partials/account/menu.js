!function(e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd&&define(e)}(function(){function a(e,t,r,n,i){return'<div class="btn-group account-fab bottom-sheet">\r\n\t<button type="button" class="fab dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\r\n\t\t<i class="fa fa-ellipsis-v"></i>\r\n\t</button>\r\n\t<ul class="dropdown-menu dropdown-menu-right">\r\n\t\t'+(r(t&&t.isSelf)?"":"\r\n\t\t"+(r(t&&t.banned)?"":"\r\n\t\t"+(r(t&&t.config&&t.config.disableChat)?"":'\r\n\t\t<li class="'+(r(t&&t.hasPrivateChat)?"":"hidden")+'">\r\n\t\t\t<a component="account/chat" href="#">[[user:chat_with, '+e.__escape(r(t&&t.username))+']]</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component="account/new-chat" href="#">[[user:new_chat_with, '+e.__escape(r(t&&t.username))+"]]</a>\r\n\t\t</li>\r\n\t\t")+'\r\n\t\t<li>\r\n\t\t\t<a component="account/flag" href="#">[[user:flag-profile]]</a>\r\n\t\t</li>\r\n\t\t<li>\r\n\t\t\t<a component="account/block" href="#">'+(r(t&&t.isBlocked)?"[[user:unblock_user]]":"[[user:block_user]]")+'</a>\r\n\t\t</li>\r\n\t\t<li class="divider"></li>\r\n\t\t')+"\r\n\t\t")+'\r\n\t\t<li>\r\n\t\t\t<a href="'+e.__escape(r(t&&t.config&&t.config.relative_path))+"/user/"+e.__escape(r(t&&t.userslug))+'" class="inline-block" id="profile">[[user:profile]]</a>\r\n\t\t</li>\r\n\t\t'+(r(t&&t.showHidden)?'\r\n\t\t<li><a href="'+e.__escape(r(t&&t.config&&t.config.relative_path))+"/user/"+e.__escape(r(t&&t.userslug))+'/edit">[[user:edit]]</a></li>\r\n\t\t<li><a href="'+e.__escape(r(t&&t.config&&t.config.relative_path))+"/user/"+e.__escape(r(t&&t.userslug))+'/settings">[[user:settings]]</a></li>\r\n\t\t':"")+"\r\n\r\n\t\t"+(r(t&&t.isSelf)?"":"\r\n\t\t"+(r(t&&t.canBan)?'\r\n\t\t<li class="'+(r(t&&t.banned)?"hide":"")+'">\r\n\t\t\t<a component="account/ban" href="#">[[user:ban_account]]</a>\r\n\t\t</li>\r\n\t\t<li class="'+(r(t&&t.banned)?"":"hide")+'">\r\n\t\t\t<a component="account/unban" href="#">[[user:unban_account]]</a>\r\n\t\t</li>\r\n\t\t':"")+"\r\n\t\t"+(r(t&&t.isAdmin)?'\r\n\t\t<li>\r\n\t\t\t<a component="account/delete" href="#" class="">[[user:delete_account]]</a>\r\n\t\t</li>\r\n\t\t':"")+"\r\n\t\t")+'\r\n\r\n\t\t<li class="divider"></li>\r\n\t\t<li><a href="'+e.__escape(r(t&&t.config&&t.config.relative_path))+"/user/"+e.__escape(r(t&&t.userslug))+'/following">[[user:following]]</a></li>\r\n\t\t<li><a href="'+e.__escape(r(t&&t.config&&t.config.relative_path))+"/user/"+e.__escape(r(t&&t.userslug))+'/followers">[[user:followers]]</a></li>\r\n\t\t'+(r(t&&t.showHidden)?'\r\n\t\t<li><a href="'+e.__escape(r(t&&t.config&&t.config.relative_path))+"/user/"+e.__escape(r(t&&t.userslug))+'/blocks">[[user:blocks]]</a></li>\r\n\t\t':"")+'\r\n\t\t<li class="divider"></li>\r\n\t\t<li><a href="'+e.__escape(r(t&&t.config&&t.config.relative_path))+"/user/"+e.__escape(r(t&&t.userslug))+'/topics">[[global:topics]]</a></li>\r\n\t\t<li><a href="'+e.__escape(r(t&&t.config&&t.config.relative_path))+"/user/"+e.__escape(r(t&&t.userslug))+'/posts">[[global:posts]]</a></li>\r\n\t\t'+(r(t&&t["reputation:disabled"])?"":'\r\n\t\t<li><a href="'+e.__escape(r(t&&t.config&&t.config.relative_path))+"/user/"+e.__escape(r(t&&t.userslug))+'/best">[[global:best]]</a></li>\r\n\t\t')+'\r\n\t\t<li><a href="'+e.__escape(r(t&&t.config&&t.config.relative_path))+"/user/"+e.__escape(r(t&&t.userslug))+'/groups">[[global:header.groups]]</a></li>\r\n\r\n\t\t'+(r(t&&t.showHidden)?'\r\n\t\t<li><a href="'+e.__escape(r(t&&t.config&&t.config.relative_path))+"/user/"+e.__escape(r(t&&t.userslug))+'/categories">[[user:watched_categories]]</a></li>\r\n\t\t<li><a href="'+e.__escape(r(t&&t.config&&t.config.relative_path))+"/user/"+e.__escape(r(t&&t.userslug))+'/bookmarks">[[user:bookmarks]]</a></li>\r\n\t\t<li><a href="'+e.__escape(r(t&&t.config&&t.config.relative_path))+"/user/"+e.__escape(r(t&&t.userslug))+'/watched">[[user:watched]]</a></li>\r\n\t\t<li><a href="'+e.__escape(r(t&&t.config&&t.config.relative_path))+"/user/"+e.__escape(r(t&&t.userslug))+'/ignored">[[user:ignored]]</a></li>\r\n\t\t'+(r(t&&t["reputation:disabled"])?"":'\r\n\t\t<li><a href="'+e.__escape(r(t&&t.config&&t.config.relative_path))+"/user/"+e.__escape(r(t&&t.userslug))+'/upvoted">[[global:upvoted]]</a></li>\r\n\t\t'+(r(t&&t["downvote:disabled"])?"":'\r\n\t\t<li><a href="'+e.__escape(r(t&&t.config&&t.config.relative_path))+"/user/"+e.__escape(r(t&&t.userslug))+'/downvoted">[[global:downvoted]]</a></li>\r\n\t\t')+"\r\n\t\t")+'\r\n\t\t<li><a href="'+e.__escape(r(t&&t.config&&t.config.relative_path))+"/user/"+e.__escape(r(t&&t.userslug))+'/uploads">[[global:uploads]]</a></li>\r\n\t\t':"")+"\r\n\r\n\t\t"+a.blocks.profile_links(e,t,r,n,i)+"\r\n\t</ul>\r\n</div>\r\n"}return a.blocks={profile_links:function(r,n,i,e){return e(i(n&&n.profile_links),function(e,t){return"\r\n\t\t"+(0===t?'\r\n\t\t<li class="divider"></li>\r\n\t\t':"")+'\r\n\t\t<li id="'+r.__escape(i(n&&n.profile_links&&n.profile_links[e]&&n.profile_links[e].id))+'" class="plugin-link '+(i(n&&n.profile_links&&n.profile_links[e]&&n.profile_links[e].public)?"public":"private")+'"><a href="'+r.__escape(i(n&&n.config&&n.config.relative_path))+"/user/"+r.__escape(i(n&&n.userslug))+"/"+r.__escape(i(n&&n.profile_links&&n.profile_links[e]&&n.profile_links[e].route))+'">'+(i(n&&n.profile_links&&n.profile_links[e]&&n.profile_links[e].icon)?'<i class="fa fa-fw '+r.__escape(i(n&&n.profile_links&&n.profile_links[e]&&n.profile_links[e].icon))+'"></i> ':"")+r.__escape(i(n&&n.profile_links&&n.profile_links[e]&&n.profile_links[e].name))+"</a></li>\r\n\t\t"})}},a});