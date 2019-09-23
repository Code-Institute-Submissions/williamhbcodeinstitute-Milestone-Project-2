var map;
var InforObj = [];

var centerCords = {
    lat: 16.058324,
    lng: 108.277000
};

var markersOnMap = [{
        placeName: "Vietnam (Ho-Chi-Minh City)",
        LatLng: [{
            lat: 10.775844,
            lng: 106.701756
        }]
    },
    {
        placeName: "Vietnam (Da Nang City)",
        LatLng: [{
            lat: 16.068000,
            lng: 108.212000
        }]
    },
    {
        placeName: "Vietnam (Dalat City)",
        LatLng: [{
            lat: 11.936230,
            lng: 108.445259
        }]
    },
    {
        placeName: "Vietnam (Hue City)",
        LatLng: [{
            lat: 16.463713,
            lng: 107.590866
        }]
    },
     {
        placeName: "Vietnam (Hanoi Cooking Centre)",
        LatLng: [{
            lat: 21.054374,
            lng: 105.837032
        }]
    },
    {
        placeName: "Vietnam (Hanoi, Capital City)",
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
    for (var i = 0; i < markersOnMap.length; i++) {
        var contentString = '<div id="content"><h1>' + markersOnMap[i].placeName +
            '</h1><p>Lorem ipsum dolor sit amet, vix mutat posse suscipit id, vel ea tantas omittam detraxit.</p></div>';

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
        // marker.addListener('mouseover', function () {
        //     closeOtherInfo();
        //     infowindow.open(marker.get('map'), marker);
        //     InforObj[0] = infowindow;
        // });
        // marker.addListener('mouseout', function () {
        //     closeOtherInfo();
        //     infowindow.close();
        //     InforObj[0] = infowindow;
        // });
    }
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
    addMarker();
}

