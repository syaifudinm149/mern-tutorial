// jwt
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asynchandler = require('express-async-handler')
const User = require('../models/userModel')
const { use } = require('../routes/userRoutes')

const registerUser = asynchandler(async (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password) {
    res.status(400)
    throw Error('Please add all fields')
  }
  // cheks if user exist
  const userExists = await User.findOne({ email })

  if (userExists) {
    res.status(400)
    throw Error('User already exists')
  }

  // hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword
  })

  if (user) {
    res.status(201).json({
      __id: user.id,
      name: user.name,
      email: user.email,
    })
  } else {
    res.status(400)
    throw Error('invalid user data')
  }
  res.json({ message: 'Register User' })
})

const loginUser = asynchandler(async (req, res) => {
  res.json({ message: 'Login User' })
})

const getMe = asynchandler(async (req, res) => {
  res.json({ message: 'User data display' })
})

module.exports = {
  registerUser,
  loginUser,
  getMe
}