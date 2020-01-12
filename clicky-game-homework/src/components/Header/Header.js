import React from 'react'; 
import "./Header.css"; 

const Header = () => (
    <div className="Jumbotron Jumbotron-fuild">
        <div className="container text-center">
            <h1 className="jumbotronHeaderText">Clicky Game!</h1>
            <p className="jumbotronSmallText">Click on any image to earn points... Just don't click on the same image twice!</p>
        </div>
    </div>
); 

export default Header; 