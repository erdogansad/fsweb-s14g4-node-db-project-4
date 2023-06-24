const icindekiler = [
  { adim_id: 2, malzeme_id: 1, miktar: 0.014 },
  { adim_id: 3, malzeme_id: 2, miktar: 0.5 },
  { adim_id: 4, malzeme_id: 3, miktar: 0.2 },
  { adim_id: 5, malzeme_id: 4, miktar: 0.02 },
  { adim_id: 6, malzeme_id: 5, miktar: 0.5 },
  { adim_id: 7, malzeme_id: 6, miktar: 0.01 },
  { adim_id: 7, malzeme_id: 7, miktar: 0.005 },
  { adim_id: 7, malzeme_id: 8, miktar: 0.002 },
  { adim_id: 9, malzeme_id: 9, miktar: 0.2 },
  { adim_id: 9, malzeme_id: 8, miktar: 0.005 },
  { adim_id: 9, malzeme_id: 10, miktar: 0.08 },
  { adim_id: 10, malzeme_id: 4, miktar: 0.06 },
  { adim_id: 12, malzeme_id: 9, miktar: 0.3 },
  { adim_id: 12, malzeme_id: 11, miktar: 0.06 },
  { adim_id: 12, malzeme_id: 12, miktar: 0.01 },
  { adim_id: 13, malzeme_id: 13, miktar: 2 },
  { adim_id: 13, malzeme_id: 10, miktar: 0.2 },
  { adim_id: 14, malzeme_id: 14, miktar: 0.1 },
  { adim_id: 14, malzeme_id: 15, miktar: 0.2 },
];

exports.icindekiler = icindekiler;

exports.seed = function (knex) {
  return knex("icindekiler").insert(icindekiler);
};
