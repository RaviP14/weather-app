import getData from './data';

const buildTable = (() => {
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
        val2.textContent = element[key];
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

  function newTableDays(table, array, key1, key2, key3, key4) {
    const headings = table.insertRow(0);
    const head1 = headings.insertCell();
    head1.textContent = 'Day';

    const head2 = headings.insertCell();
    head2.textContent = 'Chance Of Rain';

    const head3 = headings.insertCell();
    head3.textContent = 'Min';

    const head4 = headings.insertCell();
    head4.textContent = 'Max';

    array.forEach((element) => {
      const row = table.insertRow();
      const val1 = row.insertCell();
      val1.textContent = 'day'; // list of days array
      const val2 = row.insertCell();
      val2.textContent = element[key1];
      const val3 = row.insertCell();
      val3.textContent = element[key2][key3];
      const val4 = row.insertCell();
      val4.textContent = element[key2][key4];
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
