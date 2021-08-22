import React from 'react'
import './sidebaroption.css'

function SidebarOption({ active, text, Icon }) {
    return (
        <div className = {`sidebaroption ${active && 'sidebaroption--active' }`}> 
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}

export default SidebarOption