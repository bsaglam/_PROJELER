import React from 'react'
import '../loader.css'
export default function Loader({text}) {
    return (
        <div class="loader-container ui segment">
            <div class="ui active inverted dimmer">
                <div class="ui mini text loader">{text}</div>
            </div>
            <p></p>
        </div>
       
    )
}
