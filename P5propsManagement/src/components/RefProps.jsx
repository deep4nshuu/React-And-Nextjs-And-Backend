import React, { forwardRef, useRef } from 'react'

const CustomInput = forwardRef(({label, placeholder, className}, ref) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <input
      ref={ref}
      type='text'
      placeholder={placeholder}
      className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  )
})

CustomInput.displayName = "CustomInput"



export default function RefProps() {

  const inputRef = useRef(null)
  const scndInputRef = useRef(null)

  const focusInput = () => {
    inputRef.current?.focus()
  }
  const getInputVal = () => {
    if(inputRef.current){
      alert(`Input value: ${inputRef.current.value}`)
    }
  }
  const clearInput = () => {
    if(inputRef.current){
      inputRef.current.value = ""
      inputRef.current.focus()
    }
  }

  const clear2ndInput = () => {
    if(scndInputRef.current){
      scndInputRef.current.value = ""
      scndInputRef.current.focus()
    }
  }

  const focusScndInput = () => {
    scndInputRef.current?.focus()
  }


  return (
    <section className="p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Ref Props</h2>
      <p>Ref provide a way to access DOM nodes or React elements directly. Use <span className="font-sm bg-blue-50 px-2 mt-2 rounded-lg">forwardRef</span> to pass refs to child components</p>
      <div>
        <div className='mb-4 mt-4 bg-blue-50 rounded-lg p-4'>
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Try it out:</h3>
          <CustomInput 
          ref={inputRef}
          label="First Input (with ref)"
          placeholder="Type something..."
          className="border-blue-300"
          />
          <CustomInput 
          ref={scndInputRef}
          label="Second Input (with ref)"
          placeholder="Type something else..."
          />
          <div className='flex flex-wrap gap-3 mt-4'>
            <button
            className='px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition'
            onClick={focusInput}
            >
              Focus First Input
            </button>
            <button
            className='px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition'
            onClick={focusScndInput}
            >
              focus second input
            </button>
            <button
            className='px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition'
            onClick={getInputVal}
            >
              get input val
            </button>
            <button
            className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition'
            onClick={clearInput}
            >
              clear 1st input
            </button>
            <button
            className='px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition'
            onClick={clear2ndInput}
            >
              clear 2nd input
            </button>
          </div>
        </div>
        <div className='mb-4 mt-4 border-l-4 border-yellow-500 rounded-lg p-4'>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">When to use refs:</h3>
          <ul className="list-disc list-inside">
            <li>Managing foucs, text selection or media playback</li>
            <li>Triggering imperative animations</li>
            <li>Integrating with third-party DOM libraries</li>
            <li>Accessing DOM measurements (scroll position, element size)</li>
          </ul>
        </div>
      </div>
    </section>
  )
}


{/* Ref is used when you want a compo to remember some info but yoy don't want that info to trigger new renders, you use ref for it
  fn Comp({label,className},ref){}  -> here inside this{} are all props but this ref is special input used for accepting ref or html prop
  ForwardRef is used for accepting the ref or here ref is made to be used by useRef
  Whenever defining ref always provide displayname to component made for accepting ref as it helps in debugging and shows custom input in inspect
  ?. optionality decoder which is used when we don't now something might be there and something might not

  First ref is designed using forwardRef and then functionality around it is designed using useRef and then to pass it in return we pass ref which act as a connnector

  We pass special input designed by useRef hoo in return using special prop as ref and how we design custom input is passing spcial input ref
  */}