const pathRoleSettings = require('../pathRoleSettings')

const hasRoles = (req, res, next) => {
    if (process.env.ENABLE_ROLES === "1") {
        const userRoles = req.session.account?.idTokenClaims?.roles;
        if (!userRoles) {
            return res.send("You don't have any roles. Ask your administrator to assign the roles to your Microsoft account.");
        }
        Object.entries(pathRoleSettings).forEach(([path, roles]) => {
            const regexp = new RegExp(path)
            if (req.originalUrl.match(regexp)) {
                const intersection = userRoles.filter(value => roles.includes(value));
                if (!intersection.length) {
                    return res.send("You don't have permission of the current path. Ask your administrator to assign the correct roles to your Microsoft account.");
                }
            }
        })
    }

    next();
};

module.exports = hasRoles;