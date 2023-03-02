const store = require('../store');

const hasRoles = async (req, res, next) => {

    if (process.env.ENABLE_ROLES === "1") {
        const userRoles = req.session.account?.idTokenClaims?.roles;
        if (!userRoles) {
            return res.send(process.env.NO_ROLES_MESSAGE);
        }
        const checkPathRole = (path, roles) => {
            const regexp = new RegExp(path);
            if (req.originalUrl.match(regexp)) {
                const intersection = userRoles.filter(value => roles.includes(value));
                if (!intersection.length) {
                    return res.send(process.env.NO_PERMISSION_MESSAGE);
                }
            }
        };

        const pathRoleSettings = await store.read();
        Object.entries(pathRoleSettings).forEach(([path, roles]) => {
            if (Array.isArray(roles)) {
                return checkPathRole(path, roles);
            } else {
                return checkPathRole(path, roles.roles);
            }

        });
    }

    next();
};

module.exports = hasRoles;