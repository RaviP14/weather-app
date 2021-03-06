import getWeather from './weather';
import getData from './data';
import elements from './elements';
import buildTable from './table';

(() => {
  function getAllWeather(location) {
    getWeather.temp1(location, 'metric').then((data) => {
      console.log(data);

      getData.dataProcess(data, 'main').then((value) => {
        console.log(value);
        elements.cityTemp.textContent = `${Math.round(value.temp)}\u00B0`;
        const f = getData.fahrenheit(Math.round(parseFloat(value.temp)));
        elements.cityTempF.textContent = `${Math.round(f)}\u00B0`;
        elements.cityTempF.style.display = 'none';

        elements.feelsLikeLabel.style.display = 'inline-block';
        elements.feelsLikeTemp.textContent = `${Math.round(
          value.feels_like
        )}\u00B0`;
        const f2 = getData.fahrenheit(Math.round(parseFloat(value.feels_like)));
        elements.feelsLikeTempF.textContent = `${Math.round(f2)}\u00B0`;
        elements.feelsLikeTempF.style.display = 'none';

        elements.maxTempLabel.style.display = 'inline-block';
        elements.cityMaxTemp.textContent = `${Math.round(
          value.temp_max
        )}\u00B0`;
        const f3 = getData.fahrenheit(Math.round(parseFloat(value.temp_max)));
        elements.cityMaxTempF.textContent = `${Math.round(f3)}\u00B0`;
        elements.cityMaxTempF.style.display = 'none';

        elements.minTempLabel.style.display = 'inline-block';
        elements.cityMinTemp.textContent = `${Math.round(
          value.temp_min
        )}\u00B0`;
        const f4 = getData.fahrenheit(Math.round(parseFloat(value.temp_min)));
        elements.cityMinTempF.textContent = `${Math.round(f4)}\u00B0`;
        elements.cityMinTempF.style.display = 'none';
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
            buildTable.table1(table, hours, 'temp', 'weather', 'icon', 0);
          });
        });

        weatherInfo.then((forecast) => {
          // Filter for daily data.
          getData.dataProcess(forecast, 'daily').then((days) => {
            console.log(days);
            const table = elements.tableDays;
            // Create daily table.
            buildTable.table2(
              table,
              days,
              'pop',
              'temp',
              'min',
              'max',
              'weather',
              'icon',
              0
            );
          });
        });
      });

      getData.dataProcess(data, 'name').then((value) => {
        console.log(value);
        elements.cityText.textContent = value;
      });

      getData.dataProcess(data, 'weather').then((value) => {
        console.log(value[0].id);
        const weather = value[0].id;
        elements.backgroundChange(weather);
      });
    });
  }

  window.onload = getAllWeather('london');

  elements.locate.addEventListener('click', (e) => {
    e.preventDefault();
    if (
      elements.tableHours.hasChildNodes() &&
      elements.tableDays.hasChildNodes()
    ) {
      elements.tableHours.removeChild(elements.tableHours.firstChild);
      elements.tableDays.removeChild(elements.tableDays.firstChild);

      elements.changeUnit.value = 'C';
      elements.changeUnit.textContent = '\u00B0F';

      elements.cityTempF.style.display = 'none';
      elements.cityTemp.style.display = 'inline-block';
      elements.cityTemp.style.marginTop = '2.5rem';

      elements.feelsLikeTempF.style.display = 'none';
      elements.feelsLikeTemp.style.display = 'inline-block';

      elements.cityMaxTempF.style.display = 'none';
      elements.cityMaxTemp.style.display = 'inline-block';

      elements.cityMinTempF.style.display = 'none';
      elements.cityMinTemp.style.display = 'inline-block';
    }

    const find = elements.location.value;
    const string = find.toLowerCase();
    getAllWeather(string);
    elements.locationForm.reset();
  });

  elements.changeUnit.addEventListener('click', () => {
    if (
      elements.tableHours.hasChildNodes() &&
      elements.tableDays.hasChildNodes()
    ) {
      const units = elements.changeUnit;
      if (units.value === 'C') {
        elements.displayF();
        units.value = 'F';
        units.textContent = '\u00B0C';
      } else if (units.value === 'F') {
        elements.displayC();
        units.value = 'C';
        units.textContent = '\u00B0F';
      }
    }
  });
})();
