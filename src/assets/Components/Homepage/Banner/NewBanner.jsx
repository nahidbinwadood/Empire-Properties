import { Slider } from './Slider';
import slides from './img.json';

const NewBanner = () => {
    return (
        <div>
            <Slider slides={slides}/>
        </div>
    );
};

export default NewBanner;