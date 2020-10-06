import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import "./PhotoCard.scss";

PhotoCard.propTypes = {
  photo: PropTypes.object,
  onPhotoEditClick: PropTypes.func,
  onPhotoRemoveClick: PropTypes.func,
};

PhotoCard.defaultProps = {
  photo: {},
  onPhotoEditClick: null,
  onPhotoRemoveClick: null,
};

function PhotoCard(props) {
  const { photo, onPhotoEditClick, onPhotoRemoveClick } = props;

  const handleEditClick = () => {
    if (onPhotoEditClick) onPhotoEditClick(photo);
  };

  const handleRemoveClick = () => {
    if (onPhotoRemoveClick) onPhotoRemoveClick(photo);
  };

  return (
    <div className="photo">
      <img src={photo.photo} alt={photo.title} />

      <div className="photo__overlay">
        <h3 className="photo__title">{photo.title}</h3>

        <div className="photo__actions">
          <div>
            <Button outline size="sm" color="light" onClick={handleEditClick}>
              Edit
            </Button>
          </div>

          <div>
            <Button
              outline
              size="sm"
              color="danger"
              onClick={handleRemoveClick}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoCard;
