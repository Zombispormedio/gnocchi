import http from 'http'
import director from 'director'
import morgan from 'morgan'
import {waterfall} from 'async'

import {
    PORT
} from './config'

import {
    SuccessFunc,
    ErrorFunc
} from './response'

import routesDispatcher from "./routes"

const logger = morgan('dev')


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

    handler(req, res);

})

routesDispatcher(router)

server.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})



function handler(req, res) {
    waterfall([
        (next) => {
            logger(req, res, (error) => {
                next(error);
            });
        }
    ], (err) => {
        if (err) return console.log(err);

        router.dispatch(req, res, (err) => {
            ErrorFunc(err).bind({
                res: res
            })()
        })
    })
}