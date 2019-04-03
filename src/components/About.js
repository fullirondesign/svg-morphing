import React, {useEffect} from 'react'



export default function About() {


    useEffect(() => {
        // Update the document title using the browser API
        setInterval(() => { 
            const el = document.getElementsByClassName('about')[0] || document.getElementsByClassName('anime')[0]
            console.log("el1", el)
            if(el.className === 'about'){return el.className='anime'}
            if(el.className === 'anime'){return el.className='about'}
            console.log("el2",el)
        }, 1000);
    } );

    return (
        <div className="about">
            <svg id="bird" xmlns="http://www.w3.org/2000/svg" width="355.96" height="503.21" viewBox="0 0 355.96 503.21">
                <title>bird-1</title>
                <path id="body" d="M404.5,449.5l-108-230.42L303,146c13-170-112-72-95,0,10.66,45.15,18.05,128.83,18.05,128.83h0L149.5,474.5Z" transform="translate(-62.09 -42.79)" fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="18" />
                <polygon id="wing" points="19.41 343.71 147.41 389.71 202.41 215.71 19.41 343.71" fill="#fff" stroke="#000" stroke-miterlimit="10" stroke-width="18" />
                <g id="beek">
                    <g id="beekB">
                        <polygon points="227.41 167.71 298.9 144.21 245.41 137.71 218.41 147.71 227.41 167.71" />
                    </g>
                    <polygon id="beekT" points="236.91 109.42 315.9 127.21 218.41 147.71 236.91 109.42" />
                </g>
                <polyline id="legL" points="129.83 430.75 110.91 500.21 197.91 500.21" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="6" />
                <polyline id="legR" points="244.83 421.88 225.91 491.34 312.9 491.34" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="6" />
                <g id="eye">
                    <circle id="EyeO" cx="198.41" cy="73.71" r="13.5" fill="none" stroke="#000" stroke-miterlimit="10" />
                    <circle id="eyeI" cx="198.41" cy="73.71" r="6" />
                </g>
            </svg>

        </div>
    )
}
