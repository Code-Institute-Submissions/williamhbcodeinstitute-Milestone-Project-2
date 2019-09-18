function initMap() {
    var locations = [
    { lat: 10.823099, lng: 106.629662 },
    { lat: 11.936230, lng: 108.445259 },
    { lat: 16.075239, lng: 108.224136 },
    { lat: 16.463713, lng: 107.590866 },
    { lat: 21.027763, lng: 105.834160, }
];
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: {
            lat: 16.058324,
            lng: 108.277000
        }
    });

    // Create an array of alphabetical characters used to label the markers.
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

    var request = {
        placeId: 'ChIJLUKBJJerNTERCH5DEUBZgLg',
        fields: ['name', 'formatted_address', 'place_id', 'geometry']
    };

    var infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);

    service.getDetails(request, function(place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location
            });
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                    'Place ID: ' + place.place_id + '<br>' +
                    place.formatted_address + '</div>');
                infowindow.open(map, this);
            });
        }
    });
}


