const supabase = require("../config/supabaseConfig")

const login = (req, res) => {
    res.send("Logged in !!!")
}
const signup = (req, res) => {
    res.send("Logged in !!!")
}

module.exports = {
    login,
    signup
}