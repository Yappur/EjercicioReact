import { BrowserRouter as Router } from "react-router-dom";
import RoutesViews from "./routes/RoutesView.jsx";

function App() {
  return (
    <>
      <Router>
        <RoutesViews />
      </Router>
    </>
  );
}

export default App;
