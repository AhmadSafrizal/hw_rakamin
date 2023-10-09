const pool = require('../db')
const { signToken } = require('../helper/signToken')
const bcrypt = require('bcrypt')

const register = async (req, res) => {
  try {
    // req body
    const { email, gender, password, role } = req.body

    // Hash password
    const salt = 10
    const hashedPassword = await bcrypt.hash(password, salt)

    // query sql
    const query = {
      text: "INSERT INTO users (email, gender, password, role) VALUES ($1, $2, $3, $4)",
      values: [email, gender, hashedPassword, role]
    }

    // eksekusi query
    const result = await pool.query(query)

    // registrasi berhasil
    res.status(201).json({
      message: "Registration successfull"
    })
  } catch (err) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      err: err
    })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body

    // Email dan password kosong
    if (!email || !password) {
      return next("Please enter email and password", 400)
    }

    // query sql
    const query = {
      text: "SELECT * FROM users WHERE email = $1",
      values: [email]
    }

    // eksekusi query
    const result = await pool.query(query)

    // cek username dan password benar atau salah
    if (result.rows.length === 0) {
      res.status(400).json({
        message: "Invalid email or password"
      })
    }

    // perbandingan password hash dengan password
    const user = result.rows[0];
    const passwordMatch = await bcrypt.compare(password, user.password)

    if (!passwordMatch) {
      res.status(400).json({
        message: "Invalid email or password"
      })
    }

    const token = signToken(result.rows[0])

    // Kirim token sebagai respons
    res.status(200).json(
      { 
        token 
      }
    );
  } catch (err) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      err: err
    })
  }
}

const getUsers = async (req, res) => {
  try {
    const num = req.query.page - 1
    const limit = 10
    const offset = num * limit

    // query sql
    const query = {
      text: `SELECT * FROM users ORDER BY id ASC OFFSET ${offset} LIMIT ${limit}`,
    }

    // eksekusi query
    const result = await pool.query(query)

    // registrasi berhasil
    res.status(200).json(
      result.rows
    )
  } catch (err) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      err: err
    })
  }
}

module.exports = {
  register,
  login,
  getUsers
}