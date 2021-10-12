import getData from './data';

const buildTable = (() => {
  // Table for hourly data.
  function newTable(table, array, key) {
    const row = table.insertRow(0);
    const row2 = table.insertRow(1);
    const currentTime = getData.hourNow();
    let time = getData.hourNow();
    let now = true;
    // Filter array using current time.
    const weatherArr = getData.weatherFrom(array, time);
    weatherArr.then((value) => {
      value.forEach((element) => {
        const val1 = row.insertCell();
        if (time === currentTime && now === true) {
          val1.textContent = 'Now';
          now = false;
        } else if (time <= 24) {
          val1.textContent = time;
        } else {
          time = 0;
          val1.textContent = time;
        }
        const val2 = row2.insertCell();
        val2.textContent = Math.round(element[key]);
        time += 1;
      });
    });
  }

  async function table1(table, array, key) {
    try {
      const tableHours = await newTable(table, array, key);
      return tableHours;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
  // Table for daily data.
  function newTableDays(table, array, key1, key2, key3, key4) {
    let nextDay = getData.today() + 1;
    const arrDays = getData.weekdays;
    const headings = table.insertRow(0);
    const head1 = headings.insertCell();
    head1.textContent = 'day';

    const head2 = headings.insertCell();
    head2.textContent = 'Chance Of Rain';

    const head3 = headings.insertCell();
    head3.textContent = 'Min';

    const head4 = headings.insertCell();
    head4.textContent = 'Max';
    // Filter array to remove today figures (conflict between 2 api figures).
    const dailyArray = getData.weatherFrom(array, 1);
    dailyArray.then((value) => {
      value.forEach((element) => {
        const row = table.insertRow();
        const val1 = row.insertCell();

        if (nextDay > 6) {
          nextDay = 0;
          val1.textContent = arrDays[nextDay];
        } else {
          val1.textContent = arrDays[nextDay];
          nextDay += 1;
        }

        const val2 = row.insertCell();
        // Chance of rain
        val2.textContent = `${Math.floor((element[key1] / 1) * 100)}%`;
        const val3 = row.insertCell();
        // Min temp
        val3.textContent = Math.round(element[key2][key3]);
        const val4 = row.insertCell();
        // Max temp
        val4.textContent = Math.round(element[key2][key4]);
      });
    });
  }

  async function table2(table, array, key1, key2, key3, key4) {
    try {
      const tableDays = await newTableDays(
        table,
        array,
        key1,
        key2,
        key3,
        key4
      );
      return tableDays;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
  return {
    table1,
    table2,
  };
})();

export default buildTable;
