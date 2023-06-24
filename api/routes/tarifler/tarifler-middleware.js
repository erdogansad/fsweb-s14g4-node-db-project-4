const { getById } = require("./tarifler-model");

const getRecipewithId = async (req, res, next) => {
  try {
    let query = await getById(req.params.id);
    if (query) {
      req.data = query;
      next();
    } else {
      next({ status: 404, message: "not found" });
    }
  } catch (e) {
    next(e);
  }
};

module.exports = {
  getRecipewithId,
};
