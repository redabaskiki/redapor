import React from "react";

const About = () => {
  return (
    <div className="mx-3  border-1 border-amber-50 rounded-2xl flex flex-col md:flex-row pt-3 my-6 mb-20  ">
      <h2 className="flex justify-center text-4xl  lg:text-6xl w-full m-5  ">
       About Me 
      </h2>
      <p className="font-roboto text-xl font-light opacity-70 p-3 mx-5">
        I&apos;m Reda Baskiki, a 26-year-old self-taught developer fueled by a
        deep curiosity and a passion for transforming ideas into tangible
        digital solutions. My journey into the world of code began with a single
        line, and I&apos;ve been captivated ever since. Without a formal degree,
        my learning has been hands-on, tackling challenges and growing with each
        project I undertake. I enjoy crafting engaging front-end experiences and
        building robust back-ends utilizing (NoSQL, including MongoDB) and
        modern platforms like Supabase database. For me, development isn&apos;t
        just about writing code; it&apos;s about bringing visions to life.
      </p>
    </div>
  );
};

export default About;
