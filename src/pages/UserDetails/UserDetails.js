// Dependencies
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Row , Image  } from 'react-bootstrap'
// Libs
import { onError } from "../../libs/errorLib";
import {Button} from 'reactstrap';
// Components
import Container from '../../components/Container/Container';
import LoaderButton from "../../components/LoaderButton/LoaderButton";
import arrow_white from '../../images/Arrow 4.png';
// CSS
import './UserDetails.css';
import white_panel from '../../images/white_panel.png';
import smaple_pic from '../../images/user_picsmaple.png';
import leaves_detail from '../../images/Leaves_detail.png';
import aboutme from '../../images/aboutme.JPG';

function UserDetails(props) {
  const [isLoading, setIsLoading] = useState(false);

  const [fields, setFields] = useState({
    name: "",
    email: "",
    textarea: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      await axios({
        method: "POST",
        url: "/api/sendMail",
        data: fields
      }).then((response) => {
        if (response.data.status === 'success') {
          alert("Message Sent.");
          setIsLoading(false)
          setFields({
            name: "",
            email: "",
            textarea: ""
          })
        } else if (response.data.status === 'fail') {
          alert("Message failed to send.")
          setIsLoading(false);
        }
      })
    } catch (e) {
      onError(e);
    }
  }
  useEffect(() => {
    let elements = document.getElementsByClassName("scroll-indicator-controller");
    if(elements.length>0) {
       elements[0].parentNode.removeChild(elements[0]);
    }
    
  });
  return (
    // <Row className='main-row mt-10 mini-about-parent res-show' style={{'backgroundImage': "url(" + aboutme + ")",'backgroundSize': 'contain','backgroundRepeat': 'no-repeat','width': '100%', 'height':'500px'}}>
    //   <div className="col-md-7" style={{'marginTop' : '87px','marginBottom':'87px','width':'65%'}}>
    //     <label className='detail-title'>
    //       Ellison  Marshall
    //     </label>
    //     <label className='detail-text'>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
    //     </label>
    //   </div>
    // </Row>

     <Row style={{'justifyContent':'center','top':'15%','position':'relative','padding': '0 10%','margin': '10%'}}>
      <Row>
        <div className="col-lg-7 col-md-12" style={{'backgroundImage': "url(" + white_panel + ")",'backgroundSize': 'cover','backgroundRepeat': 'no-repeat','marginTop' : '87px','marginBottom':'87px','paddingRight': '5%',    'height': '500px',    'paddingTop': '5%'}}>
          <label className='detail-title'>
            Ellison  Marshall
          </label>
          <label className='detail-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
          </label>
        </div>
        <div className="col-md-12 col-lg-5">
          <Row>
            <Image src={smaple_pic} className='img_user'/>
            <Image src={leaves_detail} className='detail-leaves'/>
          </Row>
          
        </div>
        
      </Row>
        
      
    </Row>
  );
}

export default UserDetails;