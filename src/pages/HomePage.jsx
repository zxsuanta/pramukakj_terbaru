  import { Container, Row, Col } from "react-bootstrap";
  import ft1Image from "../assets/img/poster/ft1.png";
  import ft12Image from "../assets/img/poster/ft2.png";
  import icons from "../assets/icons/gp1.png";
  import benner from "../assets/img/poster/screen.png";
  import icons1 from "../assets/icons/swap.png";

  const HomePage = () => {
    return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="10">
              <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="src/assets/img/poster/cs1.png" class="d-block w-100" alt=""/>
                  </div>
                  <div class="carousel-item">
                    <img src="src/assets/img/poster/cs2.png" class="d-block w-100" alt=""/>
                  </div>
                  <div class="carousel-item">
                    <img src="src/assets/img/poster/cs3.png" class="d-block w-100" alt=""/>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
              <h3 style={{marginTop: '-30px'}} className="text-center fw-bold">SATYAKU KUDARMAKAN, DARMAKU KUBAKTIKAN</h3>
            </Col>
          </Row>
          <Row>
            <Col>
                <Col className="text-center mb-5">
                  <img className="shadow bg-body-tertiary" src={ft1Image}/>
                </Col>
                <Col className="text-center mb-5">
                  <a href="#">
                    <img className="shadow bg-body-tertiary" src={ft12Image}/>
                  </a>
                </Col>
                <Col className="content mx-auto">
                  <div className="d-flex align-items-center mt-4 justify-content-center gap-3">
                      <img style={{width: '25px'}} src={icons} />
                      <h4 className="my-auto">Arah Kebijakan Gerakan Pramuka Tahun 2014-2045 selengkapnya bisa dibaca</h4>
                      <a href="#">di sini</a>
                  </div>
                </Col>
                
                <Col className="benner text-center mt-5">
                  <img className="shadow bg-body-tertiary" src={benner}/>
                </Col>
                <Col className="end mx-auto mt-5">
                <img src={icons1} />
                  <div className="teks-info d-flex align-items-center justify-content-center gap-2"> 
                    <span>
                      Publikasi dalam website ini meliputi Siaran Pers, Sambutan Ketua Kwarnas pada Kegiatan, dan Surat Edaran, selengkapnya bisa dilihat
                    </span>
                    <a href="#">di sini</a>

                  </div>
                </Col>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    );
  }

  export default HomePage