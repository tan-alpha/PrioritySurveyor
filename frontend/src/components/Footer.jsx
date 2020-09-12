import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";



const FooterPage = () => {
  return (
    <MDBFooter color="black" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            
            <MDBRow>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>

            </MDBRow> 
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!"><i class="fab fa-facebook"></i></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><i class="fab fa-twitter"></i></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><i class="fab fa-google"></i></a>
              </li>
              <li className="list-unstyled">
                <a href="#!"><i class="fab fa-behance"></i></a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> Waterworks.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;