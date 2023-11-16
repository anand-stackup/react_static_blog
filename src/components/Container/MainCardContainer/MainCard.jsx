import React from "react";
import "./MainCard.css";
import Post from "./Post"

const MainCard = () => {
  const datas = [
    {
      id: 1,
      img: "https://www.w3schools.com/w3images/woods.jpg",
      title: "TITLE HEADING",
      date: "April 7, 2014",
      desc: "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
      comments: 0,
    },
    {
      id: 2,
      img: "https://www.w3schools.com/w3images/bridge.jpg",
      title: "BLOG ENTRY",
      date: "April 2, 2014",
      desc: "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
      comments: 2,
    },
  ];

  return datas.map((data) => (
    <Post data = {data}/>
  ));
};

export default MainCard;
