import React from 'react'
import './Categories.css'
import Card from './Categoriescard'

const Categories = () => {

  return (
    <div className='Categoriesbody'>
      {/* <h3 className='Categoriesh3'>Categories</h3> */}
     
      <article className='Categoriesmain'>
        {
            Card.map((i) => (

                <div key={i.id} className='Categoriesmaindiv' >
                    <span className='spanbut'>
                    <button className='Categoriesbutton'></button>
                    </span>
                    <img src= {i.img}  className='Categoriesimage'/>
                    <h3 className='Categoriesmaintext'>{i.about}</h3>
                </div>
            ))
        }
      </article>
    </div>
  )
}

export default Categories
