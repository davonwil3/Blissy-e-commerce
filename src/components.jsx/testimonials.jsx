import React, { useState } from "react";
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Testimonial(props){










return(

<div className={"flex-container test " +props.class}>

<FontAwesomeIcon icon={faQuoteLeft} size="2x" className="quote-icon"/>

<div className=" flex-container test-content">

<p className="test-text">{props.text} <br/> <em className="test-author"> - {props.author}</em></p>

</div>


</div>








)








}



export default Testimonial;
