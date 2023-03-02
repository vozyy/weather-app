import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());

// const db = require('./src/db/models/index');
// async () => {
//   try {
//     await db.sync();
//   } catch (e) {
//     console.log(e);
//   }
// };

app.listen(PORT, () => {
  console.log(`Weather App started on: ${PORT}`);
});
