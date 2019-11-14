const limiter = require('express-rate-limit')

module.exports = {
    apiLimit: limiter({
        windowMs : 60 * 60 * 1000, //limit interval- 1 hour
        max      : 100 //request cap
    }),
    adminLimit: limiter({
        windowMs : 60 * 60 * 1000, //limit interval- 1 hour
        max      : 50 //request cap
    })
};