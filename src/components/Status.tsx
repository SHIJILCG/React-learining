
type StatusType={
    status:"Loading" | "Data fetched successfully!" | "Error fetching Data"
}
function Status(Props:StatusType) {
  return (
    <div>
        <h2>{Props.status}</h2>
    </div>
  )
}

export default Status