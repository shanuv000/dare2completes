import React, { Component } from "react";
import Typist from "react-typist";
import Typewriter from "typewriter-effect";
const arr = [
  "Competitions",
  "Innovation Challenges",
  "Quizzes",
  "Hackathons",
  "Jobs",
  "Internships",
  "Scholarships",
  "Workshops & Webinar",
  "Cultural Events",
];

const MyComponent = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: arr,
          autoStart: true,
          loop: true,
          deleteSpeed: 30,
          skipAddStyles: true,
        }}
      />
      {/* <Typist>
        <span class="text-danger">{arr[0]}</span>
        <Typist.Backspace count={arr[0].length} delay={500} />
        <span class="text-danger">{arr[1]}</span>
        <Typist.Backspace count={arr[1].length} delay={500} />
        <span class="text-danger">{arr[2]}</span>
        <Typist.Backspace count={arr[2].length} delay={500} />
        <span class="text-danger">{arr[3]}</span>
        <Typist.Backspace count={arr[3].length} delay={500} />
        <span class="text-danger">{arr[4]}</span>
        <Typist.Backspace count={arr[4].length} delay={500} />
        <span class="text-danger">{arr[5]}</span>
        <Typist.Backspace count={arr[5].length} delay={500} />
        <span class="text-danger">{arr[6]}</span>
        <Typist.Backspace count={arr[6].length} delay={500} />
        <span class="text-danger">{arr[7]}</span>
        <Typist.Backspace count={arr[7].length} delay={500} />
        <span class="text-danger">{arr[8]}</span>
        <Typist.Backspace count={arr[8].length} delay={200} />
      </Typist> */}
    </>
  );
};
export default MyComponent;
