const axios = require('axios');
const setting = require('../setting');
const location = (lon = '98.9048538', lat = '18.7967139') => {
    return axios
    .get(`${setting.apiUrl}?lon=${lon}&lat=${lat}&appid=${setting.apiKey}&units=metrix`);
}

module.exports = location;