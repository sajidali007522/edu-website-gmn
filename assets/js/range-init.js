 $( function() {
  $( "#slider-range-max" ).slider({
    range: "max",
    min: 1,
    max: 7,
    value: 4,
    slide: function( event, ui ) {
      $( "#amount" ).val( ui.value );
    }
  });
  $( "#amount" ).val( $( "#slider-range-max" ).slider( "value" ) );
} );