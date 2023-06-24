exports.up = function (knex) {
  return knex.schema
    .createTable("tarifler", (tbl) => {
      tbl.increments("tarif_id");
      tbl.string("tarif_adi").unique();
      tbl.string("kayit_tarihi");
    })
    .createTable("adimlar", (tbl) => {
      tbl.increments("adim_id");
      tbl.integer("adim_sirasi");
      tbl.string("adim_talimati");
      tbl.integer("tarif_id").references("tarif_id").inTable("tarifler");
    })
    .createTable("malzemeler", (tbl) => {
      tbl.increments("malzeme_id");
      tbl.string("malzeme_adi");
    })
    .createTable("icindekiler", (tbl) => {
      tbl.increments("icindekiler_id");
      tbl.integer("adim_id").references("adim_id").inTable("adimlar");
      tbl.integer("malzeme_id").references("malzeme_id").inTable("malzemeler");
      tbl.float("miktar");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("tarifler").dropTableIfExists("adimlar").dropTableIfExists("malzemeler").dropTableIfExists("icindekiler");
};
