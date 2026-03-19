import { useState } from 'react'

import './App.css'
import QueueForm from './components/QueueForm'
import QueueDisplay from './components/QueueDisplay'

function App() {
  const [queue,setQueue]=useState([])
  const addToQueue=(customer)=>{
     setQueue([...queue,{...customer,id:Date.now(),status:"waiting"}])
  }
  const updateStatus=(id,newStatus)=>{
     setQueue(queue.map(customer=>
      customer.id === id ? {...customer,status:newStatus} :customer
     ))
  }
  const removeFromQueue=(id)=>{
    setQueue(queue.filter(customer=>customer.id !==id))
  }

  return (
    <>
    <div className='bg-dark text-light' style={{height:'670px',width:'100%'}}>
    <div className='container ' >

   
     <h2 className='text-info' style={{paddingTop:'50px'}}>Queue Management System</h2>
      <p className='text-secondary'>Manage Your Customers Eficiently</p>
      <div className='row justify-content-center'>

        <div className='col-4 justhover' style={{border:"1px solid rgb(70, 0, 135)",borderRadius:'9px',}}>

 <QueueForm onAdd={addToQueue}/>
        </div>
        <div className='col-6  mx-5 justhover' style={{border:"1px solid rgb(70, 0, 135)",borderRadius:'9px'}}>
     <QueueDisplay queue={queue} onUpdateStatus={updateStatus} onRemove={removeFromQueue}/>

        </div>
      </div>
    </div>
   </div>
    </>
  )
}

export default App
