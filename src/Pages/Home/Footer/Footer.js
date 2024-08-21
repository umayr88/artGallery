import React from 'react';
import icons from './icons';
import * as styles from './styles.module.css';

function Footer() {
    return(
        <footer className={styles.footer}>
            <section className={styles.footer_content}>
                <img className={styles.footer_logo} src={icons['logo']}/>
                <p className={styles.footer_message}>
                    The Modern Art Gallery is free to all 
                    visitors and open seven days a week from 
                    8am to 9pm. Find us at 99 King Street, 
                    Newport, USA.
                </p>
                <ul className={styles.footer_social}>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer;