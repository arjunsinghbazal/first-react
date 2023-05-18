import React from "react";

function Card(props){
    return (
        <>
            <div className="cards">
            <div className="card">
                <img src={props.imgSrc} alt='kkkk' className='image'/>
                <div className='info'>
                    <span className='title'>
                        {props.title}
                    </span>
                    <h3 className='name'>{props.sname}</h3>
                    <a href={props.link} target='__blank'>
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>   
            </div>
        </>
    )
}

export default Card;