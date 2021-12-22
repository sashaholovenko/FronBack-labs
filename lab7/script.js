// Accordion
$( function() {
    $( "#accordion" ).accordion();
  } );

// Autocomplete

  $( function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "GoLand",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
  } );

// Datapicker
  $( function() {
    $( "#datepicker" ).datepicker();
  } );


// Menu
  $( function() {
    $( "#menu" ).menu();
  } );


// Slider
  $( function() {
    $( "#slider" ).slider();
  } );

// Tabs
  $( function() {
    $( "#tabs" ).tabs();
  } );

// Tooltip
  $( function() {
    $( document ).tooltip();
  } );

// Gallery

jQuery(document).ready(function(){

    jQuery("#galleryTiles").unitegallery({

        gallery_theme: "tiles",

        tiles_type: "nested"

    });

});



//////
$('#date').text(new Date().toLocaleDateString());
const currencyObj = {
    USD: 'доллар США',
    UAH: 'укр. гривна',
    RUR: 'рос. рубль',
    EUR: 'евро',
    BTC: 'биткоин'
}
$.getJSON("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5", function (result) {
    console.log(result);
    $.each(result, function (i, field) {
        console.log('field', field);
        var tr = "<td>" + currencyObj[field.base_ccy] + "</td><td>" + currencyObj[field.ccy] 
        + "</td><td>" + field.buy + "</td><td>" + field.sale + "</td>";
        $("#currencyTable tbody").append("<tr>" + tr + "</tr>");
    });
});


