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
  return {
    dataProcess,
  };
})();

export default getData;
