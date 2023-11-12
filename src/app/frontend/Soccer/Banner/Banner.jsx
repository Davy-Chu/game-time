import './Banner.css';
import BannerTitle from './BannerTitle/BannerTitle';
import LiveGames from './LiveGames/LiveGames';
export default function Banner() {
    return(
        <div className = "banner">
            <div className="banner-title">
                <BannerTitle></BannerTitle>
            </div>
            <div className="live-games">
                <LiveGames></LiveGames>
            </div>
        </div>
    )
}