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

  const todayTempF = document.getElementById('todayTempF');
  const cityTempF = todayTempF;

  const feelsLike = document.getElementById('feelsLike');
  const feelsLikeTemp = feelsLike;

  const feelsLikeF = document.getElementById('feelsLikeF');
  const feelsLikeTempF = feelsLikeF;

  const maxTemp = document.getElementById('maxTemp');
  const cityMaxTemp = maxTemp;

  const maxTempF = document.getElementById('maxTempF');
  const cityMaxTempF = maxTempF;

  const minTemp = document.getElementById('minTemp');
  const cityMinTemp = minTemp;

  const minTempF = document.getElementById('minTempF');
  const cityMinTempF = minTempF;

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

  const allTempsF = document.getElementsByClassName('fahren');
  const fahrenTemps = allTempsF;

  function showF() {
    todayTemp.style.display = 'none';

    todayTempF.style.display = 'inline-block';

    feelsLike.style.display = 'none';

    feelsLikeF.style.display = 'inline-block';

    maxTemp.style.display = 'none';

    maxTempF.style.display = 'inline-block';

    minTemp.style.display = 'none';

    minTempF.style.display = 'inline-block';

    const degreesRow = document.getElementById('degreesRow');
    degreesRow.style.display = 'none';

    const fahrenRow = document.getElementById('fahrenRow');
    fahrenRow.style.display = 'table-row';

    const numbers = [0, 1, 2, 3, 4, 5, 6];
    numbers.forEach((num) => {
      const degreesColumn = document.getElementsByClassName('degreesColumn');
      degreesColumn[num].style.display = 'none';

      const fahrenColumn = document.getElementsByClassName('fahrenColumn');
      fahrenColumn[num].style.display = 'table-cell';

      const degreesColumn2 = document.getElementsByClassName('degreesColumn2');
      degreesColumn2[num].style.display = 'none';

      const fahrenColumn2 = document.getElementsByClassName('fahrenColumn2');
      fahrenColumn2[num].style.display = 'table-cell';
    });
  }

  function displayF() {
    showF();
  }

  function showC() {
    todayTemp.style.display = 'inline-block';

    todayTempF.style.display = 'none';

    feelsLike.style.display = 'inline-block';

    feelsLikeF.style.display = 'none';

    maxTemp.style.display = 'inline-block';

    maxTempF.style.display = 'none';

    minTemp.style.display = 'inline-block';

    minTempF.style.display = 'none';

    const degreesRow = document.getElementById('degreesRow');
    degreesRow.style.display = 'table-row';

    const fahrenRow = document.getElementById('fahrenRow');
    fahrenRow.style.display = 'none';

    const numbers = [0, 1, 2, 3, 4, 5, 6];
    numbers.forEach((num) => {
      const degreesColumn = document.getElementsByClassName('degreesColumn');
      degreesColumn[num].style.display = 'table-cell';

      const fahrenColumn = document.getElementsByClassName('fahrenColumn');
      fahrenColumn[num].style.display = 'none';

      const degreesColumn2 = document.getElementsByClassName('degreesColumn2');
      degreesColumn2[num].style.display = 'table-cell';

      const fahrenColumn2 = document.getElementsByClassName('fahrenColumn2');
      fahrenColumn2[num].style.display = 'none';
    });
  }

  function displayC() {
    showC();
  }
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
    fahrenTemps,
    cityTempF,
    feelsLikeTempF,
    cityMaxTempF,
    cityMinTempF,
    displayF,
    displayC,
  };
})();

export default elements;
