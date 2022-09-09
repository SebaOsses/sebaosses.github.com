var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_VolcanesMaule_1 = new ol.format.GeoJSON();
var features_VolcanesMaule_1 = format_VolcanesMaule_1.readFeatures(json_VolcanesMaule_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VolcanesMaule_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VolcanesMaule_1.addFeatures(features_VolcanesMaule_1);
var lyr_VolcanesMaule_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VolcanesMaule_1, 
                style: style_VolcanesMaule_1,
                interactive: true,
                title: '<img src="styles/legend/VolcanesMaule_1.png" /> Volcanes Maule'
            });
var format_AHP_2 = new ol.format.GeoJSON();
var features_AHP_2 = format_AHP_2.readFeatures(json_AHP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AHP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AHP_2.addFeatures(features_AHP_2);
var lyr_AHP_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AHP_2, 
                style: style_AHP_2,
                interactive: true,
    title: 'AHP<br />\
    <img src="styles/legend/AHP_2_0.png" /> Muy baja<br />\
    <img src="styles/legend/AHP_2_1.png" /> Baja<br />\
    <img src="styles/legend/AHP_2_2.png" /> Media<br />\
    <img src="styles/legend/AHP_2_3.png" /> Alta<br />\
    <img src="styles/legend/AHP_2_4.png" /> Muy alta<br />'
        });
var lyr_GWPZ_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "GWPZ",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/GWPZ_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7976394.604887, -4377800.185209, -7825404.405895, -4141738.237863]
                            })
                        });

lyr_GoogleSatellite_0.setVisible(true);lyr_VolcanesMaule_1.setVisible(true);lyr_AHP_2.setVisible(false);lyr_GWPZ_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_VolcanesMaule_1,lyr_AHP_2,lyr_GWPZ_3];
lyr_VolcanesMaule_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Ranking': 'Ranking', 'Tipo': 'Tipo', });
lyr_AHP_2.set('fieldAliases', {'fid_1': 'fid_1', 'DN': 'DN', 'Potencial': 'Potencial', });
lyr_VolcanesMaule_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Ranking': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_AHP_2.set('fieldImages', {'fid_1': 'TextEdit', 'DN': 'TextEdit', 'Potencial': 'TextEdit', });
lyr_VolcanesMaule_1.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label', 'Ranking': 'no label', 'Tipo': 'no label', });
lyr_AHP_2.set('fieldLabels', {'fid_1': 'no label', 'DN': 'no label', 'Potencial': 'inline label', });
lyr_AHP_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});