import {
    Success,
    Catch
} from './response'
import TelegramController from './ctrl/telegram_ctrl.js'


module.exports=function(router){
    router.post("/telegram", controlled(TelegramController) )
}

function controlled(ctrl){
    return function(){
        new Promise(ctrl.bind(this))
        .then((result)=>{
            Success(this.res, result)
        })
        .catch((err)=>{
            console.log(err)
            Catch(this.res, err)
        });
    }
}