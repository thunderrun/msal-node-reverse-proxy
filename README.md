# MSAL Node Reverse Proxy

- Authenticate your server paths with Azure Active Directory using Reverse Proxy
- Modified from [Azure-Samples/ms-identity-node](https://github.com/Azure-Samples/ms-identity-node)

## Prerequisites

Node.js or Docker

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
- Configure Proxy path, App path and origin 
- Enable/Disable Azure AD App Roles

### `pathRoleMapping.js`

```js
// using RegExp to match URL

module.exports = {
    '/path-required-roles': ['Role1', 'Role2'], // users with Role1 or Role2 will have access to path /path-required-roles
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
docker compose up # port 80
```

NGINX configuration example with Docker Compose

```
server {
    ...

    location /proxy {
        proxy_pass http://msal-node-reverse-proxy:3000/; 
    }
}
```
