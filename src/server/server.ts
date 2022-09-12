import express from 'express';
import path from "path";
import router from './router';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/dist', express.static(path.join(__dirname, '../../dist')));
app.use(express.static(path.join(__dirname, '../../public')));
//app.use(express.static(path.join(__dirname, '../client')));

app.use('/api', router)

app.use((req, res) => res.status(404).json('Page not found'));

app.use(
  (
    err: unknown,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const defaultErr = {log: 'Unknown middleware error', status: 400, message: { error: 'Unknown middleware error' },
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj);
    return res.status(errorObj.status).json(errorObj.message);
  }
);

app.listen(port, () => console.log(`Server listening on ${port}`));

export default app;
