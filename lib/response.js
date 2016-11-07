const json = function (res, code, obj) {
    res.writeHead(code, {
        'Content-Type': 'application/json'
    })
    res.end(JSON.stringify(obj))
}

module.exports = {

    Success(data) {

        return function () {
            json(this.res, 200, {
                success: true,
                result: data
            });
        }

    },

    Error(err) {
        return function () {
            json(this.res, 404, {
                success: false,
                err: err
            })
        }

    },

    Body(res){

    }

}