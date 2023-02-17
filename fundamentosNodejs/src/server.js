import http from 'node:http';
import {DataBase} from './database.js';
import { json } from './middlewares/json.js';

const users = [];

const database = new DataBase();

const server = http.createServer(async (req, res) => {

  const {method, url} = req;


  await json(req, res);

  if(method === 'GET' && url === "/users"){
    const user = database.selected('users')
    return res.end(JSON.stringify(user))
  }

  if(method === 'POST' && url === "/users"){
    const {name, email} = req.body;
    const user = {
      id:1,
      name,
      email

    }
    database.insert('users', user)
    return res
    .writeHead(201)
    .end()
  }

  return res.writeHead(404).end('Not found')
});

server.listen(3333);