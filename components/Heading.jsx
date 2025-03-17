const Heading = ({title}) => {
  return (  
    <section
      className='bg-light mb-5 shadow px-4 py-4'
    >
      <h1
        className='text-2xl font-medium tracking-tight text-dark'
      >
        { title }
      </h1>
    </section>
  )
}
 
export default Heading
