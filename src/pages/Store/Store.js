import React,{ useState, useEffect } from 'react';
import {Button} from 'reactstrap';
import Container from '../../components/Container/Container'
import Leaves from '../../images/Leaves_3.png'
import { Row , Image, Col  } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import {Input} from 'reactstrap';
import { FileUploader } from "react-drag-drop-files"
import './Store.css'
import uploadImage from '../../images/Vector (1).png'
import axios from 'axios';
import PasswordModal from '../../components/PasswordModal/PasswordModal';
import { useHistory } from 'react-router-dom';
function Store() {
  const [continueable , setContinueable] = useState(false);
  const fileTypes = ["JPG", "PNG", "GIF"];
  const [pic,setPic] = useState(null);
  const [fileName,setFileName] = useState('');
  const [modalShow, setModalShow] = useState(window.localStorage.getItem('on') != 'on' ? true :false);
  const [accessRight , setAccessRight] = useState(false);
  const [password,setPassword] = useState();
  useEffect(() => {
    let passwordCheck = window.localStorage.getItem('on');
    if(passwordCheck != 'on')
    {
      console.log(modalShow);
      setModalShow(true);
    }
  });
  let history = useHistory();
  const fileIns = () => {
    return (
      
      <>
        <Row className='about-row'>
          <div className='fileuploader'>
            <Image src={uploadImage} style={{'paddingTop':'147.13px'}}/>
            {pic == null ? (
            <label style={{'font-family': 'Poppins','font-style': 'normal','font-weight': '400','font-size': '20px','line-height': '30px','color': '#042801','paddingTop':'13px'}}>Drag and drop an image, or 
              <span style={{'color':'red'}}>Browse</span>
            </label>):
            (<label style={{'font-family': 'Poppins','font-style': 'normal','font-weight': '400','font-size': '20px','line-height': '30px','color': '#042801','paddingTop':'13px'}}>{fileName}</label>)
            }
          </div>
        </Row>
      </>
    );
  }

  const changePic = (file) => {
    setContinueable(true);
    setPic(file);
    setFileName(file.name);
    console.log(file);
  }

  const cancel = () => {
    setContinueable(false);
    setPic(null);
    setFileName('');
  }

  const uploadPic = () => {
    const formData = new FormData();
    formData.append('pic',pic);
    formData.append('filename' , pic.name);
    formData.append('title' , document.getElementById("title").value);
    formData.append('hashtag' , document.getElementById("hashtag").value);
    formData.append('text' , document.getElementById("text").value);
    // console.log(document.getElementById("title").value);
    // console.log(document.getElementById("hashtag").value);
    // console.log(document.getElementById("text").value);
    axios.post('http://localhost:4000/images/upload', formData)
    .then(res => {
      if(res.data == 'success')
      {
        alert('Succesfully uploaded.');
        setPic(null);
        setContinueable(false);
        setFileName('');
      }
      else
      {
        alert('Failed to upload. Please check server connection.');
      }
    })
    .catch(err => {
      console.log(err);
    });
  }

  const checkPassword = () => {
    console.log(password);
    if(password == 'vipulandellison2023'){
      setModalShow(false);
      window.localStorage.setItem('on','on');
    }
    else
    {
      alert('Password Incorrect');
      window.localStorage.setItem('on','off');
      history.push('/');
    }
      
  }

  return (
    // <div className="features-container col-12" id='features-container'>
    //   <div className='features-wrapper'>
    //     <div className='row'>
    //       <h1 className='display-3 text-center col-12'>Features</h1>
    //     </div>
    //     <div className='row' style={{ margin: '0 auto', width: '90%' }}>
    //       {/* {featured.map((item, i) => (
    //         <FeaturedCard
    //           {...featured}
    //           key={i}
    //           src={item.src}
    //           alt={item.alt}
    //           id={item.id}
    //           text={item.text}
    //           title={item.title}
    //           className={item.className}
    //         />
    //       ))} */}
    //     </div>
    //   </div>
    // </div>
    <Container className='main-container container-fluid col-12' id='main-container'>
      <Row className='my-auto' style={{}}>
          <div className="col-md-3" style={{'width':'25%'}}>
            <Image className = '' style={{'width':'100%'}} src={Leaves}/>
          </div>
          <div className="col-md-9 col-12">
            <Row>
              <Button className='btn-cancel col-md-2 col-12' onClick={cancel}>Cancel</Button>
              <Button className='btn-draft col-md-3 col-12'>Set as draft</Button>
              <Button className='btn-continue col-md-2 col-12' disabled={!continueable} onClick={uploadPic}>Continue</Button>
            </Row>
            <Row className="res_margin" style={{'marginTop':'10%','textAlign':'center','width':'90%'}}>
              <Row  className='about-row'>
                <label className='about-title'>
                  What are you working on?
                </label>
              </Row>
              <Row  className='about-row'>
                <label className='about-desc'>
                  Upload your design. This will also be used as the thumbnail in feeds.
                </label>
                <Row className='mt-4'>
                  <Col md='4'>
                    <Input className='main-input' id='title' placeholder='Title'/>
                  </Col>
                  <Col md='4'>
                    <Input className='main-input' id='hashtag' placeholder='Hashtag'/>
                  </Col>
                  <Col md='4'>
                    <Input className='main-input' id='text' placeholder='text'/>
                  </Col>
                </Row>
              </Row>
              <div className='about-row res_margin mt-4'>
                <FileUploader stylle={{'margin':'0px'}}  name='file' types={fileTypes} children={fileIns()} handleChange={(file)=>changePic(file)} fileOrFiles={pic}  />              
              </div>
            </Row>
          </div>
      </Row>
      <PasswordModal show={modalShow} title="Check Password" text="Insert Password"  checkpassword={checkPassword} getpassword={setPassword} password={password}/>
    </Container>
  );
}

export default Store;