import React from 'react';
import { useHistory } from 'react-router';

const LiveConsultancy = () => {

    const history = useHistory();

    const handleLive = () => {
        history.push('/tips');
    }

    return (
        <div className="mx-5">
            <h2 className="d-flex justify-content-center text-danger my-5">Fill the Live Consultancy Form</h2>
            <div>
                <form className="row g-3">
                    <div>
                        <div className="col-md-5">
                            <label for="inputEmail4" className="form-label">First Name</label>
                            <input type="email" className="form-control" id="inputEmail4" />
                        </div>
                        <div className="col-md-5">
                            <label for="inputPassword4" className="form-label">Last Name</label>
                            <input type="password" className="form-control" id="inputPassword4" />
                        </div>
                    </div>
                    <div className="col-12">
                        <label for="inputAddress" className="form-label">Present Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="col-12">
                        <label for="inputAddress2" className="form-label">Permanent Address</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputCity" className="form-label">City</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-4">
                        <label for="inputState" className="form-label">State</label>
                        <select id="inputState" className="form-select">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label for="inputZip" className="form-label">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="gridCheck" />
                            <label className="form-check-label mb-3" for="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                </form>
            </div>
            <button onClick={handleLive} className="btn btn-warning mb-5">Go Live</button>
        </div>
    );
};

export default LiveConsultancy;