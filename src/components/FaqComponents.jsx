import { Container} from "react-bootstrap";
import icons from "../assets/icons/wifi.png";
import card2 from "../assets/img/poster/poster3.jpg";
import card3 from "../assets/img/poster/poster1.jpg";
import card1 from "../assets/img/poster/poster2.jpg"

const FaqComponents = () => {
  return (
      <div className="homepage">
        <header className="w-100 min-vh-100 d-flex align-items-center">
            <Container className="header-box d-flex align-items-center" style={{width: '73%'}}>
              <div className="row">
                <div className="col">

                     <div style={{marginTop: '100px'}}>
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
                    </div>



                  <div class="row mt-5">
                    <div class="col-3">
                      <div className="card border-0 rounded-1" style={{width: '17rem'}}>
                        <img src={card1} className="card-img-top" alt="LT-V" />
                        <div className="card-body">
                          <label className="card-text fw-bold" style={{fontSize: '16px'}}>
                          Surat Edaran V LT-V Tahun 2023
                          </label>
                          <a href="#" style={{fontSize: '11px'}} className="text-decoration-none text-secondary"><i class="bi bi-clock"></i> 16 MAY 2023</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-3">
                     <div className="card border-0" style={{width: '17rem'}}>
                        <img src={card2} className="card-img-top" alt="LT-V" />
                        <div className="card-body">
                          <label className="card-text fw-bold" style={{fontSize: '14.5px'}}>
                          Surat Edaran Karya Bakti Pramuka pada Idul Fitri Tahun 2023
                          </label>
                          <a href="#" style={{fontSize: '11px'}} className="text-decoration-none text-secondary"><i class="bi bi-clock"></i> 15 MAR 2023</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-3">
                      <div className="card border-0" style={{width: '17rem'}}>
                        <img src={card3} className="card-img-top" alt="LT-V" />
                        <div className="card-body">
                          <label className="card-text fw-bold" style={{fontSize: '14.5px'}}>
                          Surat Edaran I Pertinas SBH ke-6 Tahun 2023
                          </label>
                          <a href="#" style={{fontSize: '11px'}} className="text-decoration-none text-secondary"><i class="bi bi-clock"></i> 14 MAR 2023</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-3">
                      <div className="card border-0" style={{width: '17rem'}}>
                        <img src={card3} className="card-img-top" alt="LT-V" />
                        <div className="card-body">
                          <label className="card-text fw-bold" style={{fontSize: '14.5px'}}>
                          Edaran Visitor Jambore Dunia ke-25 di Korea Selatan
                          </label>
                          <a href="#" style={{fontSize: '11px'}} className="text-decoration-none text-secondary"><i class="bi bi-clock"></i> 10 MAR 2023</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                  <div class="col-3">
                      <div className="card border-0" style={{width: '17rem'}}>
                        <img src={card3} className="card-img-top" alt="LT-V" />
                        <div className="card-body">
                          <label className="card-text fw-bold" style={{fontSize: '14.5px'}}>
                          Surat Edaran 4 Raimuna Nasional XII Tahun 2023
                          </label>
                          <a href="#" style={{fontSize: '11px'}} className="text-decoration-none text-secondary"><i class="bi bi-clock"></i> 09 FEB 2023</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-3">
                      <div className="card border-0" style={{width: '17rem'}}>
                        <img src={card3} className="card-img-top" alt="LT-V" />
                        <div className="card-body">
                          <label className="card-text fw-bold" style={{fontSize: '14.5px'}}>
                          Sambutan Ka Kwarnas pada Penutupan Sidparnas 2023
                          </label>
                          <a href="#" style={{fontSize: '11px'}} className="text-decoration-none text-secondary"><i class="bi bi-clock"></i> 08 FEB 2023</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-3">
                      <div className="card border-0" style={{width: '17rem'}}>
                        <img src={card3} className="card-img-top" alt="LT-V" />
                        <div className="card-body">
                          <label className="card-text fw-bold" style={{fontSize: '14.5px'}}>
                            Sambutan Ka Kwarnas pada Pembukaan Sidparnas 2023
                          </label>
                          <a href="#" style={{fontSize: '11px'}} className="text-decoration-none text-secondary"><i class="bi bi-clock"></i> 07 FEB MAR 2023</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-3">
                      <div className="card border-0" style={{width: '17rem'}}>
                        <img src={card3} className="card-img-top" alt="LT-V" />
                        <div className="card-body">
                          <label className="card-text fw-bold" style={{fontSize: '14.5px'}}>
                            Surat Edaran Penggalangan Bumbung Kemanusiaan Bencana Alam Banjir Bandang Manado
                          </label>
                          <a href="#" style={{fontSize: '11px'}} className="text-decoration-none text-secondary"><i class="bi bi-clock"></i> 01 FEB 2023</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-6">
                      <hr style={{width: '104%'}}/>
                    </div>
                    <div className="col-1 text-center">
                      <di className="row">
                        <div className="col">
                          <div className="card">
                            <a href="#">
                              <i class="bi bi-chevron-left"></i>
                            </a>
                          </div>
                        </div>
                        <div className="col">
                          <div className="card">
                            <a href="#">
                            <i class="bi bi-chevron-right"></i>  
                            </a>  
                          </div>
                        </div>
                      </di>
                    </div>
                    <div className="col-5" style={{marginLeft: '-23px'}}>
                      <hr style={{width: '106%'}}/>
                    </div>
                  </div>

                  <div className="row gap-2 mt-4 mb-5" style={{border: '2px solid #b37eec', borderRadius: '6px'}}>
                    <div className="col-1 d-flex align-items-center" style={{backgroundColor: '#b37eec', height: '100px', width: '5%'}}>
                      <img src={icons} alt="jaringan" style={{width: '90%'}} />
                    </div>
                    <div className="col d-flex align-items-center" style={{height: '100px'}}>
                      <label style={{color: '#663996'}}>
                      <b>#SetiapPramukaAdalahPewarta </b> merupakan salah satu slogan Gerakan Pramuka yang mengajak seluruh anggota Pramuka untuk bisa<br></br>
                       berpartisipasi dalam mencari, mengolah, membuat, dan menyebarluaskan informasi terkait pramuka.  Laman khusus yang berisi Warta Gerakan 
                       Pramuka bisa diakses di <a className="text-decoration-none" style={{color: '#663996'}} href=""><b>PRAMUKA.ID</b></a> 
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
        </header>
      </div>
    );
}

export default FaqComponents