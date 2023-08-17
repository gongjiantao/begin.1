// HTML document is loaded
jQuery( window ).on( "load", function() {
  "use strict";

  // autoheight fucntion
  autoheight();
  autoheight1();
  autoheight2();

  // var preloader
  var loader = jQuery( '.loader' );
  var bgpreloader = jQuery( '.backgroundloader' );

  // var navigation
  var menumobile = jQuery( '#main-menu' );
  var navdefault = jQuery( '.navbar-default-white' );
  var Navactive = jQuery( "nav a" );
  var subnav = jQuery( ".subnav" );

  // var navigation
  var menublock = jQuery('#menu-block');
  var navicon = jQuery('#nav-icon');
  var dropdwown = jQuery(".dropdown-container");
  var blockmain = jQuery(".block-main");
  var menuline = jQuery(".menu-line, .menu-line1, .menu-line2");

  // start function fadeOut preloader when condition window has been load
  loader.fadeOut( 'slow', function() {
      "use strict";
      // opening slideup
      setTimeout(function() {
        bgpreloader.fadeOut();
      }, 300);
      // animated transition & scroll onStep
      onStep();
      // stick navbar
      navdefault.sticky();
      // responsive part
      if ( jQuery( window ).width() < 1200 ) {
        
      }
      // responsive part tap menu
      jQuery('.menu-item span.span-drop, .parent-menu span.span-drop, li span.span-drop')
      .on('click', function(e){
        e.stopPropagation();  
        var $ul = $(this).closest('.menu-item, .parent-menu, #menu-center ul li').find('ul');
        $ul.slideToggle();
      });  
      // mobile icon
      jQuery( ".navbar-toggle" )
      .on( "click", function() {
          menumobile.slideToggle(300)
          navdefault.toggleClass( 'fullHeight' );
      });
  });
  // end function

  // full block menu
  navicon.on("click", function(e) {
    menublock.toggle('slide', {
            direction: 'right'
        }, 'fast');
    jQuery(this).toggleClass('open');
    blockmain.fadeToggle(300);
    menuline.toggleClass('black');
    });
  
  // block-main close block menu
  blockmain.on("click", function(e) {
    jQuery(this).fadeToggle(300);
  menublock.toggle('slide', {
            direction: 'right'
        }, 'fast');
    navicon.toggleClass('open');
    menuline.toggleClass('black');
   });

  //dropdown
  jQuery('.dropdown').each(function() {
     var $dropdown = $(this);
     jQuery("a.dropdown-link i", $dropdown).on('click', function(e) {
      e.preventDefault();
      var $div = jQuery(".dropdown-container", $dropdown);
      $div.slideToggle('fast');
      dropdwown.not($div).slideUp('fast');
      return false;
    });
   });
    
  $('html').on("click", function(e) {
    dropdwown.slideUp('fast');
  });

  // contact form
  var contactname1 = jQuery('#name-contact-1');
  var contactemail = jQuery('#email-contact, input#email-contact');
  var contactmessage = jQuery('#message-contact');
  var contactsent1 = jQuery('#send-contact-1');
  //form failed succes var
  var successent = jQuery( "#mail_success" );
  var failedsent = jQuery( "#mail_failed" );

  // contact-1 form
  jQuery(function() {
  contactsent1.on('click', function(e) {
  e.preventDefault();
  var e = contactname1.val(),
  a = contactemail.val(),
  s = contactmessage.val(),
  r = !1;
  if (0 == a.length || "-1" == a.indexOf("@") || "-1" == a.indexOf(".")) {
  var r = !0;
  contactemail.css({
    "border": "1px solid #dd4425"
  });
  } else contactemail.css({
  "border": "1px solid rgba(255,255,255,.1)"
  });
  if (0 == e.length) {
  var r = !0;
  contactname1.css({
    "border": "1px solid #dd4425"
  });
  } else contactname1.css({
  "border": "1px solid rgba(255,255,255,.1)"
  });
  if (0 == s.length) {
  var r = !0;
  contactmessage.css({
    "border": "1px solid #dd4425"
  });
  } else contactmessage.css({
  "border": "1px solid rgba(255,255,255,.1)"
  });
  return 0 == r && (contactsent1.attr({
  disabled: "true",
  value: "Sending..."
  }), $.ajax({
  type: "POST",
  url: "send.php",
  data: "name=" + e + "&email=" + a + "&subject=You Got Email&message=" + s,
  success: function(e) {
    "success" == e ? (successent.fadeIn(500)) : (failedsent.html(e).fadeIn(500), contactsent1.removeAttr("disabled").attr("value", "send").remove())
  }
  })), !1
  })
  });

  // date picker
  jQuery('.input-group.date').datepicker({format: "dd/mm/yyyy"});

  // max-char
  jQuery(function () {
    var maxL = 80;
    jQuery('p.max-char').each(function (i, div) {
        var text = $(div).text();
        if(text.length > maxL) {
            var begin = text.substr(0, maxL),
                end = text.substr(maxL); 
                $(div).html(begin)
                .append($('<a class="readmore"/>').html('...'))
                .append($('<div class="hidden" />').html(end)); 
        }
    });
  })

 });
// HTML document is loaded end