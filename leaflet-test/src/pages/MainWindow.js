
import React, { useState, useEffect } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import L from 'leaflet'
import '../App.css'

export default function MainWindow() {
    const [initialPosition, setInitialPosition] = useState([0, 0])

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords

            setInitialPosition([latitude, longitude])
            console.log(initialPosition)
        })

    }, [])

    function handleClick(children) {
        console.log(12);
        children.add()

    }

    var oldLadyIcon = L.icon({
        iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/2996/2996482.svg',
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        //shadowUrl: 'https://icon-library.net/images/map-pin-icon-png/map-pin-icon-png-22.jpg',
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    })

    var otherBoyIcon = L.icon({
        iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/3441/3441154.svg',
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        //shadowUrl: 'https://icon-library.net/images/map-pin-icon-png/map-pin-icon-png-22.jpg',
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    })

    var boyIcon = L.icon({
        iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/2996/2996475.svg',
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        //shadowUrl: 'https://icon-library.net/images/map-pin-icon-png/map-pin-icon-png-22.jpg',
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    })

    var girlIcon = L.icon({
        iconUrl: 'https://www.flaticon.com/svg/static/icons/svg/2996/2996492.svg',
        iconSize: [38, 95],
        iconAnchor: [22, 94],
        popupAnchor: [-3, -76],
        //shadowUrl: 'https://icon-library.net/images/map-pin-icon-png/map-pin-icon-png-22.jpg',
        shadowSize: [68, 95],
        shadowAnchor: [22, 94]
    })


    return (

        <div id="container">
            <Map id="mapid" center={initialPosition} zoom={15} >
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">Open5treetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <Marker position={initialPosition} key="1" icon={oldLadyIcon} onclick={() => handleClick} children={"weeew"} zoom={15} >
                    <a href="https://www.flaticon.com/svg/static/icons/svg/3441/3441146.svg"></a>
                </Marker>

                <Marker position={[initialPosition[0] - 0.000123, initialPosition[1] - 0.000123]}  zoom={15}>
                    <Popup className="popup">
                        Estou indo apostar no bicho
                    </Popup>
                </Marker>
                <Marker position={[initialPosition[0] - 0.000429, initialPosition[1] - 0.000553]} icon={boyIcon} zoom={15} >
                    <Popup className="popup" keepInView={false} position={initialPosition} children={"Estou indo comprar pão"} ></Popup>
                </Marker>
                <Marker position={[initialPosition[0] - 0.000743, initialPosition[1] - 0.000327]} icon={girlIcon} zoom={15}>

                </Marker>
            </Map>


        </div>

    )
}