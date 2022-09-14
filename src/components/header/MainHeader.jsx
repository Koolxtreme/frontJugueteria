import MainNav from '../navigation/MainNav'
import Icon from "./icon/Icon";

function MainHeader() {
  return (
    <header className='flex justify-between items-center p-4 bg-biloba-flower w-full'>
      <div className='flex items-center justify-evenly'>
        <Icon></Icon>
      </div>
      <MainNav />
    </header>
  )
}

export default MainHeader