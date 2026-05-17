
import {Link} from "react-router";
import {DateTime} from "luxon";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowRight} from "@fortawesome/free-solid-svg-icons";
import wave  from "~/img/payments/download (3).png";
import visa  from "~/img/payments/visajpeg.jpeg";
import mastercard  from "~/img/payments/mastercard best.png";
import verve  from "~/img/payments/verve 5.png";
import {faFacebook, faInstagram, faThreads} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import {m} from "motion/react";


export default function Footer(){
    const MotionLink   = m.create(Link);
    return(
        <footer>
        <div className={"footer"}>
            <div className={"footer_contents"}>

                {/*Logo Section*/}
                <div className={"brand"}>
                    <Link to={"/"}><b>Unik</b>
                        <span className={"text-pink-500"}>Maque2</span></Link>

                    <div className={"foot"}>
                        <MotionLink whileHover={{scale: 1.05}} initial={{scale: 1}} to={"#"}>
                            <FontAwesomeIcon icon={faFacebook} size={"lg"}/></MotionLink>
                        <MotionLink whileHover={{scale: 1.05}} initial={{scale: 1}} to={"#"}>
                            <FontAwesomeIcon icon={faInstagram} size={"lg"}/></MotionLink>
                        <MotionLink whileHover={{scale: 1.05}} initial={{scale: 1}} to={"#"}>
                            <FontAwesomeIcon icon={faThreads} size={"lg"}/></MotionLink>

                    </div>
                </div>

                {/*Links*/}
                <nav>

                    <Link to={"#"}>About us</Link>
                    <Link to={"#"}>Contact</Link>
                    <Link to={"mailto:support@uniKmaque2.com"}>Support</Link>
                    <Link to={"#"}>Testimonies</Link>
                </nav>


                {/*Subscription Sections*/}
                <div className={"subscription"}>
                    <form>
                        <label htmlFor={"sub"}>Engage with us</label>
                        <div>
                            <input type={"email"} name={"email"} id={"sub"} placeholder={"name@email.com"}/>
                            <button> <span className={"hidden md:inline"}>Subscribe</span><FontAwesomeIcon icon={faLongArrowRight}/></button>
                        </div>
                    </form>

                    <div className={"pay"}>
                        <h3>Payment options:</h3>
                        <div className={"pay_img"}>
                        <Link to={"#"}><img className={"w-24 h-auto"} src={wave} alt={"flutter logo"}/></Link>
                            <Link to={"#"}><img className={"w-16 h-auto"} src={visa} alt={"visa logo"}/></Link>
                            <Link to={"#"}><img className={"w-12 h-auto"} src={mastercard} alt={"mastercard logo"}/></Link>
                            <Link to={"#"}><img className={"w-12 h-auto"} src={verve} alt={"verve logo"}/></Link>
                        </div>
                    </div>
                </div>
            </div>

          <p className={"copyright"}><small>uniqueMaque &copy;{DateTime.now().year}. All right is reserved</small></p>
        </div>
    </footer>
    );
}