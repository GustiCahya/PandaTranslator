import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Layout from "./layouts/Layout";
import Normalize from "./pages/Normalize";
import FindIndex from "./pages/FindIndex";

const theme = createTheme({
  palette: {
    secondary: purple
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout >
          <Switch>
            <Route exact path="/">
              <Normalize />
            </Route>
            <Route exact path="/find-index">
              <FindIndex />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}
export default App;
