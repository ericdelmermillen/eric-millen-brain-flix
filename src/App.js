import "./App.scss";
import "./styles/partials/_global.scss"
import "./styles/partials/_variables.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import HeroVideo from "./components/HeroVideo/HeroVideo";

function App() {

  return (
    <div className="App">
      <Header />
      <HeroVideo/>
      <Main />
    </div>
  );
}

export default App;

// Questions
// Make class setable on calling the component via passing in Block part of name to amend to __Element? *** Search component
// Should all componets end up with the same class or should they have classes that refelect their BEM use within their parent? (.header__search vs just .search ?)
// If they get the same class everywhere they are used, how do you selected them to change them where they are being used without a complex selector? 
// If they get unique classses relative to their BEM functionality within the parent how do you apply the base classes without applying them in every place they are used?