import { Button, Container, Row, Col } from 'react-bootstrap';
import '../../App.css';
function Content() {
    return (
        <div className='middle'>
            <div className='inner'>
            <span>High Quality, High Performance</span>
            <Row > 
                <Col xs={12} md={6} className='banner d-flex flex-column align-items-center align-items-md-end'>
                    <div>
                        <img src='./img/main1.png' className='img0101' style={{ right: "30px", bottom: "10px" }} alt='main1' />
                    </div>
                </Col>
                <Col xs={12} md={6} className='order-2 order-md-1 d-flex flex-column justify-content-start align-items-center align-items-md-start '>
                    <div>
                        <div >
                        <img src='./img/main2.png' className='img0101' style={{ right: "10px", bottom: "10px" }} alt='main2' />
                        </div>
                        
                        <div className='py-4'>
                        <img src='./img/main3.png' className='img0101' style={{ right: "10px", bottom: "10px" }} alt='main3' />
                        </div>
                    </div>
                    <div>
                    </div>
                </Col>
            </Row>
        </div>
        </div>
    )
}

export default Content;