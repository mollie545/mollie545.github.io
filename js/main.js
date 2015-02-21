/* global $:false */
/* jshint ignore:start */
/* jshint ignore:end */

$(function(){
	// get the amount chosen and store it into a variable
	var zipcodeEntry = $('#zipcode-choices');
	var subjectEntry = $('#subject-choices');

	var subjectList = $('#subjectList');
	var zipcodeList = $('#zipcodeList');

	var african = $('#African');
	var asian = $('#Asian');
	var european = $('#European');
	var modern = $('#Modern');
	var science = $('#Science');

	var brooklyn = $('#Brooklyn');
	var manhattan = $('#Manhattan');
	var queens = $('#Queens');
	var statenisland = $('#Statenisland');
	var bronx = $('#Bronx');

	var brooklynMuseums = $('#brooklynMuseums');
	var manhattanMuseums = $('#manhattanMuseums');
	var queensMuseums = $('#queensMuseums');
	var statenislandMuseums = $('#statenislandMuseums');
	var bronxMuseums = $('#bronxMuseums');

	var africanMuseums = $('#africanMuseums');
	var asianMuseums = $('#asianMuseums');
	var europeanMuseums = $('#europeanMuseums');
	var modernMuseums = $('#modernMuseums');
	var scienceMuseums = $('#scienceMuseums');

	var map;
	var locations = [
	{name: 'The Brooklyn Museum', address: "16369 Eastern Pkwy, Brooklyn, NY 11238", lat: 40.672313, lng: -73.963524},
	{name: 'The Brooklyn Botanical Garden', address: '990 Washington Avenue, Brooklyn, NY 11225', lat: 40.666286, lng: -73.962062},
    {name: 'The Weeksville Heritage Center', address: '1698 Bergen St, Brooklyn, NY 11213', lat: 40.674237, lng: -73.925396},
    {name: 'The MoCADA', address: "80 Hanson Pl, Brooklyn, NY 11217", lat: 40.685475, lng: -73.974382},
    {name: 'The Jewish Childrens Museum', address: '792 Eastern Pkwy, Brooklyn, NY 11213', lat: 40.669153, lng: -73.941910},
    {name: 'The Coney Island USA', address: '1698 Bergen St, Brooklyn, NY 11213', lat: 40.579123, lng: -73.925396}
	];

	// start with all tab details hidden
	subjectList.hide(); zipcodeList.hide();
	manhattanMuseums.hide(); queensMuseums.hide(); statenislandMuseums.hide(); bronxMuseums.hide(); brooklynMuseums.hide();
	africanMuseums.hide(); asianMuseums.hide(); europeanMuseums.hide(); modernMuseums.hide(); scienceMuseums.hide();

	// when user clicks on choice, run function

	african.on("click", function(){
		event.preventDefault();

        manhattanMuseums.hide(); queensMuseums.hide(); statenislandMuseums.hide(); bronxMuseums.hide(); brooklynMuseums.hide();
		asianMuseums.hide(); europeanMuseums.hide(); modernMuseums.hide(); scienceMuseums.hide();
		africanMuseums.show();
		$(':input').not(":button").val('');
		locationsShow();
	});

	asian.on("click", function(){
		event.preventDefault();

		manhattanMuseums.hide(); queensMuseums.hide(); statenislandMuseums.hide(); bronxMuseums.hide(); brooklynMuseums.hide();
		africanMuseums.hide(); europeanMuseums.hide(); modernMuseums.hide(); scienceMuseums.hide();
		asianMuseums.show();
		$(':input').not(":button").val('');
		locationsShow();			
	});

	european.on("click", function(){
		event.preventDefault();

		manhattanMuseums.hide(); queensMuseums.hide(); statenislandMuseums.hide(); bronxMuseums.hide(); brooklynMuseums.hide();
		africanMuseums.hide(); asianMuseums.hide(); modernMuseums.hide(); scienceMuseums.hide();
		europeanMuseums.show();
		$(':input').not(":button").val('');	
		locationsShow();	
	});

	modern.on("click", function(){
		event.preventDefault();

		manhattanMuseums.hide(); queensMuseums.hide(); statenislandMuseums.hide(); bronxMuseums.hide(); brooklynMuseums.hide();
		africanMuseums.hide(); asianMuseums.hide(); europeanMuseums.hide(); scienceMuseums.hide();
		modernMuseums.show();
		$(':input').not(":button").val('');
		locationsShow();
		
	});

	science.on("click", function(){
		event.preventDefault();

		manhattanMuseums.hide(); queensMuseums.hide(); statenislandMuseums.hide(); bronxMuseums.hide(); brooklynMuseums.hide();
		africanMuseums.hide(); asianMuseums.hide(); europeanMuseums.hide(); modernMuseums.hide();
		scienceMuseums.show();
		$(':input').not(":button").val('');		
		locationsShow();
	});

	brooklyn.on("click", function(){
		event.preventDefault();

		africanMuseums.hide(); asianMuseums.hide(); europeanMuseums.hide(); modernMuseums.hide(); scienceMuseums.hide();
		manhattanMuseums.hide(); queensMuseums.hide(); statenislandMuseums.hide(); bronxMuseums.hide(); 
		brooklynMuseums.show();
		$(':input').not(":button").val('');	
		locationsShow();
	});

	manhattan.on("click", function(){
		event.preventDefault();

		africanMuseums.hide(); asianMuseums.hide(); europeanMuseums.hide(); modernMuseums.hide(); scienceMuseums.hide();
		brooklynMuseums.hide(); queensMuseums.hide(); statenislandMuseums.hide(); bronxMuseums.hide();
		manhattanMuseums.show();
		$(':input').not(":button").val('');		
		locationsShow();
	});

	queens.on("click", function(){
		event.preventDefault();

		africanMuseums.hide(); asianMuseums.hide(); europeanMuseums.hide(); modernMuseums.hide(); scienceMuseums.hide();
		brooklynMuseums.hide(); manhattanMuseums.hide(); statenislandMuseums.hide(); bronxMuseums.hide();
		queensMuseums.show();
		$(':input').not(":button").val('');	
		locationsShow();	
	});

	statenisland.on("click", function(){
		event.preventDefault();

		africanMuseums.hide(); asianMuseums.hide(); europeanMuseums.hide(); modernMuseums.hide(); scienceMuseums.hide();
		brooklynMuseums.hide(); manhattanMuseums.hide(); queensMuseums.hide(); bronxMuseums.hide();
		statenislandMuseums.show();
		$(':input').not(":button").val('');	
		locationsShow();	
	});

	bronx.on("click", function(){
		event.preventDefault();

		africanMuseums.hide(); asianMuseums.hide(); europeanMuseums.hide(); modernMuseums.hide(); scienceMuseums.hide();
		brooklynMuseums.hide(); manhattanMuseums.hide(); queensMuseums.hide(); statenislandMuseums.hide();
		bronxMuseums.show();
		$(':input').not(":button").val('');	
		locationsShow();	
	});


function initialize() {

	var mapOptions = {
	    zoom: 11,
	    center: {lat: 40.676207, lng: -71.943919}
	  	};

	  	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);

function locationsShow(){

  	locations.forEach(function(element, index, array){
    var marker, content;
    marker = createMarker(element);

  });

  function createMarker(element){
    var coordinates = new google.maps.LatLng(element.lat, element.lng); 
    var marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      title: element.name
    });

    return marker;
  }

}

});


