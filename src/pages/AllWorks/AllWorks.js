import React,{ useState, useEffect } from 'react';
import {Button} from 'reactstrap';
import Container from '../../components/Container/Container';
import Leaves from '../../images/Leaves_3.png';
import { Row , Image, Col  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './AllWorks.css';
// import PicBlock from '../../components/RGL/RGL';
// import pic_1 from '../../images/pic_1.png';
// import pic_2 from '../../images/pic_2.png';
// import pic_3 from '../../images/pic_3.png';
// import pic_4 from '../../images/pic_4.png';
import axios from 'axios';
// import Grid from '../../components/ImageGrid/Grid';
import useWindowSize from "../../components/WindowSize/UseWindowSize";

function AllWorks() {
  useEffect(() => {
    onLoad();
  }, []);
  let windowSize = useWindowSize();
  const [images,setImages] = useState([]);
  const [imgCounts,setImgCounts] = useState(0);
  const [imgData,setImgData] = useState([]);
  const [loadable , setLoadable] = useState(true);
  const onLoad = () =>{
    axios.get('http://localhost:4000/images/', )
      .then(res => {
        // res.data = [{"_id":"6399693c1cf46e21f0a4e2fc","name":"user_picsmaple.png","file":"65baecff-5453-42b2-ba22-ec535413d30e-1670998332002.png","__v":0},{"_id":"639969571cf46e21f0a4e2ff","name":"abstract-php-c-analytics.jpg","file":"9dbf6c3d-ffb5-4dd7-93e6-8da3e6646861-1670998359605.jpg","__v":0},{"_id":"639969701cf46e21f0a4e301","name":"2hjc9n8hifpf121uhjzw.jpg","file":"fdb0f520-2722-4b05-b864-053dd2a46ec3-1670998384206.jpg","__v":0},{"_id":"639969831cf46e21f0a4e303","name":"employee-directory.jpg","file":"ac0a77b7-f157-4f09-8103-8eef2b9f5a62-1670998403158.jpg","__v":0},{"_id":"6399698d1cf46e21f0a4e305","name":"pic_1.png","file":"97af6435-8ab3-44c5-88c1-881264188201-1670998413748.png","__v":0},{"_id":"639969941cf46e21f0a4e307","name":"pic_2.png","file":"4f824183-0157-4f33-9d44-c849acf2d0dc-1670998420548.png","__v":0},{"_id":"6399699b1cf46e21f0a4e309","name":"pic_3.png","file":"6c40ca5b-a320-4a58-9281-f07923c185bf-1670998427576.png","__v":0}];
        let img_data = res.data;
        setImgData(img_data);
        let img_path = 'http://localhost:4000/images/';
        let j = -1;
        // let visible_cnts = img_data.length <= 5 ? img_data.length : 5;
        console.log(img_data);
        setImgCounts(img_data.count);
        const imgCounts1 = img_data.length;
        console.log(imgCounts1);
        let generatedImages = Array(imgCounts1)
        .fill(1)
        .map(() => {
          const height = Math.floor(Math.random() * (600 - 300) + 300);
          const width = Math.floor(Math.random() * (700 - 200) + 200);
          // const width = Math.floor(Math.random() * (700 - 200) + 200);
          j ++;
          return {
            src: img_path + img_data[j]['file'],
            // width: width,
            width: width/2,
            height: height/2,
            text: img_data[j]['text'],
            title: img_data[j]['title'],
            hashtag: img_data[j]['hashtag'],
          };
        });
        console.log(generatedImages);
        setImages(generatedImages);
        // setImgCounts(visible_cnts);
      })
      .catch(err => {
        console.log(err);
      });
    }

    const showMore = () => {
      if(imgCounts < imgData.length)
      { 
        setImgCounts(imgCounts + 5 > imgData.length ? imgData.length : imgCounts + 5 );
        onLoad();
      }
      if(imgCounts == imgData.length)
        setLoadable(false);
    }
    // let windowSize = useWindowSize();
    // let generatedImages = Array(12)
    //   .fill(1)
    //   .map(() => {
    //     const height = Math.floor(Math.random() * (600 - 300) + 300);
    //     const width = Math.floor(Math.random() * (700 - 200) + 200);
    //     return {
    //       src: pic_1,
    //       width: width * 10,
    //       height: height * 10
    //     };
    //   });
    //   console.log(pic_2);
  
  
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
      
          <Row className='aw-row'>
            <Col md='2' style={{'zIndex':'100'}}>
            {/* <Link to='/store'>
              <Button className='btn-green' style={{'width':'174px','marginLeft':'0px'}}>
                Upload New
              </Button>
            </Link> */}
            </Col>
            <div className="res_width col-md-10" style={{'display':'flex','justifyContent':'flex-end','zIndex':'10'}}>
              <Row style={{'marginRight': '0px','marginLeft': '0px'}}>
                <div className="res_child_width" >
                  <Button className='btn-green'>All</Button>
                </div>
                <div className="res_child_width">
                  <Button className='btn-trans'>Illustration</Button>
                </div>
                <div className="res_child_width">
                  <Button className='btn-trans'>Canvas</Button>
                </div>
                <div className="res_child_width">
                  <Button className='btn-trans'>personal</Button>
                </div>
                <div className="res_child_width">
                  <Button className='btn-trans'>Series</Button>
                </div>
              
              </Row>
              
              
              
            </div>
          </Row>
          
          <Image className = 'leaves' src={Leaves}/>
          <div className='aw-subrow masonry-container' >

              {/* <PicBlock cols={6} rowHeight={50} pics={[pic_1,pic_2,pic_3,pic_4,pic_1,pic_2,pic_3,pic_4,pic_1,pic_2,pic_3,pic_4,]} items={5} isResizable={true}/> */}
              
              
                {images.map((item, index) => (
                  
                  
                    <div className="container content masonry-item">
                    <a href="#" target="_blank">
                      {/* <div className="content-overlay"></div> */}
                      <Image src={images[index].src} className="content-image" />
                      {/* <div className="content-details fadeIn-bottom">
                        <h3 className="content-title">This is a title</h3>
                        <p className="content-text">This is a short description</p>
                      </div> */}
                      <div className="overlay">
                        <div className="text">{images[index].title}</div>
                      </div>
                    </a>
                    </div>
                  
                  
                ))}
              
          </div>
          <Row className='aw-subrow' style={{'marginTop':'83px','justifyContent':'center'}}>
            <Button className='btn-load' onClick={showMore} disabled={!loadable}>
              Load More
            </Button>
            
          </Row>
          <Row className='aw-subrow' style={{'float':'right','font-size':'25px'}}>
            <Link to='/store'>
                Admin
              
            </Link>
          </Row>
    </Container>
  );
}

export default AllWorks;