# MSAL Authentication with Proxy

- Authenticate your server paths with Azure Active Directory using Reverse Proxy
- Modified from [Azure-Samples/ms-identity-node](https://github.com/Azure-Samples/ms-identity-node)

## Configuration

- `.env`
- `pathRoleMapping.js`

```bash
# windows
copy .env.example .env 
copy pathRoleSettings.js.example pathRoleSettings.js 
# linux
cp .env.example .env 
cp pathRoleSettings.js.example pathRoleSettings.js 
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
# or using docker
docker compose up # default port 80
```
