const request = require('request')

const forecast = (lat, lng, callback) => {
    const url = 'https://api.darksky.net/forecast/3bf523e1ec10ca052d9fce13c7cd664f/' + lat + ',' + lng + '?units=si'

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })    
}

module.exports = forecast