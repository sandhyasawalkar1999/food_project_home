import style from './footer.module.css'
function Footer(){

    return(
        <>
       
        <div className ={style.container}>
        <div className={style.logo}> 
        <i class="fa-solid fa-burger"></i>
        <span>logoipsum</span>
        </div>
        <br />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
            <div >
                <br />
                <ul className={style.links}>
                    <li>
                        <a href="#"> About Us</a>
                    </li>
                    <li>
                        <a href="#">Careers</a>
                    </li>
                    <li>
                        <a href="#">History</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                </ul>
            </div>
            <br />
            <div >
                <ul className={style.links}>
                    <li>
                        <a href="#"> 
                        <i class="fa-brands fa-facebook"></i>
                        </a>
                        
                        
                    </li>
                    <li>
                        <a href="#">
                        <i class="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#"> 
                        <i class="fa-brands fa-twitter"></i>
                        </a>
                        
                        
                    </li>
                    <li>
                        <a href="#">
                        <i class="fa-brands fa-github"></i>
                         </a>
                    </li>
                    <li>
                        <a href="#">
                        <i class="fa-brands fa-dribbble"></i>
                        </a>


                    </li>
                    
                </ul>
            </div>
        </div>
        </>
    )
};

export default Footer;