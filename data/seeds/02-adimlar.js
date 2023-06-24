const adimlar = [
  { adim_sirasi: 1, adim_talimati: "Bir tencereye su ekleyin ve kaynatın", tarif_id: 1 },
  { adim_sirasi: 2, adim_talimati: "Mantarları dilimleyin ve tencereye ekleyin", tarif_id: 1 },
  { adim_sirasi: 3, adim_talimati: "1 yemek kaşığı tereyağı ekleyin", tarif_id: 1 },
  { adim_sirasi: 1, adim_talimati: "Tavuk butlarını yıkayın ve kurulayın", tarif_id: 2 },
  { adim_sirasi: 2, adim_talimati: "Bir kasede baharatları karıştırın", tarif_id: 2 },
  { adim_sirasi: 3, adim_talimati: "Tavuk butları baharat karışımıyla ovun", tarif_id: 2 },
  { adim_sirasi: 1, adim_talimati: "Un, tuz ve şekerle birlikte bir karıştırma kabına koyun", tarif_id: 3 },
  { adim_sirasi: 2, adim_talimati: "Soğuk tereyağı küçük parçalar halinde ekleyin", tarif_id: 3 },
  { adim_sirasi: 3, adim_talimati: "Hamuru yoğurun ve buzdolabında dinlendirin", tarif_id: 3 },
  { adim_sirasi: 1, adim_talimati: "Unu, kakao tozunu ve kabartma tozunu karıştırın", tarif_id: 4 },
  { adim_sirasi: 2, adim_talimati: "Yumurtaları şekerle çırpın", tarif_id: 4 },
  { adim_sirasi: 3, adim_talimati: "Yumurtalı karışıma sıvı yağ ve sütü ekleyin", tarif_id: 4 },
];

exports.adimlar = adimlar;

exports.seed = function (knex) {
  return knex("adimlar").insert(adimlar);
};
