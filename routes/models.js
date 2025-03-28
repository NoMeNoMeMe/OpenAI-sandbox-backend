var express = require('express');
var router = express.Router();
const openai = require('../utils/openai'); // Import the OpenAI client

router.get('/', async function (req, res, next) {
    const list = await openai.models.list();
    res.send(list.data);
});

module.exports = router;
