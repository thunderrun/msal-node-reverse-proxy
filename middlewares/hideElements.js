const store = require('../store');
const { parse } = require('node-html-parser');


const hideElements = async (proxyRes, proxyResData, userReq, userRes) => {
    const userRoles = userReq.session.account?.idTokenClaims?.roles;
    if (!userRoles) {
        return res.send(process.env.NO_ROLES_MESSAGE);
    }

    if (process.env.ENABLE_ROLES === "1" && proxyRes.headers['content-type'].includes('text/html')) {
        const pathRoleSettings = await store.read();
        for ([path, obj] of Object.entries(pathRoleSettings)) {
            if (!Array.isArray(obj) && obj.elements) {
                const regexp = new RegExp(path);
                if (userReq.originalUrl.match(regexp)) {
                    const html = proxyResData.toString('utf8');
                    const document = parse(html);

                    let style = "<style>";
                    Object.entries(obj.elements).forEach(([query, roles]) => {
                        const intersection = userRoles.filter(value => roles.includes(value));
                        if (!intersection.length) {
                            style += 
`${query} { 
    display: none;
}
`;
                        }
                    });
                    style += "</style>";
                    const styleNode = parse(style);
                    const head = document.querySelector('head');
                    head.appendChild(styleNode);
                    return document.toString();
                }
            }
        };
    }

    return proxyResData;
};

module.exports = hideElements;