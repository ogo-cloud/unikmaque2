import React from "react";
import {LocateIcon, PhoneCall} from "lucide-react";
import {Link} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";


const CallOrder:React.FC =() => {
return (
<section id={"call_order"}>
  <div>
      <div className={"box"}>
          <h2>How to Order?</h2>
          <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Eos fuga sequi qui atque nihil qui voluptatem quis est saepe incidunt. Ad cupiditate enim et pariatur fuga eum voluptas architecto
              et corrupti sunt? Aut saepe galisum ut aspernatur alias ut dolorem ipsam vel maxime recusandae
              et veniam odio qui quas voluptatem. Sed veniam veniam et voluptatem odio qui impedit molestiae.
          </p>
      </div>
      <div>
          <address className={"box"}>
              <div>
                  <PhoneCall absoluteStrokeWidth/> {""}
                  <Link to={"tel:9288910108"}>+234 (928) 8910108</Link>
              </div>
              <div>
                  <FontAwesomeIcon icon={faWhatsapp}/> {""}
                  <Link to={"https:/wa.me/9288910108"}>+33 (928) 8910108</Link>
              </div>
              <div>
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31713.98300589562!2d7.535556400000001!3d6.490265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a574284f6abf%3A0x7a9f6aad7915760f!2sSt.%20Mary%20Catholic%20Church%20Umuchigbo!5e0!3m2!1sen!2sng!4v1748971884531!5m2!1sen!2sng"
                      width="600"
                      height="450"
                      style={{border: 0}}
                      allowFullScreen loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
              </div>

          </address>
      </div>
  </div>
</section>
);

}
export default CallOrder;