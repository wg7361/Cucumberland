var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Polygon_1 = new ol.format.GeoJSON();
var features_Polygon_1 = format_Polygon_1.readFeatures(json_Polygon_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Polygon_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Polygon_1.addFeatures(features_Polygon_1);
var lyr_Polygon_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Polygon_1, 
                style: style_Polygon_1,
                popuplayertitle: 'Polygon',
                interactive: true,
                title: '<img src="styles/legend/Polygon_1.png" /> Polygon'
            });
var format_threeD_2 = new ol.format.GeoJSON();
var features_threeD_2 = format_threeD_2.readFeatures(json_threeD_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_threeD_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_threeD_2.addFeatures(features_threeD_2);
var lyr_threeD_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_threeD_2, 
                style: style_threeD_2,
                popuplayertitle: 'threeD',
                interactive: true,
                title: '<img src="styles/legend/threeD_2.png" /> threeD'
            });
var format_Lines_3 = new ol.format.GeoJSON();
var features_Lines_3 = format_Lines_3.readFeatures(json_Lines_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lines_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lines_3.addFeatures(features_Lines_3);
var lyr_Lines_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lines_3, 
                style: style_Lines_3,
                popuplayertitle: 'Lines',
                interactive: true,
                title: '<img src="styles/legend/Lines_3.png" /> Lines'
            });
var format_Schools_4 = new ol.format.GeoJSON();
var features_Schools_4 = format_Schools_4.readFeatures(json_Schools_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schools_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schools_4.addFeatures(features_Schools_4);
var lyr_Schools_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schools_4, 
                style: style_Schools_4,
                popuplayertitle: 'Schools',
                interactive: true,
                title: '<img src="styles/legend/Schools_4.png" /> Schools'
            });
var format_Churches_5 = new ol.format.GeoJSON();
var features_Churches_5 = format_Churches_5.readFeatures(json_Churches_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Churches_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Churches_5.addFeatures(features_Churches_5);
var lyr_Churches_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Churches_5, 
                style: style_Churches_5,
                popuplayertitle: 'Churches',
                interactive: true,
                title: '<img src="styles/legend/Churches_5.png" /> Churches'
            });
var format_Cemeteries_6 = new ol.format.GeoJSON();
var features_Cemeteries_6 = format_Cemeteries_6.readFeatures(json_Cemeteries_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cemeteries_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cemeteries_6.addFeatures(features_Cemeteries_6);
var lyr_Cemeteries_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cemeteries_6, 
                style: style_Cemeteries_6,
                popuplayertitle: 'Cemeteries',
                interactive: true,
                title: '<img src="styles/legend/Cemeteries_6.png" /> Cemeteries'
            });
var format_Affected_Structures_7 = new ol.format.GeoJSON();
var features_Affected_Structures_7 = format_Affected_Structures_7.readFeatures(json_Affected_Structures_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Affected_Structures_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Affected_Structures_7.addFeatures(features_Affected_Structures_7);
var lyr_Affected_Structures_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Affected_Structures_7, 
                style: style_Affected_Structures_7,
                popuplayertitle: 'Affected_Structures',
                interactive: true,
                title: '<img src="styles/legend/Affected_Structures_7.png" /> Affected_Structures'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Polygon_1.setVisible(true);lyr_threeD_2.setVisible(true);lyr_Lines_3.setVisible(true);lyr_Schools_4.setVisible(true);lyr_Churches_5.setVisible(true);lyr_Cemeteries_6.setVisible(true);lyr_Affected_Structures_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Polygon_1,lyr_threeD_2,lyr_Lines_3,lyr_Schools_4,lyr_Churches_5,lyr_Cemeteries_6,lyr_Affected_Structures_7];
lyr_Polygon_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_threeD_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', });
lyr_Lines_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Shape_Length': 'Shape_Length', 'Type': 'Type', });
lyr_Schools_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'SymbolID': 'SymbolID', });
lyr_Churches_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'SymbolID': 'SymbolID', });
lyr_Cemeteries_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'SymbolID': 'SymbolID', });
lyr_Affected_Structures_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Type': 'Type', 'SymbolID': 'SymbolID', });
lyr_Polygon_1.set('fieldImages', {'OBJECTID': '', 'Shape_Length': '', 'Shape_Area': '', });
lyr_threeD_2.set('fieldImages', {'OBJECTID': '', 'Shape_Length': '', });
lyr_Lines_3.set('fieldImages', {'OBJECTID': '', 'Shape_Length': '', 'Type': '', });
lyr_Schools_4.set('fieldImages', {'OBJECTID': '', 'Id': '', 'SymbolID': '', });
lyr_Churches_5.set('fieldImages', {'OBJECTID': '', 'Id': '', 'SymbolID': '', });
lyr_Cemeteries_6.set('fieldImages', {'OBJECTID': '', 'Id': '', 'SymbolID': '', });
lyr_Affected_Structures_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'Type': 'Range', 'SymbolID': 'TextEdit', });
lyr_Polygon_1.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_threeD_2.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', });
lyr_Lines_3.set('fieldLabels', {'OBJECTID': 'no label', 'Shape_Length': 'no label', 'Type': 'no label', });
lyr_Schools_4.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'SymbolID': 'no label', });
lyr_Churches_5.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'SymbolID': 'no label', });
lyr_Cemeteries_6.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'SymbolID': 'no label', });
lyr_Affected_Structures_7.set('fieldLabels', {'OBJECTID': 'no label', 'Type': 'no label', 'SymbolID': 'no label', });
lyr_Affected_Structures_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});