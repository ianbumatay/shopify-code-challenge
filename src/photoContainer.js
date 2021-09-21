import React from 'react' 
import Photo from './photo'

export default function PhotoContainer(props) {  

    console.log(props)


const displayPhoto = (props) => {
    return props.photos.map( photo => {
        return <Photo url={photo.url}/>
    })
}

    return (
        <div> 
            <section>{displayPhoto()}</section>
        </div>
    )
}
