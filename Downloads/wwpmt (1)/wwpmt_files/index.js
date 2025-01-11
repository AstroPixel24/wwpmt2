var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  //let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

function fullScreenIntro(){$(".intro").css({height:$(window).height(),width:$(window).width()})}$(window).resize(fullScreenIntro),$(document).ready(function(){fullScreenIntro(),$(".scrollspy").scrollSpy(),$(".parallax").parallax()}),$("#learn-more").click(function(){$("html, body").animate({scrollTop:$("#about").offset().top},500,function(){$("#navbar_public").fadeIn(),$(document).bind("scroll",function(){var n=$(this).scrollTop();n>500?$("#navbar_public").fadeIn():$("#navbar_public").hide()})})});

}
/*
     FILE ARCHIVED ON 20:00:43 Mar 18, 2016 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 23:32:45 Oct 30, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 1.147
  exclusion.robots: 0.019
  exclusion.robots.policy: 0.008
  esindex: 0.008
  cdx.remote: 21.947
  LoadShardBlock: 189.387 (3)
  PetaboxLoader3.datanode: 178.899 (5)
  PetaboxLoader3.resolve: 149.869 (3)
  load_resource: 160.85 (2)
*/