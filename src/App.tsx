import React from "react";
import "./App.css";
import { Typography } from "@mui/material";
import { Campaigns } from "./Campaigns";
import { sample_data } from "./data";

function App() {
  return (
    <div className="App">
      <Typography variant={"h1"} fontSize="60px">
        Rift Email Campaigns
      </Typography>
      {/* I pass in sample_data here in lieu of fetching data from server */}
      <Campaigns campaigns={sample_data} />
    </div>
  );
}

export default App;
