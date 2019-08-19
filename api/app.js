import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index';


const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/api/v1/', router);


const port = process.env.PORT || 8000;
// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
  status: 200,
  message: 'Welcome to this API.'
}));
app.all('*', (req, res) => res.status(404).json({
  status: 404,
  error: 'Endpoint does not exist',
}));
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

export default app;
