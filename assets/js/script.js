var map;
var InforObj = [];


var centerCords = {
  lat: 16.058324,
  lng: 108.277000
};

var markersOnMap = [{
    placeName: ' <b>Ho-Chi-Minh City</b>  <br>' +
      'Ho Chi Minh City (commonly known as Saigon) is a city in southern Vietnam. <br>' +
      'Famous for the pivotal role it played in' +
      'the Vietnam War. Its also known for its French colonial landmarks,' +
      'including Notre-Dame Cathedral, made entirely of materials imported from France,' +
      'and the 19th-century Central Post Office. Food stalls line the city’s streets,' +
      'especially around bustling Bến Thành Market.',
    LatLng: [{
      lat: 10.775844,
      lng: 106.701756
    }]
  },
  {
    placeName: "<b>Grand Mercure Danang (Da Nang City)</b> <br>" +
      '<b>Address:</b> Zone of the Villas of Green Island, Lot A1, Đà Nẵng 084511, Vietnam. <br>' +
      '<b>Five Star Hotel</b> - ☆☆☆☆☆   ',
    icon: 'pin.png',
    LatLng: [{
      lat: 16.048297,
      lng: 108.226951
    }]
  },
  {
    placeName: '<b>Da Nang City</b> <br>' +
      'Da Nang is a coastal city in central Vietnam known for its sandy beaches and history' +
      'as a French colonial port. Its a popular base for visiting the inland <b>Bà Nà</b> hills' +
      'to the west of the city. Here the hillside <b>Hải Vân</b> Pass has views of Da Nang Bay' +
      'and the Marble Mountains. These 5 limestone outcrops are topped with pagodas and hide' +
      'caves containing Buddhist shrines.',
    LatLng: [{
      lat: 16.068000,
      lng: 108.212000
    }]
  },
  {
    placeName: "<b>Dalat Hôtel du Parc (Dalat City)</b> <br>" +
      '<b>Address:</b> 15 Đường Trần Phú, Phường 3, Thành phố Đà Lạt, Lâm Đồng, Vietnam. <br>' +
      '<b>Four Star Hotel</b>: ☆☆☆☆  ',
    icon: 'pin.png',
    LatLng: [{
      lat: 11.9367,
      lng: 108.4390
    }]
  },
  {
    placeName: "<b>Nhà gỗ - The Wooden House Restaurant (Dalat City)</b> <br>" +
      '<b>Address:</b> 26 Đường Nguyễn Đình Chiểu, Phường 9, Thành phố Đà Lạt, Lâm Đồng, Vietnam. <br>' +
      '<b>Four Star Restaurant<b> : ☆☆☆☆  ',
    icon: 'pin.png',
    LatLng: [{
      lat: 11.9505,
      lng: 108.4582
    }]
  },
  {
    placeName: '<b>Dalat City</b> <br>' +
      '<b>Đà Lạt</b>, the capital of <b>Lâm Đồng</b> Province in southern Vietnam’s Central Highlands,' +
      'is centered around a lake and golf course, and surrounded by hills, pine forests,' +
      'lakes and waterfalls. Known as the “City of Eternal Spring” for its distinctive temperate' +
      'climate, Đà Lạt was developed as a resort by the French in the early 1900s,' +
      'and many reminders of its colonial heritage remain.',
    LatLng: [{
      lat: 11.936230,
      lng: 108.445259
    }]
  },
  {
    placeName: "<b>Beaulieu Boutique Hotel (Hue City)</b> <br>" +
      '<b>Address:</b> 15 Pham Ngu Lao, Hue, Vietnam. <br>' +
      'Four Star Hotel: ☆☆☆☆   ',
    icon: 'pin.png',
    LatLng: [{
      lat: 16.4691,
      lng: 107.5947
    }]
  },
  {
    placeName: "<b>Hanh Restaurant (Hue City)</b> <br>" +
      '<b>Address:</b> 11 Đường Phó Đức Chính, Phú Hội, Tp. Huế, Phú Hội, Vietnam. <br>' +
      '<b> Rated 4.5 Stars:</b> ☆☆☆☆  ',
    icon: 'pin.png',
    LatLng: [{
      lat: 16.4663,
      lng: 107.5950
    }]
  },
  {
    placeName: '<b>Hue City</b> <br>' +
      'Huế is a city in central Vietnam that was the seat of Nguyen Dynasty emperors and the' +
      'national capital from 1802 to 1945. A major attraction is its vast,' +
      '19th-century <b>Đại Nội Citadel</b>, surrounded by a moat and thick stone walls.' +
      'It encompasses the Imperial City, with palaces and shrines;' +
      'the Forbidden Purple City (<b>Tử cấm thành</b>), once the emperor’s home;' +
      'and a replica of the Royal Theater.',
    LatLng: [{
      lat: 16.463713,
      lng: 107.590866
    }]
  },
  {
    placeName: "Vietnam (Hanoi Cooking Centre)",
    icon: 'pin.png',
    LatLng: [{
      lat: 21.054374,
      lng: 105.837032
    }]

  },
  {
    placeName: "Vietnam (Fortuna Hotel, Hanoi)",
    icon: 'pin.png',
    LatLng: [{
      lat: 21.0215,
      lng: 105.8178
    }]

  },
  {
    placeName: '<b>Hanoi</b> (<b>Capital City</b>) <br>' +
      'is known for its centuries-old architecture and a rich culture with Southeast Asian,' +
      'Chinese and French influences. At its heart is the chaotic Old Quarter, where the narrow' +
      'streets are roughly arranged by trade. There are many little temples,' +
      'including Bach Ma, honoring a legendary horse,' +
      'plus Đồng Xuân Market, selling household goods and street food.',
    LatLng: [{
      lat: 21.027763,
      lng: 105.834160
    }]
  }
];

window.onload = function() {
  initMap();
};

function addMarker() {
  var markers = [];
  for (var i = 0; i < markersOnMap.length; i++) {
    var contentString = '<div id="content"><p>' + markersOnMap[i].placeName +
      '</p></div>';

    const marker = new google.maps.Marker({
      position: markersOnMap[i].LatLng[0],
      map: map
    });

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 200
    });

    marker.addListener('click', function() {
      closeOtherInfo();
      infowindow.open(marker.get('map'), marker);
      InforObj[0] = infowindow;
    });
    marker.addListener('mouseover', function() {
      closeOtherInfo();
      infowindow.open(marker.get('map'), marker);
      InforObj[0] = infowindow;
    });
    // marker.addListener('mouseout', function () {
    //     closeOtherInfo();
    //     infowindow.close();
    //     InforObj[0] = infowindow;
    // });
    markers.push(marker);
  }
  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });
  
   
      
}

function closeOtherInfo() {
  if (InforObj.length > 0) {
    /* detach the info-window from the marker ... undocumented in the API docs */
    InforObj[0].set("marker", null);
    /* and close it */
    InforObj[0].close();
    /* blank the array */
    InforObj.length = 0;
  }
}

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: centerCords
  });
  
  

        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        // Bias the SearchBox results towards current map's viewport.
      

        var markers = [];
        // Listen for the event fired when the user selects a prediction and retrieve
        // more details for that place.
        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          if (places.length == 0) {
            return;
          }

          // Clear out the old markers.
          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          // For each place, get the icon, name and location.
          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location
            }));

            if (place.geometry.viewport) {
              // Only geocodes have viewport.
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });

  addMarker();
}


       
