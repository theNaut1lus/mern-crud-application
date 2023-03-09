const express = require('express')
const router = express.Router()
const { getGoals, setGoals, updateGoal, deleteGoal } = require("../controllers/goalController")

const {protect} = require('../middleware/authMiddleware')



router.route('/').get(protect, getGoals).post(protect, setGoals)

router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

router.post('/', (req,res) => {
    res.status(200).json({ message: 'set goals'})
})

router.put('/:id', (req,res) => {
    res.status(200).json({ message: `Update goals ${req.params.id}`})
})

router.delete('/:id', (req,res) => {
    res.status(200).json({ message: `Delete goals ${req.params.id}`})
})

module.exports = router