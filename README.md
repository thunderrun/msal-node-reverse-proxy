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
cp pathRoleSettings.example.json pathRoleSettings.json 
```

### `.env`
*Requires restart to take effect*

- Configure authentication and authorization parameters, see [Azure-Samples/ms-identity-node#running-the-sample](https://github.com/Azure-Samples/ms-identity-node#running-the-sample)
- Configure Proxy path, App path and origin 
- Enable/Disable Azure AD App Roles

### `pathRoleMapping.json`
*Effective immediately on file save*

- Configure app path permissions with required roles
- Use RegExp to match URL
- Use Query Selectors to hide page element 

```jsonc
{
    "/path-required-roles": [ // users with Role1 or Role2 will have access to path /path-required-roles
        "Role1",
        "Role2"
    ],
    "/path\\?file=[^ ]*test.ext": [ // match query
        "Role1"
    ],
    "/path-required-roles/subpath": {
        "roles": ["Role1"],
        "elements": {  // hide elements using query selectors, users with Role1 but without Role2 cannot see his element
            "#container > div.btn-group.ud-toolbar.top-toolbar > button:nth-child(22)": ["Role2"]
        }
    }
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
