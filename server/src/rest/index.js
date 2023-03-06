import express from 'express';
import cors from 'cors';
import routes from './routes';
import http from 'http';

const app = express();
const httpServer = http.createServer(app);

app.use(express.json());
app.use(cors());
app.use(routes);

export default httpServer;
