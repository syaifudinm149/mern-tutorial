const getGoals = (req, res) => {
  res.status(200).json({ message: 'Get goals' })
}
const setGoals = (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error({ message: 'Please add a text field' })
  }

  res.status(200).json({ message: 'Set Goal' })
}

const updateGoals = (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}` })
}

const deleteGoals = (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` })
}


module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals
}