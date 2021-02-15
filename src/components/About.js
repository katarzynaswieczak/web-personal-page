import React from 'react';
import { FaGlassMartiniAlt } from 'react-icons/fa';
import './About.css';
import './Respons.css';


const About = () => {
    const [header]=React.useState({subHeader: 'O mnie' });
    const [state] =React.useState([{id:1, title: 'Name', text: 'Katarzyna Świeczak'},
    {id:2, title: 'E-mail', text: 'katarzynaswieczak.97@gmail.com'}]);
    const [state2] =React.useState([
    {id:1, title: 'Nr telefonu', text: '500 805 508'},
    {id:2, title: 'Linkedin', text: 'http://linkedin.com/in/katarzyna-swieczak'}]);

    return (
        <div className="about">
            <div className="container">
            <div className="common">
                <h1 className="mainHeader">{header.subHeader}</h1>
            </div>
            <div className="row h-650 alignCenter">
                <div className="col-6">
                    <div className="about__img">
                        <img src="/images/k.png" alt="k" />
                    </div>

                </div>
                <div className="col-6">
                <div className= "about__info">
                    <h1>Hej!</h1>
                    <div className="about__info-p1">
                    Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. 
                    </div>
                    <div className="about__info-p2">
                    Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus.
                    </div>
                <div className="info__contacts">
                     <div className="row">
                         {state.map(info => (
                            <div className="col-6">
                            <strong>{info.title}</strong>
                            <p>{info.text}</p>
                            </div>
                         ))}
                    
                         </div>
                         <div className="row">
                         {state2.map(info => (
                            <div className="col-6">
                            <strong>{info.title}</strong>
                            <p>{info.text}</p>
                            </div>
                         ))}
                         </div>
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default About
