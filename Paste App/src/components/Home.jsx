import React from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
    const [title, settitle] = useState("")
    const [value, setvalue] = useState('')
    const [searchParams, setsearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");

  return (
    <div>
    <div classname="flex flex-row gap-5">
      <input
        className="p-2 rounded-2xl mt-2"
        type = "text"
        placeholder="enter title here"
        value ={title}
        onChange={(e)=>settitle(e.target.value)}
      />
      <button classname="p-2 rounded-2xl mt-2">
        {
            pasteId? "Update Paste" : "Create My Paste"
        }
      </button>
    </div>
    <div>
        <textarea
        className="rounded-2xl mt-4 min-w-[500px] p-4 "
        value={value}
        placeholder="Enter your paste"
        onChange={(e)=>setvalue(e.target.value)}
        rows={20}
        />
    </div>
    </div>
  )
}

export default Home
