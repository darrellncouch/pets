//Update the name of the controller below and rename the file.
const pets = require("../controllers/pets.js")
module.exports = function(app){

  app.get('/', template.index);

}
