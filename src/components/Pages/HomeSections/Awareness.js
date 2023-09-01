import classes from './Awareness.module.css';

const Awareness = () => {
    return ( 
        <section className={classes.awareness}>
            <div>
                <h1>Enjoy on your TV</h1>
                <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
            </div>
            <div className={classes['background-image']}></div>
        </section>
     );
}
 
export default Awareness;