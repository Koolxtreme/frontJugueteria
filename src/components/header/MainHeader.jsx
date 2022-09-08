import StatusTools from './status/StatusTools'

function MainHeader() {
  return (
    <header className='flex justify-between items-center p-4 bg-biloba-flower'>
      <div className='flex items-center justify-evenly'>
        <p>ventas@playgroundjugueteria.com</p>
        <p className='mx-4'>|</p>
        <p>+56 9999 5555</p>
      </div>
      <StatusTools />
    </header>
  )
}

export default MainHeader