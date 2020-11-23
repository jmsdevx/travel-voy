import React, { useRef, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './AddTrip.scss';
import { connect } from 'react-redux';
import * as actions from '../../ducks/trips/actions';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import lisbon from '../../../assets/lisbon.jpeg';

function AddTrip({
  showModal,
  setShowModal,
  addTripFormData,
  addTripChange,
  addNewTrip,
  picture,
  addTripImgPreview,
}) {

  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

  const changeHandler = (e) => {
    addTripChange({
      [e.target.name]: e.target.value
    });
  }

  const handleSubmitClick = () => {

    console.log(dateRange);
    addTripFormData.dateStart = dateRange[0].startDate;
    addTripFormData.dateEnd = dateRange[0].endDate;

    addNewTrip();
  }

  const inputFileRef = useRef(null);

  const onFileChange = (e) => {
    console.log(e.target.files);

    const imgUrl = URL.createObjectURL(e.target.files[0]);
    addTripChange({ picture: e.target.files[0] });

    console.log(imgUrl);
    addTripImgPreview(imgUrl);
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
          <Modal.Title id="modal-styling-title">
            Add Profile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container rounded bg-white mt-2 mb-2">
            <div className="row">
              <div className="col-md-4 border-right">
                <div className="d-flex flex-column align-items-center text-center p-3 py-3">
                  <img alt="" className="rounded-circle mt-5 edit-profile-image" src={addTripFormData.picturePreviewUrl ? addTripFormData.picturePreviewUrl : lisbon} />
                  {/* <span className="font-weight-bold">Amelly</span>
                  <span className="text-black-50">amelly12@bbb.com</span><span> </span> */}
                  <button class="btn btn-primary image-upload-btn mt-4" type="button" onClick={handleBtnClick}>
                    <input
                      type="file"
                      ref={inputFileRef}
                      onChange={onFileChange}
                      className="d-none"
                    />
                    <i className="material-icons">camera</i>&nbsp;
                    <span>Upload Picture</span>
                  </button>
                </div>
              </div>

              <div className="col-md-8 border-right">
                <div className="px-3 py-3">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">Add Trip</h4>
                  </div>
                  <div className="row mt-3">
                    <div className="col-md-12">
                      <label className="labels">Location *</label>
                      <input type="text" className="form-control" placeholder="Location" name="location" value={addTripFormData.location} onChange={changeHandler} />
                    </div>
                  </div>

                  <div className="row mt-3">
                    <div className="col-md-12">
                      <DateRange
                        editableDateInputs={true}
                        onChange={item => setDateRange([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={dateRange}
                      />
                    </div>
                  </div>

                  <div className="my-3 text-left">
                    <button className="btn btn-primary profile-button" type="button" onClick={handleSubmitClick}>Add Trip</button>
                    <div style={{ height: "10px" }} className="text-danger pt-3">{addTripFormData.errorMsg}</div>
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
    addTripFormData: state.trips.addTripFormData,
    picture: state.trips.data.picture,
  }
}

export default connect(mapStateToProps, actions)(AddTrip);