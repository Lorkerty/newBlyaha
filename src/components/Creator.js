import React from 'react'

function Creator(props) {
    const {creator} = props
    //const body = <section>Footer</section> 
    console.log(props, props.creator.img)
   return(
        <div className="card" width="200" height="auto">
          <h2>{creator.name}</h2>                     
          {/* { body }  */}
          <img scr={creator.img} width = "300" height="300" alt={creator.name}/>
          <h3 style={{color:"red"}}>
          </h3>
        </div>
      );
  }
  export default Creator