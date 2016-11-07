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


module.exports = {
    UrlQuery: UrlQuery,

}