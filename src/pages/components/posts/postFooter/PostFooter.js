import { useState } from "react";
import "./postFooter.css";
import { FaRegHeart } from "react-icons/fa";
import { BsHeart, BsBookmark } from "react-icons/bs";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";
import { RiChat3Line } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import NumberFormat from "react-number-format";
import { VscSmiley } from "react-icons/vsc";

const PostFooter = ({ postData }) => {
  let [likes, setLikes] = useState(postData.likes);
  let [like, setLike] = useState(false);
  let [commentText, setCommentText] = useState("");

  let changeHandler = function (e) {
    setCommentText(e.target.value);
  };

  let [showMore, setShowMore] = useState(false);

  let l = 40;
  let comment =
    postData.desc.comment.length > l && !showMore
      ? postData.desc.comment.slice(0, l)
      : postData.desc.comment;
  let expandButton = 0;
  expandButton = postData.desc.comment.length > l ? 1 : 0;

  return (
    <div className="postFooter-area">
      {/* icons  */}
      <div className="post-footer-icons">
        <div className="post-footer-icons-left">
          {!like && (
            <AiOutlineHeart
              size="30px"
              className="pointer "
              onClick={() => {
                setLike((prev) => {
                  return !prev;
                });
                setLikes((prev) => {
                  return prev + 1;
                });
              }}
            />
          )}
          {like && (
            <AiTwotoneHeart
              color="red"
              size="30px"
              className="pointer "
              onClick={() => {
                setLike((prev) => {
                  return !prev;
                });
                setLikes((prev) => {
                  return prev - 1;
                });
              }}
            />
          )}
          <RiChat3Line size="28px" className="pointer" />
          <FiSend size="25px" className="pointer" />
        </div>
        <div className="post-footer-icons-right">
          <FiBookmark size="25px" className="pointer" />
        </div>
      </div>

      {/* data  */}
      <div className="post-footer-data">
        {/* likes  */}
        <h6 className="my-3">
          <NumberFormat
            value={likes}
            displayType={"text"}
            thousandSeparator={true}
          />{" "}
          likes
        </h6>

        {/* description  */}
        <div className="post-footer-1">
          <div className="post-footer-desc-2">
            {/* username  */}
            <h6 className="m-0">{postData.desc.userName}</h6>
            {/* comment  */}
            <p className="m-0">
              {` "${comment}" `}
              {expandButton && (
                <span>
                  {" "}
                  <span>...</span>
                  {!showMore && (
                    <span
                      onClick={(e) => {
                        setShowMore(true);
                      }}
                      className="text-muted post-more"
                    >
                      more
                    </span>
                  )}
                  {showMore && (
                    <span
                      onClick={(e) => {
                        setShowMore(false);
                      }}
                      className="text-muted post-more"
                    >
                      less
                    </span>
                  )}
                </span>
              )}
            </p>

            {/* show all comments  */}
            <p className="text-muted m-0">
              View all {postData.desc.count} comments
            </p>

            {/* hours ago  */}
            <small className="text-muted text-uppercase hours-ago">
              {postData.time} Hours Ago
            </small>
          </div>
          <hr />
          <div className="post-footer-foot">
            {/* <div> */}
            <VscSmiley size="25px" />
            <input
              className="post-comment-text"
              value={commentText}
              onChange={(e) => {
                changeHandler(e);
              }}
              type="text"
              placeholder="Add a Comment..."
              name=""
              id=""
            />
            {/* </div> */}
            <p
              className={`m-0 text-primary post-post ${
                commentText.trim().length === 0 && "opacity"
              }`}
            >
              Post
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostFooter;
