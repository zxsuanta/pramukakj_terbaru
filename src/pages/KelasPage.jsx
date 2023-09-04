import { Container} from "react-bootstrap";
import Picture from "../assets/img/poster/sejarahBP.jpeg";
import {kelas} from "../data/index";

const KelasPage = () => {
  return (
  <div className="profil">
    <Container style={{width: '75%'}}>
    <div style={{height: '120px'}}>

    </div>
      <div className="row mx-auto">
        <div className="col">
          <div style={{width:'100%', height: '320vh'}}>
            <div>
            <h3 className="fw-bold">Kepanduan Dunia</h3>
              <img style={{height: '25rem'}} className="shadow bg-body-tertiary" src={Picture} alt="Sejarah Baden Powell" />
              </div>
            <div>
            {kelas.map((link) => {
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
        <div className="col" style={{marginTop: '15px'}}>
            <div className="card fw-bold" style={{width: '22rem', position: 'fixed'}}>
                  <ul className="data list-group list-group-flush" style={{listStyleType: 'none'}}>
                    <li className="border-bottom mx-auto mt-3" style={{width: '89%'}}>
                        <a href="#" style={{borderBottom: '2px solid purple'}}>Profil</a> 
                    </li>
                      <li className="border-bottom mx-auto mt-3" style={{width: '89%'}}>
                        <a href="#">Sejarah </a>
                      </li>
                      <li style={{fontSize: '12px'}}>  
                        <ul className="border-bottom mx-auto mt-3" style={{width: '89%'}}>
                          <a href="#"> Kepanduan Dunia </a>
                        </ul>
                        <ul className="border-bottom mx-auto mt-3" style={{width: '89%'}}>
                          <a href="#"> Kepanduan Indonesia </a>
                        </ul>
                        <ul className="border-bottom mx-auto mt-3" style={{width: '89%'}}>
                          <a href="#"> Gerakan pramuka </a>
                        </ul>
                        <ul className="border-bottom mx-auto mt-3" style={{width: '89%'}}>
                          <a href="#"> Sejarah Kepemimpinan </a>
                        </ul>
                      </li>
                      <li className="border-bottom mx-auto mt-3" style={{width: '89%'}}>
                          <a href="#"> Lambang </a>
                      </li>
                      <li className="border-bottom mx-auto mt-3" style={{width: '89%'}}>
                         <a href="#"> Hypmne Dan Mars </a>
                      </li>
                      <li className="border-bottom mx-auto mt-3" style={{width: '89%'}}>
                         <a href="#"> UU Gerakan Pramuka </a>
                      </li>
                      <li className="border-bottom mx-auto mt-3" style={{width: '89%'}}>
                        <a href="#"> Kwarnas 2018-2023 </a>
                      </li>
                      <li style={{fontSize: '12px'}}>  
                        <ul className="border-bottom mx-auto mt-3" style={{width: '89%'}}>
                          <a href="#"> Visi, Misi  dan Tujuan </a>
                        </ul>
                        <ul className="border-bottom mx-auto mt-3" style={{width: '89%'}}>
                          <a href="#"> Arah Kebijakan </a>
                        </ul>
                        <ul className="border-bottom mx-auto mt-3" style={{width: '89%'}}>
                          <a href="#"> Rencana Strategis </a>
                        </ul>
                        <ul className="border-bottom mx-auto mt-3" style={{width: '89%'}}>
                          <a href="#"> Dasa Karya </a>
                        </ul>
                      </li>
                      <li className="mx-auto mt-3" style={{width: '89%'}}>
                        <a href="#"> Data Anggota </a>
                      </li>
                    </ul> 
                </div>
        </div>
      </div> 
    </Container>
  </div>
  );
}

export default KelasPage;