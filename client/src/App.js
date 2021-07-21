import "./App.css";

import { Link, Redirect, Router } from "@reach/router";

import NotFound from "./views/NotFound";
import Authors from "./views/Authors";
import Author from "./views/Author";
import NewAuthor from "./views/NewAuthor";
import EditAuthor from "./views/EditAuthor";

function App() {
  return (
    <div className="nav">
      <nav className="nav">
        <h1 className="navbar-brand mb-0" style={{marginLeft: "90px"}}>Authors</h1>
        <div className="nav" style={{marginLeft: "90px"}}>
          <Link
            to="/authors"
            className="nav"
            style={{margin: "10px"}}
          >
            All Authors
          </Link>
          <Link
            to="/authors/new"
            className="nav"
          >
            New Author
          </Link>
        </div>
      </nav>
      <Router>
        <Authors path="/authors" />
        <Author path="/authors/:id" />
        <EditAuthor path="/authors/:id/edit" />
        <NewAuthor path="/authors/new" />
        <Redirect from="/" to="/authors" noThrow="true" />
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;
