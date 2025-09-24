import React from "react";
import Propietor from "./Propietor";
import Hadith from "./Hadith";
import CoursesOffered from "./CoursesOffered";
import { InfiniteMovingCardsDemo } from "../../component/Card";
import Anthem from "./Anthem";
import { CarouselDemo } from "../../component/carousel";
import HomeHeading from "./HomeHeading";
import LearningOptions from "./LearningOption";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-sky-50 to-sky-100">
      <HomeHeading />
      {/* <CarouselDemo /> */}
      <Hadith />
      <CoursesOffered />
      {/* <LearningOptions /> */}
      <Propietor />
      <Anthem />
      <InfiniteMovingCardsDemo />
    </div>
  );
};

export default Home;
