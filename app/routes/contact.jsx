import Footer from "../components/Footer";
import Header from "../components/Header";

export const meta = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
}

import sampleImage from "../assets/sample.jpg";
import sample2Image from "../assets/sample2.png";

export default function Blog() {
    return <>
        <Header />

        <div className="container px-4 px-lg-5">
            <div className="row gx-4 gx-lg-5 align-items-center my-5">
                <div className="col-lg-7">
                    <img style={{ width: '200px' }} className="img-fluid rounded mb-4 mb-lg-0" src={sampleImage} alt="..." />
                </div>
                <div className="col-lg-7">
                    <img style={{ width: '400px' }} className="img-fluid rounded mb-4 mb-lg-0" src={sample2Image} alt="..." />
                </div>
                <div className="col-lg-5">
                    <h1 className="font-weight-light">Business Name or Tagline</h1>
                    <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
                    <a className="btn btn-primary" href="#!">Call to Action!</a>
                </div>
            </div>
            <div className="card text-white bg-secondary my-5 py-4 text-center">
                <div className="card-body"><p className="text-white m-0">This call to action card is a great place to showcase some important information or display a clever tagline!</p></div>
            </div>
            <div className="row gx-4 gx-lg-5">
                <div className="col-md-4 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title">Card One</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                        </div>
                        <div className="card-footer"><a className="btn btn-primary btn-sm" href="#!">More Info</a></div>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title">Card Two</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod tenetur ex natus at dolorem enim! Nesciunt pariatur voluptatem sunt quam eaque, vel, non in id dolore voluptates quos eligendi labore.</p>
                        </div>
                        <div className="card-footer"><a className="btn btn-primary btn-sm" href="#!">More Info</a></div>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title">Card Three</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus.</p>
                        </div>
                        <div className="card-footer"><a className="btn btn-primary btn-sm" href="#!">More Info</a></div>
                    </div>
                </div>
            </div>
        </div>

        <Footer></Footer>
    </>
}
