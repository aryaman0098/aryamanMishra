import React from 'react'
import "./Footer.css"


function Footer() {
    return (
        <div className = "footer">
            <footer>
                <div className="footer_icons">
                    <a className = "footer_link" class="footer-link"  href="mailto:aryamanmishra90@gmail.com">
                        <i class="fas fa-envelope-square footer_icon"></i>
                    </a>    
                    <a className = "footer_link" class="footer-link"  href="https://github.com/aryaman0098" target = "_blank">
                        <i className ="fab fa-github footer_icon"></i>
                    </a>
                    <a className = "footer_link" class="footer-link"  href="https://www.linkedin.com/in/aryaman-mishra-a3360a16b/" target = "_blank">
                        <i className ="fab fa-linkedin footer_icon"></i>
                    </a>
                    <a className = "footer_link" class="footer-link"  href="https://www.instagram.com/aryaman_mishra_98/" target = "_blank">
                        <i className="fab fa-instagram footer_icon"></i>
                    </a>
                    <a className = "footer_link" class="footer-link"  href="https://www.facebook.com/aryaman.mishra.944/" target = "_blank">
                        <i className="fab fa-facebook footer_icon"></i>
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default Footer
