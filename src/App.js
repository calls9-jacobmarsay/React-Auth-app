import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

function App() {
  const loggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Layout>
      <Switch>
        {loggedIn && (
          <>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/profile">
              <UserProfile />
            </Route>
          </>
        )}
        {!loggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        <Route path="*">
          <Redirect to="/auth" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
