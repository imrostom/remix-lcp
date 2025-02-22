import Footer from "../components/Footer";
import Header from "../components/Header";

export const meta = () => {
    return [
        { title: "New Remix App" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

import sampleImage from "../assets/sample.jpg";

export default function Blog() {
    return <>
        <Header></Header>

        <header className="py-5 bg-light border-bottom mb-4">
            <div className="container">
                <div className="text-center my-5">
                    <h1 className="fw-bolder">Welcome to Blog Home!</h1>
                    <p className="lead mb-0">A Bootstrap 5 starter layout for your next blog homepage</p>
                </div>
            </div>
        </header>

        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="card mb-4">
                        <a href="#!"><img className="card-img-top" src={sampleImage} alt="..." /></a>
                        <div className="card-body">
                            <div className="small text-muted">January 1, 2023</div>
                            <h2 className="card-title">Featured Post Title</h2>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                            <a className="btn btn-primary" href="#!">Read more →</a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card mb-4">
                                <a href="#!"><img className="card-img-top" src={sampleImage} alt="..." /></a>
                                <div className="card-body">
                                    <div className="small text-muted">January 1, 2023</div>
                                    <h2 className="card-title h4">Post Title</h2>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a className="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <a href="#!"><img className="card-img-top" src={sampleImage} alt="..." /></a>
                                <div className="card-body">
                                    <div className="small text-muted">January 1, 2023</div>
                                    <h2 className="card-title h4">Post Title</h2>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a className="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card mb-4">
                                <a href="#!"><img className="card-img-top" src={sampleImage} alt="..." /></a>
                                <div className="card-body">
                                    <div className="small text-muted">January 1, 2023</div>
                                    <h2 className="card-title h4">Post Title</h2>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
                                    <a className="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                            <div className="card mb-4">
                                <a href="#!"><img className="card-img-top" src={sampleImage} alt="..." /></a>
                                <div className="card-body">
                                    <div className="small text-muted">January 1, 2023</div>
                                    <h2 className="card-title h4">Post Title</h2>
                                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.</p>
                                    <a className="btn btn-primary" href="#!">Read more →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav aria-label="Pagination">
                        <hr className="my-0" />
                        <ul className="pagination justify-content-center my-4">
                            <li className="page-item disabled"><a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Newer</a></li>
                            <li className="page-item active" aria-current="page"><a className="page-link" href="#!">1</a></li>
                            <li className="page-item"><a className="page-link" href="#!">2</a></li>
                            <li className="page-item"><a className="page-link" href="#!">3</a></li>
                            <li className="page-item disabled"><a className="page-link" href="#!">...</a></li>
                            <li className="page-item"><a className="page-link" href="#!">15</a></li>
                            <li className="page-item"><a className="page-link" href="#!">Older</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-lg-4">
                    <div className="card mb-4">
                        <div className="card-header">Search</div>
                        <div className="card-body">
                            <div className="input-group">
                                <input className="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                <button className="btn btn-primary" id="button-search" type="button">Go!</button>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">Categories</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="#!">Web Design</a></li>
                                        <li><a href="#!">HTML</a></li>
                                        <li><a href="#!">Freebies</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-6">
                                    <ul className="list-unstyled mb-0">
                                        <li><a href="#!">JavaScript</a></li>
                                        <li><a href="#!">CSS</a></li>
                                        <li><a href="#!">Tutorials</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">Side Widget</div>
                        <div className="card-body">You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</div>
                    </div>
                </div>
            </div>
        </div>

        <Footer></Footer>
    </>
}
