import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials = [
  {
    quote:
      "Enroll your child with us today, watch them grow into the best version of themselves in the years to come.",
  },
  {
    quote:
      "Give your child the gift of Qur’an, Arabic, and Islamic knowledge and see the fruits in their future.",
  },
  {
    quote:
      "Start their journey with us now, and witness excellence in faith, knowledge, and character in the years ahead.",
  },
  {
    quote:
      "Secure your child’s future, enroll today and nurture them into tomorrow’s leaders.",
  },
  {
    quote:
      "With us, your child’s next few years will be filled with Qur’an, knowledge, and character building that lasts a lifetime.",
  },
];

export function InfiniteMovingCardsDemo() {
  return (
    <div
      data-aos="fade-up"
      className="h-[15rem] rounded-md flex flex-col antialiased bg-inherit items-center justify-center relative overflow-hidden "
    >
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="medium"
      />
    </div>
  );
}
