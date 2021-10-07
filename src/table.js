const buildTable = (() => {
  // make async function
  function newTable(table, array, key) {
    const row = table.insertRow(0);
    array.forEach((element) => {
      const val = row.insertCell();
      val.textContent = element[key];
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
