import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export const Sidebar = () => {
  const { categories } = useSelector((state) => state.manga);
  const history = useHistory();
  const initialInputValue = {
    search: "",
  };
  const [{ search }, handleInputChange] = useForm(initialInputValue);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      history.push(`/search?q=${search}`);
    }
  };
  return (
    <div>
      <input
        className="main__search"
        onChange={handleInputChange}
        onKeyPress={handleSearch}
        type="text"
        name="search"
        value={search}
        placeholder="Search"
      />

      <ul className="main__categories">
        {categories.map((category) => (
          <Link key={category} to={`/search?category=${category}`}>
            {category}
          </Link>
        ))}
      </ul>
    </div>
  );
};
