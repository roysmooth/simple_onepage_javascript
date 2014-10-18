//4myfamily roysmooth2014//
jQuery(function($){var roysmooth = window.roysmooth || {};roysmooth.hpctx = function(){var windowWidth = $(window).width(); 
var windowhight =(document.height !== undefined) ? document.height : document.body.offsetHeight;
if( windowWidth <= 979 ) {} else {}}
roysmooth.scrool = function(){ 
var headerY = $('#nemplok').offset().top;
var Mpoksiti = $(window).scrollTop();
$('#nemplok').css({'visibility': 'hidden'});
if (Mpoksiti >= 750) {$('#nemplok').css({'position': 'fixed', 'top': '0px'});
$('#nemplok').css({'visibility': 'visible'});
}else{$('#nemplok').css({'position': 'relative' });}}
roysmooth.menu = function(){$('#menu-nav').onePageNav({currentClass: 'current', changeHash: false,scrollSpeed: 750, scrollOffset: 30,scrollThreshold: 0.5,easing: 'easeOutExpo',filter: ':not(.external)'});};roysmooth.goSection = function(){$('.nextsection').on('click', function(){$target = $($(this).attr('href')).offset().top-50;$('body, html').animate({scrollTop : $target}, 750, 'easeOutExpo');return false;});}
$(document).ready(function(){roysmooth.scrool();roysmooth.hpctx();roysmooth.menu();roysmooth.goSection()});
$(window).scroll(function(){roysmooth.scrool(); });$(window).resize(function(){roysmooth.hpctx();});});
$.fn.scrollBottom = function() { return $(document).height() - this.scrollTop() - this.height();};
