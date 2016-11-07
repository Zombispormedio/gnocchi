import http from 'http'
import assert from 'assert'
import '../lib/index.js'

describe('Server Started', ()=>{
    it("should return 200", done=>{
        http.get(`http://localhost:${process.env.PORT || 5093}/hello`, res=>{
            assert.equal(200, res.statusCode)
            done()
        })
    })
})