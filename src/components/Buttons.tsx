
 interface props{
      children:string ;
      onClick:()=>void; 
      color?:"primary"|"secondary"|"danger";
 }
 const Buttons = ({children,onClick,color="primary"}:props) => {
  return (
    <button className={'btn btn-'+color} onClick={onClick}>{children}</button>
  )
}

export default Buttons;