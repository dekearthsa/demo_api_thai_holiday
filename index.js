const request = require('request');

const options = {
    method: 'GET',
    url: 'https://apigw1.bot.or.th/bot/public/financial-institutions-holidays/',
    qs: {year: 2023},
    headers: {'X-IBM-Client-Id': 'bea672fa-5769-4f75-a76f-6e4495d72bea', accept: 'application/json'}
};

request(options, function (error, response, body) {
    console.log(body);
    if (error) throw new Error(error);
    console.log(body);
});