const Heading = ({title}) => {
  return (  
    <section className="bg-[#f5f5dc] mb-5 shadow px-4 py-4">
        <h1 className="text-2xl font-bold tracking-tight text-[#111]">
          { title }
        </h1>
    </section>
  )
}
 
export default Heading;