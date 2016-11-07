import http from 'http'
import director from 'director'

import {
    PORT
} from './config'

import {
    Success,
    Error
} from './response'


const router = new director.http.Router({
    "/": {
        get: Success("Hello, I am Gnocchi")
    }
})


const server = http.createServer((req, res) => {
    req.chunks = [];
    req.on('data',  (chunk) =>{
        req.chunks.push(chunk.toString());
    });
    router.dispatch(req, res, (err) => {
        Error(err).bind({
            res: res
        })()
    })
})

server.listen(PORT)

console.log(`Server running at ${PORT}`);