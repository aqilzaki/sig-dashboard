var wms_layers = [];


        var lyr_hybrid_0 = new ol.layer.Tile({
            'title': 'hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_clusterTawuranKecamatan_1 = new ol.format.GeoJSON();
var features_clusterTawuranKecamatan_1 = format_clusterTawuranKecamatan_1.readFeatures(json_clusterTawuranKecamatan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clusterTawuranKecamatan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clusterTawuranKecamatan_1.addFeatures(features_clusterTawuranKecamatan_1);
var lyr_clusterTawuranKecamatan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clusterTawuranKecamatan_1, 
                style: style_clusterTawuranKecamatan_1,
                popuplayertitle: 'clusterTawuranKecamatan',
                interactive: true,
                title: '<img src="styles/legend/clusterTawuranKecamatan_1.png" /> clusterTawuranKecamatan'
            });
var format_Buffer_Analysis_2 = new ol.format.GeoJSON();
var features_Buffer_Analysis_2 = format_Buffer_Analysis_2.readFeatures(json_Buffer_Analysis_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffer_Analysis_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer_Analysis_2.addFeatures(features_Buffer_Analysis_2);
var lyr_Buffer_Analysis_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buffer_Analysis_2, 
                style: style_Buffer_Analysis_2,
                popuplayertitle: 'Buffer_Analysis',
                interactive: true,
                title: '<img src="styles/legend/Buffer_Analysis_2.png" /> Buffer_Analysis'
            });
var format_Sekolah_3 = new ol.format.GeoJSON();
var features_Sekolah_3 = format_Sekolah_3.readFeatures(json_Sekolah_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sekolah_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_3.addFeatures(features_Sekolah_3);
var lyr_Sekolah_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sekolah_3, 
                style: style_Sekolah_3,
                popuplayertitle: 'Sekolah',
                interactive: true,
                title: '<img src="styles/legend/Sekolah_3.png" /> Sekolah'
            });
var format_PosPolisi_4 = new ol.format.GeoJSON();
var features_PosPolisi_4 = format_PosPolisi_4.readFeatures(json_PosPolisi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PosPolisi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PosPolisi_4.addFeatures(features_PosPolisi_4);
cluster_PosPolisi_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PosPolisi_4
});
var lyr_PosPolisi_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PosPolisi_4, 
                style: style_PosPolisi_4,
                popuplayertitle: 'Pos Polisi',
                interactive: true,
                title: '<img src="styles/legend/PosPolisi_4.png" /> Pos Polisi'
            });
var format_TitikTawuran_5 = new ol.format.GeoJSON();
var features_TitikTawuran_5 = format_TitikTawuran_5.readFeatures(json_TitikTawuran_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TitikTawuran_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TitikTawuran_5.addFeatures(features_TitikTawuran_5);
var lyr_TitikTawuran_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TitikTawuran_5, 
                style: style_TitikTawuran_5,
                popuplayertitle: 'Titik Tawuran',
                interactive: true,
                title: '<img src="styles/legend/TitikTawuran_5.png" /> Titik Tawuran'
            });
var format_jarakTawuranPosPolisi_6 = new ol.format.GeoJSON();
var features_jarakTawuranPosPolisi_6 = format_jarakTawuranPosPolisi_6.readFeatures(json_jarakTawuranPosPolisi_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jarakTawuranPosPolisi_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jarakTawuranPosPolisi_6.addFeatures(features_jarakTawuranPosPolisi_6);
var lyr_jarakTawuranPosPolisi_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jarakTawuranPosPolisi_6, 
                style: style_jarakTawuranPosPolisi_6,
                popuplayertitle: 'jarakTawuranPosPolisi',
                interactive: true,
                title: '<img src="styles/legend/jarakTawuranPosPolisi_6.png" /> jarakTawuranPosPolisi'
            });

lyr_hybrid_0.setVisible(true);lyr_clusterTawuranKecamatan_1.setVisible(true);lyr_Buffer_Analysis_2.setVisible(true);lyr_Sekolah_3.setVisible(true);lyr_PosPolisi_4.setVisible(true);lyr_TitikTawuran_5.setVisible(true);lyr_jarakTawuranPosPolisi_6.setVisible(true);
var layersList = [lyr_hybrid_0,lyr_clusterTawuranKecamatan_1,lyr_Buffer_Analysis_2,lyr_Sekolah_3,lyr_PosPolisi_4,lyr_TitikTawuran_5,lyr_jarakTawuranPosPolisi_6];
lyr_clusterTawuranKecamatan_1.set('fieldAliases', {'id_kecamatan': 'id_kecamatan', 'Kecamatan': 'Kecamatan', 'Jumlah_Tawuran': 'Jumlah_Tawuran', 'Jumlah_Penduduk': 'Jumlah_Penduduk', });
lyr_Buffer_Analysis_2.set('fieldAliases', {'sekolah_id': 'sekolah_id', 'Sekolah': 'Sekolah', 'Jumlah_Tawuran_Radius_200m': 'Jumlah_Tawuran_Radius_200m', });
lyr_Sekolah_3.set('fieldAliases', {'id': 'id', 'Sekolah': 'Sekolah', });
lyr_PosPolisi_4.set('fieldAliases', {'id': 'id', 'lokasi': 'lokasi', });
lyr_TitikTawuran_5.set('fieldAliases', {'id': 'id', 'Lokasi': 'Lokasi', });
lyr_jarakTawuranPosPolisi_6.set('fieldAliases', {'id_tawuran': 'id_tawuran', 'lokasi_tawuran': 'lokasi_tawuran', 'Lokasi_Tawuran': 'Lokasi_Tawuran', 'id_pos_polisi': 'id_pos_polisi', 'Pos': 'Pos', 'Jarak(m)': 'Jarak(m)', });
lyr_clusterTawuranKecamatan_1.set('fieldImages', {'id_kecamatan': '', 'Kecamatan': '', 'Jumlah_Tawuran': '', 'Jumlah_Penduduk': '', });
lyr_Buffer_Analysis_2.set('fieldImages', {'sekolah_id': 'Range', 'Sekolah': 'TextEdit', 'Jumlah_Tawuran_Radius_200m': 'TextEdit', });
lyr_Sekolah_3.set('fieldImages', {'id': 'TextEdit', 'Sekolah': 'TextEdit', });
lyr_PosPolisi_4.set('fieldImages', {'id': 'TextEdit', 'lokasi': 'TextEdit', });
lyr_TitikTawuran_5.set('fieldImages', {'id': 'TextEdit', 'Lokasi': '', });
lyr_jarakTawuranPosPolisi_6.set('fieldImages', {'id_tawuran': 'TextEdit', 'lokasi_tawuran': 'Geometry', 'Lokasi_Tawuran': 'TextEdit', 'id_pos_polisi': 'Range', 'Pos': 'TextEdit', 'Jarak(m)': 'TextEdit', });
lyr_clusterTawuranKecamatan_1.set('fieldLabels', {'id_kecamatan': 'no label', 'Kecamatan': 'no label', 'Jumlah_Tawuran': 'no label', 'Jumlah_Penduduk': 'no label', });
lyr_Buffer_Analysis_2.set('fieldLabels', {'sekolah_id': 'no label', 'Sekolah': 'inline label - always visible', 'Jumlah_Tawuran_Radius_200m': 'inline label - always visible', });
lyr_Sekolah_3.set('fieldLabels', {'id': 'no label', 'Sekolah': 'inline label - always visible', });
lyr_PosPolisi_4.set('fieldLabels', {'id': 'no label', 'lokasi': 'inline label - always visible', });
lyr_TitikTawuran_5.set('fieldLabels', {'id': 'no label', 'Lokasi': 'inline label - always visible', });
lyr_jarakTawuranPosPolisi_6.set('fieldLabels', {'id_tawuran': 'no label', 'lokasi_tawuran': 'no label', 'Lokasi_Tawuran': 'inline label - always visible', 'id_pos_polisi': 'no label', 'Pos': 'inline label - always visible', 'Jarak(m)': 'inline label - always visible', });
lyr_jarakTawuranPosPolisi_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});