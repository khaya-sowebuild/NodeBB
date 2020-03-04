!function(t){"object"==typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd&&define(t)}(function(){function o(t,n,e,r,i){return'<!DOCTYPE html>\r\n<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">\r\n<head>\r\n    <meta charset="utf-8"> \x3c!-- utf-8 works for most cases --\x3e\r\n    <meta name="viewport" content="width=device-width"> \x3c!-- Forcing initial-scale shouldn\'t be necessary --\x3e\r\n    <meta http-equiv="X-UA-Compatible" content="IE=edge"> \x3c!-- Use the latest (edge) version of IE rendering engine --\x3e\r\n    <meta name="x-apple-disable-message-reformatting">  \x3c!-- Disable auto-scale in iOS 10 Mail entirely --\x3e\r\n    <title></title> \x3c!-- The title tag shows in email notifications, like Android 4.4. --\x3e\r\n\r\n    \x3c!-- Web Font / @font-face : BEGIN --\x3e\r\n\t\x3c!-- NOTE: If web fonts are not required, lines 10 - 27 can be safely removed. --\x3e\r\n\r\n    \x3c!-- Desktop Outlook chokes on web font references and defaults to Times New Roman, so we force a safe fallback font. --\x3e\r\n    \x3c!--[if mso]>\r\n        <style>\r\n            * {\r\n                font-family: sans-serif !important;\r\n            }\r\n        </style>\r\n    <![endif]--\x3e\r\n\r\n    \x3c!-- All other clients get the webfont reference; some will render the font and others will silently fail to the fallbacks. More on that here: http://stylecampaign.com/blog/2015/02/webfont-support-in-email/ --\x3e\r\n    \x3c!--[if !mso]>\x3c!--\x3e\r\n        \x3c!-- insert web font reference, eg: <link href=\'https://fonts.googleapis.com/css?family=Roboto:400,700\' rel=\'stylesheet\' type=\'text/css\'> --\x3e\r\n    \x3c!--<![endif]--\x3e\r\n\r\n    \x3c!-- Web Font / @font-face : END --\x3e\r\n\r\n\t\x3c!-- CSS Reset --\x3e\r\n    <style>\r\n\r\n        /* What it does: Remove spaces around the email design added by some email clients. */\r\n        /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */\r\n        html,\r\n        body {\r\n            margin: 0 auto !important;\r\n            padding: 0 !important;\r\n            height: 100% !important;\r\n            width: 100% !important;\r\n        }\r\n\r\n        /* What it does: Stops email clients resizing small text. */\r\n        * {\r\n            -ms-text-size-adjust: 100%;\r\n            -webkit-text-size-adjust: 100%;\r\n        }\r\n\r\n        /* What it does: Centers email on Android 4.4 */\r\n        div[style*="margin: 16px 0"] {\r\n            margin:0 !important;\r\n        }\r\n\r\n        /* What it does: Stops Outlook from adding extra spacing to tables. */\r\n        table,\r\n        td {\r\n            mso-table-lspace: 0pt !important;\r\n            mso-table-rspace: 0pt !important;\r\n        }\r\n\r\n        /* What it does: Fixes webkit padding issue. Fix for Yahoo mail table alignment bug. Applies table-layout to the first 2 tables then removes for anything nested deeper. */\r\n        table {\r\n            border-spacing: 0 !important;\r\n            border-collapse: collapse !important;\r\n            table-layout: fixed !important;\r\n            margin: 0 auto !important;\r\n        }\r\n        table table table {\r\n            table-layout: auto;\r\n        }\r\n\r\n        /* What it does: Uses a better rendering method when resizing images in IE. */\r\n        img {\r\n            -ms-interpolation-mode:bicubic;\r\n        }\r\n\r\n        /* What it does: A work-around for email clients meddling in triggered links. */\r\n        *[x-apple-data-detectors],\t/* iOS */\r\n        .x-gmail-data-detectors, \t/* Gmail */\r\n        .x-gmail-data-detectors *,\r\n        .aBn {\r\n            border-bottom: 0 !important;\r\n            cursor: default !important;\r\n            color: inherit !important;\r\n            text-decoration: none !important;\r\n            font-size: inherit !important;\r\n            font-family: inherit !important;\r\n            font-weight: inherit !important;\r\n            line-height: inherit !important;\r\n        }\r\n\r\n        /* What it does: Prevents Gmail from displaying an download button on large, non-linked images. */\r\n        .a6S {\r\n\t        display: none !important;\r\n\t        opacity: 0.01 !important;\r\n        }\r\n        /* If the above doesn\'t work, add a .g-img class to any image in question. */\r\n        img.g-img + div {\r\n\t        display:none !important;\r\n\t   \t}\r\n\r\n        /* What it does: Prevents underlining the button text in Windows 10 */\r\n        .button-link {\r\n            text-decoration: none !important;\r\n        }\r\n\r\n        /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */\r\n        /* Create one of these media queries for each additional viewport size you\'d like to fix */\r\n        /* Thanks to Eric Lepetit (@ericlepetitsf) for help troubleshooting */\r\n        @media only screen and (min-device-width: 375px) and (max-device-width: 413px) { /* iPhone 6 and 6+ */\r\n            .email-container {\r\n                min-width: 375px !important;\r\n            }\r\n        }\r\n\r\n    </style>\r\n\r\n    \x3c!-- Progressive Enhancements --\x3e\r\n    <style>\r\n\r\n        /* What it does: Hover styles for buttons */\r\n        .button-td,\r\n        .button-a {\r\n            transition: all 100ms ease-in;\r\n        }\r\n        .button-td:hover,\r\n        .button-a:hover {\r\n            background: #555555 !important;\r\n            border-color: #555555 !important;\r\n        }\r\n\r\n        /* Media Queries */\r\n        @media screen and (max-width: 600px) {\r\n\r\n            /* What it does: Adjust typography on small screens to improve readability */\r\n\t\t\t.email-container p {\r\n\t\t\t\tfont-size: 17px !important;\r\n\t\t\t\tline-height: 22px !important;\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t</style>\r\n\r\n\t\x3c!-- What it does: Makes background images in 72ppi Outlook render at correct size. --\x3e\r\n\t\x3c!--[if gte mso 9]>\r\n\t<xml>\r\n\t\t<o:OfficeDocumentSettings>\r\n\t\t\t<o:AllowPNG/>\r\n\t\t\t<o:PixelsPerInch>96</o:PixelsPerInch>\r\n\t\t</o:OfficeDocumentSettings>\r\n\t</xml>\r\n\t<![endif]--\x3e\r\n\r\n</head>\r\n\r\n<body width="100%" bgcolor="#222222" style="margin: 0; mso-line-height-rule: exactly;">\r\n\t<center style="width: 100%; background: #222222; text-align: left;">\r\n\r\n\t\t\x3c!--\r\n\t\t\tSet the email width. Defined in two places:\r\n\t\t\t1. max-width for all clients except Desktop Windows Outlook, allowing the email to squish on narrow but never go wider than 600px.\r\n\t\t\t2. MSO tags for Desktop Windows Outlook enforce a 600px width.\r\n\t\t--\x3e\r\n\t\t<div style="max-width: 600px; margin: auto;" class="email-container">\r\n\t\t\t\x3c!--[if mso]>\r\n\t\t\t<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="600" align="center">\r\n\t\t\t<tr>\r\n\t\t\t<td>\r\n\t\t\t<![endif]--\x3e\r\n\r\n\t\t\t\x3c!-- Email Header : BEGIN --\x3e\r\n\t\t\t<table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 600px;">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style="padding: 20px 0; text-align: center">\r\n\t\t\t\t\t\t'+(e(n&&n.logo&&n.logo.src)?'\r\n\t\t\t\t\t\t<img src="'+t.__escape(e(n&&n.logo&&n.logo.src))+'" height="'+t.__escape(e(n&&n.logo&&n.logo.height))+'" width="'+t.__escape(e(n&&n.logo&&n.logo.width))+'" alt="'+t.__escape(e(n&&n.site_title))+'" border="0" style="height: '+t.__escape(e(n&&n.logo&&n.logo.height))+"px; width: "+t.__escape(e(n&&n.logo&&n.logo.width))+'px; background: #222222; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;">\r\n\t\t\t\t\t\t':"\r\n\t\t\t\t\t\t&nbsp;\r\n\t\t\t\t\t\t")+'\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t\x3c!-- Email Header : END --\x3e\r\n\r\n\x3c!-- Email Body : BEGIN --\x3e\r\n<table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 600px;">\r\n\r\n\t\x3c!-- Hero Image, Flush : BEGIN --\x3e\r\n\t<tr>\r\n\t\t<td bgcolor="#efeff0" style="text-align: center; background-image: url('+t.__escape(e(n&&n.url))+'/assets/images/emails/triangularbackground.png); background-size: cover; background-repeat: no-repeat;">\r\n\t\t\t<img src="'+t.__escape(e(n&&n.url))+'/assets/images/emails/digestheader.jpg" width="600" height="208" border="0" align="center" style="width: 600px; height: 208px; max-height: 300px; height: auto; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;" class="g-img">\r\n\t\t</td>\r\n\t</tr>\r\n\t\x3c!-- Hero Image, Flush : END --\x3e\r\n\r\n\t\x3c!-- 1 Column Text + Button : BEGIN --\x3e\r\n\t<tr>\r\n\t\t<td bgcolor="#efeff0">\r\n\t\t\t<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style="padding: 40px 40px 24px 40px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;">\r\n\t\t\t\t\t\t<h1 style="margin: 0 0 10px 0; font-family: sans-serif; font-size: 24px; line-height: 27px; color: #333333; font-weight: normal;">[[email:greeting_with_name, '+t.__escape(e(n&&n.username))+"]],</h1>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t"+(e(n&&n.notifications&&n.notifications.length)?'\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style="padding: 0px 40px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;">\r\n\t\t\t\t\t\t<p style="margin: 0;">[[email:digest.notifications, '+t.__escape(e(n&&n.site_title))+"]]</p>\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t"+o.blocks.notifications(t,n,e,r,i)+"\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t":"")+'\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style="padding: 0px 40px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;">\r\n\t\t\t\t\t\t<p style="margin: 0;">[[email:digest.latest_topics, '+t.__escape(e(n&&n.site_title))+"]]</p>\r\n\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t"+(e(n&&n.recent&&n.recent.length)?"\r\n\t\t\t\t\t\t\t"+o.blocks.recent(t,n,e,r,i)+"\r\n\t\t\t\t\t\t\t":'\r\n\t\t\t\t\t\t\t<li style="text-decoration: none; list-style-type: none; padding-bottom: 0.5em; font-style: italic;">\r\n\t\t\t\t\t\t\t\t[[email:digest.no_topics, [[email:digest.'+t.__escape(e(n&&n.interval))+"]]]]\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t")+'\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style="padding: 0 40px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;">\r\n\t\t\t\t\t\t\x3c!-- Button : BEGIN --\x3e\r\n\t\t\t\t\t\t<table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" style="margin: auto;">\r\n\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t<td style="border-radius: 3px; background: #222222; text-align: center;" class="button-td">\r\n\t\t\t\t\t\t\t\t\t<a href="'+t.__escape(e(n&&n.url))+'" style="background: #222222; border: 15px solid #222222; font-family: sans-serif; font-size: 13px; line-height: 1.1; text-align: center; text-decoration: none; display: block; border-radius: 3px; font-weight: bold;" class="button-a">\r\n\t\t\t\t\t\t\t\t\t\t<span style="color:#ffffff;" class="button-link">&nbsp;&nbsp;&nbsp;&nbsp;[[email:digest.cta, '+t.__escape(e(n&&n.site_title))+']]&nbsp;&nbsp;&nbsp;&nbsp;</span>\r\n\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\x3c!-- Button : END --\x3e\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style="padding: 40px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;">\r\n\t\t\t\t\t\t<h2 style="margin: 0 0 10px 0; font-family: sans-serif; font-size: 18px; line-height: 21px; color: #333333; font-weight: bold;">[[email:closing]]</h2>\r\n\t\t\t\t\t\t<p style="margin: 0;">'+t.__escape(e(n&&n.site_title))+'</p>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t</td>\r\n\t</tr>\r\n\t\x3c!-- 1 Column Text + Button : END --\x3e\r\n\r\n</table>\r\n\x3c!-- Email Body : END --\x3e\r\n\r\n\t\t\t\x3c!-- Email Footer : BEGIN --\x3e\r\n\t\t\t<table role="presentation" cellspacing="0" cellpadding="0" border="0" align="center" width="100%" style="max-width: 680px;">\r\n\t\t\t\t<tr>\r\n\t\t\t\t\t<td style="padding: 40px 10px;width: 100%;font-size: 12px; font-family: sans-serif; line-height:18px; text-align: center; color: #888888;">\r\n\t\t\t\t\t\t<br><br>\r\n\t\t\t\t\t\t'+(e(n&&n.showUnsubscribe)?'\r\n\t\t\t\t\t\t[[email:notif.post.unsub.info]] <a href="'+t.__escape(e(n&&n.url))+"/uid/"+t.__escape(e(n&&n.uid))+'/settings">[[email:unsub.cta]]</a>.\r\n\t\t\t\t\t\t':"")+"\r\n\t\t\t\t\t\t<br><br>\r\n\t\t\t\t\t</td>\r\n\t\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t\x3c!-- Email Footer : END --\x3e\r\n\r\n\t\t\t\x3c!--[if mso]>\r\n\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t\t</table>\r\n\t\t\t<![endif]--\x3e\r\n\t\t</div>\r\n\r\n    </center>\r\n</body>\r\n\r\n</html>\r\n"}return o.blocks={recent:function(n,e,r,t,i){return t(r(e&&e.recent),function(t){return'\r\n\t\t\t\t\t\t\t<li style="text-decoration: none; list-style-type: none; padding-bottom: 0.5em;">\r\n\t\t\t\t\t\t\t\t<a href="'+n.__escape(r(e&&e.url))+"/topic/"+n.__escape(r(e&&e.recent&&e.recent[t]&&e.recent[t].slug))+'">\r\n\t\t\t\t\t\t\t\t\t'+n.__escape(i(e,n,"renderDigestAvatar",[r(e&&e.recent&&e.recent[t])]))+n.__escape(r(e&&e.recent&&e.recent[t]&&e.recent[t].title))+"\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t"})},notifications:function(n,e,r,t){return t(r(e&&e.notifications),function(t){return'\r\n\t\t\t\t\t\t\t<li style="text-decoration: none; list-style-type: none; padding-bottom: 0.5em;">\r\n\t\t\t\t\t\t\t\t<a href="'+n.__escape(r(e&&e.url))+n.__escape(r(e&&e.notifications&&e.notifications[t]&&e.notifications[t].path))+'">\r\n\t\t\t\t\t\t\t\t\t'+(r(e&&e.notifications&&e.notifications[t]&&e.notifications[t].image)?'\r\n\t\t\t\t\t\t\t\t\t<img style="vertical-align: middle; width: 16px; height: 16px; padding-right: 8px;" src="'+n.__escape(r(e&&e.notifications&&e.notifications[t]&&e.notifications[t].image))+'" />\r\n\t\t\t\t\t\t\t\t\t':'\r\n\t\t\t\t\t\t\t\t\t<div style="vertical-align: middle; width: 16px; height: 16px; line-height: 16px; font-size: 10px; margin-right: 8px; background-color: '+n.__escape(r(e&&e.notifications&&e.notifications[t]&&e.notifications[t].user&&e.notifications[t].user["icon:bgColor"]))+'; color: white; text-align: center; display: inline-block;">'+n.__escape(r(e&&e.notifications&&e.notifications[t]&&e.notifications[t].user&&e.notifications[t].user["icon:text"]))+"</div>\r\n\t\t\t\t\t\t\t\t\t")+"\r\n\t\t\t\t\t\t\t\t\t"+n.__escape(r(e&&e.notifications&&e.notifications[t]&&e.notifications[t].bodyShort))+"\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t"})}},o});