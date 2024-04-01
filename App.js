import React from 'react'
// import components
import Header from './components/Header'
import Card from './components/Card'
// import data
import data from './data'

export default function App() {
    const cards = data.map(item => {
        return (
        <Card
                // key={keyid}
                item={item}
            />
        )
    })
    
    return (
        <div>
            <Header />
            <section className='cards-list'>
                {cards}
            </section>
        </div>
    )
}