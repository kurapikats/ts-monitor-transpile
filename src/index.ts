//const express = require('express')
import * as express from 'express'

const app = express()

app.get('/', (req, res) => res.send('Hello World!sssa'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

function hello() {
  return new Promise((resolve, reject) => {
    const z = 1
    if (z) {
      resolve('hello world');
    } else {
      reject('failed hello');
    }
  });
}

hello().then(x => {
  console.log(x);
}).catch(e => console.log(e));

async function world() {
  try {
    let y = await hello();
    console.log(y, 'async success');
  } catch (e) {
    console.log(e, 'err');
  }

}

world();