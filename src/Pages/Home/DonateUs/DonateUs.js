import React from 'react';

const DonateUs = () => {
    return (
        <div>
            <h1 className="text-center text-danger my-5 display-2">Donate Us</h1>
            <div className="mx-5">
                <form className="row g-3">
                    <div className="col-md-3">
                        <label for="inputEmail4" className="form-label">First Name</label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-3">
                        <label for="inputPassword4" className="form-label">Middle Name</label>
                        <input type="password" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-md-3">
                        <label className="visually-hidden" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="autoSizingInput" placeholder="Jane Doe" />
                    </div>
                    <div className="col-md-6">
                        <label className="visually-hidden" className="form-label">Select Donation Amount</label>
                        <select className="form-select" id="autoSizingSelect">
                            <option selected>Choose...</option>
                            <option value="1">One Thousand</option>
                            <option value="2">Two Thousand</option>
                            <option value="3">Three Thousand</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <label for="inputAddress" className="form-label">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="col-12">
                        <label for="inputAddress2" className="form-label">Address 2</label>
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
                            <label className="form-check-label" for="gridCheck">
                                Check me out
                            </label>
                        </div>
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-warning mb-5">Confirm Donation</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DonateUs;