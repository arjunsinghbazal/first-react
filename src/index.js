import React from 'react';
import ReactDOM  from 'react-dom';
import "./styles.css"
import Card from "./card";
import arr from "./arr"

function call(val){
    return (
        <Card
        key={val.id}
        imgSrc={val.imgSrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
     />
    )
}

ReactDOM.render(
   <>
   <h1 className='Heading'>Top Five Netflix Series In 2022</h1>
   <div className="cardS">
     {arr.map(call)}
   </div>
   </>
    ,
    document.getElementById('root')
)