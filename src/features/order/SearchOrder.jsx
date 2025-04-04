import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;

    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="focus:yellow-500 w-28 rounded-full px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:opacity-50 focus:outline-none focus:ring sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
