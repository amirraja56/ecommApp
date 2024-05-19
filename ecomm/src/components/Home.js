import React from 'react'
import Products from './Products'
export default function home() {
  return (
    <div className='container'>
        <h2 className='header' style={{textAlign:"center"}}> Welcome to Product Store</h2>
        <section className='product'>
            <Products/>
        </section>
    </div>
  )
}
