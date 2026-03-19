import React from 'react'

const QueueDisplay = ({queue,onUpdateStatus,onRemove}) => {
    const getStatusColor=(status)=>{
        switch(status){
            case "waiting":
                return "yellow";
            case "serving":
                return "green";
            case "completed":
                return "cyan";
            default:
                return "white";
        }
    }
  return (
    <>
<div  >
    <h2 className='pt-2'>Current Queue</h2>
    {queue.length === 0 ? (<p>No Customer Data</p>) :( 
        <div>
       <table className=" table table-dark">
  <thead>
    <tr>
      <th>Name</th>
      <th>Service</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {queue.map((customer) => (
      <tr key={customer.id}>
        <td>{customer.name}</td>
        <td>{customer.service}</td>
        <td>
          <span style={{ color: getStatusColor(customer.status) }}>
            {customer.status}
          </span>
        </td>
        <td>
          {customer.status === 'waiting' && (
            <button
              className="btn btn-warning"
              onClick={() => onUpdateStatus(customer.id, "serving")}
            >
              Serve
            </button>
          )}

          {customer.status === 'serving' && (
            <button
              className="btn btn-success"
              onClick={() => onUpdateStatus(customer.id, "completed")}
            >
              Complete
            </button>
          )}

          <button
            className="btn btn-danger ms-2"
            onClick={() => onRemove(customer.id)}
          >
            Remove
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>
    </div>) }
    </div>
    </>
  )
}
export default QueueDisplay