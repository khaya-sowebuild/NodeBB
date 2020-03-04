!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){return function(t,n,e,a,l){return'<div class="settings">\r\n\t<div class="row">\r\n\t\t<div class="col-sm-2 col-xs-12 content-header">\r\n\t\t\t[[admin/admin:settings-header-contents]]\r\n\t\t</div>\r\n\t\t<div class="col-sm-10 col-xs-12">\r\n\t\t\t<nav class="section-content">\r\n\t\t\t\t<ul></ul>\r\n\t\t\t</nav>\r\n\t\t</div>\r\n\t</div>\r\n\r\n<div class="row">\r\n\t<div class="col-sm-2 col-xs-12 settings-header">\r\n\t\t[[admin/settings/general:site-settings]]\r\n\t</div>\r\n\t<div class="col-sm-10 col-xs-12">\r\n\t\t<form>\r\n\t\t\t<label>[[admin/settings/general:title]]</label>\r\n\t\t\t<input class="form-control" type="text" placeholder="[[admin/settings/general:title.name]]" data-field="title" />\r\n\r\n\t\t\t<label for="title:url">[[admin/settings/general:title.url]]</label>\r\n\t\t\t<input id ="title:url" type="text" class="form-control" placeholder="[[admin/settings/general:title.url-placeholder]]" data-field="title:url" />\r\n\t\t\t<p class="help-block">\r\n\t\t\t\t[[admin/settings/general:title.url-help]]\r\n\t\t\t</p>\r\n\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label for="showSiteTitle" class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input type="checkbox" class="mdl-switch__input" id="showSiteTitle" data-field="showSiteTitle" name="showSiteTitle" />\r\n\t\t\t\t\t<span class="mdl-switch__label">[[admin/settings/general:title.show-in-header]]</span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<label>[[admin/settings/general:browser-title]]</label>\r\n\t\t\t<input class="form-control" type="text" placeholder="[[admin/settings/general:browser-title]]" data-field="browserTitle" />\r\n\t\t\t<p class="help-block">\r\n\t\t\t\t[[admin/settings/general:browser-title-help]]\r\n\t\t\t</p>\r\n\r\n\t\t\t<label>[[admin/settings/general:title-layout]]</label>\r\n\t\t\t<input class="form-control" type="text" placeholder="[[admin/settings/general:title-layout]]" data-field="titleLayout" />\r\n\t\t\t<p class="help-block">\r\n\t\t\t\t[[admin/settings/general:title-layout-help]]\r\n\t\t\t</p>\r\n\r\n\t\t\t<label>[[admin/settings/general:description]]</label>\r\n\t\t\t<input type="text" class="form-control" placeholder="[[admin/settings/general:description.placeholder]]" data-field="description" /><br />\r\n\r\n\t\t\t<label>[[admin/settings/general:keywords]]</label><br />\r\n\t\t\t<input type="text" class="form-control" placeholder="[[admin/settings/general:keywords-placeholder]]" data-field="keywords" data-field-type="tagsinput" /><br />\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n<div class="row">\r\n\t<div class="col-sm-2 col-xs-12 settings-header">[[admin/settings/general:logo]]</div>\r\n\t<div class="col-sm-10 col-xs-12">\r\n\t\t<div class="form-group">\r\n\t\t\t<label for="logoUrl">[[admin/settings/general:logo.image]]</label>\r\n\t\t\t<div class="input-group">\r\n\t\t\t\t<input id="logoUrl" type="text" class="form-control" placeholder="[[admin/settings/general:logo.image-placeholder]]" data-field="brand:logo" />\r\n\t\t\t\t<span class="input-group-btn">\r\n\t\t\t\t\t<input data-action="upload" data-target="logoUrl" data-route="'+t.__escape(e(n&&n.config&&n.config.relative_path))+'/api/admin/uploadlogo" type="button" class="btn btn-default" value="[[admin/settings/general:logo.upload]]"></input>\r\n\t\t\t\t\t<button data-action="removeLogo" type="button" class="btn btn-default btn-danger"><i class="fa fa-times"></i></button>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div class="form-group">\r\n\t\t\t<label for="brand:logo:url">[[admin/settings/general:logo.url]]</label>\r\n\t\t\t<input id ="brand:logo:url" type="text" class="form-control" placeholder="[[admin/settings/general:logo.url-placeholder]]" data-field="brand:logo:url" />\r\n\t\t\t<p class="help-block">\r\n\t\t\t\t[[admin/settings/general:logo.url-help]]\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t\t<div class="form-group">\r\n\t\t\t<label for="brand:logo:alt">[[admin/settings/general:logo.alt-text]]</label>\r\n\t\t\t<input id ="brand:logo:alt" type="text" class="form-control" placeholder="[[admin/settings/general:log.alt-text-placeholder]]" data-field="brand:logo:alt" />\r\n\t\t</div>\r\n\r\n\t\t<div class="form-group">\r\n\t\t\t<label for="og_image">og:image</label>\r\n\t\t\t<div class="input-group">\r\n\t\t\t\t<input id="og_image" type="text" class="form-control" placeholder="" data-field="og:image" />\r\n\t\t\t\t<span class="input-group-btn">\r\n\t\t\t\t\t<input data-action="upload" data-target="og_image" data-route="'+t.__escape(e(n&&n.config&&n.config.relative_path))+'/api/admin/uploadOgImage" type="button" class="btn btn-default" value="[[admin/settings/general:logo.upload]]"></input>\r\n\t\t\t\t\t<button data-action="removeOgImage" type="button" class="btn btn-default btn-danger"><i class="fa fa-times"></i></button>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class="row">\r\n\t<div class="col-sm-2 col-xs-12 settings-header">\r\n\t\t[[admin/settings/general:favicon]]\r\n\t</div>\r\n\t<div class="col-sm-10 col-xs-12">\r\n\t\t<div class="form-group">\r\n\t\t\t<div class="input-group">\r\n\t\t\t\t<input id="faviconUrl" type="text" class="form-control" placeholder="favicon.ico" data-field="brand:favicon" data-action="upload" data-target="faviconUrl" data-route="'+t.__escape(e(n&&n.config&&n.config.relative_path))+'/api/admin/uploadfavicon" readonly />\r\n\t\t\t\t<span class="input-group-btn">\r\n\t\t\t\t\t<input data-action="upload" data-target="faviconUrl" data-route="'+t.__escape(e(n&&n.config&&n.config.relative_path))+'/api/admin/uploadfavicon" data-help="0" type="button" class="btn btn-default" value="[[admin/settings/general:favicon.upload]]"></input>\r\n\t\t\t\t\t<button data-action="removeFavicon" type="button" class="btn btn-default btn-danger"><i class="fa fa-times"></i></button>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class="row">\r\n\t<div class="col-sm-2 col-xs-12 settings-header">\r\n\t\t[[admin/settings/general:touch-icon]]\r\n\t</div>\r\n\t<div class="col-sm-10 col-xs-12">\r\n\t\t<div class="form-group">\r\n\t\t\t<div class="input-group">\r\n\t\t\t\t<input id="touchIconUrl" type="text" class="form-control" data-field="brand:touchIcon" data-action="upload" data-target="touchIconUrl" data-route="'+t.__escape(e(n&&n.config&&n.config.relative_path))+'/api/admin/uploadTouchIcon" readonly />\r\n\t\t\t\t<span class="input-group-btn">\r\n\t\t\t\t\t<input data-action="upload" data-target="touchIconUrl" data-route="'+t.__escape(e(n&&n.config&&n.config.relative_path))+'/api/admin/uploadTouchIcon" type="button" class="btn btn-default" value="[[admin/settings/general:touch-icon.upload]]"></input>\r\n\t\t\t\t\t<button data-action="removeTouchIcon" type="button" class="btn btn-default btn-danger"><i class="fa fa-times"></i></button>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t\t<p class="help-block">\r\n\t\t\t\t[[admin/settings/general:touch-icon.help]]\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class="row">\r\n\t<div class="col-sm-2 col-xs-12 settings-header">[[admin/settings/general:search-default-sort-by]]</div>\r\n\t<div class="col-sm-10 col-xs-12">\r\n\t\t<select id="post-sort-by" class="form-control" data-field="searchDefaultSortBy">\r\n\t\t\t<option value="relevance">[[search:relevance]]</option>\r\n\t\t\t<option value="timestamp">[[search:post-time]]</option>\r\n\t\t\t<option value="teaser.timestamp">[[search:last-reply-time]]</option>\r\n\t\t\t<option value="topic.title">[[search:topic-title]]</option>\r\n\t\t\t<option value="topic.postcount">[[search:number-of-replies]]</option>\r\n\t\t\t<option value="topic.viewcount">[[search:number-of-views]]</option>\r\n\t\t\t<option value="topic.timestamp">[[search:topic-start-date]]</option>\r\n\t\t\t<option value="user.username">[[search:username]]</option>\r\n\t\t\t<option value="category.name">[[search:category]]</option>\r\n\t\t</select>\r\n\t</div>\r\n</div>\r\n\r\n<div class="row">\r\n\t<div class="col-sm-2 col-xs-12 settings-header">[[admin/settings/general:outgoing-links]]</div>\r\n\t<div class="col-sm-10 col-xs-12">\r\n\t\t<form>\r\n\t\t\t<div class="checkbox">\r\n\t\t\t\t<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect">\r\n\t\t\t\t\t<input type="checkbox" class="mdl-switch__input" id="showSiteTitle" data-field="useOutgoingLinksPage">\r\n\t\t\t\t\t<span class="mdl-switch__label"><strong>[[admin/settings/general:outgoing-links.warning-page]]</strong></span>\r\n\t\t\t\t</label>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="form-group">\r\n\t\t\t\t<label for="outgoingLinks:whitelist">[[admin/settings/general:outgoing-links.whitelist]]</label><br />\r\n\t\t\t\t<input id="outgoingLinks:whitelist" type="text" class="form-control" placeholder="subdomain.domain.com" data-field="outgoingLinks:whitelist" data-field-type="tagsinput" />\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n</div>\r\n\r\n<button id="save" class="floating-button mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">\r\n\t<i class="material-icons">save</i>\r\n</button>\r\n\r\n<script>\r\n\trequire([\'admin/settings\'], function(Settings) {\r\n\t\tSettings.prepare();\r\n\t\tSettings.populateTOC();\r\n\t});\r\n<\/script>\r\n'}});