import "./App.css";
import RoutesComponent from "./routes";
import { Box } from "@mui/system";

function App() {
  return (
    <Box>
      <Box py={3} bgcolor="black" color="white" textAlign={'center'}>Header</Box>
      <Box>
        <RoutesComponent />
      </Box>
      <Box py={3} bgcolor="black" color="white" textAlign={'center'}>Fotter</Box>
    </Box>
  );
}

export default App;
