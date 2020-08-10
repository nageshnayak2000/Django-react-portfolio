import React from "react";

const ContactComponent = () => {
    return (
        <div id="contacts">
            <h4>Contact</h4>
            <form action="#">
                <div className="form-group">
                    <input type="text" className="form-control" id="formGroupExampleInput"
                           placeholder="Name" />
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" id="formGroupExampleInput2"
                           placeholder="Email" />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="formGroupExampleInput2"
                           placeholder="Subject" />
                </div>
                <div className="form-group">
                    <input type="textarea" className="form-control" id="formGroupExampleInput2"
                           placeholder="Comment" />
                </div>
                <button className="btn btn-lg btn-outline-dark">Send</button>
            </form>
            <div>

            </div>
        </div>
);
}

export default ContactComponent;