import React from 'react';


// const Card = (props)=>{

//     return(
//         <div className='card'>
            
//             <div className='top'>
//                 <h2 >{props.name}</h2>
//                 <img className='circle-img' src={props.src} alt={props.ALT} />

//             </div>
            
//             <div className='bottom'>
//                 <p className='info'>{props.contact}</p>
//                 <p className='info '>{props.webSite}</p>
//             </div>
//         </div>
//     )
// }

const Card =(props)=> {


    return(
        <div>       
            <div className='card'>
             <div className='top'>
             <img className='circle-img' src={props.picture} alt="" />
            </div>   

            
            <div className='bottom'>
            <p className='info'>{props.id}</p>
            <p className='info'>{`${props.title} ${props.firstName} ${props.lastName}`}</p>
            </div>
            </div>
        </div>
    )
}


export default Card