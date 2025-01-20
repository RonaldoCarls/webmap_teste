var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1 = new ol.format.GeoJSON();
var features_2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1 = format_2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1.readFeatures(json_2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1.addFeatures(features_2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1);
var lyr_2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1, 
                style: style_2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1,
                popuplayertitle: '2023 - SINISTROS TOTAL - COMPLETA - SINISTROS - COMPLETO',
                interactive: true,
    title: '2023 - SINISTROS TOTAL - COMPLETA - SINISTROS - COMPLETO<br />\
    <img src="styles/legend/2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1_0.png" /> ONIBUS_PEDESTRE<br />\
    <img src="styles/legend/2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1_1.png" /> MOTO_PEDESTRE<br />\
    <img src="styles/legend/2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1_2.png" /> MOTO_ONIBUS<br />\
    <img src="styles/legend/2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1_3.png" /> MOTO_OBJETO FIXO<br />\
    <img src="styles/legend/2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1_4.png" /> MOTO_MOTO<br />\
    <img src="styles/legend/2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1_5.png" /> MOTO<br />\
    <img src="styles/legend/2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1_6.png" /> CARRO_QUADRICICULO<br />\
    <img src="styles/legend/2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1_7.png" /> CARRO_PEDESTRE<br />\
    <img src="styles/legend/2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1_8.png" /> CARRO_ONIBUS<br />\
    <img src="styles/legend/2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1_9.png" /> CARRO_OBJETO FIXO<br />\
    <img src="styles/legend/2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1_10.png" /> CARRO_MOTO<br />\
    <img src="styles/legend/2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1_11.png" /> CARRO_CARRO_MOTO<br />\
    <img src="styles/legend/2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1_12.png" /> CARRO_CARRO<br />\
    <img src="styles/legend/2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1_13.png" /> CARRO<br />\
    <img src="styles/legend/2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1_14.png" /> CAMINHAO_MOTO<br />\
    <img src="styles/legend/2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1_15.png" /> CAMINHAO_CARRO<br />\
    <img src="styles/legend/2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1_16.png" /> BICICLETA_OBJETO FIXO<br />\
    <img src="styles/legend/2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1_17.png" /> BICICLETA_MOTO<br />\
    <img src="styles/legend/2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1_18.png" /> BICICLETA_CARRO<br />\
    <img src="styles/legend/2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1_19.png" /> BICICLETA_CAMINHAO<br />\
    <img src="styles/legend/2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1_20.png" /> BICICLETA<br />\
    <img src="styles/legend/2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1_21.png" /> ANIMAL_MOTO<br />\
    <img src="styles/legend/2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1_22.png" /> ANIMAL_CARRO<br />\
    <img src="styles/legend/2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1_23.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1];
lyr_2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1.set('fieldAliases', {'DATA': 'DATA', 'DIA DA SEMANA': 'DIA DA SEMANA', 'TURNO': 'TURNO', 'HORARIO': 'HORARIO', 'TIPO': 'TIPO', 'LOGRADOURO': 'LOGRADOURO', 'BAIRRO': 'BAIRRO', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', 'TIPO DE SINISTRO': 'TIPO DE SINISTRO', 'ENVOLVIDOS': 'ENVOLVIDOS', 'MOTO': 'MOTO', 'CARRO': 'CARRO', 'CAMINHAO': 'CAMINHAO', 'BICICLETA': 'BICICLETA', 'ONIBUS': 'ONIBUS', 'OUTROS': 'OUTROS', 'TOTAL DE VEICULOS': 'TOTAL DE VEICULOS', 'PEDESTRE': 'PEDESTRE', 'ANIMAL': 'ANIMAL', 'field_21': 'field_21', });
lyr_2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1.set('fieldImages', {'DATA': 'TextEdit', 'DIA DA SEMANA': 'TextEdit', 'TURNO': 'TextEdit', 'HORARIO': 'Hidden', 'TIPO': 'Range', 'LOGRADOURO': 'TextEdit', 'BAIRRO': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', 'TIPO DE SINISTRO': 'TextEdit', 'ENVOLVIDOS': 'Hidden', 'MOTO': 'Hidden', 'CARRO': 'Hidden', 'CAMINHAO': 'Hidden', 'BICICLETA': 'Hidden', 'ONIBUS': 'Hidden', 'OUTROS': 'Hidden', 'TOTAL DE VEICULOS': 'CheckBox', 'PEDESTRE': 'Hidden', 'ANIMAL': 'Hidden', 'field_21': 'Hidden', });
lyr_2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1.set('fieldLabels', {'DATA': 'inline label - always visible', 'DIA DA SEMANA': 'inline label - always visible', 'TURNO': 'inline label - always visible', 'TIPO': 'no label', 'LOGRADOURO': 'inline label - always visible', 'BAIRRO': 'no label', 'LATITUDE': 'no label', 'LONGITUDE': 'no label', 'TIPO DE SINISTRO': 'inline label - always visible', 'TOTAL DE VEICULOS': 'no label', });
lyr_2023SINISTROSTOTALCOMPLETASINISTROSCOMPLETO_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});