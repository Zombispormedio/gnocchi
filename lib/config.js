
const secure =  (value) =>{
    return { writable: false, configurable: true, value: value };
};

const Config = Object.create(null);
Config.prototype = { 
    telegram(method){
        return `https://api.telegram.org/bot${process.env['TELEGRAM_TOKEN']}/${method}`
    }
};


module.exports = Object.create(Config.prototype, {
    PORT:secure(process.env.PORT || 5093)
});