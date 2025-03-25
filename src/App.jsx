import "./App.css";
import { ProfilePage } from "./pages/profilePage";
import { Navbar } from "./component/ui/navbar";
import { GridBg } from "./component/ui/grid-bg";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <RecoilRoot>
      <GridBg>
        <Navbar />
        <ProfilePage />
      </GridBg>
    </RecoilRoot>
  );
}

export default App;
