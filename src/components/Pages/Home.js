import { Fragment } from 'react';
import Header from '../Layout/Header';
import Button from '../Utils/Button';
import Hero from './HomeSections/Hero';
import Awareness from './HomeSections/Awareness';

const Home = () => {
    return (
        <Fragment>
            <Header/>
            <Hero/>
            <Awareness/>
        </Fragment>
     );
}
 
export default Home;