// Dependencies
import React, { useState, useEffect } from 'react';

import { Row , Image, Col  } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {Input} from 'reactstrap';
import { MDBRipple } from 'mdb-react-ui-kit';
import $ from 'jquery';
// CSS
import './Main.css'
// import styled, { keyframes } from 'styled-components'

// import scrollify from 'jquery-scrollify'
// // Images
// import mainWebDev from '../../images/mainWebDev.png'

// // Doc
// import Resume from '../../assets/Resume.docx'

// Components
import Button from '../../components/Button/Button'
import Container from '../../components/Container/Container'
import pic_1 from '../../images/pic_1.png'
import pic_2 from '../../images/pic_2.png'
import pic_3 from '../../images/pic_3.png'
import pic_4 from '../../images/pic_4.png'
import arrow_green from '../../images/Arrow 6.png'
import arrow_white from '../../images/Arrow 8.png'
import arrow_4 from '../../images/Arrow 4.png'
import pic_5 from '../../images/pic_5.png'
import rect_green from '../../images/Text_Rectangle.png'
import bg1 from '../../images/bg1.png'

export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement('script');
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}

// Main Header - Landing Container
function Main(props) {
  const adjectives = ['Interactive', 'Professional', 'Beautiful', 'Functional', 'Innovative']
  let [text, setText] = useState('Responsive')
  let i = 0
  
  document.addEventListener("DOMContentLoaded", function(event) { 
    console.log("All done");
   
    // $.scrollify({
    //     section:".panel",
    //     // easing: "easeOutExpo",
    //     // scrollbars:false,
    //     scrollSpeed: 200,
    //     // offset: 0,
    //     // standardScrollElements: "",
    //     setHeights: false,
    //     // overflowScroll: true,
    //     // updateHash: true,
    //     // touchScroll:true,
    //     before:function(i,panels) {

    //       var ref = panels[i].attr("data-section-name");

    //       $(".pagination .active").removeClass("active");

    //       $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
          
    //     },
    //     after: function(i) {
    //       // var sections = document.getElementsByTagName("section");
    //       // console.log(sections);
    //       // for(i=0; i< sections.length; i++) {
    //       //   // console.log($($(sections[i]).children('div')[0]));
    //       //   // console.log($($(sections[i]).children('div')[0]).outerHeight());
    //       //   if($(sections[i]).height()<700) {
    //       //     sections[i].style.height="700px";
    //       //   }
    //       //   console.log((sections[i].style.height));
    //       // }
          
    //     },
    //     afterResize: function() {
    //       console.log("resize");
    //     },
    //     afterRender:function() {
    //       var pagination = "<ul class=\"pagination\">";
    //       var activeClass = "";
    //       $(".panel").each(function(i) {
    //         activeClass = "";
    //         if(i===$.scrollify.currentIndex()) {
    //           activeClass = "active";
    //         }
    //         pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"span1 hover-text\">" +"</span></a></li>";
    //       });

    //       pagination += "</ul>";
    //       console.log(pagination);
    //       $(".panel0").append(pagination);
          
    //       /*

    //       Tip: The two click events below are the same:

    //       $(".pagination a").on("click",function() {
    //         $.scrollify.move($(this).attr("href"));
    //       });

    //       */
    //       $(".pagination a").on("click",$.scrollify.move);
    //     }
    //   });
  });
  let [rs, setRs] = useState(1);

  useEffect(() => {
    if(rs == 1) {
      // easyScrollDots({
      //   'fixedNav': false,
      //   'fixedNavId': '',
      //   'fixedNavUpward': false,
      //   'offset': 0
      // });
      console.log(rs);
      setRs(0);
      
    }
  });

  return (
    <Container style={{}} className='scroll-container col-12' id='main-container'>
    <section className="panel panel0 scroll-area" data-section-name="panel0" style={{'marginBottom':'150px'}}>
      <Row className='my-auto' id="H1" data-scroll-indicator-title="H1" style={{ height: '100%' ,display:'flex'}}>
        <div className="col-md-12 col-sm-12"  >
          <Image className = 'col-md-12 col-sm-12 Leaves_1'     style={{'width':'90%','marginLeft': '5%'}} src={bg1}/>
          
          {/*<label className='Image_text'>2022 Greenhouse Art</label>
          <Image className='twitter' src={twitterIcon} onMouseOver={()=>{setTwitterIcon(twitter)}} onMouseOut={()=>{setTwitterIcon(twitter_white)}}/>
          <Image className='facebook' src={facebook_icon}/>
          <Image className='instagram' src={instagram_icon}/>*/}
        </div>
        
      </Row>
    </section>
    <section className="panel panel1 scroll-area" data-section-name="panel1"  style={{'marginBottom':'150px'}}>
      <div id="panel1" >
        <Row className='main-row ' id="H2" data-scroll-indicator-title="H2">
          <Col md='12'>
          <label className='portfolio' >
            Portfolio
          </label>
          </Col>
          <Col md='12'>
          <p className='description col-sm-12 col-md-12' style={{'width':'100%'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent  
          </p>
          </Col>
        </Row>
        <Row className='main-row mb-10'>
          <Col md='3' className='content main-col container'>
            <Image src={pic_1} className="content-image" style={{'width':'-webkit-fill-available','height':'-webkit-fill-available'}}/>
            <div class="overlay">
              <div class="text">Digital</div>
            </div>
          </Col>
          <Col md='6' className='main-col container'>
            <Image src={pic_2} style={{'width':'-webkit-fill-available','height':'-webkit-fill-available'}}/>
            <div class="overlay">
              <div class="text">Illustration</div>
            </div>
          </Col>
          <Col md='3' className='main-col '>
            <Row className="container" style={{'height':'50%'}}>
              <Image src={pic_3} style={{'width':'-webkit-fill-available','height':'-webkit-fill-available','marginBottom':'12px'}}/>
              <div class="overlay">
                <div class="text">Cinemas</div>
              </div>
            </Row>
            <Row className="container" style={{'height':'50%'}}>
              <Image src={pic_4} style={{'width':'-webkit-fill-available','height':'-webkit-fill-available','marginTop':'12px'}}/>
              <div class="overlay">
                <div class="text">Others</div>
              </div>
            </Row>
          </Col>
          {/* <Row>
          <PicBlock cols={6} rowHeight={50} pics={[pic_1,pic_2,pic_3,pic_4,]} items={4} isResizable={true}/>
          </Row> */}
          <Row style={{'marginTop':'24px','width':'100%'}}>
            <div style={{'justifyContent':'flex-end','width' : '100%','display':'flex'}}>
            <Image src={arrow_green}/>
            <Link className='main-link' style={{'marginLeft':'20px'}} to='/allworks'>See All Our Works</Link>
            </div>
          </Row>
        </Row>
      </div>
    </section>
    <section className="panel panel2 scroll-area" data-section-name="panel2" style={{'marginBottom':'150px'}}>
      <div className="">
        <Row className='main-row mb-10 mini-about-parent' id="H3" data-scroll-indicator-title="H3">
          <Col md='7' className="p-0 magL3 about-card " style={{'display':'flex','alignItems':'center','marginTop': 'auto',
    'marginBottom': 'auto'}}>
            <div className="padL5 mini-about" style={{'backgroundImage': "url(" + rect_green + ")",'backgroundSize': '100% 100%','width': '120%'}}>
              <p className='padL5 padT4 m-0 about-us' >
                About Us
              </p>
              <p className='padL5 padR4 main-about' >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
              </p>
              <Link to='/about' className="mr-4" style={{'display': 'block',
      'textAlign': 'right','marginBottom': '50px'  }}>
                <Button className='btn-more-detail'>
                More Detail <Image src={arrow_white} style={{'color':'white'}}/>
                </Button>
              </Link>
            </div>
            
          </Col>
          <Col md='5'>
            <Row style={{ 'width':'120%'}}>
            <Image src={pic_5} style={{'width':'-webkit-fill-available'}}/>
            </Row>
          </Col>
        </Row>
      </div>
    </section>
    <section  className="panel panel3 scroll-area" id="H4" data-scroll-indicator-title="H4"  data-section-name="panel3" style={{'height':'760px'}}>
      <div>
        <Row className='main-row mt-4' >
          <Col md='9'>
            <label className='portfolio' >Sign up for updates</label>      
          </Col>  
          <Col md='3'>
            <Row style={{'height':'50%','alignItems':'center'}}>
              <label className='contact'>
                +1478 213 0197
              </label>
            </Row>
            <Row style={{'height':'50%','alignItems':'center'}}>
              <label className='contact'>
                info@artwebsitetest.com
              </label>
            </Row>
          </Col>
          
        </Row>
        <Row className='main-row mt-4'>
          <Col md='6'>
            <label className='contact-label'>
            First Name
            </label>
            <Input className='main-input' id='firstName'/>
          </Col>
          <Col md='6'>
            <label className='contact-label'>
            Last Name
            </label>
            <Input className='main-input' id='lastName'/>
          </Col>
        </Row>
        <Row className='main-row mt-4'>
          <Col md='12'>
            <label className='contact-label'>
            EMail
            </label>
            <Input className='main-input' id='email'/>
          </Col>
        </Row>
        <Row className='main-row mt-4'>
          <Col md='6'>
            <Button className='btn-send'>
              Send{'\t\t'}   
              <Image src={arrow_4}/>
            </Button>
          </Col>
          <Col md='6' className='col-right'>
            <Image src={arrow_green} className='main-arrow'/>
            <Link className='link-contact' to='/contact'>
              Go to Contact
            </Link>
          </Col>
        </Row>
      </div>
    </section>
    { AddLibrary("jquery.scrollify.js") }

    </Container >
    
  );
}

export default Main;