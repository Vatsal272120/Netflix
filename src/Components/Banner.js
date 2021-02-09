import React from 'react'
import '../Stylesheets/Banner.css'

const Banner = () => {
    return (
        <header className="banner"  
        style = {{ 
        backgroundSize : 'cover' ,
        backgroundImage : `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuTL9nyf11D_hcLE9dHkvLzwj6U684U0j_eg&usqp=CAU)`
    }}></header>
    ) 
}

export default Banner
