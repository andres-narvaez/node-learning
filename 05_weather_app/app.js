const argv = require('yargs').options({
    adress: {
        alias: 'd',
        desc: 'Ciudad para optener el clima',
        demand: true
    }
}).argv

const placeUtil = require('./places/place')
const weather = require('./weather/weather')

const getPlace = async(adress) => {
    try {
        const place = await placeUtil.getPlaceLatLng(adress)
        const weatherPlace = await weather.getWeather(place.lat, place.lng)
        console.log(`${place.address} esta a ${weatherPlace.temperatura}`)
    } catch(e) {
        console.log(`Not able to get the weather on ${adress}`)
    }
}

getPlace(argv.adress)