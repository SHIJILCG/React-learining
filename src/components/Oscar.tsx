type OscarType ={
    children:React.ReactNode
}
export default function Oscar(Props:OscarType) {
  return (
    <div>{Props.children}</div>
  )
}
