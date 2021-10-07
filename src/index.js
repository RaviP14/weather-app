import getWeather from './weather';
import getData from './data';
import elements from './elements';
import buildTable from './table';
// test and add build table to the 2nd api(hourly forecast) & add a table to index.html
(() => {
  elements.locate.addEventListener('click', (e) => {
    e.preventDefault();
    const find = elements.location.value;
    const string = find.toLowerCase();

    getWeather.temp1(string, 'metric').then((data) => {
      console.log(data);

      getData.dataProcess(data, 'main').then((value) => {
        console.log(value);
        elements.cityTemp.textContent = value.temp;
        elements.feelsLikeTemp.textContent = `Feels like: ${value.feels_like}`;
        elements.cityMaxTemp.textContent = `Max: ${value.temp_max}`;
        elements.cityMinTemp.textContent = `Min: ${value.temp_min}`;
      });
      getData.dataProcess(data, 'coord').then((value) => {
        console.log(value);
        const latitude = value.lat;
        const longitude = value.lon;
        // Api call for daily & hourly forecasts.
        getWeather
          .temp2(latitude, longitude, 'metric', 'minutely')
          .then((forecast) => {
            console.log(forecast);
            // filter for hourly data.
            getData.dataProcess(forecast, 'hourly').then((hours) => {
              const table = elements.tableHours;
              console.log(hours);
              // filter hours based on current hour of day then pass through to table1 function.
              buildTable.table1(table, hours, 'temp');
            });
          });
      });
      getData.dataProcess(data, 'sys').then((value) => {
        console.log(value);
      });
      getData.dataProcess(data, 'name').then((value) => {
        console.log(value);
        elements.cityText.textContent = value;
      });
    });
    elements.locationForm.reset();
  });
})();
