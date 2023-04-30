const isLogout = (req, res, next) => {
    
    if (req.session.token) {
        return res.redirect("/")
    }
    return next();
}

module.exports = isLogout;