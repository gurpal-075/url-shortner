import React, { useState } from 'react'
import axios from 'axios'
const UrlForm = () => {

  const [value, setvalue] = useState(null)
  const handleSubmit = async() => {
    const data = await axios.post("http://localhost:5173/api/create",{value})
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="url" className="block text-sm font-medium text-gray-700"> Enter your URL </label>
        <input
          type="url"
          id="url"
          value={value}
          onInput={(event)=>setvalue(event.target.value)}
          placeholder="https://example.com"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          
        />
      </div>
      <button
      type="submit"
      className="w-full bg-blue-500 text-white px-4 rounded-md >
      </button>
    </form>

  )
}

export default UrlForm
