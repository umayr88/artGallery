import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styles from './styles.module.css';

function Map() {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    }

    return(
        <section className={styles.map}>
            <button className={styles.map_button} onClick={handleNavigate}>
                back to home
            </button>
        </section>
    )
}

export default Map;