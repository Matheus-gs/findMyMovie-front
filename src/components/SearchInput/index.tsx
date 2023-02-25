import "./style.scss";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Input, Button } from "@ui5/webcomponents-react";
import { getMovieByTitle } from "../../repositories/movieRepository";
import { useDispatch } from "react-redux";
import { setMovie } from "../../store/slices/movieSlice";
import { toast } from "react-toastify";

export function SearchInput() {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch();

  function setSearchInputValue(event?: any) {
    setInputValue(event.target.value);
  }

  async function getMovieByInputValue() {
    if (!inputValue) return;
    try {
      const response = await getMovieByTitle(inputValue);
      dispatch(setMovie(response));
    } catch (error) {
      toast.error("Sorry, we didn't find this movie!")
    }
    setInputValue("");
  }

  return (
    <div className="search-input-container">
   
      <Input
        showClearIcon
        placeholder="Search for a movie"
        onInput={setSearchInputValue}
        onChange={setSearchInputValue}
        className="search-input"
      />
      <Button className="search-button" onClick={getMovieByInputValue}>
        <FiSearch />
      </Button>
    </div>
  );
}
