import React from "react";

const Testimonial: React.FC = () => {
  return (
    <div id="testimonial">
      <div className="h-full justify-center px-4 md:px-0 pt-12 pb-6 testimonial-section">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-2 lg:text-5xl">
            Client Reviews
          </h2>
          <p className='w-3/5 mx-auto text-sm mb-4'>What clients are saying about us</p>
        </div>
        <div className="flex justify-center text-center flex-wrap">
          <div className="max-w-[600px] py-4 px-4 italic">
            Pryopto is our choice for best overall value and SEO services. It
            has the biggest media list, reasonably priced packages to help you
            scale up, helps with SEO and offers some of the fastest writing and
            PR distribution.
            <br /><br />
            &#8212; Harrison, Former Bitop employee
          </div>
          <div className="max-w-[600px] py-4 px-4 italic">
            It's always a pleasure to work with Joel. He has great services that
            can expose our company to a massive number of audiences at a really
            competitive price. Because of his service we are able to expand
            rapidly despite in the wake of the COVID-19.
            <br /><br />
            &#8212; Dillion, Former Global Operations Manager at BigONE Exchange
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
