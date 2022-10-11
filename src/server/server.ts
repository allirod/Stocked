import express from 'express';
import path from "path";
import session from 'express-session';
import router from './router';
import { v4 as genuuid } from 'uuid';
import dotenv from 'dotenv';
dotenv.config();

import * as redis from 'redis';
import connectRedis from 'connect-redis';
let RedisStore = connectRedis(session);
let redisClient = redis.createClient();

import helmet from 'helmet';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  name: 'stockedcookie',
  genid: function(req)  {
    return genuuid();
  },
  secret: process.env.SECRET,
  saveUninitialized: false,
  cookie: { 
    httpOnly: true, // defaults to true
    secure: true,
    sameSite: true // blocks CORS requests on cookies
  },
  store: new RedisStore({client: redisClient as any}),
  resave: false
}))
app.use(helmet());

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
    const defaultErr = {log: 'Unknown middleware error', status: 500, message: { error: 'Unknown middleware error' },
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj);
    return res.status(errorObj.status).json(errorObj.message);
  }
);

app.listen(port, () => console.log(`Server listening on ${port}`));

export default app;
