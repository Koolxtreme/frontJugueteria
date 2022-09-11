import Localization from "./map/Localization";
import FooterList from './FooterList'

function MainFooter() {
  return (
    <footer className="absolute bottom-4 w-9/12 h-2/9 left-0 right-0 mx-auto  bg-biloba-flower grid md:grid-flow-col items-center p-2">
        <FooterList/>
        <FooterList />
        <FooterList />
      <div className="h-full m-2">
        <Localization />
      </div>
    </footer>
  );
}

export default MainFooter; 
