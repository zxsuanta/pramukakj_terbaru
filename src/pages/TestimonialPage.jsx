import { Container} from "react-bootstrap";
import Picture from "../assets/img/poster/kwarnas.jpeg";
import {testimonial} from "../data/index";

const SyartaPage = () => {
  return (
  <div className="profil">
    <Container style={{width: '75%'}}>
      <div style={{height: '120px'}}>

      </div>
      <div className="row mx-auto">
        <div className="col">
          <div style={{width:'100%', height: '370vh'}}>
            <div>
               <h3 className="fw-bold">Majelis Pembimbing</h3>
              <img style={{height: '25rem'}} className="shadow bg-body-tertiary" src={Picture} alt="Sejarah Baden Powell" />              
            </div>
            <div>
            {testimonial.map((link) => {
                  return (
                      <div className="mt-4" key={link.id}>
                          <label to={link.path}  className={({ isActive, isPending }) =>
                          isPending ? "pending" : isActive ? "active" : ""
                        } end>{link.label}</label>
                      </div>
                  );
                })}          
            </div>
          </div>
        </div>
        <div className="col">
          <div>
            <div className="card fw-bold" style={{width: '22rem', position: 'fixed'}}>
              <ul className="data list-group list-group-flush" style={{listStyleType: 'none', position: 'sticky', top: '0'}}>
                <li className="border-bottom mx-auto mt-3" style={{width: '89%'}}>
                    <a href="#" style={{borderBottom: '2px solid purple'}}>Organisasi</a> 
                </li>
                  <li className="border-bottom mx-auto mt-3" style={{width: '89%'}}>
                    <a href="#">Majelis Pembimbing </a>
                  </li>
                  <li className="border-bottom mx-auto mt-3" style={{width: '89%'}}>
                      <a href="#"> Pimpinan </a>
                  </li>
                  <li className="border-bottom mx-auto mt-3" style={{width: '89%'}}>
                     <a href="#"> Komisi dan Andalan </a>
                  </li>
                  <li className="border-bottom mx-auto mt-3" style={{width: '89%'}}>
                     <a href="#"> Dewan Kerja </a>
                  </li>
                  <li className="border-bottom mx-auto mt-3" style={{width: '89%'}}>
                    <a href="#"> Kelengkapan Kwartir </a>
                  </li>
                  <li className="mx-auto mt-3 mb-3" style={{width: '89%'}}>
                    <a href="#"> Staf Kwartir </a>
                  </li>
                </ul> 
            </div>
          </div>
        </div>
      </div> 
    </Container>
  </div>
  );
}

export default SyartaPage;