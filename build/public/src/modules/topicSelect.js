"use strict";define("topicSelect",["components"],function(t){var e={};var o;var c;e.init=function(t){c=$('[component="category"]');c.on("selectstart",'[component="topic/select"]',function(t){t.preventDefault()});c.on("click",'[component="topic/select"]',function(e){var c=$(this);if(e.shiftKey){a($(this).parents('[component="category/topic"]').attr("data-tid"));o=c;return false}var i=c.parents("[data-tid]").hasClass("selected");n(c,!i);o=c;if(typeof t==="function"){t()}})};function n(t,e){t.toggleClass("fa-check-square-o",e);t.toggleClass("fa-square-o",!e);t.parents('[component="category/topic"]').toggleClass("selected",e)}e.getSelectedTids=function(){var t=[];if(!c){return t}c.find('[component="category/topic"].selected').each(function(){t.push($(this).attr("data-tid"))});return t};e.unselectAll=function(){if(c){c.find('[component="category/topic"].selected').removeClass("selected");c.find('[component="topic/select"]').toggleClass("fa-check-square-o",false).toggleClass("fa-square-o",true)}};function a(e){if(!o){o=$('[component="category/topic"]').first().find('[component="topic/select"]')}var c=t.get("category/topic","tid",e).hasClass("selected");var n=s(e);var a=s(o.parents('[component="category/topic"]').attr("data-tid"));i(n,a,!c)}function i(t,e,o){if(t>e){var c=t;t=e;e=c}for(var a=t;a<=e;a+=1){var i=$('[component="category/topic"]').eq(a);n(i.find('[component="topic/select"]'),o)}}function s(e){return t.get("category/topic","tid",e).index('[component="category/topic"]')}return e});
//# sourceMappingURL=public/src/modules/topicSelect.js.map