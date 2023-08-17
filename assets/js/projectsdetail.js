jQuery( document ).ready( function() {
      //lightgallery
      $('.big-img-1').on('click', function(e) {
          $(this).lightGallery({
              dynamic: true,
              dynamicEl: [{
                  src: 'assets/images/gallery-home/img1.jpg',
                  thumb: 'assets/images/gallery-home/img1.jpg'
              },{
                  src: 'assets/images/gallery-home/img3.jpg',
                  thumb: 'assets/images/gallery-home/img3.jpg'
              },{
                  src: 'assets/images/gallery-home/img4.jpg',
                  thumb: 'assets/images/gallery-home/img4.jpg'
              }]
          });
      });	
 } );