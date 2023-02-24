// using RegExp to match URL

module.exports = {
    '/path-required-roles': ['Role1', 'Role2'],
    '/path\\?file=[^ ]*test.ext': ['Role1'], // match query
}