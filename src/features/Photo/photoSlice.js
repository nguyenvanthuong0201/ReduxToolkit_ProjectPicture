import { createSlice } from "@reduxjs/toolkit";
///photoslice chứa cả reducer và actionư
const initialPhotos = [
  {
    id: 113,
    categoryId: 5,
    photo: "https://picsum.photos/id/300/300/300",
    title: "hình ảnh nè nha",
  },
];
const photo = createSlice({
  name: "photos",
  initialState: initialPhotos,
  reducers: {
    addPhoto: (state, action) => {
      // const newPhoto = action.payload;
      state.push(action.payload);
    },
    removePhoto: (state, action) => {
      const removePhotoId = action.payload;
      return (state = state.filter((photo) => photo.id !== removePhotoId));
    },
    updatePhoto: (state, action) => {
      const newPhoto = action.payload;
      const photoIndex = state.findIndex((photo) => photo.id === newPhoto.id);
      if (photoIndex >= 0) {
        state[photoIndex] = newPhoto;
      }
    },
  },
});

/// const reducer và actions ..nhớ có s
const { reducer, actions } = photo;
export const { addPhoto, removePhoto, updatePhoto } = actions;
export default reducer;
