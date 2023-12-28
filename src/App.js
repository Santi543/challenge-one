import { Box } from '@mui/material';
import './App.css';
import Landing from './components/Landing';
import photo from './imgs/bg-cafe.jpg';
import styled from '@emotion/styled';

const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2000;
    width: 100%;
    height: 300px;
`

const Container = styled(Box)`
  display: flex;
  align-self: center;
  justify-content: center;
`

function App() {
  return (
    <div className="App">
      <BackgroundImage src={photo} />
      <Container>
        <Landing />
      </Container>

    </div>
  );
}

export default App;
