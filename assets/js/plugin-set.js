jQuery( document ).ready( function() {

        // ligtgallery gallery
        var lGgall = jQuery('.w-gallery-container');
        if (lGgall.length) {
            $('.w-gallery-container').lightGallery({
                thumbnail:true
            }); 
        } else {
           //nothing happen
        }

        var popgaller = jQuery('.popgaller');
        if (popgaller.length) {
            $('.popgaller').lightGallery({
                thumbnail:true
            }); 
        } else {
           //nothing happen
        }

        // owlCarousel home img
        $("#imghome").owlCarousel({
        margin:15,
        responsiveClass:true,
        nav:false,
        mouseDrag: true,
        touchDrag: true,
        responsive:{
        0:{
        items:1,
        mouseDrag: true,
        },
        320:{
        items:1,
        mouseDrag: true,
        },
        414:{
        items:1,
        loop:false,
        mouseDrag: true,
        },
        800:{
        items:1,
        loop:false,
        mouseDrag: true,
        },
        1024:{
        items:1,
        loop:false,
        mouseDrag: true,
        }
        }
        });

        // owlCarousel gal
        $("#owl-gal").owlCarousel({
        margin:15,
        responsiveClass:true,
        dots : false,
        responsive:{
        0:{
            items:1,
            nav:true,
            stagePadding: 0
        },
        320:{
            items:1,
            nav:true,
            stagePadding: 0
        },
        414:{
            items:1,
            nav:true,
            loop:true,
            stagePadding: 0
        },
        800:{
            items:2,
            nav:true,
            loop:true,
            stagePadding: 0
        },
        1024:{
            items:3,
            nav:true,
            loop:true,
            stagePadding: 0
         }
        },
        nav:true,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
        });
        // owlCarousel gallery
        $("#owl-gallery").owlCarousel({
        margin:15,
        responsiveClass:true,
        dots : false,
        responsive:{
        0:{
            items:1,
            nav:true,
            stagePadding: 0
        },
        320:{
            items:1,
            nav:true,
            stagePadding: 0
        },
        414:{
            items:1,
            nav:true,
            loop:false,
            stagePadding: 0
        },
        800:{
            items:2,
            nav:true,
            loop:false,
            stagePadding: 0
        },
        1024:{
            items:3,
            nav:true,
            loop:false,
            stagePadding: 0
         }
        },
        nav:true,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
        });
        // owlCarousel detail
        $("#owl-detail").owlCarousel({
        margin:15,
        responsiveClass:true,
        dots : false,
        responsive:{
        0:{
            items:1,
            nav:true,
            stagePadding: 0
        },
        320:{
            items:1,
            nav:true,
            stagePadding: 0
        },
        414:{
            items:1,
            nav:true,
            loop:false,
            stagePadding: 0
        },
        800:{
            items:1,
            nav:true,
            loop:false,
            stagePadding: 0
        },
        1024:{
            items:1,
            nav:true,
            loop:true,
            stagePadding: 0
         }
        },
        nav:true,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
        });
        // fucntion show hide detail
        jQuery('.hide-detail').on( "click", function() {
            $(this).hide();
            $('.show-detail').show();
            $('.detaillist').slideUp('fast');
        });
         jQuery('.show-detail').on( "click", function() {
            $(this).hide();
            $('.hide-detail').show();
            $('.detaillist').slideDown(300);
        });
		// owlCarousel team
        $("#owl-team").owlCarousel({
        responsiveClass:true,
        responsive:{
        0:{
            items:1,
            nav:true,
            margin:0,
            stagePadding: 0
        },
        320:{
            items:1,
            nav:true,
            margin:0,
            stagePadding: 0
        },
        414:{
            items:1,
            nav:true,
            loop:true,
            margin:0,
            stagePadding: 0
        },
        800:{
            items:2,
            nav:true,
            loop:true,
            margin:30,
            stagePadding: 0
        },
        1024:{
            items:2,
            nav:true,
            loop:true,
            margin:30,
            stagePadding: 0
         },
         1280:{
            items:3,
            nav:true,
            loop:true,
            margin:30,
            stagePadding: 0
         }
        },
        nav:true,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
        });
        // owlCarousel brand
        $("#owl-brand").owlCarousel({
        responsiveClass:true,
        responsive:{
        0:{
            items:2,
            nav:false,
            margin:0,
            stagePadding: 0
        },
        320:{
            items:2,
            nav:false,
            margin:0,
            stagePadding: 0
        },
        414:{
            items:3,
            nav:false,
            loop:true,
            margin:0,
            stagePadding: 0
        },
        800:{
            items:4,
            nav:false,
            loop:true,
            margin:0,
            stagePadding: 0
        },
        1024:{
            items:6,
            nav:false,
            loop:true,
            margin:0,
            stagePadding: 0
         }
        },
        nav:false,
        navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
        });

        
        // set mansory gallery max width
        var maingall = jQuery('#w-gallery-container');
        if (maingall.length) {
        var masonry = new Macy({
                container: '#w-gallery-container',
                trueOrder: false,
                waitForImages: true,
                debug: true,
                columns: 3,
                breakAt: {
                  1200: {
                    columns: 3,
                  },
                  940: {
        		    columns: 2,
                  },
                  700: {
                    columns: 1,
                  },
                  400: {
                    columns: 1
                  }
                }
              });

        } else {
           //nothing happen
        }

        // projects width gallery
        var $Wcontainerpro = jQuery( '.w-gallery-container' );
        if ($Wcontainerpro.length) {
        $Wcontainerpro.isotope( {
            itemSelector: '.w-gallery',
            filter: '*'
        } );
		var $filterCount = $('.numimg');
		var iso = $Wcontainerpro.data('isotope');
        jQuery( '.filt-projects-w' ).on( 'click', function( e ) {
                e.preventDefault();
                var $this = jQuery( this );
                if ( $this.hasClass( 'selected' ) ) {
                    return false;
                }
                var $optionSetpro = $this.parents();
                $optionSetpro.find( '.selected' ).removeClass( 'selected' );
                $this.addClass( 'selected' );           
                var selector = $( this ).attr( 'data-project' );
                $Wcontainerpro.isotope( { filter: selector, } );
                $Wcontainerpro.isotope({ filter: selector });
			    updateFilterCount();
                return false;
            });
	        function updateFilterCount() {
			  $filterCount.text( iso.filteredItems.length );
			}
			updateFilterCount();

          // layout Isotope after each image loads
          $Wcontainerpro.imagesLoaded().progress( function() {
          $Wcontainerpro.isotope('layout');
          });
          // count 
          var numItems = $('.w-gallery').length;
          $('.numalbm').text(numItems); 

          } else {
           //nothing happen
        }


        
			
 } );