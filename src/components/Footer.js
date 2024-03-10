import "./FooterStyle.css"

const Footer =()=>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                   <h1>Trip</h1> 
                   <p>Choose your favourite destination.</p>
                </div>
                <div>
                   <a href="/">
                    <i className="fa-brands fa-facebook-square"> </i>
                    </a> 
                    <a href="/">
                    <i className="fa-brands fa-instagram-square"> </i>
                    </a> 
                    <a href="/">
                    <i className="fa-brands fa-whatsapp-square"> </i>
                    </a> 
                    <a href="/">
                    <i className="fa-brands fa-twitter-square"> </i>
                    </a> 

                </div>
            </div>
            <div className="bottom">
<div> 
    <h4>Project</h4>
    <a href="/">Changelog</a>
    <a href="/">Status</a>
    <a href="/">Lisence</a>
    <a href="/">All Version</a>
</div>
<div> 
    <h4>Comminity</h4>
    <a href="/">Github</a>
    <a href="/">Issue</a>
    <a href="/">Project</a>
    <a href="/">Twitter</a>
</div>
<div> 
    <h4>Help</h4>
    <a href="/">Support</a>
    <a href="/">Troubleshooting</a>
    <a href="/">Conatct us </a>
   
</div>

<div> 
    <h4>Project</h4>
    <a href="/">Terms of Service</a>
    <a href="/">Privacy policy</a>
    <a href="/">Lisence</a>
    
</div>


            </div>
        </div>
    )
}

export default Footer;