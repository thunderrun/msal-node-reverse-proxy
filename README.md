# MSAL Authentication with Proxy

- Authenticate your server paths with Azure Active Directory using Reverse Proxy
- Modified from [Azure-Samples/ms-identity-node](https://github.com/Azure-Samples/ms-identity-node)

## Configuration

```bash
copy .env.example .env # windows
cp .env.example .env # linux
```

- `.env`
- `pathRoleMapping.js`

## Development

```bash
npm i
npm run dev
# then open http://localhost:3000
```

## Deployment

```bash
npm start
# or using docker
docker compose up
```
