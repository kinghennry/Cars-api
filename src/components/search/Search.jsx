import React from "react";
import { BiSearch } from "react-icons/bi";
import "./search.css";

const Search = ({ query, setQuery }) => {
  return (
    <section className="form">
      <div className="container">
        <div className="form">
          <div className="form-input">
            <BiSearch className="form-icon" />
            <input
              type="search"
              placeholder="Search Car Name, year and color"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* <div className="form">
        <div className="form__input">
          <BiSearch className="form__icon" />
          <input
            type="search"
            placeholder="Search for a country"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div> */}
      {/* <div className="select__input">
            <select value={region} onChange={handleSelect} > 
            <option value="">Filter by Region</option>           

              {countries.map((country) => {
                const {name,region} = country
                return (
                  <>
                    <option key={name} value={region}>{region} </option>
                    </>
                )
              })} 
        
                </select>
            </div> */}
      {/* </div> */}
    </section>
  );
};

export default Search;
