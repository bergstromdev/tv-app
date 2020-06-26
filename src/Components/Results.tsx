import * as React from "react";
import { Link } from "@reach/router";
import { Result } from "../Models/result";
import placeholder from "../Lib/placeholder.jpg";
import { Context } from "../context";
import { Payloads } from "../Models/context";

interface Props {
  result: Result[];
}

const Results: React.FC<Props> = ({ result }) => {
  const {
    context: { favorites },
    dispatch,
  } = React.useContext(Context);
  if (result.length < 1) return null;
  const handleAddFavorite = (id: number, isFavorite: boolean) => {
    if (isFavorite) {
      return dispatch({
        type: Payloads.Favorites,
        payload: favorites.filter(f => f !== id),
      });
    }
    return dispatch({ type: Payloads.Favorites, payload: [...favorites, id] });
  };

  if (result.length < 1) return null;

  return (
    <div className="results__container" data-testid="results__container">
      {result.map(res => {
        const isFavorite = favorites.includes(res.show.id);
        return (
          <div key={res.show.id} className="results__card">
            <Link to={`/shows/${res.show.id}`}>
              <img
                src={res.show.image ? res.show.image.medium : placeholder}
                alt={res.show.name}
                className="results__card-img"
              />
            </Link>
            <div className="results__card-content">
              <h5 className="results__card-heading">{res.show.name}</h5>
              <button
                className="results__card-favorite-button"
                onClick={() => handleAddFavorite(res.show.id, isFavorite)}
                title="Add to Favorites"
              >
                {isFavorite ? (
                  <span className="material-icons fav-icon">favorite</span>
                ) : (
                  <span className="material-icons">favorite_border</span>
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Results;
