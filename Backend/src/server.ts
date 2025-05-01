import express, { Request, Response } from 'express';
import * as http from 'node:http';

const port = process.env.PORT || 3000;
import indexRouter from './api/index.router.js';
import errorHandler from './api/common/middleware/error.middleware.js';

const app = express();
const server = http.createServer(app);

const router = express.Router();

app.use('/', router);
app.use('/', express.json(), indexRouter);

app.use(errorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');

  const query = req.query;
  res.json({
    message: 'query',
    data: query,
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});