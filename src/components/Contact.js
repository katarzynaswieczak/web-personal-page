import React from 'react';
import './Contact.css';
import './Respons.css';

const Contact = () => {
    const [header]=React.useState({subHeader: 'Kontakt' });

    return (
        <div className="contact">
            <div className="contact__container">
                <div className="container">
            <div className="common">
                <h1 className="mainHeader">{header.subHeader}</h1>
            </div>
            <div className="container">
                <div className="Napisz do mnie"></div>
                <form action="#">
                    <div className="fields">
                        <div className="field name">
                            <input type="text" placeholder="Name" required></input>
                        </div>
                        <div className="field email">
                            <input type="text" placeholder="E-mail" required></input>
                        </div>
                      
                        <div className="field subject">
                            <input type="text" placeholder="Subject" required></input>
                        </div>
                        <div className="field textarea">
                            <textarea cols="30" rows="10" placeholder="Text" required></textarea>
                        </div>
                        <div className="btn">
                            <button type="submit">Send message</button>
                        </div>
                        </div>
                       
                </form>
            </div>
            </div>
            </div>
            
        </div>
    )
}

export default Contact
