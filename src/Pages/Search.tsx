import * as React from "react";
import axios, { CancelTokenSource } from "axios";
import useDebounce from "../Hooks/useDebounce";
import Results from "../Components/Results";
import { Payloads } from "../Models/context";
import { Context } from "../context";
import SearchInfo from "../Components/SearchInfo";
let source: CancelTokenSource | undefined;

const Search: React.FC = () => {
  const [term, setTerm] = React.useState("");
  const {
    context: { result },
    dispatch,
  } = React.useContext(Context);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const debouncedTerm = useDebounce(term, 700);
  React.useEffect(() => {
    inputRef?.current?.focus();
  }, [inputRef]);
  React.useEffect(() => {
    if (debouncedTerm) {
      let CancelToken = axios.CancelToken;
      source = CancelToken.source();
      axios
        .get(`http://api.tvmaze.com/search/shows?q=${debouncedTerm}`)
        .then(res => dispatch({ type: Payloads.Result, payload: res.data }))
        .catch(err => console.log(err));
    }
    return () => {
      if (source) {
        source.cancel("Component is unmounting");
      }
    };
  }, [debouncedTerm, dispatch]);

  return (
    <div className="search__container">
      <h1 className="search__heading">TV Show Search</h1>
      <input
        value={term}
        onChange={e => setTerm(e.target.value)}
        placeholder="Search TV Show"
        ref={inputRef}
        role="search"
        aria-label="Search TV Series"
      />
      {result.length < 1 ? <SearchInfo /> : <Results result={result} />}
    </div>
  );
};

export default Search;
