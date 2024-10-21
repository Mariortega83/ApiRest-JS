const express = require('express')
const app = express()
const cors = require('cors');
const port = 3000


app.use(cors());

app.get('/', (req, res) => {
  const datos = {
    cars: [
      {
        brand: 'BMW',
        color: 'Green',
        model: 'M3 Competition'
      },
      {
        brand: 'Audi',
        color: 'Grey',
        model: 'RS 7'
      },
      {
        brand: 'Mercedes',
        color: 'Black',
        model: 'Clase G AMG'
      },
      {
        brand: 'Toyota',
        color: 'Black',
        model: 'Celica'
      },
      {
        brand: 'Abarth',
        color: 'Yellow',
        model: '595'
      }
    ]
  }
  res.json(datos);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})