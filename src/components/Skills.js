import React from 'react';
import './Skills.css';
import './Respons.css';


const Skills = () => {
    const [header]=React.useState({subHeader: 'Umiejętności' });
    return (
        <div className="skills">
            <div className="skills__container">
            <div className="container">
            <div className="common">
                <h1 className="mainHeader">{header.subHeader}</h1>
            </div>
            <div className="row">
                <div className="col-6 left">
                <div className= "skills__info">
                    <h1>Techniczne</h1>
                    <div className="bars">
                        <div className="info">
                            <span>LOGO! Software </span>
                            <span>80%</span>
                        </div>
                        <div className="line logosoftware"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>AutoCAD </span>
                            <span>70%</span>
                        </div>
                        <div className="line autocad"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>CX-Programmer</span>
                            <span>80%</span>
                        </div>
                        <div className="line cx"></div>

                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>TIA Portal </span>
                            <span>40%</span>
                        </div>
                        <div className="line tia"></div>

                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>WinCC </span>
                            <span>40%</span>
                        </div>
                        <div className="line wincc"></div>

                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>GX Works 2 </span>
                            <span>80%</span>
                        </div>
                        <div className="line gx"></div>

                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>RobotStudio </span>
                            <span>20%</span>
                        </div>
                        <div className="line rs"></div>

                    </div>
                    </div>
                </div>
                <div className="col-6 right">
                <div className= "skills__info">
                <h1>Programistyczne</h1>
                </div>
                    <div className="bars">
                        <div className="info">
                            <span>HTML </span>
                            <span>50%</span>
                        </div>
                        <div className="line html"></div>

                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>CSS </span>
                            <span>50%</span>
                        </div>
                        <div className="line css"></div>

                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>JavaScript </span>
                            <span>20%</span>
                        </div>
                        <div className="line js"></div>

                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>React </span>
                            <span>20%</span>
                        </div>
                        <div className="line react"></div>

                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Bootstrap </span>
                            <span>10%</span>
                        </div>
                        <div className="line boot"></div>

                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>C++ </span>
                            <span>50%</span>
                        </div>
                        <div className="line cpp"></div>

                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Matlab </span>
                            <span>40%</span>
                        </div>
                        <div className="line mat"></div>

                    </div>
            </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Skills
