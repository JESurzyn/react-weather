const express = require('express');
const {apiKey} = require('./config')
const axios = require('axios');
const cors = require('cors');

const app = express();

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions));

//API functions
const getWeather = async (location) => {
    const config = {params: {key:apiKey,  q:location, aqi:'no'}}
    const res = await axios.get('http://api.weatherapi.com/v1/current.json', config);
    return res.data
};

//initializing the server
app.listen(5000, () => {
    console.log("Server started on port 5000")
});

//just testing for the time being
// app.get("/api", (req, res) => {
//     res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]})
// })

//have to figure out client side routing to send get request?
app.get('/search', async (req, res, next) => {
    try {
        const {location} = req.query
        const weatherData = await getWeather(location);
        // console.log(weatherData);
        const {
            current: {
                temp_f,
                condition:{
                    text,
                    icon
                },
                humidity,
                precip_in,
                cloud
            }
        } = weatherData;
        const data = {location, temp_f, text, icon, humidity, precip_in, cloud}
        // res.status(200).render('home', {data})
        res.status(200).send(data)
    } catch (e) {
        // console.log(e)
        if(e.response.status === 400) {
            // req.flash('notFound', "Something went wrong, maybe the location you entered doesn't exist?");

            res.status(e.response.status).send(e.response.statusText);
            // res.redirect('/')
        } else {
            next(e)
        }
 
    }
});

app.use((err, req, res, next) => {
    const { status = 500, message='Something went Wrong'} = err;
    console.log(status)
    console.log(err.response.status)
    res.status(status).send(message)
})