import dotenv from 'dotenv';
import server from './src/rest/index';

dotenv.config();
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Weather App started on: ${PORT}`);
});
