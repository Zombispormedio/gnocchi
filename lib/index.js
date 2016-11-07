import http from 'http'
import director from 'director'

import {
    PORT
} from './config'

import {
    SuccessFunc,
    ErrorFunc
} from './response'

import routesDispatcher from "./routes"


const router = new director.http.Router({
    "/": {
        get: SuccessFunc("Hello, I am Gnocchi")
    }
})


const server = http.createServer((req, res) => {
    req.chunks = [];
    req.on('data', (chunk) => {
        req.chunks.push(chunk.toString());
    });
    router.dispatch(req, res, (err) => {
        ErrorFunc(err).bind({
            res: res
        })()
    })
})

routesDispatcher(router)

server.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})