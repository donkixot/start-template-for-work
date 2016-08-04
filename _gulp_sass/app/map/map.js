var map;
function initialize() {
   if (jQuery('#map-canvas').length > 0) {
       var lat = jQuery('#map-canvas').attr('data-lat');
       var lng = jQuery('#map-canvas').attr('data-lng');
       var zoom = jQuery('#map-canvas').attr('data-zoom');
       var mapOptions = {
           zoom: parseInt(zoom),
           scrollwheel: false,
           center: new google.maps.LatLng(lat, lng)
       };
       map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

       var point = new google.maps.LatLng(lat, lng);

       var image = new google.maps.MarkerImage(
           '/wp-content/themes/kand-fruit/images/point.png',
           new google.maps.Size(34, 53)
       );

       var marker = new google.maps.Marker({
           icon: image,
           draggable: false,
           raiseOnDrag: false,
           map: map,
           position: point
       });
   }
}

google.maps.event.addDomListener(window, 'load', initialize);