!function(e){"object"==typeof module&&module.exports?module.exports=e():"function"==typeof define&&define.amd&&define(e)}(function(){function r(e,t,o,a,c){return'<div component="category-selector" class="btn-group '+(o(t&&t.pullRight)?"pull-right":"")+'">\r\n\t<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">\r\n\t\t<span component="category-selector-selected">[[topic:thread_tools.select_category]]</span> <span class="caret"></span>\r\n\t</button>\r\n\t<ul class="dropdown-menu category-dropdown-menu" role="menu">\r\n\t\t'+r.blocks.categories(e,t,o,a,c)+"\r\n\t</ul>\r\n</div>"}return r.blocks={categories:function(t,o,a,e,c){return e(a(o&&o.categories),function(e){return'\r\n\t\t<li role="presentation" class="category '+(a(o&&o.categories&&o.categories[e]&&o.categories[e].disabledClass)?"disabled":"")+'" data-cid="'+t.__escape(a(o&&o.categories&&o.categories[e]&&o.categories[e].cid))+'" data-name="'+t.__escape(a(o&&o.categories&&o.categories[e]&&o.categories[e].name))+'">\r\n\t\t\t<a role="menu-item">'+t.__escape(a(o&&o.categories&&o.categories[e]&&o.categories[e].level))+'<span component="category-markup">'+(a(o&&o.categories&&o.categories[e]&&o.categories[e].icon)?'<span class="fa-stack" style="'+t.__escape(c(o,t,"generateCategoryBackground",[a(o&&o.categories&&o.categories[e])]))+'"><i style="color: '+t.__escape(a(o&&o.categories&&o.categories[e]&&o.categories[e].color))+';" class="fa fa-stack-1x fa-fw '+t.__escape(a(o&&o.categories&&o.categories[e]&&o.categories[e].icon))+'"></i></span>':"")+" "+t.__escape(a(o&&o.categories&&o.categories[e]&&o.categories[e].name))+"</span></a>\r\n\t\t</li>\r\n\t\t"})}},r});