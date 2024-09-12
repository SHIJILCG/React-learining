import { personNameType } from "./person.Type"
function Person(props:personNameType) {
  return (
    <div>{props.Name.first} {props.Name.last}</div>
  )
}

export default Person