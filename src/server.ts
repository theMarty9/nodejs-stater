import express, { Express } from 'express';
import cors from 'cors';
import { SERVER, CORS } from '@config';
import { homeRouter } from '@routes';
import { notFoundMiddleware, headerMiddleware } from '@middlewares';
import { logger } from '@utils/logger';

const app: Express = express();
const port = SERVER.port;

app.use(cors({ origin: CORS.origin, credentials: CORS.credentials }));
app.use(headerMiddleware);
app.use(express.json());
app.use('/', homeRouter);
app.use(notFoundMiddleware);

app.listen(port, () => {
  logger.info(`⚡️[server]: Server is running at http://localhost:${port}`);
});
