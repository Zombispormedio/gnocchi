import {UrlQuery} from '../utils'



module.exports=function(resolve, reject){
    let req=this.req;
    
    let query= new UrlQuery(req.url)
    console.log(process.env["TELEGRAM_ID"])
    console.log(query["TELEGRAM_ID"])
    if(query["TELEGRAM_ID"]!=process.env["TELEGRAM_ID"]){
       return reject({message:"Not authorized"});
    }

   
    resolve(req.body);
}