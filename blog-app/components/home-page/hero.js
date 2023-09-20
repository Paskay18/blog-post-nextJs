import classes from './hero.module.css';
import Image from 'next/image'


export default function Hero (){
    return (<section className={classes.hero}>
        <div className={classes.image}>
            <Image 
            src="/images/site/photo.png" 
            alt="image showing Paskay" 
            width={300} 
            height={300}/>
        </div>
        <h1> Hi, i'm Mmapaseka</h1>
        <p>
            I vlog about anything and everything
        </p>
    </section>)
}
