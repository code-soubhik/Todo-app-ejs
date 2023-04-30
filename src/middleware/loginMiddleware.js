const loginMiddleware = (req, res, next) => {
    
    if (!(req.session && req.session.token)) {
        return res.redirect("/login")
    }
    return next();
}

module.exports = loginMiddleware;