function initMap() {
    var Hanoi = { lat: 21.027763, lng: 105.834160 };
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: {
            lat: 14.058324,
            lng: 108.277199
        }
    });
    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Hanoi City</h1>' +
        '<div id="bodyContent">' +
        '<p><b>Hanoi</b>, is the <b>Capital City of Vietnam</b>, is known for centuries old architecture' +
        'and a rich culture with Southeast Asian, Chinese and French influences' +
        'At its heart is the chaotic Old Quarter, where the narrow streets are roughly arranged by trade. ' +
        ' There are many little temples, including Bach Ma, honoring a legendary horse, plus Đồng Xuân Market,' +
        'selling household goods and street food.</p>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: Hanoi,
        map: map,
        title: 'Hanoi City'
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);


        var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
        var locations = [{
            lat: 10.823099,
            lng: 106.629662
        }, {
            lat: 11.936230,
            lng: 108.445259
        }, {
            lat: 16.075239,
            lng: 108.224136
        }, {
            lat: 16.463713,
            lng: 107.590866,
        }, {
            lat: 21.027763,
            lng: 105.834160,
        }];



    });
}

function initPlaces() {
    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
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
