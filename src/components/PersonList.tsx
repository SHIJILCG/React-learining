import { name } from "./person.Type"
type PersonListType={
    list :name[]
     
}
function PersonList(Props:PersonListType) {
  return (
    <div>
       {Props.list.map(list => {
          return(
              <h2>{list.first}{list.last}</h2>
          )
       })}
    </div>
  )
}

export default PersonList