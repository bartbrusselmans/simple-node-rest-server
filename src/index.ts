import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

dotenv.config();

// import models from './models';
// import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//     req.context = {
//         models,
//         me: models.users[1],
//     };

//     next();
// });

// app.use('/session', routes.session);
// app.use('/users', routes.user);
// app.use('/messages', routes.message);

const getYear = (date: Date): string => `${date.getFullYear()}`;

app.get('/', (req, res) => {
  const year = getYear(new Date());
  res.send(`Hello world! ${year}`);
});

// app.get('/', (req, res) => {
//     return res.send('Received a GET HTTP method!');
// });

// app.post('/', (req, res) => {
//     return res.send('Received a POST HTTP method!');
// });

// app.put('/', (req, res) => {
//     return res.send('Received a PUT HTTP method!');
// });

// app.delete('/', (req, res) => {
//     return res.send('Received a DELETE HTTP method!');
// });

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening on port ${process.env.PORT}!`);
});
