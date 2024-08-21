import React from 'react';
import icons from './icons'
import { useNavigate } from 'react-router-dom';
import * as styles from './styles.module.css';
import useMediaQuery from '~/Hooks/useMediaQuery';

function Header() {
    const navigate = useNavigate();
    const [tablet] = useMediaQuery('(max-width: 800px)');
    const [mobile] = useMediaQuery('(max-width: 650px)');

    const handleNavigate = () => {
        navigate('/Location');
    }

    return(
        <header className={styles.header}>
            {!mobile && <div className={styles.header_hero}>
                
                <>
                    <div className={styles.header_blackbox}>
                        <img className={styles.header_lightLogo} src={icons['lightLogo']}/>     
                    </div>
                    <div className={styles.header_imageContainer}>
                        <img className={styles.header_darkLogo} src={icons['darkLogo']}/>   
                        <img className={styles.header_image}/>
                    </div>
                </>     
            </div>}
                {mobile && 
                    <img className={styles.header_image}/>
                    }                 
            <div className={styles.header_content}>
                 {tablet &&
                    <img className={styles.header_title} src={icons['darkLogo']}/>
                 }
                <p>
                    The arts in the collection of the 
                    Modern Art Gallery all started from 
                    a spark of inspiration. Will these 
                    pieces inspire you? Visit us and 
                    find out.
                </p>
                <button className={styles.header_button} onClick={handleNavigate}>
                    our location
                    <div className={styles.header_arrow}/>
                </button>
            </div>
        </header>
    )
}

export default Header;