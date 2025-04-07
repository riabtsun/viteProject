import express, { Request, Response } from 'express';

const port = 3000;
const app = express();

const router = express.Router()

app.use('/', router)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');

  const query = req.query
  res.json({
    message: 'query',
    data: query
  })
})

app.listen(port => {
  console.log(`Server is running on port ${port}`);
});