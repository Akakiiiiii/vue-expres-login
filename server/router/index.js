const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send({
        session:req.session
    })
})

module.exports = router