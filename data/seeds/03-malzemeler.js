const malzemeler = [
  { malzeme_adi: "zeytinyağı" },
  { malzeme_adi: "su" },
  { malzeme_adi: "mantar" },
  { malzeme_adi: "tereyağı" },
  { malzeme_adi: "tavuk but" },
  { malzeme_adi: "tuz" },
  { malzeme_adi: "karabiber" },
  { malzeme_adi: "kekik" },
  { malzeme_adi: "un" },
  { malzeme_adi: "şeker" },
  { malzeme_adi: "kakao tozu" },
  { malzeme_adi: "kabartma tozu" },
  { malzeme_adi: "yumurta" },
  { malzeme_adi: "sıvı yağ" },
  { malzeme_adi: "süt" },
];

exports.malzemeler = malzemeler;

exports.seed = function (knex) {
  return knex("malzemeler").insert(malzemeler);
};
