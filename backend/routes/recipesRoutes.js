const express = require('express')
const axios = require('axios');
const router = express.Router();
const URL = process.env.URL;
const app_id = process.env.app_id;
const app_key = process.env.app_key;
const middleware = require('./middleware')


router.get('/:ing', middleware.logger, async (req, res, next) => {
 
  const ingredient = req.params.ing;
  try { 
      const resp = await axios.get(`${URL}q=${ingredient}&app_id=${app_id}&app_key=${app_key}`);
      res.status(200).json(resp.data)
  } catch (e) {
    next(new ExpressError(err.message));
  }
});

module.exports = router;