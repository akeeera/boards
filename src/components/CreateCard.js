/* eslint-disable jsx-a11y/anchor-is-valid */

import '../styles/Boards.css';
import React from 'react';

function CreateCard() {
    return (
        <div className="create-card-wrapper">
            <div className="create-card">
                <div className="create-card__image">
                    <label for="openclose" id="create-card__button">
                        <div className="create-card__image-title">
                            <h5>CREATE</h5>
                        </div>
                    </label>
                </div>
                <div className="create-card__description">
                    <h5> CREATE NEW BOARD</h5>
                </div>
            </div>
        </div>
    );
}

export default CreateCard;

// import '../styles/Boards.css';
// import React from 'react';

// function CreateCard(props) {
//     return (
//         <div>
//             <div className="property-card">
//                 <a href="#okno">
//                     <div className="property-image">
//                         <label for="openclose" id="button">
//                             <div className="property-image-title">
//                                 <h5>CREATE</h5>
//                             </div>
//                         </label>
//                     </div></a>
//                 <div className="property-description">
//                     <h5> CREATE NEW BOARD</h5>
//                     <p></p>
//                 </div>
//                 <a href="#">
//                 </a>
//             </div>
//         </div>
//     );
// }

// export default CreateCard;