import React, { useRef, useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';
import * as actions from '../../ducks/trips/actions';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import lisbon from '../../../assets/lisbon.jpeg';

function UpdateTrip({
  tripId,
  showModal,
  setShowModal,
  updateTripFormData,
  updateTripChange,
  updateTrip,
  picture,
  updateTripImgPreview,
  deleteTrip,
}) {

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  useEffect(() => {

    if (new Date(updateTripFormData.dateStart)) {
      setDateRange([{
        startDate: new Date(updateTripFormData.dateStart).getTime(),
        endDate: new Date(updateTripFormData.dateEnd).getTime(),
        key: 'selection'
      }])
    }

  }, [updateTripFormData]);


  // console.log(dateRange);

  const changeHandler = (e) => {
    updateTripChange({
      [e.target.name]: e.target.value
    });
  }

  const handleSubmitClick = () => {

    console.log(dateRange);
    updateTripFormData.dateStart = dateRange[0].startDate;
    updateTripFormData.dateEnd = dateRange[0].endDate;

    updateTrip();
  }

  const handleDeleteClick = () => {

    deleteTrip(tripId);
  }

  const inputFileRef = useRef(null);

  const onFileChange = (e) => {
    console.log(e.target.files);

    const imgUrl = URL.createObjectURL(e.target.files[0]);
    updateTripChange({ picture: e.target.files[0] });

    console.log(imgUrl);
    updateTripImgPreview(imgUrl);
  }

  const handleBtnClick = () => {
    inputFileRef.current.click();
  }

  return (
    <div>
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        size="lg"
        dialogClassName="modal-90w"
        aria-labelledby="modal-styling-title"
      >
        <Modal.Header closeButton>
          {/* <Modal.Title id="modal-styling-title">
            Add Profile
          </Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          <div className="container rounded bg-white mt-2 mb-2">
            <div className="row">
              <div className="col-md-4 border-right">
                <div className="d-flex flex-column align-items-center text-center px-sm-3 py-sm-3">
                  <img alt="" className="rounded-circle mt-sm-5 edit-profile-image" src={updateTripFormData.picturePreviewUrl ? updateTripFormData.picturePreviewUrl : lisbon} />
                  {/* <span className="font-weight-bold">Amelly</span>
                  <span className="text-black-50">amelly12@bbb.com</span><span> </span> */}
                  <button className="btn btn-primary image-upload-btn mt-4" type="button" onClick={handleBtnClick}>
                    <input
                      type="file"
                      ref={inputFileRef}
                      onChange={onFileChange}
                      className="d-none"
                    />
                    <i className="material-icons">camera</i>&nbsp;
                    <span>Update Picture</span>
                  </button>
                </div>
              </div>

              <div className="col-md-8 border-right pl-0 pl-sm-2">
                <div className="px-sm-3 py-sm-3">
                  {/* <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Update Trip</h4>
                  </div> */}
                  <div className="row mt-3">
                    <div className="col-md-12">
                      <label className="labels">Location *</label>
                      <input type="text" className="form-control" placeholder="Location" name="location" value={updateTripFormData.location} onChange={changeHandler} />
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-12">
                      <label className="labels d-block">Date Range *</label>

                      <DateRange
                        editableDateInputs={true}
                        onChange={item => setDateRange([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={dateRange}
                      />
                    </div>
                  </div>

                  <div className="my-3 text-left">
                    <div className="trip-btn-group">
                      <button className="btn-sm btn-danger profile-button" type="button" onClick={handleDeleteClick}>Delete Trip</button>
                      <button className="btn-sm btn-primary profile-button" type="button" onClick={handleSubmitClick}>Update Trip</button>
                    </div>
                    <div style={{ height: "10px" }} className="text-danger pt-3">{updateTripFormData.errorMsg}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    updateTripFormData: state.trips.updateTripFormData,
    picture: state.trips.data.picture,
  }
}

export default connect(mapStateToProps, actions)(UpdateTrip);