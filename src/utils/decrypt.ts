import * as crypto from 'crypto'

const algorithm = 'aes-256-ctr';
const secretKey = crypto.scryptSync(process.env.ENCRYPTION_KEY, 'salt', 32);


export function decrypt (hash) {
    console.log(hash);
    const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(hash.iv, 'hex'));

    const decrpyted = Buffer.concat([decipher.update(Buffer.from(hash.content, 'hex')), decipher.final()]);

    return decrpyted.toString();
};