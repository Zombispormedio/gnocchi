const json = function (res, code, obj) {
    res.writeHead(code, {
        'Content-Type': 'application/json'
    })
    res.end(JSON.stringify(obj))
}

module.exports = {

    SuccessFunc(data) {

        return function () {
            json(this.res, 200, {
                success: true,
                result: data
            });
        }

    },

    ErrorFunc(err) {
        return function () {
            json(this.res, 404, {
                success: false,
                err: err
            })
        }

    },

    Success(res, data) {
        json(res, 200, {
            success: true,
            result: data
        });
    },

    Catch(res, err) {
        json(res, 404, {
            success: false,
            err: err
        })
    }

}