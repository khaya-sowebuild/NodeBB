!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function e(t,n,r,a,d){return'<div class="row">\r\n\t<div class="col-lg-9">\r\n\t\t<div class="row">\r\n\t\t\t<div class="col-sm-6 text-center">\r\n\t\t\t\t<div class="panel panel-default">\r\n\t\t\t\t\t<div class="panel-body">\r\n\t\t\t\t\t\t<div><canvas id="not-found" height="250"></canvas></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="panel-footer"><small>\r\n\t\t\t\t\t\t<strong>[[admin/advanced/errors:figure-x, 1]]</strong> &ndash; \r\n\t\t\t\t\t\t[[admin/advanced/errors:error-events-per-day, [[admin/advanced/errors:error.404]]]]\r\n\t\t\t\t\t</small></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class="col-sm-6 text-center">\r\n\t\t\t\t<div class="panel panel-default">\r\n\t\t\t\t\t<div class="panel-body">\r\n\t\t\t\t\t\t<div><canvas id="toobusy" height="250"></canvas></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="panel-footer"><small>\r\n\t\t\t\t\t\t<strong>[[admin/advanced/errors:figure-x, 2]]</strong> &ndash; \r\n\t\t\t\t\t\t[[admin/advanced/errors:error-events-per-day, [[admin/advanced/errors:error.503]]]]\r\n\t\t\t\t\t</small></div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="col-lg-3 acp-sidebar">\r\n\t\t<div class="panel panel-default">\r\n\t\t\t<div class="panel-heading">[[admin/advanced/errors:manage-error-log]]</div>\r\n\t\t\t<div class="panel-body">\r\n\t\t\t\t<div class="btn-group-vertical btn-block" role="group">\r\n\t\t\t\t\t<a class="btn btn-info" target="_top" href="'+t.__escape(r(n&&n.config&&n.config.relative_path))+'/admin/advanced/errors/export">\r\n\t\t\t\t\t\t<i class="fa fa-download"></i> [[admin/advanced/errors:export-error-log]]\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<button class="btn btn-danger" data-action="clear">\r\n\t\t\t\t\t\t<i class="fa fa-trash"></i> [[admin/advanced/errors:clear-error-log]]\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class="row">\r\n\t<div class="col-xs-12">\r\n\t\t<div class="panel panel-default">\r\n\t\t\t<div class="panel-heading">\r\n\t\t\t\t<i class="fa fa-exclamation-triangle"></i> [[admin/advanced/errors:error.404]]\r\n\t\t\t</div>\r\n\t\t\t<div class="panel-body">\r\n\t\t\t\t<table class="table table-striped">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<th>[[admin/advanced/errors:route]]</th>\r\n\t\t\t\t\t\t<th>[[admin/advanced/errors:count]]</th>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t'+e.blocks["not-found"](t,n,r,a,d)+"\r\n\t\t\t\t\t\t"+(r(n&&n["not-found"]&&n["not-found"].length)?"":'\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td colspan="2">\r\n\t\t\t\t\t\t\t\t<div class="alert alert-success">\r\n\t\t\t\t\t\t\t\t\t[[admin/advanced/errors:no-routes-not-found]]\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t')+"\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"}return e.blocks={"not-found":function(n,r,a,t){return t(a(r&&r["not-found"]),function(t){return"\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<td>"+n.__escape(a(r&&r["not-found"]&&r["not-found"][t]&&r["not-found"][t].value))+"</td>\r\n\t\t\t\t\t\t\t<td>"+n.__escape(a(r&&r["not-found"]&&r["not-found"][t]&&r["not-found"][t].score))+"</td>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t"})}},e});