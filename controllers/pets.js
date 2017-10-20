const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    knex('pets').then((result)=>{

      res.render('index', {dataList : result})
    })
    .catch((err)=>{
      console.error(err)
    })
  },
}
