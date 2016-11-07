import {assert} from 'chai'

import {UrlQuery} from "../lib/utils"



describe('UrlQuery Test', () => {
    let query=new UrlQuery("/telegram?found=true");

    it("should parse query in obj", ()=>{
        assert.equal("true", query.found)
        assert.equal(true, query.haveKey("found"))
    })




});