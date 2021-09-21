import React from 'react' 

export default function PhotoContainer(props) { 


const diplayPhoto = () => {
    return props.photo.map( photo => {
        return <Photo url={photo.url}/>
    })
}

    return (
        <div> 
            <> 
            <section>{diplayPhoto}</section>
            </>  
        </div>
    )
}
