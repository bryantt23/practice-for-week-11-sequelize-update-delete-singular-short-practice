// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Error handling, env variables, and json middleware - DO NOT MODIFY
require('express-async-errors');
require('dotenv').config();
app.use(express.json());

// Import the models used in these routes - DO NOT MODIFY
const { Puppy } = require('./db/models');

// Index of all puppies - DO NOT MODIFY
app.get('/puppies', async (req, res, next) => {
  const allPuppies = await Puppy.findAll({ order: [['name', 'ASC']] });

  res.json(allPuppies);
});

// STEP 1: Update a puppy by id
app.put('/puppies/:puppyId', async (req, res, next) => {
  // Your code here
  const puppy = Puppy.findByPk(req.params.puppyId);
  console.log(
    `
    







  
  `,
    req.params
  );
  // let age_years,
  //     if(req.body.age_years){
  //     age_years=req.body.age_years
  // }
  // if (req.body.weight_lbs) {
  //   weight_lbs = req.body.weight_lbs;
  // }
  // if (req.body.microchipped) {
  //   microchipped = req.body.microchipped;
  // }
  const { age_yrs, weight_lbs, microchipped } = req.body;

  Puppy.update(
    {
      age_yrs: age_yrs || puppy.age_yrs,
      weight_lbs: weight_lbs || puppy.weight_lbs,
      microchipped: microchipped || puppy.microchipped
    },
    {
      where: {
        id: req.params.puppyId
      }
    }
  );
});

// STEP 2: Delete a puppy by id
app.delete('/puppies/:puppyId', async (req, res, next) => {
  // Your code here
});

// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
  res.json({
    message: 'API server is running'
  });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
