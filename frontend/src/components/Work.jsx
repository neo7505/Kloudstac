import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";

const Work = () => {
  return (
    <div className="my-2 text-gray-700">
      <div className="how_we_work_area relative flex md:my-20 ">
        <div className="md:basis-1/2  md:py-[150px] px-6 md:px-20">
          <div className="section_title">
            <p className="text-xl md:text-[35px] font-[700] leading-[130%]">
              WHAT YOU WILL LEARN THROUGH OUR COURSES ?
            </p>
            <div className="text-[16px] md:text-[18px] mt-10">
              <div className="my-2 flex">
                <span className="mr-3 pt-2 ">
                  <BsArrowRight size={15} />
                </span>
                <span className="text-slate-600">
                  How to build well-architected cloud native and cloud agnostic
                  applications with characteristics like high availability,
                  scalability, resilience/ reliability, performance, cost
                  optimized and secure.
                </span>
              </div>
              <div className="my-2 flex">
                <span className="mr-3 pt-2">
                  <BsArrowRight size={15} />
                </span>
                <span className="text-slate-600">
                How to use Generative AI for 5-10x improvement in personal & team <span  className="text-green-400" >productivity & performance.</span>

                </span>
              </div>

              <div className="my-2 flex">
                <span className="mr-3 pt-2">
                  <BsArrowRight size={15} />
                </span>
                <span className="text-slate-600">
                Modern database architectures including <span className="text-green-400" > RDBMS </span> and <span className="text-green-400">NoSQL</span> databases, with practical examples of how renowned big tech apps use databases.
                </span>
              </div>
              <div className="my-2 flex">
                <span className="mr-3 pt-2">
                  <BsArrowRight size={15} />
                </span>
                <span className="text-slate-600">
                How to design & implement data engineering pipelines and model a <span className="text-green-400"> data warehouse, data lake and lakehouse </span>

                </span>
              </div>

              <div className="my-2 flex">
                <span className="mr-3 pt-2 font-[10px]">
                  <BsArrowRight size={15} />
                </span>
                <span className="text-slate-600">
                  How large
                  scale distributed software systems work.
                </span>
              </div>
              <div className="my-2 flex">
                <span className="mr-3 pt-2">
                  <BsArrowRight size={15} />
                </span>
                <span className="text-slate-600">
                  How to use design and use containerized and serverless compute
                  workloads.
                </span>
              </div>
              <div className="my-2 flex">
                <span className="mr-3 pt-2">
                  <BsArrowRight size={15} />
                </span>
                <span className="text-slate-600">
                  Learn all of the above with practical examples of renowned
                  bigtech app.
                </span>
              </div>
            </div>
          </div>

          <div className="video_watch d-flex align-items-center mt-10">
            <div className="flex  items-center">
              <a
                href="https://www.youtube.com/watch?v=1JEDrtm5B5o&t=2s"
                target="_blank" rel="noreferrer"
                className=""
              >
                <AiFillPlayCircle
                  size={67}
                  style={{ color: "green" }}
                />
              </a>
              <span className="mx-4 text-2xl font-[300px]">Watch Video</span>
            </div>
          </div>
        </div>
      </div>

      <div className="how_we_work_area2 relative flex justify-end md:my-10 ">
        <div className="md:basis-1/2  md:py-[140px] px-10 md:px-15 ">
          <div className="section_title mt-10 mt-[-180px]">
            <p className="text-xl  md:text-[27px] font-[200] md:font-[400] leading-[115%]  ">
            Start to a lucrative career as Multi-Cloud Engineer with Generative AI & cybersecurity specialty and build expertise to 
              <span className="text-green-400">
              <br /> work across AWS, GCP and Azure.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
