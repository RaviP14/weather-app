const getWeather = (() => {
  async function getTemp(location, type) {
    try {
      const address = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=${type}&appid=7474fb5568726a003e49583bf2111de8`;
      const repsonse = await fetch(address, { mode: 'cors' });
      const tempData = await repsonse.json();
      return tempData;
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  async function temp1(location, type) {
    try {
      const data = await getTemp(location, type);
      return data;
    } catch (err) {
      console.log(err);
      return err;
    }
  }
  return {
    temp1,
  };
})();

export { getWeather };
