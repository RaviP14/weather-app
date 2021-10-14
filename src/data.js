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
  // filter hours/days array to give temp from current hour or day.
  function filterArray(array, hour) {
    const filteredArr = array.filter((_, index) => index >= hour);
    return filteredArr;
  }

  async function weatherFrom(array, hour) {
    const finalArr = await filterArray(array, hour);
    return finalArr;
  }
  // Get current Day.
  function getDay() {
    const date = new Date();
    const day = date.getDay();
    return day;
  }

  function today() {
    const day = getDay();
    return day;
  }

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const weekdays = days;

  function convertToF(celcius) {
    const f = celcius * (9 / 5) + 32;
    return f;
  }

  function fahrenheit(celcius) {
    const n = convertToF(celcius);
    return n;
  }

  function convertToC(fahren) {
    const c = (fahren - 32) * (5 / 9);
    return c;
  }

  function celc(fahren) {
    const n = convertToC(fahren);
    return n;
  }
  return {
    dataProcess,
    hourNow,
    weatherFrom,
    today,
    weekdays,
    fahrenheit,
    celc,
  };
})();

export default getData;
