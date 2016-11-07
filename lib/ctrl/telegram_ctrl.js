import {
    UrlQuery
} from '../utils'
import {telegram} from '../config'

import {
    post
} from '../request'

import {resolveSync} from '../conversations/init'


module.exports = function (resolve, reject) {

    let query = new UrlQuery(this.req.url)

    if (query["TELEGRAM_ID"] != process.env["TELEGRAM_ID"]) {
        return reject({
            message: "Not authorized"
        });
    }

    let body = this.req.body

    if (body == null)
        return reject({
            message: "Body not suitable"
        })

    let url = telegram("sendMessage")

    let message = body.message;

    let chat_id=message.chat.id;

    let input= message.text;

    let output=resolveSync(input)

    post(url, {
        body: {
            chat_id: chat_id,
            text:output
        }
    }).then((res) => {
        console.log(res);
        resolve(res)
    })
    .catch((e)=>{
        console.log(e);
        reject(e)
    })



}