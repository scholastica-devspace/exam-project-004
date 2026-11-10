import React from 'react'

const Image = ({className, src, alt }) => {
    return (
        <div >
            <img className={className} src={src} alt={alt} />
        </div>
    )
}

export default Image