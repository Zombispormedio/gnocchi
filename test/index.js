import http from 'http'
import assert from 'assert'
import {PORT} from '../lib/config.js'
import '../lib/index.js'


describe('Server Started', ()=>{
    it("should return 200", done=>{
        http.get(`http://localhost:${PORT}/hello`, res=>{
            assert.equal(200, res.statusCode)
            done()
        })
    })
})