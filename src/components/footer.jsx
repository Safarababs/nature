import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import img6 from "./images/6.jpg";



function Footer(){
    return (
        <section className="footer">

<div className="box-container">

    <div className="box">
        <a href="#" className="logo"><i className="fas fa-seedling"></i>green</a>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda possimus impedit voluptate fuga id sapiente perspiciatis amet eos esse iure.</p>
    </div>

    <div className="box">
        <h3 className="share">share</h3>
        <a href="#">facebook</a>
        <a href="#">twitter</a>
        <a href="#">instagram</a>
        <a href="#">github</a>
    </div>

    <div className="box">
        <h3 className="letter">newsletter</h3>
        <form action="">
            <input type="email" placeholder="enter your email"></input>
            <button type="submit" className="fas fa-paper-plane"></button>
        </form>
    </div>

</div>

<h1 className="credit">copyright © @ {new Date().getFullYear()} <span>mr. safar abbas</span> | all rights reserved. </h1>

</section>

        
    )
}

export default Footer;