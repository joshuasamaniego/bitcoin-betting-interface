import React, { useEffect, useState } from "react";
import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_BET_EVENTS } from "./utils/queries";

function App() {
  //Component State
  const [newBets, setNewBets] = useState([]);
  const [newResponses, setNewResponses] = useState([]);
  const [loadingState, setLoadingState] = useState(false);
  const [errorState, setErrorState] = useState(null);

  const { loading, error, data } = useQuery(GET_BET_EVENTS, {
    fetchPolicy: "network-only",
    pollInterval: 5000,
  });

  useEffect(() => {
    if (!data) return;
    if (loading) {
      setLoadingState(true);
      console.log("Graph Loading... ", loading);
    }
    if (error) {
      setErrorState(error);
      console.log("Error from Graph::: ", error);
    }

    //Need to parse Data coming from the graph into usable
    //data, do it in Graph code.
    setNewBets(data.newBetEntities);
    setNewResponses(data.newBetResponseEntities);

    return () => {
      setNewBets([]);
      setNewResponses([]);
      setLoadingState(false);
      setErrorState(null);
    };
  }, [data, loading, error]);

  console.log("New Bets", newBets);
  console.log("New Bet Responses", newResponses);

  return (
    <div className="App">
      <h1>Bitcoin Betting</h1>
      <div>
        {/* {newBets.length > 0 && newBets.map((bet) => (
          <h2>{bet.}</h2>
        ))} */}
      </div>
    </div>
  );
}

export default App;
