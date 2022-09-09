import MainNav from '../navigation/MainNav'

function MainHeader() {
  return (
    <header className='flex justify-between items-center p-4 bg-biloba-flower w-full'>
      <div className='flex items-center justify-evenly'>
        <p>ventas@playgroundjugueteria.com</p>
        <p className='md:mx-4'>|</p>
        <p>+56 9999 5555</p>
      </div>
      <MainNav />
    </header>
  )
}

export default MainHeader