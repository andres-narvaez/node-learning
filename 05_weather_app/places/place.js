const axios = require('axios')


const getPlaceLatLng = async (adress) => {
    const encodedUrl = encodeURI(adress)
    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyBz__u6c0TdVOCfrWg2LqG4QA37smvs_B0`)
        
    
    if(response.data.status === 'ZERO_RESULTS') throw new Error('No place found')

    const place = response.data.results[0]
    const location = place.geometry.location

    return {
        address: place.formatted_address,
        lat: location.lat,
        lng: location.lng
    }
}

module.exports = {
    getPlaceLatLng
}


