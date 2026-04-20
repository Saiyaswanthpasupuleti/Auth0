const { auth } = require("express-oauth2-jwt-bearer");
const jwtCheck = auth({
  audience: process.env.AUDIENCE,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
  tokenSigningAlg: process.env.TOKEN_SIGNING_ALG,
});

module.exports = jwtCheck;
