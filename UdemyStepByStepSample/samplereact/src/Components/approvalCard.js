import React from 'react'

export default function approvalCard(props) {
    return (
        <div>
            <div class="ui card">
                <div class="content">
                    <div class="header">About Amy
                   </div>
                </div>
                <div class="content">
                    <div class="description">
                         {props.children}
                       </div>
                </div>
                <div class="extra content">
                    <i aria-hidden="true" class="user icon"></i>4 Friends
                    </div>
            </div>
        </div>
    )
}
