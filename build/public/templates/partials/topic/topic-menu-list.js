!function(e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd&&define(e)}(function(){function l(e,o,a,i,t){return(a(o&&o.privileges&&o.privileges.editable)?'\r\n<li><a component="topic/lock" href="#" class="'+(a(o&&o.locked)?"hidden":"")+'"><i class="fa fa-fw fa-lock"></i> [[topic:thread_tools.lock]]</a></li>\r\n<li><a component="topic/unlock" href="#" class="'+(a(o&&o.locked)?"":"hidden")+'"><i class="fa fa-fw fa-unlock"></i> [[topic:thread_tools.unlock]]</a></li>\r\n<li><a component="topic/move" href="#"><i class="fa fa-fw fa-arrows"></i> [[topic:thread_tools.move]]</a></li>\r\n<li><a component="topic/fork" href="#"><i class="fa fa-fw fa-code-fork"></i> [[topic:thread_tools.fork]]</a></li>\r\n<li><a component="topic/pin" href="#" class="'+(a(o&&o.pinned)?"hidden":"")+'"><i class="fa fa-fw fa-thumb-tack"></i> [[topic:thread_tools.pin]]</a></li>\r\n<li><a component="topic/unpin" href="#" class="'+(a(o&&o.pinned)?"":"hidden")+'"><i class="fa fa-fw fa-thumb-tack fa-rotate-90"></i> [[topic:thread_tools.unpin]]</a></li>\r\n<li><a component="topic/move-posts" href="#"><i class="fa fa-fw fa-arrows"></i> [[topic:thread_tools.move-posts]]</a></li>\r\n<li><a component="topic/mark-unread-for-all" href="#"><i class="fa fa-fw fa-inbox"></i> [[topic:thread_tools.markAsUnreadForAll]]</a></li>\r\n<li class="divider"></li>\r\n':"")+"\r\n\r\n"+(a(o&&o.privileges&&o.privileges.deletable)?'\r\n<li><a component="topic/delete" href="#" class="'+(a(o&&o.deleted)?"hidden":"")+'"><i class="fa fa-fw fa-trash-o"></i> [[topic:thread_tools.delete]]</a></li>\r\n<li><a component="topic/restore" href="#" class="'+(a(o&&o.deleted)?"":"hidden")+'"><i class="fa fa-fw fa-history"></i> [[topic:thread_tools.restore]]</a></li>\r\n'+(a(o&&o.privileges&&o.privileges.purge)?'\r\n<li><a component="topic/purge" href="#" class="'+(a(o&&o.deleted)?"":"hidden")+'"><i class="fa fa-fw fa-eraser"></i> [[topic:thread_tools.purge]]</a></li>\r\n':"")+"\r\n"+(a(o&&o.privileges&&o.privileges.isAdminOrMod)?'\r\n<li><a component="topic/delete/posts" href="#"><i class="fa fa-fw fa-trash-o"></i> [[topic:thread_tools.delete-posts]]</a></li>\r\n':"")+"\r\n\r\n"+l.blocks.thread_tools(e,o,a,i,t)+"\r\n":"")}return l.blocks={thread_tools:function(o,a,i,e){return e(i(a&&a.thread_tools),function(e){return'\r\n<li><a href="#" class="'+o.__escape(i(a&&a.thread_tools&&a.thread_tools[e]&&a.thread_tools[e].class))+'"><i class="fa fa-fw '+o.__escape(i(a&&a.thread_tools&&a.thread_tools[e]&&a.thread_tools[e].icon))+'"></i> '+o.__escape(i(a&&a.thread_tools&&a.thread_tools[e]&&a.thread_tools[e].title))+"</a></li>\r\n"})}},l});