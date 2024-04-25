export const environment = {
  production: false,
  auth: {
    domain: 'dev-h1uf4xqw.us.auth0.com',
    clientId: 'urI6bHzGUB8TopItvWGj65kl8Qr0yP4s',
    authorizationParams: {
      redirect_uri: window.location.origin,
    },
  },
  api: {
    github: 'https://api.github.com/search/repositories?q=',
  },
};
