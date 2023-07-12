import React, { useRef } from 'react'
import fireStore from '../firebase'
import { addDoc, collection } from '@firebase/firestore'

export default function Home() {
    const messageRef = useRef()
    const reference = collection(fireStore, 'messages') //messages is collection name in the firebase

    const handleSubmit = async (e) => {
        e.preventDefault()
        let data = {
            messages: messageRef.current.value
        }
        try {
            addDoc(reference, data)
        }catch(error){
            console.log(error)
        }
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="message">Enter the firebase massage</label>
        <input type="text" ref={messageRef} />
        <button>Submit</button>
      </form>
    </div>
  )
}
