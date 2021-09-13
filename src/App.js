import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { AppTest } from "./pages";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <AppTest></AppTest>
    </Provider>
  );
}

export default App;
