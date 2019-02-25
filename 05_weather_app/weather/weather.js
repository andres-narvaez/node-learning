const axios = require('axios')

const getWeather = async(lat, lng) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=6033b5120622fdb2d680820b030971e3`)

    return {
        temperatura: Math.floor((response.data.main.temp-32) * 5/9) + '°'
        }
}

module.exports = {
    getWeather
}