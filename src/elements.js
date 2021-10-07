const elements = (() => {
  const searchForm = document.getElementById('searchForm');
  searchForm.setAttribute('autocomplete', 'off');
  const locationForm = searchForm;

  const searchBtn = document.getElementById('searchbtn');
  const locate = searchBtn;

  const searchInput = document.getElementById('searchInput');
  const location = searchInput;

  const textLocation = document.getElementById('locationText');
  const cityText = textLocation;

  const todayTemp = document.getElementById('todayTemp');
  const cityTemp = todayTemp;

  const feelsLike = document.getElementById('feelsLike');
  const feelsLikeTemp = feelsLike;

  const maxTemp = document.getElementById('maxTemp');
  const cityMaxTemp = maxTemp;

  const minTemp = document.getElementById('minTemp');
  const cityMinTemp = minTemp;

  const table1 = document.getElementById('tableHours');
  const tableHours = table1;
  return {
    locate,
    location,
    locationForm,
    cityText,
    cityTemp,
    feelsLikeTemp,
    cityMaxTemp,
    cityMinTemp,
    tableHours,
  };
})();

export default elements;
