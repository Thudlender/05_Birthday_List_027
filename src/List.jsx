import React from 'react'

const List = (props) => {
    const {people} = props;
  return (
    <div>{people.map((person)=>{
        <article className='person' key={person.id}>
            <img src={image} alt='profile image'/>
            <div>
                <h4>{name}</h4>
                <p>{age} Years Old</p>
            </div>
        </article>
    })}</div>
  )
}

export default List;