import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInComponent from "./components/signincomponent";
import MyFormikForm from "./components/formiksignincomponent";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
          <Route path="/signin" Component={SignInComponent} />
          <Route path = "/formik" Component={MyFormikForm}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
