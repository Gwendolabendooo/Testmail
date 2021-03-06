import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

class header extends React.Component {

    scrollHeader() {
        window.scrollTo({top : window.innerHeight});
    }

    
    render() {
        return (
            <header id="Head"> 
                <h1 class="ml5 head">
                    <span class="text-wrapper">
                        <span class="line line1">
                        </span>
                        <span class="letters letters-left">
                            Gwendal Le Floch
                        </span>
                        <br/>
                        <span class="letters letters-right">
                            Etudiant en informatique
                        </span>
                        <span class="line line2">
                        </span>
                    </span>
                </h1>
                <div className="descript">
                    <FontAwesomeIcon className="quote" icon={faQuoteRight} />
                    Étudiant en première année d'IUT informatique, étant curieux impliqué et autonome je recherche des projets à réaliser.
                </div>
                <div className="back-back">
                    <div className="back-arrow" onClick={this.scrollHeader}>
                        <FontAwesomeIcon className="arrow" icon={faAngleDown} />
                    </div>
                </div>
            </header>
        )  
    }
}
export default header;