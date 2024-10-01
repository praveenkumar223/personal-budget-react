//budget api
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3500;

app.use(cors());

const budget = {
  mybudget: [
    {
      title: 'Eat out',
      budget: 30
    },
    {
      title: 'Rent',
      budget: 400
    },
    {
      title: 'Groceries',
      budget: 90
    },
  ]
};


app.get('/budget01', (req, res) => {
  res.json(budget);
});

app.listen(port, () => {
  console.log(' app serving at http://localhost:3500');
});
