const express = require('express');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})


const port = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`shareFy listening on port ${port}!`))