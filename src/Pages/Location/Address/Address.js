import React from 'react';
import * as styles from './styles.module.css';

//i need to implement the responsiveness for tablet
function Address() {
    return(
        <section className={styles.container}>
            <div className={styles.content}>
                <h1>
                    Our Location 
                </h1>
                <strong>99 king street</strong>
                <address>    
                    Newport <br/>
                    RI 02840<br/>
                    United States of America
                </address>
                <p>
                    Our newly opened gallery is 
                    located near the Edward King 
                    House on 99 King Street, the 
                    Modern Art Gallery is free to 
                    all visitors and open seven 
                    days a week from 8am to 9pm.
                </p>
            </div>
        </section>
    )
}

export default Address;