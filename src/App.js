import "./App.css";
import SwExplorer from "./js/components/SwExplorer.tsx";
import Menu from "./js/components/Menu.tsx";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { STAR_WARS_EXPLORER } from "./js/utils/constants";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar className="HeaderBackground">
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                ></IconButton>
                <Typography
                  variant="h6"
                  color="inherit"
                  component="div"
                  className="header_component"
                >
                  {STAR_WARS_EXPLORER}
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
          <Menu />
        </nav>
        <Switch>
          <Route path="/characters">
            <SwExplorer key="characters" dataType="characters" />
          </Route>
          <Route path="/movies">
            <SwExplorer key="movies" dataType="movies" />
          </Route>
          <Route path="/planets">
            <SwExplorer key="planets" dataType="planets" />
          </Route>
          <Route exact path="/" render={() => <Redirect to="/characters" />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
