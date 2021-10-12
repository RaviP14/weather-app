import getWeather from './weather';
import getData from './data';
import elements from './elements';
import buildTable from './table';
// test and add build table to the 2nd api(hourly forecast) & add a table to index.html
(() => {
  elements.locate.addEventListener('click', (e) => {
    e.preventDefault();
    if (
      elements.tableHours.hasChildNodes() &&
      elements.tableDays.hasChildNodes()
    ) {
      elements.tableHours.removeChild(elements.tableHours.firstChild);
      elements.tableDays.removeChild(elements.tableDays.firstChild);
    }

    const find = elements.location.value;
    const string = find.toLowerCase();

    getWeather.temp1(string, 'metric').then((data) => {
      console.log(data);

      getData.dataProcess(data, 'main').then((value) => {
        console.log(value);
        elements.cityTemp.textContent = Math.round(value.temp);
        elements.feelsLikeTemp.textContent = `Feels like: ${Math.round(
          value.feels_like
        )}`;
        elements.cityMaxTemp.textContent = `Max: ${Math.round(value.temp_max)}`;
        elements.cityMinTemp.textContent = `Min: ${Math.round(value.temp_min)}`;
      });
      getData.dataProcess(data, 'coord').then((value) => {
        console.log(value);
        const latitude = value.lat;
        const longitude = value.lon;
        // Api call for daily & hourly forecasts.
        const weatherInfo = getWeather.temp2(
          latitude,
          longitude,
          'metric',
          'minutely'
        );
        weatherInfo.then((forecast) => {
          console.log(forecast);
          // Filter for hourly data.
          getData.dataProcess(forecast, 'hourly').then((hours) => {
            const table = elements.tableHours;
            // Create hourly table.
            buildTable.table1(table, hours, 'temp');
          });
        });
        weatherInfo.then((forecast) => {
          // Filter for daily data.
          getData.dataProcess(forecast, 'daily').then((days) => {
            console.log(days);
            const table = elements.tableDays;
            // Create daily table.
            buildTable.table2(table, days, 'pop', 'temp', 'min', 'max');
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
