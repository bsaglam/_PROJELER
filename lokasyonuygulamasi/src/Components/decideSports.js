import React, { Component } from 'react'
import '../decideSports.css'
import Loader from './loader'

class DecideSports extends Component {
    constructor(props) {
        super(props)

        this.state = {
            latitude: 0, // state tanımı
            err: ''
        }

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position);
                //state değerinin yeniden setlenmesi
                this.setState({ latitude: position.coords.longitude });

            },
            (err) => {
                console.log(err);
                this.setState({ err: err.message })
            });
    }

    componentDidMount() {

    }
    componentWillUnmount() {
        this.setState({ latitude: 0, err: '' });
    }

    decideSport(lat) {
        const month = new Date().getMonth();
        console.log("Ay: ", month);
        console.log("enlem: ", lat);
        const winter = {text : "snowboarda gidebilrisin" , icon : "snowflake icon", css:".sun-background"};
        const summer = {text : "yüzmeye gidebilrisin" , icon: "sun icon", css:".snow-background"};  
        if (lat < 0) {
             
            if (month > 3 && month < 9) {
                return summer;
            } else {

                return winter;
            }
        }
        else {
            if (month > 9 || month < 3) {
                return winter;
            } else {

                return summer;
            }
        }
    }
    render() {

        const { latitude, err } = this.state;


        if (latitude !== 0 && !err) {
            const sport = this.decideSport(latitude);
            return (
            <div className={'${sport.css + } decide-sports-container'}>
                <h2 className="ui icon header">
                    <i className={sport.icon}></i> 
                    <div className="content">
                        {sport.text}
                    </div>
                </h2>
            </div>)
        }
        else if (latitude === 0 && err) {
            return (<div>
                hata: {err}
            </div>)
        }
        return (
            <div>
                <Loader text="yükleniyor"/>
            </div>
        )
    }
}


export default DecideSports;