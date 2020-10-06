import React from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import Banner from "components/Banner/Banner";
import Images from "constants/images";
import { useDispatch, useSelector } from "react-redux";
import PhotoList from "features/Photo/components/PhotoForm/PhotoList";
import { removePhoto } from "features/Photo/photoSlice";
IndexMain.propTypes = {};

function IndexMain(props) {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const history = useHistory();

  console.log("list of photos", photos);

  const handlePhotoEditClick = (photo) => {
    console.log("Edit: ", photo);
    const editPhotoUrl = `/photos/${photo.id}`;
    history.push(editPhotoUrl);
  };

  const handlePhotoRemoveClick = (photo) => {
    console.log("handlePhotoRemoveClick", photo);
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(action);
  };

  return (
    <div className="photo-main">
      <Banner title="Your awesome photos " backgroundUrl={Images.BANNER1} />
      <Container>
        <div className="py-5">
          <Link to="/photos/add">Add new Photo </Link>
        </div>
        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}

export default IndexMain;
