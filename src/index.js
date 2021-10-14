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
      elements.changeUnit.value = 'C';
    }
    // Add this(all below) to a function so event listener is cleaner.
    const find = elements.location.value;
    const string = find.toLowerCase();

    getWeather.temp1(string, 'metric').then((data) => {
      console.log(data);

      getData.dataProcess(data, 'main').then((value) => {
        console.log(value);
        elements.cityTemp.textContent = `${Math.round(value.temp)}\u00B0`;
        elements.feelsLikeLabel.style.display = 'block';
        elements.feelsLikeTemp.textContent = `${Math.round(
          value.feels_like
        )}\u00B0`;
        elements.maxTempLabel.style.display = 'block';
        elements.cityMaxTemp.textContent = `${Math.round(
          value.temp_max
        )}\u00B0`;
        elements.minTempLabel.style.display = 'block';
        elements.cityMinTemp.textContent = `${Math.round(
          value.temp_min
        )}\u00B0`;
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
  elements.changeUnit.addEventListener('click', () => {
    if (
      elements.tableHours.hasChildNodes() &&
      elements.tableDays.hasChildNodes()
    ) {
      const units = elements.changeUnit;
      const temp1 = elements.convertTemps;
      if (units.value === 'C') {
        const arrTemps = [...temp1];
        arrTemps.forEach((temp) => {
          const num = temp.textContent;
          // Remove degrees symbol & convert to number (figure).
          const num1 = num.replace(/\D/g, '');
          const figure = parseInt(num1, 10);
          const conversion = getData.fahrenheit(figure);
          temp.textContent = `${Math.round(conversion)}\u00B0`; // eslint-disable-line no-param-reassign
          units.value = 'F';
          units.textContent = '\u00B0C';
        });
      } else if (units.value === 'F') {
        const arrTemps = [...temp1];
        arrTemps.forEach((temp) => {
          const num = temp.textContent;
          // Remove degrees symbol & convert to number (figure).
          const num1 = num.replace(/\D/g, '');
          const figure = parseInt(num1, 10);
          const conversion = getData.celc(figure);
          temp.textContent = `${Math.round(conversion)}\u00B0`; // eslint-disable-line no-param-reassign
          units.value = 'C';
          units.textContent = '\u00B0F';
        });
      }
    }
  });
})();
