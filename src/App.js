import "./App.scss";
import "./styles/partials/_global.scss"
import "./styles/partials/_variables.scss";
import Header from "./components/Header/Header";
// import Button from "./components/Button/Button";

// import commentIcon from "./assets/images/Icons/add_comment.svg"

function App() {

  return (
    <div className="App">
      <Header />
      {/* <Button buttonText="Component" iconSource={commentIcon} iconAlt="comment icon"/> */}
    </div>
  );
}

export default App;

// Questions
// Make class setable on calling the component via passing in Block part of name to amend to __Element? *** Search component