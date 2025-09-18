
import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors';
import { router } from './routes'


const app = express();
app.use(express.json());
app.use(router);

//variáveis 
const port = process.env.PORT || 3334;

//middleware de tratamento de erros
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

  //se for um erro conhecido
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message
    });
  }


 //se for um erro desconhecido
  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error!'
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

