!function(r){"object"==typeof module&&module.exports?module.exports=r():"function"==typeof define&&define.amd&&define(r)}(function(){function s(r,t,e,n,a){return e(t&&t.breadcrumbs&&t.breadcrumbs.length)?'\r\n<ol class="breadcrumb">\r\n\t'+s.blocks.breadcrumbs(r,t,e,n,a)+"\r\n</ol>\r\n":""}return s.blocks={breadcrumbs:function(n,a,s,r){return r(s(a&&a.breadcrumbs),function(r,t,e){return"\r\n\t<li"+(t===e-1?' component="breadcrumb/current"':"")+' itemscope="itemscope" itemtype="http://data-vocabulary.org/Breadcrumb" '+(t===e-1?'class="active"':"")+">\r\n\t\t"+(t!==e-1?'<a href="'+n.__escape(s(a&&a.breadcrumbs&&a.breadcrumbs[r]&&a.breadcrumbs[r].url))+'" itemprop="url">':"")+'\r\n\t\t\t<span itemprop="title">\r\n\t\t\t\t'+n.__escape(s(a&&a.breadcrumbs&&a.breadcrumbs[r]&&a.breadcrumbs[r].text))+"\r\n\t\t\t\t"+(t===e-1?"\r\n\t\t\t\t"+(s(a&&a["feeds:disableRSS"])?"":"\r\n\t\t\t\t"+(s(a&&a.rssFeedUrl)?'<a target="_blank" href="'+n.__escape(s(a&&a.rssFeedUrl))+'"><i class="fa fa-rss-square"></i></a>':""))+"\r\n\t\t\t\t":"")+"\r\n\t\t\t</span>\r\n\t\t"+(t!==e-1?"</a>":"")+"\r\n\t</li>\r\n\t"})}},s});