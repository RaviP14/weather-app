import { getWeather } from './weather';

/* should work fine in weather.js babel had an issue, need location & units for Celcius & fahrenheit
can also get longetude and lat form this json file so we can use in other api for hourly forcast */
// try weather.js function then delete below function.

getWeather.temp1('london', 'metric');
