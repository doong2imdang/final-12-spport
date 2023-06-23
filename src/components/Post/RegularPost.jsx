import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const RegularPostStyle = styled.div`
  p {
    line-height: 18px;
    margin-bottom: 16px;
  }
  .post-img-wrapper {
    box-shadow: inset 0 0 10px red;
    display: flex;
    gap: 20px;
    overflow: scroll;
  }

  img {
    width: 100%;
    aspect-ratio: 304/228;
    object-fit: cover;
    border: 0.5px solid var(--color-steelblue);
    border-radius: 10px;
  }
`;

export default function RegularPost({ post }) {
  const [images, setImages] = useState([]);
  // console.clear();
  if (post.image) {
    console.log(post.content);
    console.log(post.image);
    const imageUrl = post.image.split(',');
    console.log(imageUrl);

    useEffect(() => {
      setImages(imageUrl);
    }, []);
  }
  console.log(images);

  return (
    <>
      <RegularPostStyle className='content-wrapper'>
        <p>{post.content}</p>
        <section className='post-img-wrapper'>
          {images &&
            images.map((image) => {
              // console.log(post.image);
              // console.log(image);
              return <img key={image} src={image} alt='' />;
            })}
        </section>
      </RegularPostStyle>
    </>
  );
}
