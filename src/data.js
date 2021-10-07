const getData = (() => {
  // process json data to objects needed.
  async function dataProcess(data, item) {
    try {
      const value = data[item];
      return value;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
  // get current hour.
  function getHours() {
    const date = new Date();
    const now = date.getHours();
    return now;
  }

  function hourNow() {
    const time = getHours();
    return time;
  }
  // filter hours array to give temp from current hour.
  function filterArray(array, hour) {
    const filteredArr = array.filter((_, index) => index >= hour);
    return filteredArr;
  }

  async function weatherFrom(array, hour) {
    const finalArr = await filterArray(array, hour);
    return finalArr;
  }
  return {
    dataProcess,
    hourNow,
    weatherFrom,
  };
})();

export default getData;
