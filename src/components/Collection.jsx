import styled from "styled-components";
import { mobile } from "../responsive";
import japonais from '../images/japonais';
import france from '../images/france.png';
import americain from '../images/americain';
import basic from '../images/basic.jpg';
import PlaceIcon from '@mui/icons-material/Place';
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
flex-direction: column;
align-items: center;
`;


const ImgContainer = styled.div`
`;

const Image = styled.img`
height: auto;
width: 20%;
`;

const Desc = styled.div`
  font-size: 30px;
  color: black;
  margin-top: 2.5em;
  margin-bottom: 1.5em;
`;

const Maps = () => {
  return (
        <Container>
        <Desc id="collection">Nos collections</Desc>
        <Wrapper>
             <center>
              <ImgContainer>
               <Link to={`/products/japon`}>
                 <Image src={japonais}/>
                </Link>
                <Link to={`/products/usa`}>
                 <Image src={americain}/>
                </Link>
                <Link to={`/products/france`}>
                 <Image src={japonais}/>
                </Link>
               </ImgContainer>
              </center>
        </Wrapper>
      </Container>
  );
};

export default Maps;