var wms_layers = [];


        var lyr_Satelit_Jalan_0 = new ol.layer.Tile({
            'title': 'Satelit_Jalan',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Patahan_Lempeng_Sumatera_Barat_1 = new ol.format.GeoJSON();
var features_Patahan_Lempeng_Sumatera_Barat_1 = format_Patahan_Lempeng_Sumatera_Barat_1.readFeatures(json_Patahan_Lempeng_Sumatera_Barat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Patahan_Lempeng_Sumatera_Barat_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Patahan_Lempeng_Sumatera_Barat_1.addFeatures(features_Patahan_Lempeng_Sumatera_Barat_1);
var lyr_Patahan_Lempeng_Sumatera_Barat_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Patahan_Lempeng_Sumatera_Barat_1, 
                style: style_Patahan_Lempeng_Sumatera_Barat_1,
                popuplayertitle: 'Patahan_Lempeng_Sumatera_Barat',
                interactive: true,
                title: '<img src="styles/legend/Patahan_Lempeng_Sumatera_Barat_1.png" /> Patahan_Lempeng_Sumatera_Barat'
            });
var format_Kab_Sosel_2 = new ol.format.GeoJSON();
var features_Kab_Sosel_2 = format_Kab_Sosel_2.readFeatures(json_Kab_Sosel_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kab_Sosel_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kab_Sosel_2.addFeatures(features_Kab_Sosel_2);
var lyr_Kab_Sosel_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kab_Sosel_2, 
                style: style_Kab_Sosel_2,
                popuplayertitle: 'Kab_Sosel',
                interactive: true,
                title: '<img src="styles/legend/Kab_Sosel_2.png" /> Kab_Sosel'
            });
var format_SPBU_3 = new ol.format.GeoJSON();
var features_SPBU_3 = format_SPBU_3.readFeatures(json_SPBU_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SPBU_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SPBU_3.addFeatures(features_SPBU_3);
var lyr_SPBU_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SPBU_3, 
                style: style_SPBU_3,
                popuplayertitle: 'SPBU',
                interactive: true,
                title: '<img src="styles/legend/SPBU_3.png" /> SPBU'
            });
var format_Sarana_Ibadah_4 = new ol.format.GeoJSON();
var features_Sarana_Ibadah_4 = format_Sarana_Ibadah_4.readFeatures(json_Sarana_Ibadah_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sarana_Ibadah_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sarana_Ibadah_4.addFeatures(features_Sarana_Ibadah_4);
var lyr_Sarana_Ibadah_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sarana_Ibadah_4, 
                style: style_Sarana_Ibadah_4,
                popuplayertitle: 'Sarana_Ibadah',
                interactive: true,
                title: '<img src="styles/legend/Sarana_Ibadah_4.png" /> Sarana_Ibadah'
            });
var format_Sarana_Pendidikan_5 = new ol.format.GeoJSON();
var features_Sarana_Pendidikan_5 = format_Sarana_Pendidikan_5.readFeatures(json_Sarana_Pendidikan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sarana_Pendidikan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sarana_Pendidikan_5.addFeatures(features_Sarana_Pendidikan_5);
var lyr_Sarana_Pendidikan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sarana_Pendidikan_5, 
                style: style_Sarana_Pendidikan_5,
                popuplayertitle: 'Sarana_Pendidikan',
                interactive: true,
                title: '<img src="styles/legend/Sarana_Pendidikan_5.png" /> Sarana_Pendidikan'
            });
var format_Terminal_6 = new ol.format.GeoJSON();
var features_Terminal_6 = format_Terminal_6.readFeatures(json_Terminal_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terminal_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terminal_6.addFeatures(features_Terminal_6);
var lyr_Terminal_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terminal_6, 
                style: style_Terminal_6,
                popuplayertitle: 'Terminal',
                interactive: true,
                title: '<img src="styles/legend/Terminal_6.png" /> Terminal'
            });
var format_Sarana_Kesehatan_7 = new ol.format.GeoJSON();
var features_Sarana_Kesehatan_7 = format_Sarana_Kesehatan_7.readFeatures(json_Sarana_Kesehatan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sarana_Kesehatan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sarana_Kesehatan_7.addFeatures(features_Sarana_Kesehatan_7);
var lyr_Sarana_Kesehatan_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sarana_Kesehatan_7, 
                style: style_Sarana_Kesehatan_7,
                popuplayertitle: 'Sarana_Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/Sarana_Kesehatan_7.png" /> Sarana_Kesehatan'
            });
var format_Wilayah_Rawan_Gempa_8 = new ol.format.GeoJSON();
var features_Wilayah_Rawan_Gempa_8 = format_Wilayah_Rawan_Gempa_8.readFeatures(json_Wilayah_Rawan_Gempa_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wilayah_Rawan_Gempa_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wilayah_Rawan_Gempa_8.addFeatures(features_Wilayah_Rawan_Gempa_8);
var lyr_Wilayah_Rawan_Gempa_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wilayah_Rawan_Gempa_8, 
                style: style_Wilayah_Rawan_Gempa_8,
                popuplayertitle: 'Wilayah_Rawan_Gempa',
                interactive: true,
                title: '<img src="styles/legend/Wilayah_Rawan_Gempa_8.png" /> Wilayah_Rawan_Gempa'
            });
var format_Buffer_Wilayah_Rawan_Gempa_9 = new ol.format.GeoJSON();
var features_Buffer_Wilayah_Rawan_Gempa_9 = format_Buffer_Wilayah_Rawan_Gempa_9.readFeatures(json_Buffer_Wilayah_Rawan_Gempa_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer_Wilayah_Rawan_Gempa_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer_Wilayah_Rawan_Gempa_9.addFeatures(features_Buffer_Wilayah_Rawan_Gempa_9);
var lyr_Buffer_Wilayah_Rawan_Gempa_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer_Wilayah_Rawan_Gempa_9, 
                style: style_Buffer_Wilayah_Rawan_Gempa_9,
                popuplayertitle: 'Buffer_Wilayah_Rawan_Gempa',
                interactive: true,
                title: '<img src="styles/legend/Buffer_Wilayah_Rawan_Gempa_9.png" /> Buffer_Wilayah_Rawan_Gempa'
            });
var format_Kab_Solok_10 = new ol.format.GeoJSON();
var features_Kab_Solok_10 = format_Kab_Solok_10.readFeatures(json_Kab_Solok_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kab_Solok_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kab_Solok_10.addFeatures(features_Kab_Solok_10);
var lyr_Kab_Solok_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kab_Solok_10, 
                style: style_Kab_Solok_10,
                popuplayertitle: 'Kab_Solok',
                interactive: true,
                title: '<img src="styles/legend/Kab_Solok_10.png" /> Kab_Solok'
            });
var format_SBPU_11 = new ol.format.GeoJSON();
var features_SBPU_11 = format_SBPU_11.readFeatures(json_SBPU_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SBPU_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SBPU_11.addFeatures(features_SBPU_11);
var lyr_SBPU_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SBPU_11, 
                style: style_SBPU_11,
                popuplayertitle: 'SBPU',
                interactive: true,
                title: '<img src="styles/legend/SBPU_11.png" /> SBPU'
            });
var format_Sarana_Ibadah_12 = new ol.format.GeoJSON();
var features_Sarana_Ibadah_12 = format_Sarana_Ibadah_12.readFeatures(json_Sarana_Ibadah_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sarana_Ibadah_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sarana_Ibadah_12.addFeatures(features_Sarana_Ibadah_12);
var lyr_Sarana_Ibadah_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sarana_Ibadah_12, 
                style: style_Sarana_Ibadah_12,
                popuplayertitle: 'Sarana_Ibadah',
                interactive: true,
                title: '<img src="styles/legend/Sarana_Ibadah_12.png" /> Sarana_Ibadah'
            });
var format_Sarana_Pendidikan_13 = new ol.format.GeoJSON();
var features_Sarana_Pendidikan_13 = format_Sarana_Pendidikan_13.readFeatures(json_Sarana_Pendidikan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sarana_Pendidikan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sarana_Pendidikan_13.addFeatures(features_Sarana_Pendidikan_13);
var lyr_Sarana_Pendidikan_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sarana_Pendidikan_13, 
                style: style_Sarana_Pendidikan_13,
                popuplayertitle: 'Sarana_Pendidikan',
                interactive: true,
                title: '<img src="styles/legend/Sarana_Pendidikan_13.png" /> Sarana_Pendidikan'
            });
var format_Terminal_14 = new ol.format.GeoJSON();
var features_Terminal_14 = format_Terminal_14.readFeatures(json_Terminal_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terminal_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terminal_14.addFeatures(features_Terminal_14);
var lyr_Terminal_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terminal_14, 
                style: style_Terminal_14,
                popuplayertitle: 'Terminal',
                interactive: true,
                title: '<img src="styles/legend/Terminal_14.png" /> Terminal'
            });
var format_Sarana_Kesehatan_15 = new ol.format.GeoJSON();
var features_Sarana_Kesehatan_15 = format_Sarana_Kesehatan_15.readFeatures(json_Sarana_Kesehatan_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sarana_Kesehatan_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sarana_Kesehatan_15.addFeatures(features_Sarana_Kesehatan_15);
var lyr_Sarana_Kesehatan_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sarana_Kesehatan_15, 
                style: style_Sarana_Kesehatan_15,
                popuplayertitle: 'Sarana_Kesehatan',
                interactive: true,
                title: '<img src="styles/legend/Sarana_Kesehatan_15.png" /> Sarana_Kesehatan'
            });
var format_Wilayah_Rawan_Gempa_16 = new ol.format.GeoJSON();
var features_Wilayah_Rawan_Gempa_16 = format_Wilayah_Rawan_Gempa_16.readFeatures(json_Wilayah_Rawan_Gempa_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wilayah_Rawan_Gempa_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wilayah_Rawan_Gempa_16.addFeatures(features_Wilayah_Rawan_Gempa_16);
var lyr_Wilayah_Rawan_Gempa_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wilayah_Rawan_Gempa_16, 
                style: style_Wilayah_Rawan_Gempa_16,
                popuplayertitle: 'Wilayah_Rawan_Gempa',
                interactive: true,
                title: '<img src="styles/legend/Wilayah_Rawan_Gempa_16.png" /> Wilayah_Rawan_Gempa'
            });
var format_Buffer_Wilayah_Rawan_Gempa_17 = new ol.format.GeoJSON();
var features_Buffer_Wilayah_Rawan_Gempa_17 = format_Buffer_Wilayah_Rawan_Gempa_17.readFeatures(json_Buffer_Wilayah_Rawan_Gempa_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer_Wilayah_Rawan_Gempa_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer_Wilayah_Rawan_Gempa_17.addFeatures(features_Buffer_Wilayah_Rawan_Gempa_17);
var lyr_Buffer_Wilayah_Rawan_Gempa_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer_Wilayah_Rawan_Gempa_17, 
                style: style_Buffer_Wilayah_Rawan_Gempa_17,
                popuplayertitle: 'Buffer_Wilayah_Rawan_Gempa',
                interactive: true,
                title: '<img src="styles/legend/Buffer_Wilayah_Rawan_Gempa_17.png" /> Buffer_Wilayah_Rawan_Gempa'
            });
var group_Kabupaten_Solok = new ol.layer.Group({
                                layers: [lyr_Kab_Solok_10,lyr_SBPU_11,lyr_Sarana_Ibadah_12,lyr_Sarana_Pendidikan_13,lyr_Terminal_14,lyr_Sarana_Kesehatan_15,lyr_Wilayah_Rawan_Gempa_16,lyr_Buffer_Wilayah_Rawan_Gempa_17,],
                                fold: 'open',
                                title: 'Kabupaten_Solok'});
var group_Kabupaten_Solok_Selatan = new ol.layer.Group({
                                layers: [lyr_Kab_Sosel_2,lyr_SPBU_3,lyr_Sarana_Ibadah_4,lyr_Sarana_Pendidikan_5,lyr_Terminal_6,lyr_Sarana_Kesehatan_7,lyr_Wilayah_Rawan_Gempa_8,lyr_Buffer_Wilayah_Rawan_Gempa_9,],
                                fold: 'open',
                                title: 'Kabupaten_Solok_Selatan'});

lyr_Satelit_Jalan_0.setVisible(true);lyr_Patahan_Lempeng_Sumatera_Barat_1.setVisible(true);lyr_Kab_Sosel_2.setVisible(true);lyr_SPBU_3.setVisible(true);lyr_Sarana_Ibadah_4.setVisible(true);lyr_Sarana_Pendidikan_5.setVisible(true);lyr_Terminal_6.setVisible(true);lyr_Sarana_Kesehatan_7.setVisible(true);lyr_Wilayah_Rawan_Gempa_8.setVisible(true);lyr_Buffer_Wilayah_Rawan_Gempa_9.setVisible(true);lyr_Kab_Solok_10.setVisible(true);lyr_SBPU_11.setVisible(true);lyr_Sarana_Ibadah_12.setVisible(true);lyr_Sarana_Pendidikan_13.setVisible(true);lyr_Terminal_14.setVisible(true);lyr_Sarana_Kesehatan_15.setVisible(true);lyr_Wilayah_Rawan_Gempa_16.setVisible(true);lyr_Buffer_Wilayah_Rawan_Gempa_17.setVisible(true);
var layersList = [lyr_Satelit_Jalan_0,lyr_Patahan_Lempeng_Sumatera_Barat_1,group_Kabupaten_Solok_Selatan,group_Kabupaten_Solok];
lyr_Patahan_Lempeng_Sumatera_Barat_1.set('fieldAliases', {'id': 'id', 'Patahan': 'Patahan', });
lyr_Kab_Sosel_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Jmlh_Pend': 'Jmlh_Pend', });
lyr_SPBU_3.set('fieldAliases', {'SPBU': 'SPBU', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Sarana_Ibadah_4.set('fieldAliases', {'id': 'id', 'Srna_Ibdh': 'Srna_Ibdh', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Sarana_Pendidikan_5.set('fieldAliases', {'Sarana_Pen': 'Sarana_Pen', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Terminal_6.set('fieldAliases', {'Terminal': 'Terminal', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Sarana_Kesehatan_7.set('fieldAliases', {'Sarana_Kes': 'Sarana_Kes', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Wilayah_Rawan_Gempa_8.set('fieldAliases', {'id': 'id', 'Wilayah': 'Wilayah', });
lyr_Buffer_Wilayah_Rawan_Gempa_9.set('fieldAliases', {'id': 'id', 'Wilayah': 'Wilayah', });
lyr_Kab_Solok_10.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SBPU_11.set('fieldAliases', {'SPBU': 'SPBU', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Sarana_Ibadah_12.set('fieldAliases', {'id': 'id', 'Srna_Ibdh': 'Srna_Ibdh', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Sarana_Pendidikan_13.set('fieldAliases', {'Sarana_Pen': 'Sarana_Pen', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Terminal_14.set('fieldAliases', {'Terminal': 'Terminal', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Sarana_Kesehatan_15.set('fieldAliases', {'Rumah_Saki': 'Rumah_Saki', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_Wilayah_Rawan_Gempa_16.set('fieldAliases', {'id': 'id', 'Wilayah': 'Wilayah', });
lyr_Buffer_Wilayah_Rawan_Gempa_17.set('fieldAliases', {'id': 'id', 'Wilayah': 'Wilayah', });
lyr_Patahan_Lempeng_Sumatera_Barat_1.set('fieldImages', {'id': 'TextEdit', 'Patahan': 'TextEdit', });
lyr_Kab_Sosel_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Jmlh_Pend': 'TextEdit', });
lyr_SPBU_3.set('fieldImages', {'SPBU': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_Sarana_Ibadah_4.set('fieldImages', {'id': 'TextEdit', 'Srna_Ibdh': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_Sarana_Pendidikan_5.set('fieldImages', {'Sarana_Pen': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_Terminal_6.set('fieldImages', {'Terminal': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_Sarana_Kesehatan_7.set('fieldImages', {'Sarana_Kes': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_Wilayah_Rawan_Gempa_8.set('fieldImages', {'id': '', 'Wilayah': '', });
lyr_Buffer_Wilayah_Rawan_Gempa_9.set('fieldImages', {'id': 'TextEdit', 'Wilayah': 'TextEdit', });
lyr_Kab_Solok_10.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SBPU_11.set('fieldImages', {'SPBU': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_Sarana_Ibadah_12.set('fieldImages', {'id': 'TextEdit', 'Srna_Ibdh': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_Sarana_Pendidikan_13.set('fieldImages', {'Sarana_Pen': '', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_Terminal_14.set('fieldImages', {'Terminal': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_Sarana_Kesehatan_15.set('fieldImages', {'Rumah_Saki': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_Wilayah_Rawan_Gempa_16.set('fieldImages', {'id': 'TextEdit', 'Wilayah': 'TextEdit', });
lyr_Buffer_Wilayah_Rawan_Gempa_17.set('fieldImages', {'id': 'TextEdit', 'Wilayah': 'TextEdit', });
lyr_Patahan_Lempeng_Sumatera_Barat_1.set('fieldLabels', {'id': 'no label', 'Patahan': 'no label', });
lyr_Kab_Sosel_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Jmlh_Pend': 'no label', });
lyr_SPBU_3.set('fieldLabels', {'SPBU': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_Sarana_Ibadah_4.set('fieldLabels', {'id': 'no label', 'Srna_Ibdh': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_Sarana_Pendidikan_5.set('fieldLabels', {'Sarana_Pen': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_Terminal_6.set('fieldLabels', {'Terminal': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_Sarana_Kesehatan_7.set('fieldLabels', {'Sarana_Kes': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_Wilayah_Rawan_Gempa_8.set('fieldLabels', {'id': 'no label', 'Wilayah': 'no label', });
lyr_Buffer_Wilayah_Rawan_Gempa_9.set('fieldLabels', {'id': 'no label', 'Wilayah': 'no label', });
lyr_Kab_Solok_10.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SBPU_11.set('fieldLabels', {'SPBU': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_Sarana_Ibadah_12.set('fieldLabels', {'id': 'no label', 'Srna_Ibdh': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_Sarana_Pendidikan_13.set('fieldLabels', {'Sarana_Pen': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_Terminal_14.set('fieldLabels', {'Terminal': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_Sarana_Kesehatan_15.set('fieldLabels', {'Rumah_Saki': 'header label - visible with data', 'Longitude': 'no label', 'Latitude': 'no label', });
lyr_Wilayah_Rawan_Gempa_16.set('fieldLabels', {'id': 'no label', 'Wilayah': 'no label', });
lyr_Buffer_Wilayah_Rawan_Gempa_17.set('fieldLabels', {'id': 'no label', 'Wilayah': 'no label', });
lyr_Buffer_Wilayah_Rawan_Gempa_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});