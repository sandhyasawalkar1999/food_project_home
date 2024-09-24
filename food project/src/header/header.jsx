import style from './header.module.css'
function Header(){
    return(
        <>
        <div className ={style.headerContainer}>
            <div className={style.one}>
                    
                    <img src="https://flowbite.com/docs/images/logo.svg" ></img>

                     <a href="./home.jsx">GeekFoods</a>
            </div>
            <div className={style.middleContainer}>
                <a href="./home.jsx" >Home</a>
                <a href="#">Quote</a>
                <a href="#">Resturants</a>
                <a href="#">Foods</a>
                <a href="#">Contact</a>
            </div>
            <div>
                <button className={style.btn}>
                    Get Started
                </button>            
            </div>
        </div>
        
        </>
    )
};

export default Header;
