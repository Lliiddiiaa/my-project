ymaps.ready(function() {
        
    var myMap = new ymaps.Map("map", {
        center: [25.18, 55.25],
        zoom: 12
    }, {
        searchControlProvider: 'yandex#search'
}),

MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
),

myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: 'Собственный значок метки',
    balloonContent: 'Это красивая метка'
}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/map-marker.png',
    iconImageSize: [42, 42],
    iconImageOffset: [-5, -38]
});

myMap.geoObjects
.add(myPlacemark);
   
});

ymaps.ready();