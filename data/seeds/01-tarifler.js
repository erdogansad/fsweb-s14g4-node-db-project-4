const tarifler = [
  { tarif_adi: "Spagetti Bolonez", kayit_tarihi: "2021-01-01 08:23:19.120" },
  { tarif_adi: "Kremalı Mantar Çorbası", kayit_tarihi: "2022-03-15 17:45:10.512" },
  { tarif_adi: "Fırında Tavuk But", kayit_tarihi: "2022-07-10 12:30:00.000" },
  { tarif_adi: "Elmalı Turta", kayit_tarihi: "2023-02-28 10:15:45.789" },
  { tarif_adi: "Çikolatalı Kek", kayit_tarihi: "2023-06-18 14:05:22.345" },
];

exports.tarifler = tarifler;

exports.seed = function (knex) {
  return knex("tarifler").insert(tarifler);
};
