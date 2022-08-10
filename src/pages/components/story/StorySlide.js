import { useState } from "react";
import "./storySlide.css";
import { useDispatch } from "react-redux";
import { modalSliceAction } from "../../../store/slices/modalStorySlice";
import StoryModal from "./storyModal/StoryModal";
import { nanoid } from "nanoid";
import Modal1 from "./storyModal/Modal1";

const StorySlide = ({ picArr, ind }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let dispatch = useDispatch();

  let StoryModalDataHandler = function (val) {
    dispatch(modalSliceAction.storyModalHandler({ storyModalData: val }));
    handleShow();
  };

  return (
    <div
      className={` story-slide-area carousel-item p-2  h-100 ${
        ind === 0 ? "active" : ""
      }`}
    >
      {/* <StoryModal /> */}
      <Modal1 handleClose={handleClose} handleShow={handleShow} show={show} />
      <div className="d-flex justify-content-center w-100 h-100">
        <div className="row story-slide-row d-flex align-items-center justify-content-around h-100 w-100">
          {picArr.map((val, ind, arr) => {
            return (
              <div
                key={nanoid()}
                className={`col-3 col-sm-2  story-container ${
                  ind === arr.length - 1 ? "d-lg-block d-none" : ""
                } ${ind === arr.length - 2 ? "d-sm-block d-none" : ""} `}
              >
                <div
                  className="story-bucket"
                  onClick={(e) => {
                    StoryModalDataHandler(val);
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <div className="story-img-container ">
                    <img src={val.pic} className="story-img " alt="story" />
                  </div>
                  <div className="m-0 p-0 story-name-container">
                    <p className="m-0 p-0 story-name text-capitalize text-center">
                      {val.name}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StorySlide;
