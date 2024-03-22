const SelectMenu = ({ setQuery }) => {
  const optionValue = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  const changeHandler = (e) => {
    setQuery(e.target.value.toLowerCase());
  };
  return (
    <select className="filter-by-region" onChange={(e) => changeHandler(e)}>
      <option hidden>Filter by Region</option>
      {optionValue?.map((options) => {
        return (
          <option value={options} key={options}>
            {options}
          </option>
        );
      })}
    </select>
  );
};

export default SelectMenu;
