import React, { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./ImageSlider.css";

function ImageSlider() {
  const URL = "https://picsum.photos/v2/list?page=1&limit=10";
  // const URL = "https://picsum.photos/400";
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);

  async function getImages() {
    try {
      setLoading(true);
      const response = await fetch(URL);
      const result = await response.json();

      setImages(result);
      setLoading(false);
    } catch (err) {
      setErrMsg(err.message);
    }
    // try {
    //   setLoading(true);
    //   const newImages = [];
    //   for (let i = 0; i < 5; i++) {
    //     newImages.push(`${URL}?random=${i}`);
    //   }
    //   setImages((prev) => [...prev, ...newImages]);
    //   console.log(newImages);
    //   setLoading(false);
    // } catch (err) {
    //   setErrMsg(err.message);
    // }
  }

  useEffect(() => {
    getImages();
  }, [URL]);

  function slideRight() {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }
  function slideLeft() {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }

  if (loading) return <h1>Loading Images</h1>;
  if (errMsg) return <h1>Error Loading! {errMsg}</h1>;
  return (
    <div className="flex justify-center">
      <div className="flex relative justify-center items-center w-125 h-100 my-10">
        <BsArrowLeftCircleFill
          className="flex absolute text-white left-5 h-10 w-10"
          onClick={slideLeft}
        />
        {images && images.length
          ? images.map((item) =>
              Number(item.id) == currentImage ? (
                <img
                  className="w-[100%] h-[100%]"
                  src={item.download_url}
                  key={item.id}
                  alt="images"
                />
              ) : null
            )
          : null}

        <BsArrowRightCircleFill
          className=" flex absolute text-white right-5 h-10 w-10"
          onClick={slideRight}
        />
        <span className="flex absolute bottom-1">
          {images && images.length
            ? images.map((item) => {
                return (
                  <button
                    className="mx-1 cursor-pointer w-3 h-3 rounded-lg"
                    key={item.id}
                    style={{
                      backgroundColor:
                        currentImage == item.id ? "green" : "white",
                    }}
                    onClick={() => setCurrentImage(Number(item.id))}
                  ></button>
                );
              })
            : null}
        </span>
      </div>

      {/* <div className="flex relative justify-center items-center w-125 h-100 my-10">
        <BsArrowLeftCircleFill
          className="flex absolute text-white left-5 h-10 w-10"
          onClick={slideLeft}
        />
        {images && images.length
          ? images.map((item, index) =>
              index == currentImage ? (
                <img
                  className="w-[100%] h-[100%]"
                  src={item}
                  key={index}
                  alt="images"
                />
              ) : null
            )
          : null}

        <BsArrowRightCircleFill
          className=" flex absolute text-white right-5 h-10 w-10"
          onClick={slideRight}
        />
        <span className="flex absolute bottom-1">
          {images && images.length
            ? images.map((item, index) => {
                return (
                  <button
                    className="mx-1 cursor-pointer w-3 h-3 rounded-lg"
                    key={index}
                    style={{
                      backgroundColor:
                        currentImage == index ? "green" : "white",
                    }}
                    onClick={() => setCurrentImage(index)}
                  ></button>
                );
              })
            : null}
        </span>
      </div> */}
    </div>
  );
}
export default ImageSlider;
