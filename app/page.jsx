import React from "react";
import Feed from "@components/Feed";

const page = () => {
  return (
    <section className="w-full flex-col flex-center">
      <h1 className="text-center head_text">
        Temukan Dan Bagikan
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Ai Prompt</span>
      </h1>
      <p className="desc text-center">
        GptPrompty adalah web untuk sharing prompt chatgpt yang hasilnya akan
        lebih baik daripada random prompt
      </p>

      <Feed />
    </section>
  );
};

export default page;
