import { decrypt } from "./decrypt";
export default checkKey;

/**
 * Checks for correct API key
 * @param {Any} req Request object
 * @param {Any} res Response object
 * @param {Any} next Middleware Next Object
 */
function checkKey(req, res, next) {
  let key = req.headers.key;
  key ? key = decrypt(key) : res.status(401).send('Unauthorized Request');
  console.log('Checking key');
  key === process.env.API_KEY ? next() : res.status(401).send('Unauthorized Request');
}
