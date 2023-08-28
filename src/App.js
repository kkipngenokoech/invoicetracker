import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInComponent from "./components/signincomponent";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/signin" Component={SignInComponent}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
