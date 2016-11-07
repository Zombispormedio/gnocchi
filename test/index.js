import {assert} from 'chai'
import {
    PORT
} from '../lib/config.js'

import {get
} from '../lib/request.js'
import '../lib/index.js'


const URL = `http://localhost:${PORT}`;


describe('Server Started', () => {
    it("should return 200", () => {
        return get(URL)
            .then((res) => {
                assert.equal(200, res.status)
            })
    })


    it("should return result: 'Hello, I am Gnocchi'", () => {
        return get(URL)
            .then(res => {
                assert.equal(true, res.body.success)
                assert.equal("Hello, I am Gnocchi", res.body.result);
            });
    })

    it("should return message: 'Could not find path'", () => {
        let path = "hello"
       return get(`${URL}/${path}`)
            .then(res => {
                assert.equal(false, res.body.success)
                assert.equal(`Could not find path: /${path}`, res.body.err.message)
            });
    })
})