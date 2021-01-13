import express from 'express';

const app = express();

app.set('port', process.env.PORT || 3000);
const port = app.get('port');

const server = app.listen(port, () => {
  console.log(`Server has started on Port ${port}`);
});
console.log('Hello');
export default server;
