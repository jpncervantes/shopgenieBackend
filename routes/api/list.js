const express = require('express')
const { createList, getList } = require('../../controller/listController')

const router = express.Router()

router.route('/').post(createList).get(getList)

module.exports = router
