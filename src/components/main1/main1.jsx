import './main1.css';
import video1 from '../../assets/edit2024.mp4';
import image1 from '../../assets/p1.jpg';
import image2 from '../../assets/12.png';
import image3 from '../../assets/11.jpeg';

const Main1 = ({ playStatus, heroCount }) => {

    if (playStatus) {
        return (
            <video className='background' autoPlay loop muted>
                <source src={video1} type='video/mp4' />
            </video>
        );
    } else if (heroCount === 0) {
        return <img src={image1} className='background' alt='Background' />;
    } else if (heroCount === 1) {
        return <img src={image2} className='background' alt='Background' />;
    } else if (heroCount === 2) {
        return <img src={image3} className='background' alt='Background' />;
    }
    return null;
};

export default Main1;
