!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){return function(t,n,s,e,r){return'<div class="settings">\r\n\t<div class="row">\r\n\t\t<div class="col-sm-2 col-xs-12 content-header">\r\n\t\t\t[[admin/admin:settings-header-contents]]\r\n\t\t</div>\r\n\t\t<div class="col-sm-10 col-xs-12">\r\n\t\t\t<nav class="section-content">\r\n\t\t\t\t<ul></ul>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n<div class="row">\r\n\t<div class="col-sm-2 col-xs-12 settings-header">[[admin/settings/guest:handles]]</div>\r\n\t<div class="col-sm-10 col-xs-12">\r\n\t\t<form role="form">\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input class="mdl-switch__input" type="checkbox" data-field="allowGuestHandles">\r\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/guest:handles.enabled]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\t\t\t<p class="help-block">\r\n\t\t\t\t[[admin/settings/guest:handles.enabled-help]]\r\n\t\t\t</p>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n</div>\r\n\r\n<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">\r\n\t<i class="material-icons">save</i>\r\n</button>\r\n\r\n<script>\r\n\trequire([\'admin/settings\'], function(Settings) {\r\n\t\tSettings.prepare();\r\n\t\tSettings.populateTOC();\r\n\t});\r\n<\/script>\r\n'}});