import { Row, Col, Container } from 'react-bootstrap';
function Footer() {
    return (
        <div className='a-footer'>
        <div className='b-footer'>
        <div className='tfooter py-5'>
            <div  > 
                <Row xs={12} >
                    <Col   >
                        <div >
                            <ul >
                                <li className='px-3'><a href="#!">고객문의</a></li>
                                <li className='px-3'><a href="#!">명품보증서등록</a></li>
                                <li className='px-3'><a href="#!">타이어찾기</a></li>
                                <li className='px-3'><a href="#!">판매점 찾기</a></li>
                                <li className='px-3'><a href="#!">넥스트레벨</a></li>
                                <li className='px-3'><a href="#!">이용약관</a></li>
                                <li className='px-3'><a href="#!" style={{ fontWeight: "bold" }}>개인정보처리방침</a></li>
                            </ul >
                        </div>
                    </Col>
                </Row>
            </div>
            <Row>
                <div >
                    <Col className='footer'>
                        <ul >
                            <li className='px-3'>사업자등록번호621-81-10769</li>
                            <li className='px-3'>대표번호 055-370-5114</li>
                            <li className='px-3'><a href="">이메일 문의하기</a></li><br />
                            <li className='px-3'>렌탈 서비스 1855 0100</li>
                            <li className='px-3'>고객만족센터 15772781</li>
                            <li className='px-3'>
                                서비스센터(서울:0266717003,부산051 929 0042)
                            </li>
                        </ul>
                    </Col>
                </div>
            </Row>
            
        </div>
        </div>
        </div>
    )
}
export default Footer;