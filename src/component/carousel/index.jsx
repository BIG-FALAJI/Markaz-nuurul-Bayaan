// import { CarouselContent, CarouselItem } from "../../components/ui/carousel";
import img1 from "../../assets/img1.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/component/ui/carousel";
import * as React from "react";

export function CarouselDemo() {
  return (
    <Carousel className="max-w-6xl w-full mx-auto">
      <CarouselPrevious />
      <CarouselContent>
        {/* {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div>
                <p className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </p>
              </div>
            </div>
          </CarouselItem>
        ))} */}
        <CarouselItem>
          {" "}
          <img src={img1} alt="" />{" "}
        </CarouselItem>
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
}
