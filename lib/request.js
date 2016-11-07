import https from 'https'
import http from 'http'
import Url from 'url'

function protocol(u) {
    let url = Url.parse(u);
    if (url.protocol == "https:") {
        return https
    } else {
        return http
    }
}


const GET = function (resolve, reject) {
    let options = this.options || {};
    protocol(this.url).get(this.url, (res) => {

        let result = {
            status: res.statusCode,
            contentType: res.headers['content-type']
        }

        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => rawData += chunk);
        res.on('end', () => {
            result.body = bodyParser(rawData, options)

            resolve(result);
        });



    }).on("error", (e) => {
        reject(e);
    })
}


function bodyParser(data, options) {
    let result = data;

    if (options.json !== false) {
        try {
            result = JSON.parse(data);

        } catch (e) {
            console.log(e);
        }
    }

    return result;
}


const POST = function (resolve, reject) {
    let options = this.options || {}
    let body = options.body

    if (options.json !== false) {
        options.headers = options.headers || {}
        options.headers['content-type'] = "application/json"
        if (body != void 0) {
            body = JSON.stringify(body)
        }

    }

    let url = Url.parse(this.url);

    let tOptions = {
        hostname: url.hostname,
        method: "POST",
        path: url.pathname,
        headers: options.headers
    }



    if (url.port != void 0) {
        tOptions.port = url.port;
    }

    let req = protocol(this.url).request(tOptions, (res) => {

        let result = {
            status: res.statusCode,
            contentType: res.headers['content-type']
        }

        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => rawData += chunk);
        res.on('end', () => {
            result.body = bodyParser(rawData, options)

            resolve(result);
        });

    }).on("error", (e) => {
        reject(e);
    })

    if (body != void 0) {
        req.write(body)
    }

    req.end()

}

function promised(handler, options) {
    return new Promise(handler.bind(options));
}


module.exports = {
    get(url, options) {
        return promised(GET, {
            url: url,
            options: options
        });
    },

    post(url, options) {
        return promised(POST, {
            url: url,
            options: options
        });
    }
}