var express = require('express');
var router = express.Router();

const { Data } = require('../models/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/data', (req, res) => {

  const { request, name, content, date } = req.body

  const response = async () => {

    const data = await User.findOne({ where: { request, name, } })
    if (data) {

      return res.json({
        code: 422,
        message: 'data existed'
      })

    } else {

      await Data.create({ request, name, content, date })
      return res.json({
        code: 0,
        message: 'upload success'
      })

    }
  }

  response()
})

module.exports = router;
