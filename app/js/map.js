// координаты маркеров
var markersData = [
  {
    lat: 55.747230,     // Широта
    lng: 37.601266,    // Долгота
    name: "Адрес 1", // Произвольное название, которое будем выводить в информационном окне
    url: 'img/map.png'
  },
  {
    lat: 55.769072,
    lng: 37.619284,
    name: "Адрес 2",
    url: 'img/map.png'
  },
  {
    lat: 55.752742,
    lng: 37.648823,
    name: "Адрес 3",
    url: 'img/map.png'
  },
  {
    lat: 55.729838,
    lng: 37.664774,
    name: "Адрес 4",
    url: 'img/map.png'
  }
];
// координаты центров городов
var centerMaps = [
  {
    latX: 55.755773,
    latY: 37.617761
  },
  {
    latX: 43.581509,
    latY: 39.722882
  },
  {
    latX: 45.048259,
    latY: 38.983913
  },
  {
    latX: 54.733263,
    latY: 55.973696
  }
]
var map, latLng, url, name, mark, marker, thisCenter;
function initMap() {
  thisCenterX = centerMaps[0].latX;
  thisCenterY = centerMaps[0].latY;
  var centerLatLng = new google.maps.LatLng(thisCenterX, thisCenterY);
  var mapOptions = {
    center: centerLatLng,
    zoom: 10,
    scrollwheel: false,
    panControl: false,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    rotateControl: false,
    styles:
        [

          {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "saturation": 36
              },
              {
                "color": "#333333"
              },
              {
                "lightness": 40
              }
            ]
          },
          {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "visibility": "on"
              },
              {
                "color": "#ffffff"
              },
              {
                "lightness": 16
              }
            ]
          },
          {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#fefefe"
              },
              {
                "lightness": 20
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 17
              },
              {
                "weight": 1.2
              },
              {
                "visibility": "on"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "labels.text",
            "stylers": [
              {
                "color": "#4b4b4b"
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              },
              {
                "lightness": 20
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              },
              {
                "lightness": 21
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dedede"
              },
              {
                "lightness": 21
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 17
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 29
              },
              {
                "weight": 0.2
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 18
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              },
              {
                "lightness": 16
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f2f2f2"
              },
              {
                "lightness": 19
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e9e9e9"
              },
              {
                "lightness": 17
              }
            ]
          }

        ]
  };

  map = new google.maps.Map(document.getElementById("map"), mapOptions);


  // Определяем границы видимой области карты в соответствии с положением маркеров
  var bounds = new google.maps.LatLngBounds();

  for (let i = 0; i < markersData.length; i++){

    latLng = new google.maps.LatLng(markersData[i].lat, markersData[i].lng);
    name = markersData[i].name;
    url = markersData[i].url;
    number = markersData[i].number;
    addMarker(latLng, name, url, number);
  }

  // Автоматически масштабируем карту так, чтобы все маркеры были в видимой области карты
  // map.fitBounds(bounds);
  var myoverlay = new google.maps.OverlayView();
  myoverlay.draw = function () {
    this.getPanes().markerLayer.id='markerLayer';
  };
  myoverlay.setMap(map);

}
google.maps.event.addDomListener(window, "load", initMap);
function addMarker(latLng, name, url) {
  marker = new google.maps.Marker({
    position: latLng,
    map: map,
    title: name,
    icon: {
      url: url,
      scaledSize: new google.maps.Size(18, 28)
    }
  });
}
