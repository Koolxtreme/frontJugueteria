import MainHeader from "./components/header/MainHeader";
import SecondHeader from "./components/header/SecondHeader";
import MainNav from './components/navigation/MainNav'

function App() {
  return (
    <div>
      <MainHeader />
      <SecondHeader sicon={true}/>
      <MainNav />
    </div>
  );
}

export default App;
