/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());

/* REACT WEBSITE */
app.use(express.static(path.join(__dirname, '../build')));
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

/* START SERVER */
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running ${port}`);
});