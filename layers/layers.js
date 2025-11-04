var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_mancha_SGB_1 = new ol.format.GeoJSON();
var features_mancha_SGB_1 = format_mancha_SGB_1.readFeatures(json_mancha_SGB_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mancha_SGB_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mancha_SGB_1.addFeatures(features_mancha_SGB_1);
var lyr_mancha_SGB_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mancha_SGB_1, 
                style: style_mancha_SGB_1,
                popuplayertitle: 'mancha_SGB',
                interactive: false,
                title: '<img src="styles/legend/mancha_SGB_1.png" /> mancha_SGB'
            });
var format_mancha_guaiba_2 = new ol.format.GeoJSON();
var features_mancha_guaiba_2 = format_mancha_guaiba_2.readFeatures(json_mancha_guaiba_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mancha_guaiba_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mancha_guaiba_2.addFeatures(features_mancha_guaiba_2);
var lyr_mancha_guaiba_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mancha_guaiba_2, 
                style: style_mancha_guaiba_2,
                popuplayertitle: 'mancha_guaiba',
                interactive: false,
                title: '<img src="styles/legend/mancha_guaiba_2.png" /> mancha_guaiba'
            });
var format_areas_risco_municipio_3 = new ol.format.GeoJSON();
var features_areas_risco_municipio_3 = format_areas_risco_municipio_3.readFeatures(json_areas_risco_municipio_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areas_risco_municipio_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areas_risco_municipio_3.addFeatures(features_areas_risco_municipio_3);
var lyr_areas_risco_municipio_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areas_risco_municipio_3, 
                style: style_areas_risco_municipio_3,
                popuplayertitle: 'areas_risco_municipio',
                interactive: true,
                title: '<img src="styles/legend/areas_risco_municipio_3.png" /> areas_risco_municipio'
            });
var format_cartografia_risco_SGB_4 = new ol.format.GeoJSON();
var features_cartografia_risco_SGB_4 = format_cartografia_risco_SGB_4.readFeatures(json_cartografia_risco_SGB_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cartografia_risco_SGB_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cartografia_risco_SGB_4.addFeatures(features_cartografia_risco_SGB_4);
var lyr_cartografia_risco_SGB_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cartografia_risco_SGB_4, 
                style: style_cartografia_risco_SGB_4,
                popuplayertitle: 'cartografia_risco_SGB',
                interactive: true,
                title: '<img src="styles/legend/cartografia_risco_SGB_4.png" /> cartografia_risco_SGB'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_mancha_SGB_1.setVisible(true);lyr_mancha_guaiba_2.setVisible(true);lyr_areas_risco_municipio_3.setVisible(true);lyr_cartografia_risco_SGB_4.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_mancha_SGB_1,lyr_mancha_guaiba_2,lyr_areas_risco_municipio_3,lyr_cartografia_risco_SGB_4];
lyr_mancha_SGB_1.set('fieldAliases', {'fid': 'fid', 'Tipo_ADA': 'Tipo_ADA', });
lyr_mancha_guaiba_2.set('fieldAliases', {'gid': 'gid', 'fid': 'fid', 'nome_bairr': 'nome_bairr', 'tot_pessoa': 'tot_pessoa', 'tot_domici': 'tot_domici', 'previa1_po': 'previa1_po', 'previa1_do': 'previa1_do', 'tipo': 'tipo', 'bairro_oficial': 'bairro_oficial', 'area_km2': 'area_km2', });
lyr_areas_risco_municipio_3.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'Id': 'Id', 'Nome': 'Nome', 'Tipo': 'Tipo', 'area_m2': 'area_m2', 'area_ha': 'area_ha', });
lyr_cartografia_risco_SGB_4.set('fieldAliases', {'fid': 'fid', 'UF': 'Estado', 'MUNIC': 'MUNIC', 'CD_GEOCMU': 'Código do Município (IBGE)', 'LOCAL': 'Digite o endereço', 'DATA_SETOR': 'Data da Setorização', 'NUM_SETOR': 'Número do  Setor', 'TIPOLO_G1': 'Tipologia G 1', 'TIPOLO_E1': 'Tipologia E 1', 'SITUACAO_01': 'Situação 01', 'COBRADE_01': 'Cobrade 01', 'TIPOLO_G2': 'Tipologia G 2', 'TIPOLO_E2': 'Tipologia E 2', 'SITUACAO_02': 'Situação 02', 'COBRADE_02': 'Cobrade 02', 'TIPOLO_G3': 'Tipologia G 3', 'TIPOLO_E3': 'Tipologia E 3', 'SITUACAO_03': 'Situação 03', 'COBRADE_03': 'Cobrade 03', 'TIPOLO_G4': 'Tipologia G 4', 'TIPOLO_E4': 'Tipologia E 4', 'SITUACAO_04': 'Situação 04', 'COBRADE_04': 'Cobrade 04', 'TIPOLO_G5': 'Tipologia G 5', 'TIPOLO_E5': 'Tipologia E 5', 'SITUACAO_05': 'Situação 05', 'COBRADE_05': 'Cobrade 05', 'DESCRICAO': 'Descrição', 'NUM_EDIF': 'Número de edificações', 'NUM_PESS': 'Número de pessoas', 'OBS_OCUP': 'Observação da ocupação', 'GRAU_VULNE': 'Grau de vulnerabilidade', 'GRAU_RISCO': 'Grau de risco', 'SUG_INTERV': 'Sugestão de intervenção não estrutural', 'ORGAO_EXEC': 'Orgão Executor', 'PROJETO': 'Título do Projeto', 'EQUIPE_EXECUTORA': 'Equipe de campo', 'SEQUENCIA': 'Digite o número do setor', 'M_tipolo': 'Preencher mais tipologias? (selecione 2,3,4 ou 5)', 'DOM_PART': 'DOM_PART', 'DOM_COLE': 'DOM_COLE', 'EST_AGRO': 'EST_AGRO', 'EST_ENSI': 'EST_ENSI', 'EST_SAUD': 'EST_SAUD', 'EST_OUTR': 'EST_OUTR', 'EDI_CONS': 'EDI_CONS', 'EST_RELI': 'EST_RELI', 'DOM_TOTAL': 'DOM_TOTAL', 'cd_setor': 'cd_setor', 'TIPOLOGIA': 'TIPOLOGIA', });
lyr_mancha_SGB_1.set('fieldImages', {'fid': 'TextEdit', 'Tipo_ADA': 'TextEdit', });
lyr_mancha_guaiba_2.set('fieldImages', {'gid': 'TextEdit', 'fid': 'TextEdit', 'nome_bairr': 'TextEdit', 'tot_pessoa': 'TextEdit', 'tot_domici': 'TextEdit', 'previa1_po': 'TextEdit', 'previa1_do': 'TextEdit', 'tipo': 'TextEdit', 'bairro_oficial': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_areas_risco_municipio_3.set('fieldImages', {'id': '', 'fid': '', 'Id': '', 'Nome': '', 'Tipo': '', 'area_m2': '', 'area_ha': '', });
lyr_cartografia_risco_SGB_4.set('fieldImages', {'fid': '', 'UF': '', 'MUNIC': '', 'CD_GEOCMU': '', 'LOCAL': '', 'DATA_SETOR': '', 'NUM_SETOR': '', 'TIPOLO_G1': '', 'TIPOLO_E1': '', 'SITUACAO_01': '', 'COBRADE_01': '', 'TIPOLO_G2': '', 'TIPOLO_E2': '', 'SITUACAO_02': '', 'COBRADE_02': '', 'TIPOLO_G3': '', 'TIPOLO_E3': '', 'SITUACAO_03': '', 'COBRADE_03': '', 'TIPOLO_G4': '', 'TIPOLO_E4': '', 'SITUACAO_04': '', 'COBRADE_04': '', 'TIPOLO_G5': '', 'TIPOLO_E5': '', 'SITUACAO_05': '', 'COBRADE_05': '', 'DESCRICAO': '', 'NUM_EDIF': '', 'NUM_PESS': '', 'OBS_OCUP': '', 'GRAU_VULNE': '', 'GRAU_RISCO': '', 'SUG_INTERV': '', 'ORGAO_EXEC': '', 'PROJETO': '', 'EQUIPE_EXECUTORA': '', 'SEQUENCIA': '', 'M_tipolo': '', 'DOM_PART': '', 'DOM_COLE': '', 'EST_AGRO': '', 'EST_ENSI': '', 'EST_SAUD': '', 'EST_OUTR': '', 'EDI_CONS': '', 'EST_RELI': '', 'DOM_TOTAL': '', 'cd_setor': '', 'TIPOLOGIA': '', });
lyr_mancha_SGB_1.set('fieldLabels', {'fid': 'no label', 'Tipo_ADA': 'header label - always visible', });
lyr_mancha_guaiba_2.set('fieldLabels', {'gid': 'no label', 'fid': 'no label', 'nome_bairr': 'no label', 'tot_pessoa': 'no label', 'tot_domici': 'no label', 'previa1_po': 'no label', 'previa1_do': 'no label', 'tipo': 'no label', 'bairro_oficial': 'no label', 'area_km2': 'header label - always visible', });
lyr_areas_risco_municipio_3.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'Id': 'no label', 'Nome': 'header label - always visible', 'Tipo': 'no label', 'area_m2': 'header label - always visible', 'area_ha': 'header label - always visible', });
lyr_cartografia_risco_SGB_4.set('fieldLabels', {'fid': 'no label', 'UF': 'no label', 'MUNIC': 'no label', 'CD_GEOCMU': 'no label', 'LOCAL': 'no label', 'DATA_SETOR': 'no label', 'NUM_SETOR': 'no label', 'TIPOLO_G1': 'header label - always visible', 'TIPOLO_E1': 'no label', 'SITUACAO_01': 'no label', 'COBRADE_01': 'no label', 'TIPOLO_G2': 'no label', 'TIPOLO_E2': 'no label', 'SITUACAO_02': 'no label', 'COBRADE_02': 'no label', 'TIPOLO_G3': 'no label', 'TIPOLO_E3': 'no label', 'SITUACAO_03': 'no label', 'COBRADE_03': 'no label', 'TIPOLO_G4': 'no label', 'TIPOLO_E4': 'no label', 'SITUACAO_04': 'no label', 'COBRADE_04': 'no label', 'TIPOLO_G5': 'no label', 'TIPOLO_E5': 'no label', 'SITUACAO_05': 'no label', 'COBRADE_05': 'no label', 'DESCRICAO': 'no label', 'NUM_EDIF': 'no label', 'NUM_PESS': 'no label', 'OBS_OCUP': 'header label - always visible', 'GRAU_VULNE': 'header label - always visible', 'GRAU_RISCO': 'no label', 'SUG_INTERV': 'header label - always visible', 'ORGAO_EXEC': 'no label', 'PROJETO': 'no label', 'EQUIPE_EXECUTORA': 'no label', 'SEQUENCIA': 'no label', 'M_tipolo': 'no label', 'DOM_PART': 'no label', 'DOM_COLE': 'no label', 'EST_AGRO': 'no label', 'EST_ENSI': 'no label', 'EST_SAUD': 'no label', 'EST_OUTR': 'no label', 'EDI_CONS': 'no label', 'EST_RELI': 'no label', 'DOM_TOTAL': 'no label', 'cd_setor': 'no label', 'TIPOLOGIA': 'header label - always visible', });
lyr_cartografia_risco_SGB_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});