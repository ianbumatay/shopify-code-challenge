import React from 'react'

export default function Photo({photo}) {
    return (
        <div>
            <section>
                <img src={photo.url} alt="giant orange ball"/>
            </section>
        </div>
    )
}
