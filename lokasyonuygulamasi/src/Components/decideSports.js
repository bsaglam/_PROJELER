import React, { Component } from 'react'

class DecideSports extends Component {
    constructor(props) {
        super(props)
        this.state = {
            longitude: 0, // state tanımı
            err: ''
        }
    }
    render() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                //state değerinin yeniden setlenmesi
                this.setState({ longitude: position.coords.longitude });
            },
            (err) => {
                console.log(err);
                this.setState({ err: err.message })
            });

        const { longitude, err } = this.state;

        if (longitude !== 0 && !err) {
            return (<div>
                konum : {longitude}
            </div>)
        }
        else if (longitude === 0 && err) {
            return (<div>
                hata: {err}
            </div>)
        }
        return (
            <div>
               yükleniyor
            </div>
        )
    }
}


export default DecideSports;