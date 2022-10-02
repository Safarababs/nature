import vid from "./images/video.mp4";

function Donate(){
    return (
        <section className="donate" id="donate">
            <h1 className="heading"><i className="fas fa-quote-left"></i> donate us <i className="fas fa-quote-right"></i></h1>

            <div className="video-container">
                <video src={vid} loop autoplay muted></video>
            </div>

            <div className="form-container">
                <form action="">
                    <div className="inputBox">
                        <input type="text" placeholder="first name"></input>
                        <input type="text" placeholder="last name"></input>
                    </div>

                    <div className="inputBox">
                        <input type="text" placeholder="first name"></input>
                        <select name="" id="">
                            <option value="$5">$5</option>
                            <option value="$10">$10</option>
                            <option value="$15">$15</option>
                            <option value="$20">$20</option>
                        </select>
                    </div>

                    <textarea name="" id="" cols="30" rows="10" placeholder="message (optional)"></textarea>
                    <input type="submit" className="btn"></input>
                </form>
            </div>
        </section>
    )
}

export default Donate;