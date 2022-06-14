import { useState } from "react";
import styled from "styled-components";

//https://velog.io/@seeh_h/AWS-S3-presignedURL%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%B4%EC%84%9C-image-Upload-%ED%95%98%EA%B8%B0-qvqo81gk

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 1rem;
  transform: translate(50, 50);
  object-fit: fill;
`;

function Profile() {
  const [preview, setPreview] = useState<string>(
    "../../images/placeholder.jpg"
  );
  //const [image, setImage] = useState<File | null>(null);
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.target.files) return;
    // 이미지 미리보기 띄우기
    console.log("이미지 미리보기 함수 작동!!");
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setPreview(reader.result as string);
    };
    // 이미지set
    //setImage(e.target.files[0]);
  };
  return (
    <>
      <label htmlFor="inputlabel">
        <Image src={preview} />
      </label>
      <input
        type="file"
        name="image"
        accept="image/*"
        id="inputlabel"
        style={{ display: "none" }}
        onChange={handleImageUpload}
      ></input>
    </>
  );
}

export default Profile;
