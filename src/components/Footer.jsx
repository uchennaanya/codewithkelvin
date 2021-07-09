import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear()

    return (
        <div className='footer'>
            <p>&copy; All right reserved {year}</p>
        </div>

    )
}

export default Footer