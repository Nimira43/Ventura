const Footer = () => {
const currentYear = new Date().getFullYear()

  return (
    <footer className='py-6'>
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <p className='text-center text-sm text-dark'>
        <span className='logo text-xl'>Ventura </span>&copy; {currentYear}, NimiraTech. All rights reserved.
      </p>
    </div>
  </footer>
  )
}

export default Footer


