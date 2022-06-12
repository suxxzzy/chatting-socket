import { useState } from "react";
import styled from "styled-components";

//https://velog.io/@seeh_h/AWS-S3-presignedURL%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%B4%EC%84%9C-image-Upload-%ED%95%98%EA%B8%B0-qvqo81gk

const Image = styled.img`
  transform: translate(50, 50);
  object-fit: cover;
`;

const Preview = styled.input``;

function Profile() {
  const [preview, setPreview] = useState<ArrayBuffer | string>(
    "../../images/preview.png"
  );
  //const [image, setImage] = useState(null);
  const handleImageUpload = (e) => {
    // 이미지 미리보기 띄우기
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setPreview(reader.result);
    };
    // 이미지set
    //setImage(e.target.files[0]);
  };
  return (
    <>
      <Image>{preview}</Image>
      <Preview
        type="file"
        name="image"
        accept="image/*"
        id="inputlabel"
        onChange={handleImageUpload}
      ></Preview>
    </>
  );
}

export default Profile;
