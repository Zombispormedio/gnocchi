import https from 'https'
import http from 'http'
import Url from 'url'

function protocol(u, method){
    let url=Url.parse(u);
    if(url.protocol=="https:"){
        return https[method]
    }else{
        return http[method]
    }
}


const GET = function (resolve, reject) {
    let options=this.options||{};
    protocol(this.url, "get")(this.url, (res) => {

        let result={
            status:res.statusCode,
            contentType:res.headers['content-type']
        }

         res.setEncoding('utf8');
         let rawData = '';
         res.on('data', (chunk) => rawData += chunk);
         res.on('end', () => {
            result.body=bodyParser(rawData, options)

             resolve(result);
         });
    


    }).on("error", (e) => {
        reject(e);
    })
}


function bodyParser(data, options){
    let result=data;

    if(options.json!==false){
        try{
            result=JSON.parse(data);

        }catch(e){
            console.log(e);
        }
    }

    return result;
}

function promised(handler, options){
    return new Promise(handler.bind(options));
}

module.exports = {
    get(url, options) {
        return promised(GET, {
            url: url,
            options: options
        });
    }
}