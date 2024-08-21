import React from 'react';
import * as styles from './styles.module.css';

function Gallery() {
    return(
        <section className={styles.gallery}>
            <div className={styles.gallery_intro}>
                <h1>
                    Your day at the gallery
                </h1>
                <p>
                    Wander through our distinct collections 
                    and find new insights about our artists. 
                    Dive into the details of their creative process.
                </p>
            </div>
            <img className={styles.gallery_image}/>
            <img className={styles.gallery_image}/>
            <img className={styles.gallery_image}/>
            <div className={styles.gallery_blackBox}>
                <div>
                    <strong>
                        come & be inspired
                    </strong>
                    <p>
                        We’re excited to welcome 
                        you to our gallery and see 
                        how our collections influence you.
                    </p>                    
                </div>

            </div>
        </section>
    )
}

export default Gallery;