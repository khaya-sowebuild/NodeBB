!function(a){"object"==typeof module&&module.exports?module.exports=a():"function"==typeof define&&define.amd&&define(a)}(function(){function p(a,n,t,i,e){return'<div component="pagination" class="text-center pagination-container'+(t(n&&n.pagination&&n.pagination.pages&&n.pagination.pages.length)?"":" hidden")+'">\r\n\t<ul class="pagination hidden-xs">\r\n\t\t<li class="previous pull-left'+(t(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.active)?"":" disabled")+'">\r\n\t\t\t<a href="?'+a.__escape(t(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.qs))+'" data-page="'+a.__escape(t(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t'+p.blocks["pagination.pages"](a,n,t,i,e)+'\r\n\r\n\t\t<li class="next pull-right'+(t(n&&n.pagination&&n.pagination.next&&n.pagination.next.active)?"":" disabled")+'">\r\n\t\t\t<a href="?'+a.__escape(t(n&&n.pagination&&n.pagination.next&&n.pagination.next.qs))+'" data-page="'+a.__escape(t(n&&n.pagination&&n.pagination.next&&n.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\r\n\t\t</li>\r\n\t</ul>\r\n\r\n\t<ul class="pagination hidden-sm hidden-md hidden-lg">\r\n\t\t<li class="first'+(t(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.active)?"":" disabled")+'">\r\n\t\t\t<a href="?page=1" data-page="1"><i class="fa fa-fast-backward"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li class="previous'+(t(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.active)?"":" disabled")+'">\r\n\t\t\t<a href="?'+a.__escape(t(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.qs))+'" data-page="'+a.__escape(t(n&&n.pagination&&n.pagination.prev&&n.pagination.prev.page))+'"><i class="fa fa-chevron-left"></i> </a>\r\n\t\t</li>\r\n\r\n\t\t<li component="pagination/select-page" class="page select-page">\r\n\t\t\t<a href="#">'+a.__escape(t(n&&n.pagination&&n.pagination.currentPage))+" / "+a.__escape(t(n&&n.pagination&&n.pagination.pageCount))+'</a>\r\n\t\t</li>\r\n\r\n\t\t<li class="next'+(t(n&&n.pagination&&n.pagination.next&&n.pagination.next.active)?"":" disabled")+'">\r\n\t\t\t<a href="?'+a.__escape(t(n&&n.pagination&&n.pagination.next&&n.pagination.next.qs))+'" data-page="'+a.__escape(t(n&&n.pagination&&n.pagination.next&&n.pagination.next.page))+'"> <i class="fa fa-chevron-right"></i></a>\r\n\t\t</li>\r\n\r\n\t\t<li class="last'+(t(n&&n.pagination&&n.pagination.next&&n.pagination.next.active)?"":" disabled")+'">\r\n\t\t\t<a href="?page='+a.__escape(t(n&&n.pagination&&n.pagination.pageCount))+'" data-page="'+a.__escape(t(n&&n.pagination&&n.pagination.pageCount))+'"><i class="fa fa-fast-forward"></i> </a>\r\n\t\t</li>\r\n\t</ul>\r\n</div>'}return p.blocks={"pagination.pages":function(n,t,i,a){return a(i(t&&t.pagination&&t.pagination.pages),function(a){return"\r\n\t\t\t"+(i(t&&t.pagination&&t.pagination.pages&&t.pagination.pages[a]&&t.pagination.pages[a].separator)?'\r\n\t\t\t<li component="pagination/select-page" class="page select-page">\r\n\t\t\t\t<a href="#"><i class="fa fa-ellipsis-h"></i></a>\r\n\t\t\t</li>\r\n\t\t\t':'\r\n\t\t\t<li class="page'+(i(t&&t.pagination&&t.pagination.pages&&t.pagination.pages[a]&&t.pagination.pages[a].active)?" active":"")+'" >\r\n\t\t\t\t<a href="?'+n.__escape(i(t&&t.pagination&&t.pagination.pages&&t.pagination.pages[a]&&t.pagination.pages[a].qs))+'" data-page="'+n.__escape(i(t&&t.pagination&&t.pagination.pages&&t.pagination.pages[a]&&t.pagination.pages[a].page))+'">'+n.__escape(i(t&&t.pagination&&t.pagination.pages&&t.pagination.pages[a]&&t.pagination.pages[a].page))+"</a>\r\n\t\t\t</li>\r\n\t\t\t")+"\r\n\t\t"})}},p});