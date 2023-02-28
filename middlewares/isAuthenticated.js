const isAuthenticated = (req, res, next) => {
    if (!req.session.isAuthenticated) {
        return res.redirect(`${process.env.PROXY_PATH}/auth/signin?originalUrl=${req.originalUrl}`); // redirect to sign-in route
    }
    next();
};

module.exports = isAuthenticated;