import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};


// const Profile = () => {
//   return (
//     <div>
//       <h1>This is my account and profile page</h1>
//     </div>
//   );
// };

ReactDOM.render(
  <Router>
    <Route path="/" component={App} />
    {/* <Route path="/about" component={Profile}/>  */}
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


serviceWorker.unregister();


