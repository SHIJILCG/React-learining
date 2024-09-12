type HeadingType ={
    children:string
}
function Heading(Props:HeadingType) {
  return (
    <h2>{Props.children}</h2>
  )
}

export default Heading