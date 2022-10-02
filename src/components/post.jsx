import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";



function Post() {
    return (
        <section className="post" id="post">

            <h1 className="heading"> <i className="fas fa-quote-left"></i> our recent posts <i className="fas fa-quote-right"></i> </h1>

            <div className="box-container">

                <div className="box">
                    <img src={img4} alt="" />
                    <div className="content">
                        <span> <i className="fas fa-calendar"></i> jan 2, 2021 </span>
                        <h3>post title goes here</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veritatis nostrum voluptates cumque deserunt incidunt, minus mollitia rem molestiae ad.</p>
                        <a href="#"><button className="btn">read more</button></a>
                    </div>
                </div>

                <div className="box">
                    <img src={img5} alt="" />
                    <div className="content">
                        <span> <i className="fas fa-calendar"></i> jan 3, 2021 </span>
                        <h3>post title goes here</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veritatis nostrum voluptates cumque deserunt incidunt, minus mollitia rem molestiae ad.</p>
                        <a href="#"><button className="btn">read more</button></a>
                    </div>
                </div>

                <div className="box">
                    <img src={img6} alt="" />
                    <div className="content">
                        <span> <i className="fas fa-calendar"></i> jan 8, 2021 </span>
                        <h3>post title goes here</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veritatis nostrum voluptates cumque deserunt incidunt, minus mollitia rem molestiae ad.</p>
                        <a href="#"><button className="btn">read more</button></a>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Post;