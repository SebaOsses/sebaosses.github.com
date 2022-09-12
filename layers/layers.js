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
var lyr_Zonaspotencialesdeaguassubterrneas_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Zonas potenciales de aguas subterráneas",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Zonaspotencialesdeaguassubterrneas_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7976394.604887, -4377800.185209, -7825404.405895, -4141738.237863]
                            })
                        });
var format_Potencial_2 = new ol.format.GeoJSON();
var features_Potencial_2 = format_Potencial_2.readFeatures(json_Potencial_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Potencial_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Potencial_2.addFeatures(features_Potencial_2);
var lyr_Potencial_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Potencial_2, 
                style: style_Potencial_2,
                interactive: true,
    title: 'Potencial<br />\
    <img src="styles/legend/Potencial_2_0.png" /> Muy bajo<br />\
    <img src="styles/legend/Potencial_2_1.png" /> Bajo<br />\
    <img src="styles/legend/Potencial_2_2.png" /> Medio<br />\
    <img src="styles/legend/Potencial_2_3.png" /> Alto<br />\
    <img src="styles/legend/Potencial_2_4.png" /> Muy alto<br />'
        });
var format_VolcanesMaule_3 = new ol.format.GeoJSON();
var features_VolcanesMaule_3 = format_VolcanesMaule_3.readFeatures(json_VolcanesMaule_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VolcanesMaule_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VolcanesMaule_3.addFeatures(features_VolcanesMaule_3);
var lyr_VolcanesMaule_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VolcanesMaule_3, 
                style: style_VolcanesMaule_3,
                interactive: true,
                title: '<img src="styles/legend/VolcanesMaule_3.png" /> Volcanes Maule'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Zonaspotencialesdeaguassubterrneas_1.setVisible(true);lyr_Potencial_2.setVisible(true);lyr_VolcanesMaule_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Zonaspotencialesdeaguassubterrneas_1,lyr_Potencial_2,lyr_VolcanesMaule_3];
lyr_Potencial_2.set('fieldAliases', {'fid_1': 'fid_1', 'DN': 'DN', 'Potencial': 'Potencial', });
lyr_VolcanesMaule_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Ranking': 'Ranking', 'Tipo': 'Tipo', });
lyr_Potencial_2.set('fieldImages', {'fid_1': 'TextEdit', 'DN': 'TextEdit', 'Potencial': 'TextEdit', });
lyr_VolcanesMaule_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Ranking': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Potencial_2.set('fieldLabels', {'fid_1': 'no label', 'DN': 'no label', 'Potencial': 'no label', });
lyr_VolcanesMaule_3.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'inline label', 'Ranking': 'no label', 'Tipo': 'no label', });
lyr_VolcanesMaule_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});