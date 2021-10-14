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

  const table2 = document.getElementById('tableDays');
  const tableDays = table2;

  const tempbtn = document.getElementById('ctempbtn');
  const changeUnit = tempbtn;

  const labelFeels = document.getElementById('feelsLikeLabel');
  const feelsLikeLabel = labelFeels;
  feelsLikeLabel.style.display = 'none';

  const labelMax = document.getElementById('maxTempLabel');
  const maxTempLabel = labelMax;
  maxTempLabel.style.display = 'none';

  const labelMin = document.getElementById('minTempLabel');
  const minTempLabel = labelMin;
  minTempLabel.style.display = 'none';

  const allTemps = document.getElementsByClassName('degrees');
  const convertTemps = allTemps;
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
    tableDays,
    changeUnit,
    feelsLikeLabel,
    maxTempLabel,
    minTempLabel,
    convertTemps,
  };
})();

export default elements;
