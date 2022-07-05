const asyncHandler = require(`express-async-handler`)

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get goals' })
})

const setGoals = asyncHandler((req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error({ message: 'Please add a text field' })
  }

  res.status(200).json({ message: 'Set Goal' })
})

const updateGoals = asyncHandler((req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}` })
})

const deleteGoals = asyncHandler((req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` })
})


module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals
}