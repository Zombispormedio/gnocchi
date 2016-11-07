import {assert} from 'chai'

import {resolveSync} from "../lib/conversations/init"



describe('Conversation Test', () => {
    

    it("should return apple 🍎", ()=>{
        
        assert.equal("Apple",resolveSync("🍎"))
    })




});