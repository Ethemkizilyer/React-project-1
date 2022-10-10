import React from 'react'



const Card = (item) => {
const{
    name,title,price,url,category
} = item;
console.log(item);
return (
    <div className='main'>
        <div className='card'>
            <div className='image'>
                <img src={url} alt="" />
            </div>
            <div className='content'>
                <div className='baş'>
                    <h5>{name}</h5>
                    <span>${price}</span>
                </div>
               
                <div>
                    <p className='category'>{category}</p>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    </div>
)

}

export default Card;
