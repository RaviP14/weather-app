const getWeather = (() => {
  async function getTemp(location, type) {
    const address = `http://api.openweathermap.org/data/2.5/weather?q=,
      ${location}?,
      &units=,
      ${type}?,
      &appid=7474fb5568726a003e49583bf2111de8`;
    const repsonse = await fetch(address, { mode: 'cors' });
    const tempData = await repsonse.json();
    console.log(tempData);
  }

  function temp1(location, type) {
    getTemp(location, type);
  }
  return {
    temp1,
  };
})();

export { getWeather };
