import React from "react";
import "./InfoContainer.css";
import PersonIcon from '@material-ui/icons/Person';
import ClassIcon from '@material-ui/icons/Class';
import DateRangeIcon from '@material-ui/icons/DateRange';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import StarIcon from '@material-ui/icons/Star';
import RateReviewIcon from '@material-ui/icons/RateReview';
import dateFormat from 'dateformat';

function InfoContainer({ book, setShowInfos }) {
  
  return (
      <div className="info-container">
           <div className="align-title">
               <h2 className="Book-title">{book.title}</h2> 
               <button onClick={()=> setShowInfos(-1)} className="Closing-button">Close</button>
           </div>

            <hr className="hr"/>
            <br/>
            <h2 className="info"><PersonIcon/> Author: {book.author}</h2>
            <h2 className="info"><ClassIcon/> Category: {book.category}</h2>
            <h2 className="info"><DateRangeIcon/> Date: {dateFormat(book.date, "dd-mm-yyyy")}</h2> {/* date of publish */}
            <h2 className="info"><MenuBookIcon/> Pages:{book.pages}</h2>
            <h2 className="info"><StarIcon/> Rating:{book.ratings}</h2>
            <br/>
            <h2 className="info"><RateReviewIcon/> Review: <br/> {book.review} </h2>
      </div>
  );
}

export default InfoContainer;
