import React, { useState } from 'react'
import { FaUserPlus} from 'react-icons/fa'
const QueueForm = ({onAdd}) => {
    const[name,setName]=useState('')
    const[service,setService]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(!name.trim() || !service.trim()) return
         onAdd({name,service})
        setName('')
        setService('')
    }
  return (
   <>
   <form onSubmit={handleSubmit}>
    <h2 className='pt-2'>Add to Queue</h2>
    <div>
        <input type='text' className="form-control w-100" value={name} placeholder='Enter Name' onChange={(e)=>setName(e.target.value)}/>
        <select value={service} className="form-select mt-3" onChange={(e)=>setService(e.target.value)}>
            <option value="">Select Service</option>
            <option value="consultation">Consultation</option>
             <option value="payment">Payment</option>
              <option value="support">Support</option>
        </select>

    </div>
   <div class="d-grid gap-2 mt-3 mb-4">
        <button type="submit" className='btn btn-light' ><FaUserPlus/> Add Customer</button>
    </div>
   </form>
   </>
  )
}

export default QueueForm