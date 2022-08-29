import express from 'express';
import 'dotenv/config';
import checkKey from './utils/checkKey';
import * as admin from 'firebase-admin';
import cors from 'cors';
import * as crypto from 'crypto';
import { decrypt } from './utils/decrypt';

const serviceAccount = require('../service-account-json-here');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
const app = express();

app.use(cors());
app.use(express.json());
app.use(checkKey);

app.get('/', (req, res) => {
  console.log('req received')
  res.status(200).send('Hello World');
});

app.post('/', async (req, res) => {
  console.log(`Request receieved.`);
  const collection = decrypt(req.body.collection);
  const data = JSON.parse(decrypt(req.body));
  const date = new Date();
  data.createdAt = date.toString();
  const docName = crypto.createHash("sha256").update(JSON.stringify(data)).digest('hex');
  await db.collection(collection)
      .doc(docName)
      .set(data)
      .catch((err) => {
        console.error(err);
        res.status(500).send('Error');
        });

  res.status(200).send('Success');
});

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Email Save API Started.`);
  console.log(`Listening on port ${PORT}.`);
});
