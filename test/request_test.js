import assert from 'assert'

import {get} from '../lib/request.js'

const HTTP_URL = "https://www.google.com"

describe('Request GET', () => {

    it("Should return Promise", () => {
        let p = get(HTTP_URL, {json:false});
        assert.equal(true, p instanceof Promise)
    })

    it("Should return Body", ()=> {
       return get(HTTP_URL, {
            json: false
        }).then((res) => {
            assert.equal(301, res.status)
        })
        .catch((error)=>{
            assert.equal(true, error instanceof Error);
        })
    })

});