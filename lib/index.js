import http from 'http'
import director from 'director'

import {PORT} from "./config"


const router=new director.http.Router({
    "/hello":{
        get(){
            this.res.writeHead(200, { 'Content-Type': 'text/plain' })
            this.res.end('hello world')
        }
    }
})


const server=http.createServer((req, res)=>{

    router.dispatch(req, res, err=>{
        if(err){
            res.writeHead(404)
            res.end()
        }
    })

})

server.listen(PORT)

console.log(`Server running at ${PORT}`);