const express = require('express');
const { Address, Employee } = require('./models');

const app = express();

// EXEMPLO EAGER LOADING

app.get('/employees/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({
        where: { id },
        include: [{ model: Address, as: 'addresses', attributes: { exclude: ['number'] },}],

      });

    if (!employee)
      return res.status(404).json({ message: 'Funcionário não encontrado' });
      
    console.log(employee.toJSON())

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  };
});

// EXEMPLO LAZY LOADING

// app.get('/employees/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const employee = await Employee.findOne({ where: { id } });

//     if (req.query.includeAddresses === 'true') {
//       console.log("----->", req.query.includeAddresses)
//       const addresses = await Address.findAll({ where: { employeeId: id } });
//       return res.status(200).json({ employee, addresses });
//     }

//     if (!employee)
//       return res.status(404).json({ message: 'Funcionário não encontrado' });

//     return res.status(200).json(employee);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: 'Algo deu errado' });
//   };
// });

app.get('/employees', async (_req, res) => {
  try {
    const employees = await Employee.findAll({
      include: { model: Address, as: 'addresses' },
    });

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  };
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

module.exports = app;