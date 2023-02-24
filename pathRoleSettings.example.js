// using RegExp to match URL

module.exports = {
    '/path-required-roles': ['Role1', 'Role2'], // users with Role1 or Role2 will have access to path /path-required-roles
    '/path\\?file=[^ ]*test.ext': ['Role1'], // match query
}