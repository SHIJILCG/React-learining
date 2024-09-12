type ContainerType={
     styles:React.CSSProperties
}
export default function Container(Props:ContainerType) {
  return (
    <div style={Props.styles}>
        Text content goes here
    </div>
  )
}
