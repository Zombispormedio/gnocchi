import cool from 'cool-ascii-faces'
import emoji from './emoji'
import food from './food'

import {capitalize} from "../utils"


function resolveSync(input){
    let result=cool();
    if(emoji.have(input)){
        let em=emoji.match(input)[0];

        let name=emoji.getName(em);

        if(food.is(name)){
            result=capitalize(name.replace("_", " "))
        }

    }else{
        let name=food.is(input);
        if(name){
            result=emoji.get(name)
        }
    }

    return result;
}



module.exports={
    resolveSync:resolveSync
}