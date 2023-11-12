import './Landing.css';
import Banner from '../Banner/Banner';
import NavBar from '../NavBar/NavBar';
import Leagues from '../Leagues/Leagues';
export default function Landing() {

    return(
        <div className = "landing">
            <NavBar></NavBar>
            <Banner></Banner>
            <Leagues></Leagues>
        </div>
    )
}