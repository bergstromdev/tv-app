import * as React from "react";
import { ContextType, Payloads, Actions } from "./Models/context";

const initialState: ContextType = {
  result: [],
  error: undefined,
  favorites: [],
};

const getInitialState = (): ContextType => {
  const persistedContext = window.localStorage.getItem("tv-app");
  if (persistedContext) return JSON.parse(persistedContext);
  return initialState;
};

export const Context = React.createContext<{
  context: typeof initialState;
  dispatch: (action: Actions) => void;
}>({
  context: getInitialState(),
  dispatch: () => {},
});

const reducer = (state: ContextType, action: Actions) => {
  switch (action.type) {
    case Payloads.Result:
      return { ...state, [Payloads.Result]: action.payload };
    case Payloads.Error:
      return { ...state, [Payloads.Error]: action.payload };
    case Payloads.Favorites:
      return { ...state, [Payloads.Favorites]: action.payload };
    default:
      return state;
  }
};

const ContextProvider: React.FC = ({ children }) => {
  const [context, dispatch] = React.useReducer(reducer, getInitialState());

  // Persist to LS on change
  React.useEffect(() => {
    window.localStorage.setItem("tv-app", JSON.stringify(context));
  }, [context]);

  return (
    <Context.Provider
      value={{
        context,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
