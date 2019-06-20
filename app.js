import express from 'express';
import config from './config/config';
import datasource from './config/datasource';
import bodyParser from 'body-parser';
import itemRouter from './routes/item';
import userRouter from './routes/users';
import authRouter from './routes/auth';
import authorization from './auth';

const app = express();
app.config = config;
app.datasource = datasource(app);
app.set('port', 3000);

const auth = authorization(app);

app.use(bodyParser.json());
app.use(auth.initialize());

app.auth = auth;

itemRouter(app);
userRouter(app);
authRouter(app);


export default app;