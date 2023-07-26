import "./App.scss";
import "./styles/partials/_global.scss"
import "./styles/partials/_variables.scss";
import Button from "./components/Components/Button";
import uploadIcon from "./assets/images/Icons/upload.svg"
import commentIcon from "./assets/images/Icons/add_comment.svg"

function App() {
  return (
    <div className="App">
      <h1>Hello From First Commit On Develop</h1>
      <h2>Message After Setting Fonts</h2>
      <h3>Message After Creating feature-variables branch off of develop</h3>
      <h4>Message After creating feature-mixins</h4>
      <Button buttonText="Upload" iconSource={uploadIcon} iconAlt="upload icon"/>
      <Button buttonText="Component" iconSource={commentIcon} iconAlt="comment icon"/>
    </div>
  );
}

export default App;
