const elements = (() => {
  const searchBtn = document.getElementById('searchbtn');
  const locate = searchBtn;

  const searchInput = document.getElementById('searchInput');
  const location = searchInput;

  return {
    locate,
    location,
  };
})();

export default elements;
