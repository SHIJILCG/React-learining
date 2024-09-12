type GreetProps = {
   name:string,
   messagecount ?:number
   isloggedIn:boolean
}

function Greet(props:GreetProps) {
    const {messagecount = 0}=props
  return (
    <div>
        <h1>
            {
                props.isloggedIn ? `welcome ${props.name}! you have ${messagecount} unread messages` : `welcome Guest`
            }
            </h1>
    </div>
  )
}

export default Greet