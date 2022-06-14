const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

const generateToken = require('./generateToken')

app.use((req, _res, next) => {
  console.log('req.method:', req.method);
  console.log('req.path:', req.path);
  console.log('req.params:', req.params);
  console.log('req.query:', req.query);
  console.log('req.headers:', req.headers);
  console.log('req.body:', req.body);
  next();
});

// middlewares
const authProductName = (req, res, next) => {
  const { productName } = req.body;

  if (!productName) return res.status(400).json({ "message": "O campo productName é obrigatório" });

  if (productName.length < 4) return res.status(404)
    .json({ "message": "O campo productName deve ter pelo menos 4 caracteres" });

  next();
};

const authInfos = (req, res, next) => {
  const { infos } = req.body;
  const { saleDate } = infos;
  if (!infos) return res.status(400).json({ "message": "O campo infos é obrigatório" });

  if (!saleDate) return res.status(400).json({ "message": "O campo saleDate é obrigatório" })

  next();
}


const authWarrantyPeriod = (req, res, next) => {
  const { infos: { warrantyPeriod } } = req.body;

  if (parseInt(warrantyPeriod) < 1 || parseInt(warrantyPeriod) > 3) return res.status(400)
    .json({ "message": "O campo warrantyPeriod precisa estar entre 1 e 3" })

  next()
}

const fieldsValidation = (req, res, next) => {
  const { email, password, firstName, phone } = req.body;
  if (!email || !password || !firstName || !phone) return res.status(401)
    .json({ message: 'missing fields' }).end()

  next();
}

const tokenValidation = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization || authorization.length !== 16) return res.status(401)
      .json({ message: 'Token inválido!' })

  } catch (error) {
    res.status(500).end();
  }

  next();
}

// rota sales
app.post('/sales', tokenValidation, authProductName, authInfos, authWarrantyPeriod, function (req, res) {
  res.status(200).json({ message: 'Sale created successfully!' })
});

// rota signup
app.post('/signup', fieldsValidation, function (req, res) {
  const token = generateToken();
  console.log(req.header)
  return res.status(200).json({ "token": `${token}` })
})


app.listen(3000, () => {
  console.log('Ouvindo na 3000!')
});