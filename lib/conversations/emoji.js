import emoji from 'node-emoji'

const regexpEmoji = new RegExp([
        '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
        '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
        '\ud83d[\ude80-\udeff]' // U+1F680 to U+1F6FF
    ].join("|"), "g");


function matchEmoji(str){
    return str.match(regexpEmoji)
}

function haveEmoji(str){
    return regexpEmoji.test(str);
}

function getEmoji(str){
    return emoji.get(str);
}

function getName(str){
    return emoji.which(str);
}


module.exports={
    have:haveEmoji,

    getName:getName,

    get:getEmoji,
    match:matchEmoji
}