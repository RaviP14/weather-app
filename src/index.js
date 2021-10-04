import { getWeather } from './weather';
import getData from './data';
import elements from './elements';
/* should work fine in weather.js babel had an issue, need location & units for Celcius & fahrenheit
can also get longetude and lat form this json file so we can use in other api for hourly forcast */
// try weather.js function then delete below function.
(() => {
  elements.locate.addEventListener('click', (e) => {
    e.preventDefault();
    const find = elements.location.value;
    const string = find.toLowerCase();
    getWeather.temp1(string, 'metric').then((data) => {
      console.log(data);
      getData.dataProcess(data, 'main').then((value) => {
        console.log(value);
      });
      getData.dataProcess(data, 'coord').then((value) => {
        console.log(value);
      });
      getData.dataProcess(data, 'sys').then((value) => {
        console.log(value);
      });
      getData.dataProcess(data, 'name').then((value) => {
        console.log(value);
      });
    });
  });
})();
