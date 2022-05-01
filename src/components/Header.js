import '../styles/Header.css';

export default function header() {
    return (
    <div className="header jumbotron jumbotron-fluid d-flex align-items-center">
        <div className="container-fluid">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 col-xl-4 py-2 d-flex justify-content-center">
                    <h1>Rhys Spinazzola</h1>
                </div>
                <div className="col-3 col-xl-2 d-flex justify-content-center">
                    <a href="/">About</a>
                </div>
                <div className="col-3 col-xl-2  d-flex justify-content-center">
                    <a href="/works">Works</a>
                </div>
                <div className="col-3 col-xl-2  d-flex justify-content-center">
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </div>
    </div>
    )
}