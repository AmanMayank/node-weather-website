const request = require('request')

const forecast = (lat,long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a15ef420ad8327d1bdaf53a36e64c30c&query='+ lat +','+ long +''
    request({url, json:true },(error,{body}) => {
        if(error){
            callback('Unable to connect to weather services', undefined)
        } else if(body.error){
            callback('Unable to find location', undefined)
        } else{
            callback(undefined,{
                temp : body.current.temperature,
                feels : body.current.feelslike,
                description : body.current.weather_descriptions[0]
            })
        }
    })
}

module.exports = forecast