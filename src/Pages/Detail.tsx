import * as React from "react";
import { useParams } from "@reach/router";
import axios, { CancelTokenSource } from "axios";
import { Show } from "../Models/result";
import Detail from "../Components/Detail";
import { Context } from "../context";
import { Payloads } from "../Models/context";
import Error from "../Components/Error";
let source: CancelTokenSource | undefined;

const DetailPage: React.FC = () => {
  const params = useParams();
  const id = params.id;
  const [data, setData] = React.useState<Show>();
  const [isLoading, setIsLoading] = React.useState(false);
  const {
    context: { error },
    dispatch,
  } = React.useContext(Context);
  React.useEffect(() => {
    if (id && !data) {
      setIsLoading(true);
      dispatch({ type: Payloads.Error, payload: undefined });
      let CancelToken = axios.CancelToken;
      source = CancelToken.source();
      axios
        .get(`http://api.tvmaze.com/shows/${id}`)
        .then(res => {
          setIsLoading(false);
          setData(res.data);
        })
        .catch(error => {
          setIsLoading(false);
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            dispatch({
              type: Payloads.Error,
              payload:
                "Error in request. Are you sure you have the correct address?",
            });
            console.log(error.request);
          } else {
            console.log("Error", error.message);
            dispatch({ type: Payloads.Error, payload: error.message });
          }
          console.log(error.config);
        });
    }
    return () => {
      if (source) {
        source.cancel("Component is unmounting");
      }
    };
  }, [id, data, setData, setIsLoading, dispatch]);

  if (isLoading) {
    return <div>Loading..</div>;
  }

  if (!data) {
    return <Error message={error} />;
  }

  return <Detail details={data} />;
};

export default DetailPage;
