const fs = require('fs').promises;
const path = require('path');

// Ruta del archivo JSON
const jsonFilePath = path.join(__dirname, './products.json');
  
let menu = null

async function readJsonFile(filePath) {
    try {
      const data = await fs.readFile(filePath, 'utf8');
      const jsonData = JSON.parse(data);
      return jsonData;
    } catch (err) {
      console.error('Error reading or parsing file:', err);
      throw err;
    }
  }
  
  
  // Leer y parsear el archivo JSON
  readJsonFile(jsonFilePath)
    .then(data => {
      console.log('JSON data OK:', data);
       menu = data;
      console.log(menu[0])
      //const pizzaSection = menu.find( section => section.Pizza)
      //console.log(pizzaSection ? pizzaSection.Pizza : [])
     
    })
    .catch(err => {
      console.error('Error:', err);
     // res.send("Error pizza")
    });

const getPizza = (req , res) => {

    res.send(menu[1])
}



const getMilanesa = (req , res) =>{

    res.send(menu[0])
}


module.exports={ getPizza ,
                getMilanesa
                }

