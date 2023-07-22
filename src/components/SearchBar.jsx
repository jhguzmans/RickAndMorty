import { useState } from "react";
function SearchBar({ onSearch }) {
  const [character, setCharacter] = useState("");
  const handleChange = (event) => {
    setCharacter(event.target.value);
  };
  const handleResetInput = () => {
    setCharacter("");
  };

  return (
    <div>
      <input type="search" value={character} onChange={handleChange} clea />
      <button
        onClick={() => {
          onSearch(character);
          handleResetInput();
        }}
      >
        Agregar
      </button>
      <button onClick={() => onSearch(Math.round(Math.random() * 826))}>
        Aleatorio
      </button>
    </div>
  );
}
export default SearchBar;
