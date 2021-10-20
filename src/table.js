import getData from './data';

const buildTable = (() => {
  // Table for hourly data.
  function newTable(table, array, key, key2, key3, num) {
    const row = table.insertRow(0);
    const rowIcon = table.insertRow(1);
    const row2 = table.insertRow(2);
    const row3 = table.insertRow(3);
    let currentTime = getData.hourNow();
    let time = 0;
    let now = true;

    array.forEach((element) => {
      const val1 = row.insertCell();
      if (time === 0 && now === true) {
        val1.textContent = 'Now';
        now = false;
      } else if (time <= 24 && currentTime <= 24) {
        val1.textContent = currentTime;
      } else {
        time = 0;
        currentTime = 0;
        val1.textContent = currentTime;
      }
      // Get icon code & add to table.
      const icon = element[key2][num][key3];
      const valIcon = rowIcon.insertCell();
      const imgIcon = document.createElement('img');
      imgIcon.className = 'icons';
      imgIcon.style.width = '50px';
      imgIcon.style.height = '50px';
      imgIcon.src = `/dist/images/icons/${icon}.png`;
      valIcon.appendChild(imgIcon);

      const val2 = row2.insertCell();
      val2.textContent = `${Math.round(element[key])}\u00B0`;
      row2.id = 'degreesRow';
      const val2F = row3.insertCell();
      const f = getData.fahrenheit(Math.round(parseFloat(element[key])));
      val2F.textContent = `${Math.round(f)}\u00B0`;
      row3.id = 'fahrenRow';
      row3.style.display = 'none';

      time += 1;
      currentTime += 1;
    });
  }

  async function table1(table, array, key, key2, key3, num) {
    try {
      const tableHours = await newTable(table, array, key, key2, key3, num);
      return tableHours;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
  // Table for daily data.
  function newTableDays(table, array, key1, key2, key3, key4, key5, key6, num) {
    let nextDay = getData.today() + 1;
    const arrDays = getData.weekdays;
    const headings = table.insertRow(0);
    const head1 = headings.insertCell();
    head1.textContent = 'day';

    const headIcon = headings.insertCell();
    headIcon.className = 'headIcon';

    const head2 = headings.insertCell();
    head2.textContent = 'Chance Of Rain';

    const head3 = headings.insertCell();
    head3.textContent = 'L';

    const head4 = headings.insertCell();
    head4.textContent = 'H';
    // Filter array to remove today figures (conflict between 2 api figures).
    const dailyArray = getData.weatherFrom(array, 1);
    dailyArray.then((values) => {
      values.forEach((element) => {
        const row = table.insertRow();
        row.style.display = 'table-row';
        const val1 = row.insertCell();

        if (nextDay > 6) {
          nextDay = 0;
          val1.textContent = arrDays[nextDay];
          nextDay += 1;
        } else {
          val1.textContent = arrDays[nextDay];
          nextDay += 1;
        }
        // Get icon code & add to table.
        const icon = element[key5][num][key6];
        const valIcon = row.insertCell();
        const imgIcon = document.createElement('img');
        imgIcon.className = 'icons';
        imgIcon.style.width = '50px';
        imgIcon.style.height = '50px';
        imgIcon.src = `/dist/images/icons/${icon}.png`;
        valIcon.appendChild(imgIcon);

        const val2 = row.insertCell();
        // Chance of rain
        val2.textContent = `${Math.floor((element[key1] / 1) * 100)}%`;

        const val3 = row.insertCell();
        // Min temp
        val3.textContent = `${Math.round(element[key2][key3])}\u00B0`;
        val3.className = 'degreesColumn';
        val3.id = 'degreesColumn';

        const val3F = row.insertCell();
        const f1 = getData.fahrenheit(
          Math.round(parseFloat(element[key2][key3]))
        );
        val3F.textContent = `${Math.round(f1)}\u00B0`;
        val3F.className = 'fahrenColumn';
        val3F.id = 'fahrenColumn';
        val3F.style.display = 'none';

        const val4 = row.insertCell();
        // Max temp
        val4.textContent = `${Math.round(element[key2][key4])}\u00B0`;
        val4.className = 'degreesColumn2';
        val4.id = 'degreesColumn2';

        const val4F = row.insertCell();
        const f2 = getData.fahrenheit(
          Math.round(parseFloat(element[key2][key4]))
        );
        val4F.textContent = `${Math.round(f2)}\u00B0`;
        val4F.className = 'fahrenColumn2';
        val4F.id = 'fahrenColumn2';
        val4F.style.display = 'none';
      });
    });
  }

  async function table2(table, array, key1, key2, key3, key4, key5, key6, num) {
    try {
      const tableDays = await newTableDays(
        table,
        array,
        key1,
        key2,
        key3,
        key4,
        key5,
        key6,
        num
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
