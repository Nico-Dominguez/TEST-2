import React from 'react'

export default function Card(props) {
    
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = 'SOLD OUT'
    }
    
    return (
        <section className="wrapper">
            <div className="left">
                <img src={`${props.item.imageUrl}`} />
                {badgeText && <div className="card--badge">{badgeText}</div>}
            </div>
            <div className="right">
                <div className="top">
                    <img src="Pin.png"/> 
                    <h3>{props.item.location}</h3>
                    <p><a href={props.item.googleMapsUrl}>View on Google Maps</a></p>
                </div>
                <div className="bottom">
                    <h1>{props.item.title}</h1>
                    <h2>{props.item.startDate} - {props.item.endDate}</h2>
                    <p>{props.item.description}</p>
                </div>
            </div>
        </section>
    )
}