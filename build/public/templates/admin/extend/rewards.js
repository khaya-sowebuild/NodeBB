!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function c(t,n,e,i,a){return'<div id="rewards" class="row">\r\n\t<div class="col-lg-9">\r\n\t\t<div class="panel panel-default">\r\n\t\t\t<div class="panel-heading">[[admin/extend/rewards:rewards]]</div>\r\n\t\t\t<div class="panel-body">\r\n\t\t\t\t<ul id="active">\r\n\t\t\t\t\t'+c.blocks.active(t,n,e,i,a)+'\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class="col-lg-3 acp-sidebar">\r\n\t\t<div class="panel panel-default">\r\n\t\t\t<div class="panel-heading">[[admin/extend/rewards:control-panel]]</div>\r\n\t\t\t<div class="panel-body">\r\n\t\t\t\t<button class="btn btn-success btn-md" id="new">[[admin/extend/rewards:new-reward]]</button>\r\n\t\t\t\t<button class="btn btn-primary btn-md" id="save">[[global:save_changes]]</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>'}return c.blocks={active:function(e,i,a,t){return t(a(i&&i.active),function(n){return'\r\n\t\t\t\t\t<li data-rid="'+e.__escape(a(i&&i.active&&i.active[n]&&i.active[n].rid))+'" data-id="'+e.__escape(a(i&&i.active&&i.active[n]&&i.active[n].id))+'">\r\n\t\t\t\t\t\t<form class="main inline-block">\r\n\t\t\t\t\t\t\t<div class="well inline-block">\r\n\t\t\t\t\t\t\t\t<label for="condition">[[admin/extend/rewards:condition-if-users]]</label><br />\r\n\t\t\t\t\t\t\t\t<select name="condition" data-selected="'+e.__escape(a(i&&i.active&&i.active[n]&&i.active[n].condition))+'">\r\n\t\t\t\t\t\t\t\t\t'+(a(i&&i.active&&i.active[n]&&i.active[n].conditions)?t(a(i&&i.active&&i.active[n]&&i.active[n].conditions),function(t){return'\r\n\t\t\t\t\t\t\t\t\t<option value="'+e.__escape(a(i&&i.active&&i.active[n]&&i.active[n].conditions&&i.active[n].conditions[t]&&i.active[n].conditions[t].condition))+'">'+e.__escape(a(i&&i.active&&i.active[n]&&i.active[n].conditions&&i.active[n].conditions[t]&&i.active[n].conditions[t].name))+"</option>\r\n\t\t\t\t\t\t\t\t\t"}):t(a(i&&i.conditions),function(t){return'\r\n\t\t\t\t\t\t\t\t\t<option value="'+e.__escape(a(i&&i.conditions&&i.conditions[t]&&i.conditions[t].condition))+'">'+e.__escape(a(i&&i.conditions&&i.conditions[t]&&i.conditions[t].name))+"</option>\r\n\t\t\t\t\t\t\t\t\t"}))+'\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="well inline-block">\r\n\t\t\t\t\t\t\t\t<label for="condition">[[admin/extend/rewards:condition-is]]</label><br />\r\n\t\t\t\t\t\t\t\t<select name="conditional" data-selected="'+e.__escape(a(i&&i.active&&i.active[n]&&i.active[n].conditional))+'">\r\n\t\t\t\t\t\t\t\t\t'+(a(i&&i.active&&i.active[n]&&i.active[n].conditionals)?t(a(i&&i.active&&i.active[n]&&i.active[n].conditionals),function(t){return'\r\n\t\t\t\t\t\t\t\t\t<option value="'+e.__escape(a(i&&i.active&&i.active[n]&&i.active[n].conditionals&&i.active[n].conditionals[t]&&i.active[n].conditionals[t].conditional))+'">'+e.__escape(a(i&&i.active&&i.active[n]&&i.active[n].conditionals&&i.active[n].conditionals[t]&&i.active[n].conditionals[t].name))+"</option>\r\n\t\t\t\t\t\t\t\t\t"}):t(a(i&&i.conditionals),function(t){return'\r\n\t\t\t\t\t\t\t\t\t<option value="'+e.__escape(a(i&&i.conditionals&&i.conditionals[t]&&i.conditionals[t].conditional))+'">'+e.__escape(a(i&&i.conditionals&&i.conditionals[t]&&i.conditionals[t].name))+"</option>\r\n\t\t\t\t\t\t\t\t\t"}))+'\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t<input type="text" name="value" value="'+e.__escape(a(i&&i.active&&i.active[n]&&i.active[n].value))+'" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="well inline-block">\r\n\t\t\t\t\t\t\t\t<label for="condition">[[admin/extend/rewards:condition-then]]</label><br />\r\n\t\t\t\t\t\t\t\t<select name="rid" data-selected="'+e.__escape(a(i&&i.active&&i.active[n]&&i.active[n].rid))+'">\r\n\t\t\t\t\t\t\t\t\t'+t(a(i&&i.rewards),function(t){return'\r\n\t\t\t\t\t\t\t\t\t<option value="'+e.__escape(a(i&&i.rewards&&i.rewards[t]&&i.rewards[t].rid))+'">'+e.__escape(a(i&&i.rewards&&i.rewards[t]&&i.rewards[t].name))+"</option>\r\n\t\t\t\t\t\t\t\t\t"})+'\r\n\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</form>\r\n\r\n\t\t\t\t\t\t<form class="rewards inline-block">\r\n\t\t\t\t\t\t\t<div class="inputs well inline-block"></div>\r\n\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t<div class="clearfix"></div>\r\n\r\n\t\t\t\t\t\t<div class="pull-right">\r\n\t\t\t\t\t\t\t<div class="panel-body inline-block">\r\n\t\t\t\t\t\t\t\t<form class="main">\r\n\t\t\t\t\t\t\t\t\t<label for="claimable">[[admin/extend/rewards:max-claims]]</label><br />\r\n\t\t\t\t\t\t\t\t\t<input type="text" name="claimable" value="'+e.__escape(a(i&&i.active&&i.active[n]&&i.active[n].claimable))+'" placeholder="1" />\r\n\t\t\t\t\t\t\t\t\t<small>[[admin/extend/rewards:zero-infinite]]</small>\r\n\t\t\t\t\t\t\t\t</form>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class="panel-body inline-block">\r\n\t\t\t\t\t\t\t\t<button class="btn btn-danger delete">[[admin/extend/rewards:delete]]</button>\r\n\t\t\t\t\t\t\t\t'+(a(i&&i.active&&i.active[n]&&i.active[n].disabled)?'\r\n\t\t\t\t\t\t\t\t<button class="btn btn-success toggle">[[admin/extend/rewards:enable]]</button>\r\n\t\t\t\t\t\t\t\t':'\r\n\t\t\t\t\t\t\t\t<button class="btn btn-warning toggle">[[admin/extend/rewards:disable]]</button>\r\n\t\t\t\t\t\t\t\t')+'\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="clearfix"></div>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t'})}},c});