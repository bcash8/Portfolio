import { Header } from "./components/Header/Header";
import { Router } from "./navigation/Router";
import { BrowserRouter } from "react-router";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
