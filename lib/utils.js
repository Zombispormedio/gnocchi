import Url from 'url'

class UrlQuery {
    constructor(url) {
        this.url = url;
        this.init(url);
    }

    init(url) {
        this.keys = [];
        let query = Url.parse(url).query;
        if(query==null)return;
        
        query.split("&")
            .forEach((item) => {
                let [key, value] = item.split("=")
                this[key] = value
                this.keys.push(key)
            });
    }

    haveKey(key) {
        return this.keys.includes(key)
    }
}

const capitalize = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


module.exports = {
    UrlQuery: UrlQuery,
    capitalize:capitalize


}