import MainHeader from "../components/header/MainHeader";
import SecondHeader from "../components/header/SecondHeader";
import MainNav from '../components/navigation/MainNav'
import MainFooter from '../components/footer/MainFooter'

function Home() {
  return (
    <div>
      <MainHeader />
      <SecondHeader sicon={true} />
      <MainFooter />
    </div>
  );
}

export default Home;
