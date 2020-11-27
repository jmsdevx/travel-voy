import React, { useState, useEffect } from "react";
import './Info.scss';
import { Button } from 'react-bootstrap';
import EditProfile from '../profile/ProfileResp/EditProfile';
import actions from '../ducks/actions';
import { connect } from 'react-redux';

function Info({ profileData, getProfile, userId }) {

  useEffect(() => {
    getProfile(userId);
  }, []);

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="info-container">
        <div className="info">
          <div className="info-pair">
            <i className="material-icons">face</i>
            {/* <h4 className="info-blurb">Mystery Guest</h4> */}
            <h4 className="info-blurb">{profileData.firstName} {profileData.lastName}</h4>
          </div>
          <div className="info-pair">
            <i className="material-icons">language</i>
            {/* <h4 className="info-blurb">Secret Traveler</h4> */}
            <h4 className="info-blurb">{profileData.travelerType}</h4>
          </div>
          <div className="info-pair">
            <i className="material-icons">home</i>
            {/* <h4 className="info-blurb">Madagascar</h4> */}
            <h4 className="info-blurb">{profileData.homeCity}</h4>
          </div>
        </div>
        {/* <div className="edit">
          <Button className="edit-button" onClick={() => setShowModal(!showModal)}>
            <i className="material-icons">edit</i>
            <p>Edit</p>
          </Button>
        </div> */}
        {/* <EditProfile showModal={showModal} setShowModal={setShowModal} /> */}
      </div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    profileData: state.profile.data,
    userId: state.auth.user.id
  }
}

export default connect(
  mapStateToProps,
  actions
)(Info);
