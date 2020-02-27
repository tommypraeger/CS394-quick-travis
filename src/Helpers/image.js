import axios from 'axios';
const CLOUDINARY_UPLOAD_TRANSFORM_PRESET = 'musxeeij'; // img transformed to 200x200
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dhc72wrqp/image/upload';

const imageUpload = (file) => {
  const formData = new FormData();
  formData.append('file', file);
  const upload_preset = CLOUDINARY_UPLOAD_TRANSFORM_PRESET;
  formData.append('upload_preset', upload_preset);
  return axios.post(CLOUDINARY_UPLOAD_URL, formData, null);
};

export {
  imageUpload,
}
