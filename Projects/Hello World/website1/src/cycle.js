const cycleFunc = function (quote, limit = 66) {
    if(typeof quote === 'string') {
        quote = quote.length
        while(quote > limit) {
            quote = quote - Math.floor(Math.random() * limit)
        }
    return quote
    }
    if(typeof quote === 'number') {
        while(quote > limit) {
            quote = quote - Math.floor(Math.random() * limit)
        }                         
    }
    return quote
};

export default cycleFunc;