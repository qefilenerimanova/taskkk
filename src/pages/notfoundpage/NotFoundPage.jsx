import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFoundPage = () => {

    const navigate=useNavigate()
  return (
    <div>
        <p>Not Found</p>
        <button onClick={()=>navigate(-1)}>Go back</button>

    </div>
  )
}

export default NotFoundPage