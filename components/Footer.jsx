const Footer = () => {
const currenYear = new Date().getFullYear()

  return ( 
    <footer className='bg-[#111] py-6'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <p className='text-center text-sm text-[#f5f5dc]'>
          &copy; { currenYear } Ventura Venues. All rights reserved.
        </p>
      </div>
    </footer>
   )
}
 
export default Footer