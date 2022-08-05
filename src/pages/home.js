import React from 'react';
import './styles.css';

function Home() {
    return (
        <>
            <div class="colophon">
                <a href="http://twitter.com/@mrcthms" class="colophon__link">
                    <img src="assets/images/twitter.svg" width="64" alt="An icon for Twitter" class="colophon__image" />
                    <span class="colophon__text">Twitter</span>
                </a>
                <a href="http://instagram.com/mrcthms" class="colophon__link">
                    <img src="assets/images/instagram.svg" width="64" alt="An icon for Instagram" class="colophon__image" />
                    <span class="colophon__text">Instagram</span>
                </a>
                <a href="https://github.com/rabayarabu" class="colophon__link">
                    <img src="assets/images/github.svg" width="64" alt="An icon for Github" class="colophon__image" />
                    <span class="colophon__text">Github</span>
                </a>
                <a href="mailto:hello@mrcthms.com?subject=MRCTHMS%20Website%20Enquiry&body=Let%27s%20talk%20about%20Marc%2C%20baby." className="button">
                        <span className="button__inner">
                            <img src="assets/images/contact.svg" width="64" className="button__image" alt="" />
                            <span className="button__text">Get in touch</span>
                        </span>
                </a>
                
                
            </div>
                 
               
            

        </>

    )
}

export default Home