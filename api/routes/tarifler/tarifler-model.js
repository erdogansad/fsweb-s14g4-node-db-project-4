const db = require("../../../data/dbConfig.js");

const objectCreator = (data) => {
  let obj = {
    tarif_id: Number(data[0].tarif_id),
    tarif_adi: data[0].tarif_adi,
    kayit_tarihi: data[0].kayit_tarihi,
    adimlar: [],
  };

  data.forEach((d) => {
    let finder = obj.adimlar.find((adm) => adm.adim_sirasi === d.adim_sirasi);

    if (!finder) {
      obj.adimlar.push({
        adim_id: d.adim_id,
        adim_sirasi: d.adim_sirasi,
        adim_talimati: d.adim_talimati,
        icindekiler: [],
      });
    }

    let icindekilerList = obj.adimlar[obj.adimlar.length - 1].icindekiler;
    if (d.icindekiler_id !== null) {
      icindekilerList.push({
        icindekiler_id: d.icindekiler_id,
        icindekiler_adi: d.malzeme_adi,
        miktar: d.miktar,
      });
    }
  });

  return obj;
};

const getAll = async () => {
  let data = await db
    .select("trf.*")
    .select("adm.*")
    .select("icn.icindekiler_id", "icn.adim_id", "icn.miktar")
    .select("mlz.malzeme_adi")
    .from("tarifler as trf")
    .leftJoin("adimlar as adm", "adm.tarif_id", "trf.tarif_id")
    .leftJoin("icindekiler as icn", "icn.adim_id", "adm.adim_id")
    .leftJoin("malzemeler as mlz", "icn.malzeme_id", "mlz.malzeme_id");
  let rtnArr = [];

  for (let i = 1; i <= data[data.length - 1].tarif_id; i++) {
    let dataById = data.filter((dt) => dt.tarif_id === i);
    rtnArr.push(objectCreator(dataById));
  }

  return rtnArr;
};

const getById = async (id) => {
  let data = await db
    .select("trf.*")
    .select("adm.*")
    .select("icn.icindekiler_id", "icn.adim_id", "icn.miktar")
    .select("mlz.malzeme_adi")
    .from("tarifler as trf")
    .where({ "trf.tarif_id": id })
    .leftJoin("adimlar as adm", "adm.tarif_id", "trf.tarif_id")
    .leftJoin("icindekiler as icn", "icn.adim_id", "adm.adim_id")
    .leftJoin("malzemeler as mlz", "icn.malzeme_id", "mlz.malzeme_id");

  return objectCreator(data);

  /* db("tarifler as trf")
    .leftJoin("adimlar as adm", "trf.tarif_id", "adm.tarif_id")
    .leftJoin("icindekiler as icn", "icn.adim_id", "adm.adim_id")
    .where({ "trf.tarif_id": id }); */
};

module.exports = {
  getAll,
  getById,
};
