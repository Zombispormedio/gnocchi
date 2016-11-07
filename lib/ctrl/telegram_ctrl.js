import {UrlQuery} from '../utils'



module.exports=function(resolve, reject){
    let req=this.req;
    
    let query= new UrlQuery(req.url)

    if(query["TELEGRAM_ID"]!=process.env["TELEGRAM_ID"]){
       return reject({message:"Not authorized"});
    }
    console.log(req.body)
   
    resolve(req.body);
}