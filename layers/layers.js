var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_lotes_1 = new ol.format.GeoJSON();
var features_lotes_1 = format_lotes_1.readFeatures(json_lotes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lotes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lotes_1.addFeatures(features_lotes_1);
var lyr_lotes_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lotes_1, 
                style: style_lotes_1,
                popuplayertitle: 'lotes',
                interactive: true,
                title: '<img src="styles/legend/lotes_1.png" /> lotes'
            });
var format_mancha_SGB_2 = new ol.format.GeoJSON();
var features_mancha_SGB_2 = format_mancha_SGB_2.readFeatures(json_mancha_SGB_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mancha_SGB_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mancha_SGB_2.addFeatures(features_mancha_SGB_2);
var lyr_mancha_SGB_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mancha_SGB_2, 
                style: style_mancha_SGB_2,
                popuplayertitle: 'mancha_SGB',
                interactive: false,
                title: '<img src="styles/legend/mancha_SGB_2.png" /> mancha_SGB'
            });
var format_mancha_guaiba_3 = new ol.format.GeoJSON();
var features_mancha_guaiba_3 = format_mancha_guaiba_3.readFeatures(json_mancha_guaiba_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mancha_guaiba_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mancha_guaiba_3.addFeatures(features_mancha_guaiba_3);
var lyr_mancha_guaiba_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mancha_guaiba_3, 
                style: style_mancha_guaiba_3,
                popuplayertitle: 'mancha_guaiba',
                interactive: false,
                title: '<img src="styles/legend/mancha_guaiba_3.png" /> mancha_guaiba'
            });
var format_areas_risco_municipio_4 = new ol.format.GeoJSON();
var features_areas_risco_municipio_4 = format_areas_risco_municipio_4.readFeatures(json_areas_risco_municipio_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_areas_risco_municipio_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_areas_risco_municipio_4.addFeatures(features_areas_risco_municipio_4);
var lyr_areas_risco_municipio_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_areas_risco_municipio_4, 
                style: style_areas_risco_municipio_4,
                popuplayertitle: 'areas_risco_municipio',
                interactive: true,
                title: '<img src="styles/legend/areas_risco_municipio_4.png" /> areas_risco_municipio'
            });
var format_cartografia_risco_SGB_5 = new ol.format.GeoJSON();
var features_cartografia_risco_SGB_5 = format_cartografia_risco_SGB_5.readFeatures(json_cartografia_risco_SGB_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cartografia_risco_SGB_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cartografia_risco_SGB_5.addFeatures(features_cartografia_risco_SGB_5);
var lyr_cartografia_risco_SGB_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cartografia_risco_SGB_5, 
                style: style_cartografia_risco_SGB_5,
                popuplayertitle: 'cartografia_risco_SGB',
                interactive: true,
                title: '<img src="styles/legend/cartografia_risco_SGB_5.png" /> cartografia_risco_SGB'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_lotes_1.setVisible(true);lyr_mancha_SGB_2.setVisible(true);lyr_mancha_guaiba_3.setVisible(true);lyr_areas_risco_municipio_4.setVisible(true);lyr_cartografia_risco_SGB_5.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_lotes_1,lyr_mancha_SGB_2,lyr_mancha_guaiba_3,lyr_areas_risco_municipio_4,lyr_cartografia_risco_SGB_5];
lyr_lotes_1.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'geocodigo': 'geocodigo', 'geocodigoq': 'geocodigoq', 'x': 'x', 'y': 'y', 'regional': 'regional', 'origem': 'origem', 'numero_aux': 'numero_aux', 'face_quadr': 'face_quadr', 'shape_area': 'shape_area', 'shape_len': 'shape_len', 'quadrari': 'quadrari', 'loteri': 'loteri', 'ladoesq': 'ladoesq', 'ladodir': 'ladodir', 'fundos': 'fundos', 'testada': 'testada', 'nomecondominio': 'nomecondominio', 'matriculari': 'matriculari', 'alvara': 'alvara', 'data': 'data', 'area': 'area', 'processoalvara': 'processoalvara', 'codigoterreno': 'codigoterreno', 'situacao': 'situacao', 'liberado': 'liberado', 'observacoes': 'observacoes', 'CNM': 'CNM', 'demarcacao_NMEO': 'demarcacao_NMEO', 'PROPRIETARIO': 'PROPRIETARIO', 'POSSUIDOR': 'POSSUIDOR', 'NUM_PRED': 'NUM_PRED', 'processo': 'processo', 'data_processo': 'data_processo', 'num_certidao': 'num_certidao', 'conta_edificacoes': 'conta_edificacoes', 'CPF_POSSUIDOR': 'CPF_POSSUIDOR', 'funcionario': 'funcionario', 'matricula': 'matricula', 'data_certidao': 'data_certidao', 'funcionario2': 'funcionario2', 'matricula2': 'matricula2', 'logradouro': 'logradouro', 'abrang_PVG': 'abrang_PVG', 'dist_esquina': 'dist_esquina', 'chave_lig_': 'chave_lig_', 'DOCUMENTO_IMOV': 'DOCUMENTO_IMOV', 'ART': 'ART', 'SETOR_COHAB': 'SETOR_COHAB', 'Unidade': 'Unidade', });
lyr_mancha_SGB_2.set('fieldAliases', {'fid': 'fid', 'Tipo_ADA': 'Tipo_ADA', });
lyr_mancha_guaiba_3.set('fieldAliases', {'gid': 'gid', 'fid': 'fid', 'nome_bairr': 'nome_bairr', 'tot_pessoa': 'tot_pessoa', 'tot_domici': 'tot_domici', 'previa1_po': 'previa1_po', 'previa1_do': 'previa1_do', 'tipo': 'tipo', 'bairro_oficial': 'bairro_oficial', 'area_km2': 'area_km2', });
lyr_areas_risco_municipio_4.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'Id': 'Id', 'Nome': 'Nome', 'Tipo': 'Tipo', 'area_m2': 'area_m2', 'area_ha': 'area_ha', });
lyr_cartografia_risco_SGB_5.set('fieldAliases', {'fid': 'fid', 'UF': 'Estado', 'MUNIC': 'MUNIC', 'CD_GEOCMU': 'Código do Município (IBGE)', 'LOCAL': 'Digite o endereço', 'DATA_SETOR': 'Data da Setorização', 'NUM_SETOR': 'Número do  Setor', 'TIPOLO_G1': 'Tipologia G 1', 'TIPOLO_E1': 'Tipologia E 1', 'SITUACAO_01': 'Situação 01', 'COBRADE_01': 'Cobrade 01', 'TIPOLO_G2': 'Tipologia G 2', 'TIPOLO_E2': 'Tipologia E 2', 'SITUACAO_02': 'Situação 02', 'COBRADE_02': 'Cobrade 02', 'TIPOLO_G3': 'Tipologia G 3', 'TIPOLO_E3': 'Tipologia E 3', 'SITUACAO_03': 'Situação 03', 'COBRADE_03': 'Cobrade 03', 'TIPOLO_G4': 'Tipologia G 4', 'TIPOLO_E4': 'Tipologia E 4', 'SITUACAO_04': 'Situação 04', 'COBRADE_04': 'Cobrade 04', 'TIPOLO_G5': 'Tipologia G 5', 'TIPOLO_E5': 'Tipologia E 5', 'SITUACAO_05': 'Situação 05', 'COBRADE_05': 'Cobrade 05', 'DESCRICAO': 'Descrição', 'NUM_EDIF': 'Número de edificações', 'NUM_PESS': 'Número de pessoas', 'OBS_OCUP': 'Observação da ocupação', 'GRAU_VULNE': 'Grau de vulnerabilidade', 'GRAU_RISCO': 'Grau de risco', 'SUG_INTERV': 'Sugestão de intervenção não estrutural', 'ORGAO_EXEC': 'Orgão Executor', 'PROJETO': 'Título do Projeto', 'EQUIPE_EXECUTORA': 'Equipe de campo', 'SEQUENCIA': 'Digite o número do setor', 'M_tipolo': 'Preencher mais tipologias? (selecione 2,3,4 ou 5)', 'DOM_PART': 'DOM_PART', 'DOM_COLE': 'DOM_COLE', 'EST_AGRO': 'EST_AGRO', 'EST_ENSI': 'EST_ENSI', 'EST_SAUD': 'EST_SAUD', 'EST_OUTR': 'EST_OUTR', 'EDI_CONS': 'EDI_CONS', 'EST_RELI': 'EST_RELI', 'DOM_TOTAL': 'DOM_TOTAL', 'cd_setor': 'cd_setor', 'TIPOLOGIA': 'TIPOLOGIA', });
lyr_lotes_1.set('fieldImages', {'gid': 'TextEdit', 'objectid': 'TextEdit', 'geocodigo': 'TextEdit', 'geocodigoq': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'regional': 'Range', 'origem': 'TextEdit', 'numero_aux': 'TextEdit', 'face_quadr': 'TextEdit', 'shape_area': 'TextEdit', 'shape_len': 'TextEdit', 'quadrari': 'TextEdit', 'loteri': 'TextEdit', 'ladoesq': 'TextEdit', 'ladodir': 'TextEdit', 'fundos': 'TextEdit', 'testada': 'TextEdit', 'nomecondominio': 'TextEdit', 'matriculari': 'TextEdit', 'alvara': 'TextEdit', 'data': 'TextEdit', 'area': 'TextEdit', 'processoalvara': 'TextEdit', 'codigoterreno': 'TextEdit', 'situacao': 'TextEdit', 'liberado': 'TextEdit', 'observacoes': 'TextEdit', 'CNM': 'TextEdit', 'demarcacao_NMEO': 'TextEdit', 'PROPRIETARIO': 'TextEdit', 'POSSUIDOR': 'TextEdit', 'NUM_PRED': 'TextEdit', 'processo': 'TextEdit', 'data_processo': 'TextEdit', 'num_certidao': 'TextEdit', 'conta_edificacoes': 'Range', 'CPF_POSSUIDOR': 'TextEdit', 'funcionario': 'TextEdit', 'matricula': 'TextEdit', 'data_certidao': 'TextEdit', 'funcionario2': 'TextEdit', 'matricula2': 'TextEdit', 'logradouro': 'TextEdit', 'abrang_PVG': 'TextEdit', 'dist_esquina': 'TextEdit', 'chave_lig_': 'TextEdit', 'DOCUMENTO_IMOV': 'TextEdit', 'ART': 'TextEdit', 'SETOR_COHAB': 'TextEdit', 'Unidade': 'Range', });
lyr_mancha_SGB_2.set('fieldImages', {'fid': 'TextEdit', 'Tipo_ADA': 'TextEdit', });
lyr_mancha_guaiba_3.set('fieldImages', {'gid': 'TextEdit', 'fid': 'TextEdit', 'nome_bairr': 'TextEdit', 'tot_pessoa': 'TextEdit', 'tot_domici': 'TextEdit', 'previa1_po': 'TextEdit', 'previa1_do': 'TextEdit', 'tipo': 'TextEdit', 'bairro_oficial': 'TextEdit', 'area_km2': 'TextEdit', });
lyr_areas_risco_municipio_4.set('fieldImages', {'id': '', 'fid': '', 'Id': '', 'Nome': '', 'Tipo': '', 'area_m2': '', 'area_ha': '', });
lyr_cartografia_risco_SGB_5.set('fieldImages', {'fid': '', 'UF': '', 'MUNIC': '', 'CD_GEOCMU': '', 'LOCAL': '', 'DATA_SETOR': '', 'NUM_SETOR': '', 'TIPOLO_G1': '', 'TIPOLO_E1': '', 'SITUACAO_01': '', 'COBRADE_01': '', 'TIPOLO_G2': '', 'TIPOLO_E2': '', 'SITUACAO_02': '', 'COBRADE_02': '', 'TIPOLO_G3': '', 'TIPOLO_E3': '', 'SITUACAO_03': '', 'COBRADE_03': '', 'TIPOLO_G4': '', 'TIPOLO_E4': '', 'SITUACAO_04': '', 'COBRADE_04': '', 'TIPOLO_G5': '', 'TIPOLO_E5': '', 'SITUACAO_05': '', 'COBRADE_05': '', 'DESCRICAO': '', 'NUM_EDIF': '', 'NUM_PESS': '', 'OBS_OCUP': '', 'GRAU_VULNE': '', 'GRAU_RISCO': '', 'SUG_INTERV': '', 'ORGAO_EXEC': '', 'PROJETO': '', 'EQUIPE_EXECUTORA': '', 'SEQUENCIA': '', 'M_tipolo': '', 'DOM_PART': '', 'DOM_COLE': '', 'EST_AGRO': '', 'EST_ENSI': '', 'EST_SAUD': '', 'EST_OUTR': '', 'EDI_CONS': '', 'EST_RELI': '', 'DOM_TOTAL': '', 'cd_setor': '', 'TIPOLOGIA': '', });
lyr_lotes_1.set('fieldLabels', {'gid': 'no label', 'objectid': 'no label', 'geocodigo': 'no label', 'geocodigoq': 'no label', 'x': 'no label', 'y': 'no label', 'regional': 'no label', 'origem': 'no label', 'numero_aux': 'no label', 'face_quadr': 'no label', 'shape_area': 'no label', 'shape_len': 'no label', 'quadrari': 'no label', 'loteri': 'no label', 'ladoesq': 'no label', 'ladodir': 'no label', 'fundos': 'no label', 'testada': 'no label', 'nomecondominio': 'no label', 'matriculari': 'no label', 'alvara': 'no label', 'data': 'no label', 'area': 'no label', 'processoalvara': 'no label', 'codigoterreno': 'no label', 'situacao': 'no label', 'liberado': 'no label', 'observacoes': 'no label', 'CNM': 'no label', 'demarcacao_NMEO': 'no label', 'PROPRIETARIO': 'no label', 'POSSUIDOR': 'no label', 'NUM_PRED': 'no label', 'processo': 'no label', 'data_processo': 'no label', 'num_certidao': 'no label', 'conta_edificacoes': 'no label', 'CPF_POSSUIDOR': 'no label', 'funcionario': 'no label', 'matricula': 'no label', 'data_certidao': 'no label', 'funcionario2': 'no label', 'matricula2': 'no label', 'logradouro': 'no label', 'abrang_PVG': 'no label', 'dist_esquina': 'no label', 'chave_lig_': 'no label', 'DOCUMENTO_IMOV': 'no label', 'ART': 'no label', 'SETOR_COHAB': 'no label', 'Unidade': 'no label', });
lyr_mancha_SGB_2.set('fieldLabels', {'fid': 'no label', 'Tipo_ADA': 'no label', });
lyr_mancha_guaiba_3.set('fieldLabels', {'gid': 'no label', 'fid': 'no label', 'nome_bairr': 'no label', 'tot_pessoa': 'no label', 'tot_domici': 'no label', 'previa1_po': 'no label', 'previa1_do': 'no label', 'tipo': 'no label', 'bairro_oficial': 'no label', 'area_km2': 'no label', });
lyr_areas_risco_municipio_4.set('fieldLabels', {'id': 'no label', 'fid': 'no label', 'Id': 'no label', 'Nome': 'header label - always visible', 'Tipo': 'header label - always visible', 'area_m2': 'header label - always visible', 'area_ha': 'no label', });
lyr_cartografia_risco_SGB_5.set('fieldLabels', {'fid': 'no label', 'UF': 'no label', 'MUNIC': 'no label', 'CD_GEOCMU': 'no label', 'LOCAL': 'no label', 'DATA_SETOR': 'no label', 'NUM_SETOR': 'no label', 'TIPOLO_G1': 'header label - always visible', 'TIPOLO_E1': 'no label', 'SITUACAO_01': 'no label', 'COBRADE_01': 'no label', 'TIPOLO_G2': 'no label', 'TIPOLO_E2': 'no label', 'SITUACAO_02': 'no label', 'COBRADE_02': 'no label', 'TIPOLO_G3': 'no label', 'TIPOLO_E3': 'no label', 'SITUACAO_03': 'no label', 'COBRADE_03': 'no label', 'TIPOLO_G4': 'no label', 'TIPOLO_E4': 'no label', 'SITUACAO_04': 'no label', 'COBRADE_04': 'no label', 'TIPOLO_G5': 'no label', 'TIPOLO_E5': 'no label', 'SITUACAO_05': 'no label', 'COBRADE_05': 'no label', 'DESCRICAO': 'header label - always visible', 'NUM_EDIF': 'no label', 'NUM_PESS': 'no label', 'OBS_OCUP': 'no label', 'GRAU_VULNE': 'no label', 'GRAU_RISCO': 'header label - always visible', 'SUG_INTERV': 'header label - always visible', 'ORGAO_EXEC': 'no label', 'PROJETO': 'no label', 'EQUIPE_EXECUTORA': 'no label', 'SEQUENCIA': 'no label', 'M_tipolo': 'no label', 'DOM_PART': 'no label', 'DOM_COLE': 'no label', 'EST_AGRO': 'no label', 'EST_ENSI': 'no label', 'EST_SAUD': 'no label', 'EST_OUTR': 'no label', 'EDI_CONS': 'no label', 'EST_RELI': 'no label', 'DOM_TOTAL': 'no label', 'cd_setor': 'no label', 'TIPOLOGIA': 'header label - always visible', });
lyr_cartografia_risco_SGB_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});