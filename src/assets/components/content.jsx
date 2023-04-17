import card1 from "../img/carrd1.png"
import card2 from "../img/carrd2.png"
import card3 from "../img/carrd3.png"
import taskoption from "../img/task-option.png"
import chat from "../img/chat.png"
import link from "../img/link.png"
import progresslist from "../img/progress-list.png"
import profile_stack from "../img/profile-stack.png"
import slider from "../img/sliderr.png"
import inprogress from "../img/Inprogress.png"
import done from "../img/Done.png"


const Content = () => {
    return(
        <>
            <div className="main-tasks">
                <section className="to-do">
                    <div className="counter">
                        <p>To Do</p>
                        <span>3</span>
                    </div>
                    <div>
                        <div className="single-task">
                            <div className="main-image">
                                <img src={card1} alt="" />
                            </div>
                            <div className="heading">
                                <div>
                                    <h2>Highfidelity Design</h2>
                                    <p>Make clear design and color</p>
                                </div>
                                <img src={taskoption} alt="" />
                            </div>
                            <div className="about">
                                <div className="progress">
                                    <div>
                                        <img src={progresslist} alt="" />
                                        <span>Progress</span>
                                    </div>
                                    <p>2/10</p>
                                </div>
                                <div className="slider"><img src={slider} alt="" /></div>
                                <div className="links">
                                    <div>
                                        <img src={chat} alt="" /><span>7</span>
                                        <img src={link} alt="" /><span>2</span>
                                    </div>
                                    <div>
                                        <img src={profile_stack} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-task">
                            <div className="heading">
                                <div>
                                    <h2>Usability testing</h2>
                                    <p>Make clear design and color</p>
                                </div>
                                <img src={taskoption} alt="" />
                            </div>
                            <div className="about">
                                <div className="progress">
                                    <div>
                                        <img src={progresslist} alt="" />
                                        <span>Progress</span>
                                    </div>
                                    <p>2/10</p>
                                </div>
                                <div className="slider"><img src={slider} alt="" /></div>
                                <div className="links">
                                    <div>
                                        <img src={chat} alt="" /><span>7</span>
                                        <img src={link} alt="" /><span>2</span>
                                    </div>
                                    <div>
                                        <img src={profile_stack} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="inprogress">
                    <div className="counter">
                        <p>Inprogress</p>
                        <span>1</span>
                    </div>
                    <div>
                        <div className="single-task">
                            <div className="main-image">
                                <img src={card2} alt="" />
                            </div>
                            <div className="heading">
                                <div>
                                    <h2>Highfidelity Design</h2>
                                    <p>Make clear design and color</p>
                                </div>
                                <img src={taskoption} alt="" />
                            </div>
                            <div className="about">
                                <div className="progress">
                                    <div>
                                        <img src={progresslist} alt="" />
                                        <span>Progress</span>
                                    </div>
                                    <p>2/10</p>
                                </div>
                                <div className="slider"><img src={inprogress} alt="" /></div>
                                <div className="links">
                                    <div>
                                        <img src={chat} alt="" /><span>7</span>
                                        <img src={link} alt="" /><span>2</span>
                                    </div>
                                    <div>
                                        <img src={profile_stack} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="to-do">
                    <div className="counter">
                        <p>Completed</p>
                        <span>2</span>
                    </div>
                    <div>
                    <div className="single-task">
                            <div className="heading">
                                <div>
                                    <h2>Usability testing</h2>
                                    <p>Make clear design and color</p>
                                </div>
                                <img src={taskoption} alt="" />
                            </div>
                            <div className="about">
                                <div className="progress">
                                    <div>
                                        <img src={progresslist} alt="" />
                                        <span>Progress</span>
                                    </div>
                                    <p>2/10</p>
                                </div>
                                <div className="slider"><img src={done} alt="" /></div>
                                <div className="links">
                                    <div>
                                        <img src={chat} alt="" /><span>7</span>
                                        <img src={link} alt="" /><span>2</span>
                                    </div>
                                    <div>
                                        <img src={profile_stack} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="single-task">
                            <div className="main-image">
                                <img src={card3} alt="" />
                            </div>
                            <div className="heading">
                                <div>
                                    <h2>Highfidelity Design</h2>
                                    <p>Make clear design and color</p>
                                </div>
                                <img src={taskoption} alt="" />
                            </div>
                            <div className="about">
                                <div className="progress">
                                    <div>
                                        <img src={progresslist} alt="" />
                                        <span>Progress</span>
                                    </div>
                                    <p>2/10</p>
                                </div>
                                <div className="slider"><img src={done} alt="" /></div>
                                <div className="links">
                                    <div>
                                        <img src={chat} alt="" /><span>7</span>
                                        <img src={link} alt="" /><span>2</span>
                                    </div>
                                    <div>
                                        <img src={profile_stack} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}


export default Content