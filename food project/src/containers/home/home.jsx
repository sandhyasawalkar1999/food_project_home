import style from './home.module.css'
import HomeCards from '../../componets/homeCard/homeCards';
function Home(){

    return(
        <>
        <div className={style.mainContainer}>
        <div className={style.homeContainer}>
        <h1 className={style.titleOne}>Let us find your</h1>
        <h1 className={style.titleTwo}>Forever Food.</h1>
        <br />
        <p className={style.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.<br/> Nesciunt illo tenetur fuga ducimus numquam ea!
        </p>
        <br/>
        <div>
            <button className={style.btn}>Search Now</button>
            <button className={style.btn2}>Know More</button>
        </div>
        </div>
        </div>
        <div className={style.imageContainer}>
        <div> 
            <img className={style.image}  src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="food"/>
        </div>
        <div className={style.textContainer}>
            <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.Get in Touch
        
            </p>
            <button className={style.btn3}>Get In Touch</button>
        </div>
        </div>
        <HomeCards />
        <HomeCards />
        </>
    )
};

export default Home;