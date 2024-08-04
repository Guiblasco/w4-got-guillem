const renderHeader = () => {
  const header = document.createElement("header");

  header.classList.add("header");

  header.innerHTML = `
    <h1>Game of Thrones</h1>
    `;

  return header;
};

export default renderHeader;
