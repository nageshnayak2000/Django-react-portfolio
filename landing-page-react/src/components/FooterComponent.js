import React from "react";

const FooterComponent = () => {
    return (
        <footer id="about" className="site-footer">
            <div className="row" style={{textAlign: "center"}}>
                <div className="col-sm-12 col-md-6">
                    <h6>About</h6>
                    <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Consequatur cupiditate in nemo sunt suscipit! Inventore maiores omnis placeat quaerat
                        similique? Animi cumque deserunt explicabo ipsum maxime molestiae nam recusandae totam?</p>
                </div>

                <div className="col-xs-6 col-md-3">
                    <h6>My Expertise</h6>
                    <ul className="footer-links">
                        <li><a href="#">Pyhton</a></li>
                        <li><a href="#">Django</a></li>
                        <li><a href="#">React</a></li>
                        <li><a href="#">Java</a></li>
                        <li><a href="#">REST</a></li>
                        <li><a href="#">React Native</a></li>
                    </ul>
                </div>

                <div className="col-xs-6 col-md-3">
                    <h6>Quick Links</h6>
                    <ul className="footer-links">
                        <li><a href="#">About Me</a></li>
                        <li><a href="#">Contact Me</a></li>
                        <li><a href="#">Contributions</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default FooterComponent;