import { makeStyles } from "@mui/styles"; // updated package
import Homepage from "./Pages/HomePage";

import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Coinpage from "./Pages/Coinpage";


const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coin/:id" element={<Coinpage/>}></Route>         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
