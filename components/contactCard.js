import {useEffect, useRef} from 'react';
import {Loader} from '@googlemaps/js-api-loader';
import styles from '../styles/Home.module.css'

export default function ContactCard ({ profile }) {
    const googlemap = useRef(null);
    useEffect(() => {
        const loader = new Loader({
        apiKey: 'AIzaSyADRDjHELJNapZtHCl2HBMjcZ6Id1eIHYc',
        version: 'weekly',
        });
        let map;
        loader.load().then(() => {
        const google = window.google;
        map = new google.maps.Map(googlemap.current, {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8,
        });
        });
    });

    return(
    <div className={styles.ContactCard}>
        <div className={styles.ContactInfo}>
            <h2>{profile.businessName}</h2>
            <p>{profile.ownerName}</p>
            <p>{profile.phoneNumber}</p>
            <p>{profile.emailAddress}</p>
            <p>{profile.address}</p>
        </div>
        
        <div id={styles.map} ref={googlemap} />
        
    </div>
    )
  }