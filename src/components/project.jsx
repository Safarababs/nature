import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";






function Project(){
    return (
        <section className="project" id="project">

            <h1 className="heading"> <i class="fas fa-quote-left"></i> our projects <i class="fas fa-quote-right"></i> </h1>

            <div class="box-container">

            <div className="box">
                <img src={img1} alt="" />
                <div className="icons">
                    <a style={{"--i": 1}} href="#" className="fas fa-heart"></a>
                    <a style={{"--i": 1}} href="#" className="fas fa-share"></a>
                    <a style={{"--i": 1}} href="#" className="fas fa-comment"></a>
                </div>
            </div>

            <div className="box">
                <img src={img2} alt="" />
                <div className="icons">
                    <a style={{"--i": 1}} href="#" className="fas fa-heart"></a>
                    <a style={{"--i": 1}} href="#" className="fas fa-share"></a>
                    <a style={{"--i": 1}} href="#" className="fas fa-comment"></a>
                </div>
            </div>

            <div className="box">
                <img src={img3} alt="" />
                <div className="icons">
                    <a style={{"--i": 1}} href="#" className="fas fa-heart"></a>
                    <a style={{"--i": 1}} href="#" className="fas fa-share"></a>
                    <a style={{"--i": 1}} href="#" className="fas fa-comment"></a>
                </div>
            </div>

            <div className="box">
                <img src={img4} alt="" />
                <div className="icons">
                    <a style={{"--i": 1}} href="#" className="fas fa-heart"></a>
                    <a style={{"--i": 1}} href="#" className="fas fa-share"></a>
                    <a style={{"--i": 1}} href="#" className="fas fa-comment"></a>
                </div>
            </div>

            <div className="box">
                <img src={img5} alt="" />
                <div className="icons">
                    <a style={{"--i": 1}} href="#" className="fas fa-heart"></a>
                    <a style={{"--i": 1}} href="#" className="fas fa-share"></a>
                    <a style={{"--i": 1}} href="#" className="fas fa-comment"></a>
                </div>
            </div>

            <div className="box">
                <img src={img6} alt="" />
                <div className="icons">
                    <a style={{"--i": 1}} href="#" className="fas fa-heart"></a>
                    <a style={{"--i": 1}} href="#" className="fas fa-share"></a>
                    <a style={{"--i": 1}} href="#" className="fas fa-comment"></a>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Project;