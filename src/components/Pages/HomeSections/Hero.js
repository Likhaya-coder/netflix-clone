import classes from './Hero.module.css';
import Button from '../../Utils/Button';
import { Fragment } from 'react';

const Hero = () => {
    return ( 
        <Fragment>
            <div className={classes.overlay}/>
            <section className={classes.hero}/>
            <div className={classes.content}>
                <h1>Save data. Download easily to watch offline.</h1>
                <h3>Plans starting from R49/month. Cancel anytime.</h3>
                <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
                <div className={classes.signup}>
                    <input type="text" name="" placeholder="Email address" id="" />
                    <Button>Get Started</Button>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Hero;