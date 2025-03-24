import React, { useState } from "react";

const Search = ({allTasks}) => {
  const [search, setSearch] = useState("");

  const filterTodo = 
  allTasks.filter(item => 
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  

  return (
    <div>
       <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
      <ul>
        {filterTodo.map((item, index) => (
          <li key={index}>{item.title}</li> 
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Search;
