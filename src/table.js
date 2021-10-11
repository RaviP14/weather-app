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
  return {
    table1,
  };
})();

export default buildTable;
