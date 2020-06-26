import React from "react";
import { Router, RouteComponentProps } from "@reach/router";
import "./App.css";
import Search from "./Pages/Search";
import Detail from "./Pages/Detail";
import ContextProvider from "./context";

let SearchPage = (props: RouteComponentProps) => <Search />;
let DetailPage = (props: RouteComponentProps) => <Detail />;

function App() {
  return (
    <ContextProvider>
      <Router>
        <SearchPage path="/" />
        <DetailPage path="/shows/:id" />
      </Router>
    </ContextProvider>
  );
}

export default App;
