import React from 'react'

function Child (props) {
  function sendData(){
    props.setChildMessage("iam from child funcional component 😁😁")
  }
  return (
    <>
      <h2>Child Component</h2>
      <button onClick={sendData}>get the messagge from child</button>
    </>
  )
}
export default Child