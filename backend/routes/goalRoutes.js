const express = require('express')
const router = express.Router()
// controller
const { getGoals, setGoals, updateGoal, deleteGoals } = require('../controllers/goalController')
const { protect } = require("../middleware/authMiddleware")


// router.get('/', (req, res) => {
//   res.status(200).json({ message: 'Get Goals' })
// })

// router.get('/', getGoals)
router.route('/').get(protect, getGoals).post(protect, setGoals)
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoals)


// router.post('/', (req, res) => {
//   res.status(200).json({ message: 'Set Goal' })
// })

// router.put('/:id', (req, res) => {
//   res.status(200).json({ message: `Update Goal ${req.params.id}` })
// })

// router.delete('/:id', (req, res) => {
//   res.status(200).json({ message: `Delete Goal ${req.params.id}` })
// })


module.exports = router 
