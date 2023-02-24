# MSAL Authentication with Proxy

- Authenticate your server paths with Azure Active Directory using Reverse Proxy
- Modified from [Azure-Samples/ms-identity-node](https://github.com/Azure-Samples/ms-identity-node)

## Configuration

```bash
# windows
copy .example.env .env 
copy pathRoleSettings.example.js pathRoleSettings.js 
# linux
cp .example.env .env 
cp pathRoleSettings.example.js pathRoleSettings.js 
```

### `.env`

- Configure authentication and authorization parameters, see [Azure-Samples/ms-identity-node#running-the-sample](https://github.com/Azure-Samples/ms-identity-node#running-the-sample)
- Configure App Path and Origin 
- Enable/Disable Azure AD App Roles

### `pathRoleMapping.js`

```js
// using RegExp to match URL

module.exports = {
    '/path-required-roles': ['Role1', 'Role2'],
    '/path\\?file=[^ ]*test.ext': ['Role1'], // match query
}
```

## Development

```bash
npm i
npm run dev
# open http://localhost:3000
```

## Deployment

```bash
npm start # default port 3000
# or using docker compose
docker compose up # default port 80
```
