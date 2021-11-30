const express = require('express');
const router = express.router();

router.post('/opret', (req, res) => {

});

router.get('/', (req, res) => {
    res.status(200).send(true);
});

module.exports  = router;