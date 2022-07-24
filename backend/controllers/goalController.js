const asyncHandler = require(`express-async-handler`)
const Goal = require('../models/goalModel')

// read ok
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id })
  res.status(200).json(goals)
})

// create ok
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error({ message: 'Please add a text field' })
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  })

  res.status(200).json(goal)
})

// update ok
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)
  if (!goal) {
    res.status(400)
    throw new Error('goal not found')
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.status(200).json(updatedGoal)
})


// delete ok
const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)
  if (!goal) {
    res.status(400)
    throw new Error('goal not found')
  }
  await goal.remove()
  res.status(200).json({ id: req.params.id })
})


module.exports = {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoals
}