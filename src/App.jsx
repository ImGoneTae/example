import { Link, Route, Switch } from "wouter";
import React from "react";
function App() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link href="/">Uno</Link>
          </li>
          <li>
            <Link href="/second">Dos</Link>
          </li>
          <li>
            <Link href="/third">Tres</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/" component={Index} />
        <Route path="/second" component={Second} />
        <Route path="/third" component={Third} />
      </Switch>
    </>
  );

  function Index() {
    return <h1>Hola 1</h1>;
  }
  function Second() {
    return <h1>Hola 2</h1>;
  }
  function Third() {
    return <h1>Hola 3</h1>;
  }
}

export default App;
