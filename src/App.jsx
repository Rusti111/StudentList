import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import { Home, Main, StudentDetails, UserList } from "./pages";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route element={<Main />} path="/">
            <Route element={<Home />} path="/" />
            <Route element={<StudentDetails />} path="/students" />
            <Route element={<UserList />} path="/user/:id" />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
