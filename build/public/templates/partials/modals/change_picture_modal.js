!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function r(t,n,s,e,i){return'<div class="row">\r\n\t<div class="col-xs-6 col-sm-8 col-md-6">\r\n\t\t<div class="list-group media">\r\n\t\t\t<button type="button" class="list-group-item" data-type="default">\r\n\t\t\t\t<div class="media-left">\r\n\t\t\t\t\t'+(s(n&&n.defaultAvatar)?'\r\n\t\t\t\t\t<img class="media-object" src="'+t.__escape(s(n&&n.defaultAvatar))+'"  />\r\n\t\t\t\t\t':'\r\n\t\t\t\t\t<div class="user-icon media-object" style="background-color: '+t.__escape(s(n&&n.icon&&n.icon.bgColor))+';">'+t.__escape(s(n&&n.icon&&n.icon.text))+"</div>\r\n\t\t\t\t\t")+'\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="media-body">\r\n\t\t\t\t\t<h4 class="media-heading">[[user:default_picture]]</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</button>\r\n\t\t\t'+r.blocks.pictures(t,n,s,e,i)+'\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="col-xs-6 col-sm-4 col-md-6">\r\n\t\t<div class="btn-group-vertical btn-block" role="group">\r\n\t\t\t'+(s(n&&n.allowProfileImageUploads)?'\r\n\t\t\t<button type="button" class="btn btn-default" data-action="upload">\r\n\t\t\t\t<span class="hidden-xs hidden-sm">\r\n\t\t\t\t\t[[user:upload_new_picture]]\r\n\t\t\t\t</span>\r\n\t\t\t\t<span class="visible-xs-inline visible-sm-inline">\r\n\t\t\t\t\t<i class="fa fa-plus"></i>\r\n\t\t\t\t\t<i class="fa fa-upload"></i>\r\n\t\t\t\t</span>\r\n\t\t\t</button>\r\n\t\t\t':"")+'\r\n\t\t\t<button type="button" class="btn btn-default" data-action="upload-url">\r\n\t\t\t\t<span class="hidden-xs hidden-sm">\r\n\t\t\t\t\t[[user:upload_new_picture_from_url]]\r\n\t\t\t\t</span>\r\n\t\t\t\t<span class="visible-xs-inline visible-sm-inline">\r\n\t\t\t\t\t<i class="fa fa-plus"></i>\r\n\t\t\t\t\t<i class="fa fa-link"></i>\r\n\t\t\t\t</span>\r\n\t\t\t</button>\r\n\t\t\t'+(s(n&&n.uploaded)?'\r\n\t\t\t<button type="button" class="btn btn-default" data-action="remove-uploaded">\r\n\t\t\t\t<span class="hidden-xs hidden-sm">\r\n\t\t\t\t\t[[user:remove_uploaded_picture]]\r\n\t\t\t\t</span>\r\n\t\t\t\t<span class="visible-xs-inline visible-sm-inline">\r\n\t\t\t\t\t<i class="fa fa-picture-o"></i>\r\n\t\t\t\t\t<i class="fa fa-long-arrow-right"></i>\r\n\t\t\t\t\t<i class="fa fa-trash-o"></i>\r\n\t\t\t\t</span>\r\n\t\t\t</button>\r\n\t\t\t':"")+"\r\n\t\t</div>\r\n\t</div>\r\n</div>"}return r.blocks={pictures:function(n,s,e,t){return t(e(s&&s.pictures),function(t){return'\r\n\t\t\t<button type="button" class="list-group-item" data-type="'+n.__escape(e(s&&s.pictures&&s.pictures[t]&&s.pictures[t].type))+'">\r\n\t\t\t\t<div class="media-left">\r\n\t\t\t\t\t<img class="media-object" src="'+n.__escape(e(s&&s.pictures&&s.pictures[t]&&s.pictures[t].url))+'" title="'+n.__escape(e(s&&s.pictures&&s.pictures[t]&&s.pictures[t].text))+'" />\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class="media-body">\r\n\t\t\t\t\t<h4 class="media-heading">'+n.__escape(e(s&&s.pictures&&s.pictures[t]&&s.pictures[t].text))+"</h4>\r\n\t\t\t\t</div>\r\n\t\t\t</button>\r\n\t\t\t"})}},r});