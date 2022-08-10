import React from "react";
import { useSelector } from "react-redux";

const StoryModal = () => {
  let data = useSelector((state) => {
    return state.modalStoryReducer.storyModalData;
  });
  console.log(data);

  return (
    // <div>
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      {/* <div className="modal-dialog my-modal-body">
        <img src={data.pic} className="w-100 h-100" alt="" />
      </div> */}

      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body  ">
            <img src={data.pic} className="w-100 h-100" alt="" />
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default StoryModal;
