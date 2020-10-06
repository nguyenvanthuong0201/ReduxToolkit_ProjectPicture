import React from "react";

import Banner from "components/Banner/Banner";
import PhotoForm from "features/Photo/components/PhotoForm/PhotoForm";
import "../AddEdit/AddEdit.scss";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto, updatePhoto } from "features/Photo/photoSlice";
import { useHistory, useParams } from "react-router-dom";

IndexAddEdit.propTypes = {};

function IndexAddEdit(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();

  const isAddMode = !photoId;

  const editedPhoto = useSelector((state) => {
    //show thông tin dữ liệu trong state  || + chuyển chuỗi thành number
    const foundPhoto = state.photos.find((x) => x.id === +photoId);
    console.log({ photos: state.photos, photoId, foundPhoto });
    return foundPhoto;
  });
  console.log({ photoId, editedPhoto });

  const initialValues = isAddMode
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : editedPhoto;

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      console.log("Form submit", values);
      setTimeout(() => {
        if (isAddMode) {
          const randomId = Math.trunc(Math.random() * 10000);
          const newPhoto = {
            ...values,
            id: randomId,
          };
          const action = addPhoto(newPhoto);
          dispatch(action);
        } else {
          const action = updatePhoto(values);
          dispatch(action);
        }

        // Di chuyển sang pager khác bằng history
        history.push("/photos");
        resolve(true);
      }, 2000);
    });
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing Photo" />
      <div className="photo-edit__form">
        <PhotoForm
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default IndexAddEdit;
