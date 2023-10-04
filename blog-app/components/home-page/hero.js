import React from 'react';
import classes from './hero.module.css';
import Image from 'next/image';


function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
      <Image 
      src='/images/site/mmapaseka.png'
      alt='An image showing Mmapaseka' 
      width={300} 
      height={300}/>
      </div>
      <h1>Hi, I'm Mmapaseka</h1>
      <p>
        I blog about life in general.
      </p>
    </section>
  )
}

export default Hero
