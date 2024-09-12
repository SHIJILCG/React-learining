type buttonType={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>,id:number)=>void
    buttonStyle:string
}
export default function Button(Props:buttonType) {
  return (
     <button onClick={event => Props.handleClick(event,1)} className={Props.buttonStyle} >Click</button>
  )
}
