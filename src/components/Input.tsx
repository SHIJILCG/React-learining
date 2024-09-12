type InputType ={
     value:string
     handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
     inputstyle:string
}
export default function Input(Props:InputType) {
  return (
     <input type="text" name="" id="" value={Props.value} onChange={event =>Props.handleChange(event)} className={Props.inputstyle}/>
  )
}
