import React from 'react'

function Payment(props) {
  return (
    <div class="card" style={{backgroundColor:"#fff",alignItems: "center",textAlign:"center"}}>
      <div style={{}}>
        <i class="checkmark">✓</i>
      </div>
        <h1>Success</h1> 
        <p>We received your purchase request;<br/> we'll be in touch shortly!</p>
        <button onClick={() => props.isSuccess(3)}>Ok</button>
    </div>
  )
}

export default Payment

//border-radius:200px; height:200px; width:200px; background: #F8FAF5; margin:0 auto