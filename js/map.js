/*********************************/
/**** Basic Map Functionality ****/
var map = new OpenLayers.Map('map');
var layer = new OpenLayers.Layer.OSM('Open Street Map');
map.addLayer(layer);
map.setCenter(
    new OpenLayers.LonLat(-76.611207, 39.283825).transform(
        new OpenLayers.Projection('EPSG:4326'),
        map.getProjectionObject()
    ), 13
);    