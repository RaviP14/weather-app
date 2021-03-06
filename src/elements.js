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

  const body = document.querySelector('body');
  const bod = body;
  body.style.backgroundColor = '#f5f5f5';

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
    // Removes mutation from iteration.
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
    todayTemp.style.marginTop = '2.5rem';

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
    // Removes mutation from iteration.
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

  function changeBG(weather) {
    if (weather === 800) {
      body.style.backgroundImage =
        'linear-gradient(70deg, #ADD8E6, 70%, #87CEEB)';
      body.style.color = '#000000';
    } else if (weather === 801) {
      body.style.backgroundImage = 'linear-gradient(70deg, #87CEEB, #d3d3d3)';
      body.style.color = '#000000';
    } else if (weather === 804) {
      body.style.backgroundImage =
        'linear-gradient(0deg, #d3d3d3, 70%, #949494)';
    } else if (weather >= 300 && weather <= 321) {
      body.style.backgroundImage = 'linear-gradient(90deg, #224772, #295589)';
      body.style.color = '#000000';
    } else if (weather >= 500 && weather <= 511) {
      body.style.backgroundImage = 'linear-gradient(70deg, #003366, #1c2e4a)';
      body.style.color = '#ffffff';
    } else if (weather >= 520 && weather <= 531) {
      body.style.backgroundImage = 'linear-gradient(70deg, #003366, #1c2e4a)';
      body.style.color = '#ffffff';
    } else if (weather >= 200 && weather <= 232) {
      body.style.backgroundImage =
        'linear-gradient(70deg, #ffc622, 15%, #1c2e4a)';
      body.style.color = '#ffffff';
    } else if (weather >= 600 && weather <= 622) {
      body.style.backgroundImage = 'linear-gradient(70deg, #e0ffff, #fffafa)';
      body.style.color = '#000000';
    } else if (weather === 741 || (weather >= 701 && weather <= 721)) {
      body.style.backgroundImage = 'linear-gradient(70deg, #d3d3d3, #bebebe)';
      body.style.color = '#000000';
    } else if (weather === 803) {
      body.style.backgroundImage = 'linear-gradient(70deg, #87CEEB, #d3d3d3)';
      body.style.color = '#000000';
    } else if (weather === 802) {
      body.style.backgroundImage = 'linear-gradient(70deg, #87CEEB, #bebebe)';
      body.style.color = '#000000';
    } else if (weather >= 762 && weather <= 781) {
      body.style.backgroundImage = 'linear-gradient(70deg, #656565, #d3d3d3)';
      body.style.color = '#000000';
    } else if (weather === 731 || weather === 761) {
      body.style.backgroundImage = 'linear-gradient(70deg, #bebebe, #f0dd97)';
      body.style.color = '#000000';
    }
  }

  function backgroundChange(weather) {
    changeBG(weather);
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
    bod,
    backgroundChange,
  };
})();

export default elements;
