import p1 from "../assets/1.jpg";
import nanoid from "nanoid";
import pic1 from "../assets/pic1.jpg";

let data = {
  posts: [
    {
      profilePic: p1,
      userName: "success_pictures",
      postPic: p1,
      likes: 1254,
      desc: {
        userName: "programmerOfficial",
        comment: "The Future Belongs to those who prepare for it Today",
        count: 16,
      },
      time: 5,
    },
  ],
  profile: {
    userName: "mr_perfect",
    profilePic: pic1,
    name: "Gokul",
    posts: 0,
    followers: 8,
    following: 10,
  },
};

export default data;
