import React from 'react'

export default function Photo({photo}) {
    return (
        <div>
            <h1>Spacestagram</h1>
            <section> <img src={photo.url} alt="giant orange ball"/> </section>
            <h2>{photo.title}</h2>
            <h2>{photo.date}</h2>
            <p>{photo.explanation}</p>
        </div>
    )
}
