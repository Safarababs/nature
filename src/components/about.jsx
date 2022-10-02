import img from "./images/nature.jpg";



function About(){
    return (
        <section className="about" id="about">
            <h1 className="heading"><i className="fas fa-quote-left"></i> about us <i className="fas fa-quote-right"></i></h1>

            <div className="row">
                <div className="image">
                    <img src={img} alt="" />
                </div>

                <div className="content">
                    <h3>together we can save planet</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus molestias corporis inventore soluta odio vero, dolor itaque illo eos. Velit, sequi libero animi debitis provident odit perferendis maxime repudiandae illo.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere omnis fugit corporis dignissimos saepe! Accusamus accusantium enim laudantium voluptatem ab?</p>
                    <a href="#"><button class="btn">learn more</button></a>
                </div>
            </div>

            <div className="box-container">
                <div className="box">
                    <i className="fas fa-users"></i>
                    <h3>1000+</h3>
                    <p>volunteers</p>
                </div>

                <div className="box">
                    <i className="fas fa-tree"></i>
                    <h3>1300+</h3>
                    <p>trees planted</p>
                </div>

                <div className="box">
                    <i className="fas fa-paw"></i>
                    <h3>450+</h3>
                    <p>animal saved</p>
                </div>

                <div className="box">
                    <i className="fas fa-donate"></i>
                    <h3>850+</h3>
                    <p>donaters</p>
                </div>

            </div>
        </section>
    )
}

export default About;