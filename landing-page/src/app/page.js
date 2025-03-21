import Image from "next/image";
import Nav from "./components/Nav";
import Adminfooter from "./components/Adminfooter";
import Footer from "./components/Footer";
import Container from "./components/Container";
import Link from "next/link";
import Error404 from "./Error404";

export default function Home() {
  return (
    <div className="App">
      <Nav />
      <div className="lg: bg-[url('/images/hero_bg.png')] h-[872px] bg-cover bg-center  lg:w-full flex lg:flex lg:flex-row lg:justify-between ">
        <div className="lg:pl-[128px] pt-[48px] gap-[200px] h-full flex flex-col lg:flex-row justify-between">
          <div className="lg:flex flex-col px-4">
            <div className="lg:pt-[128px] lg:text-white lg:h-[690px]   pt-[100px] text-white h-[550px]">
              <p>IMMERSIVE LEARNING</p>
              <h1 className="lg:pt-[32px] lg:text-8xl    pt-[24px] text-5xl">
                Unleash <br />
                Your Tech <br /> Potentials
              </h1>
              <p className=" lg:pt-[32px] pt-[24px]">
                Join Panthera community of successful graduates
                <br /> and gain the skills you need
                <br /> for in-demand tech jobs
              </p>
              <div className="lg:flex lg:gap-6 lg:pt-[24px] flex gap-8 pt-[16px]">
                <Link href="./Error404.js">
                  <button className="lg:bg-[#66d440] lg:rounded-lg lg:text-[#000000] lg:text-sm lg:w-[157px] lg:h-[56px] lg:p-4 lg:pl-8 lg:pr-8 lg:border border border-[#66d440] lg:border-solid bg-[#66d440] rounded-lg shadow-none text-[#000000] text-sm py-4 px-8">
                    Start Today
                  </button>
                </Link>

                <Link href="./Error404.js">
                  <button className="bg-[#ffffff] rounded-lg shadow-none text-[#66d440] text-sm lg:w-[157px] lg:h-[56px] py-4 px-8 border border-solid ">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
            <div className="lg: pt-20 lg:flex flex-row gap-2 justify-center">
              <div>
                <img
                  className="lg: pb-0 h-[32px] w-[80px]"
                  src="/images/Avatars.png "
                />
              </div>
              <div>
                <p className=" lg: pt-2 text-white text-xs">
                  Over 1000 people already doing well as Software developers
                </p>
              </div>
            </div>
          </div>

          <div className="lg:h-[576px] w-[576px] bg-white mt-[120px]  ">
            <img
              className="lg: h-[576px] w-full"
              src="/images/placeholderimage.png"
            />
          </div>
        </div>
      </div>

      {/* Second Container starts here */}
      <div className="lg: w-full h-[888px] lg:flex flex-col pl-[128px] pr-[128px] bg-white  ">
        <div className="lg:  h-[174px]  pt-28 lg:flex flex-row justify-between">
          <h1 className="lg: text-[#184CD1]  font-clash-display-variable font-bold text-6xl leading-[57.6px] tracking-normal ">
            Transforming Lives <br /> Through Technology <br /> Education
          </h1>
          <p className="lg: text-sm text-black">
            At Panthera Tech School, we offer a range of training models <br />{" "}
            to empower our students with the skills they need for in-demand tech
            <br />
            jobs. Our bootcamp training provides intensive hands-on learning,
            <br />
            while our sandwich training allows students to balance work and
            <br />
            study. For those seeking a comprehensive education, our diploma
            <br />
            training program offers a deep dive into the world of technology.
          </p>
        </div>
        <div className="lg:  pt-72 h-[426px] gap-8 lg:flex flex-row justify-between">
          <div className="lg: w-[373.3333435058594px] h-[426px] gap-6 rounded-t-lg flex flex-col">
            <img
              className="lg: h-[240px] w-full rounded-[8px]"
              src="/images/holder.png "
            />
            <h3
              className="text-sora font-bold text-2xl leading-tight text-black
"
            >
              Bootcamp Training
            </h3>
            <p className="text-sora font-normal text-base leading-snug text-black">
              Intensive hands-on learning for rapid skill
              <br /> acquisition.
            </p>
            <span className="lg: font-clash-display-variable font-semibold text-[16px] leading-6 text-[#66D440]">
              Read more
            </span>
          </div>
          <div className="lg: w-[373.3333435058594px] h-[426px] gap-6 rounded-t-lg flex flex-col">
            <img
              className="lg: h-[240px] w-full rounded-[8px]"
              src="/images/holder.png "
            />
            <h3 className="text-sora font-bold text-2xl leading-tight text-black">
              Sandwich Training
            </h3>
            <p className="text-sora font-normal text-base leading-snug text-black">
              Intensive hands-on learning for rapid skill
              <br /> acquisition.
            </p>
            <span className="lg: font-clash-display-variable font-semibold text-[16px] leading-6 text-[#66D440]">
              Read more
            </span>
          </div>
          <div className="lg: w-[373.3333435058594px] h-[426px] gap-6 rounded-t-lg flex flex-col">
            <img
              className="lg:h-[240px] w-full rounded-[8px]"
              src="/images/holder.png "
            />
            <h3 className="text-sora font-bold text-2xl leading-tight text-black">
              Diploma Training
            </h3>
            <p className="text-sora font-normal text-base leading-snug text-black">
              Intensive hands-on learning for rapid skill
              <br /> acquisition.
            </p>
            <span className="lg:font-clash-display-variable font-semibold text-[16px] leading-6 text-[#66D440]">
              Read more
            </span>
          </div>
        </div>
      </div>

      {/* Third Container code starts here */}
      <div className="lg:h-[837px] top-[1848px] bg-[#FFFFFF] pt-[224px] pb-28 pl-[128px] pr-[128px] gap-2 flex flex-row justify-between">
        <div className="lg: w-[512px] h-[613px] gap-8 flex flex-col">
          <span className="lg:flex flex-col text-[#184CD1]">
            OUR HYBRID CLASS SESSIONS
          </span>
          <p className="lg:text-[#184CD1]  font-clash-display-variable font-bold text-5xl leading-[57.6px] tracking-normal ">
            You have options of <br /> joining the classes <br /> either
            Virtually or
            <br />
            Physically
          </p>
          <p className="lg:text-sm text-black">
            At Panthera Tech School, we offer a hybrid model of classes <br />{" "}
            which you are at liberty to chose which of virtual and physical{" "}
            <br /> classes works for you to learn with to empower students with{" "}
            <br /> in-demand tech skills. Whether you prefer the flexibility of{" "}
            <br /> online learning or the immersive experience of in-person{" "}
            <br /> classes, we have the perfect option for you.
          </p>
          <div className="lg:w-[512px] h-[138px] py-2 gap-6 flex flex-row">
            <div className="lg:w-[244px] h-[122px] gap-4 flex flex-col">
              <p className="lg:text-[#184CD1] text-[24px]">Virtual</p>
              <p className="text-black text-sm">
                Join our virtual classes and learn <br /> from industry experts
                in the
                <br /> comfort of your own home.
              </p>
            </div>
            <div className="lg:w-[244px] h-[122px] gap-4 flex flex-col">
              <p className="lg:text-[#184CD1] text-[24px]">Physical</p>
              <p className="lg:text-black text-sm">
                Experience hands-on learning in <br /> our state-of-the-art
                facilities with <br /> our physical classes.{" "}
              </p>
            </div>
          </div>
        </div>
        <img
          className="lg: h-[584px] w-[584px]"
          src="/images/placeholderimage.png"
        />
      </div>

      {/* Fourth Container code starts here */}
      <div className=" h-[660px] pl-[128px] pr-[128px] bg-white">
        <div className=" lg: h-[156px] top-[1848px] bg-[#FFFFFF] pt-28 pb-28  flex flex-row justify-between">
          <div className="lg: w-[512px] h-[613px] bg-white gap-8 flex flex-col">
            <span className="lg:  text-[#184CD1] text-[16px]">
              WHAT YOU GET
            </span>
            <p className="lg: text-[#184CD1] w-[560px] text-5xl font-clash-display-variable font-bold leading-[57.6px] tracking-normal ">
              We ignite that needed <br />
              spark to dominate
            </p>
          </div>

          <p className="lg: text-sm text-black">
            At Panthera Tech School, we offer a range of training models <br />{" "}
            to empower our students with the skills they need for in-demand tech
            <br />
            jobs. Our bootcamp training provides intensive hands-on learning,
            <br />
            while our sandwich training allows students to balance work and
            <br />
            study. For those seeking a comprehensive education, our diploma
            <br />
            training program offers a deep dive into the world of technology.
          </p>
        </div>
        <div className=" bg-white pt-52 pb-32  flex flex-row justify-between">
          <div className="w-[272px] h-[216px] bg-white gap-4 flex flex-col">
            <img className="h-[48px] w-[48px]" src="/images/icon.png" />
            <p className="font-sora font-bold text-[24px] text-black tracking-normal bg-white">
              {" "}
              Structured Course <br />
              Curriculum
            </p>
            <p className="font-sora font-normal text-[16px] leading-6 text-black">
              2. Follow our structured <br />
              curriculum that covers all the <br />
              essential topics and concepts.
            </p>
          </div>
          <div className="lg: w-[272px] h-[216px] bg-white gap-4 flex flex-col">
            <img className="lg: h-[48px] w-[48px]" src="/images/icon.png" />

            <p className="lg: font-sora font-bold text-[24px] text-black tracking-normal">
              {" "}
              Hands-On Project <br />
              Work
            </p>
            <p className="lg: font-sora font-normal text-[16px] leading-6 text-black">
              2. Follow our structured <br />
              curriculum that covers all the <br />
              essential topics and concepts.
            </p>
          </div>
          <div className="lg: w-[272px] h-[216px] bg-white gap-4 flex flex-col">
            <img className="lg: h-[48px] w-[48px]" src="/images/icon.png" />

            <p className="lg: font-sora font-bold text-[24px] text-black tracking-normal">
              {" "}
              Post Graduation Life <br />
              time Mentorship
            </p>
            <p className="lg: font-sora font-normal text-[16px] leading-6 text-black">
              2. Follow our structured <br />
              curriculum that covers all the <br />
              essential topics and concepts.
            </p>
          </div>
          <div className="lg: w-[272px] h-[216px] bg-white gap-4 flex flex-col">
            <img className="lg: h-[48px] w-[48px]" src="/images/icon.png" />

            <p className="lg: font-sora font-bold text-[24px] text-black tracking-normal">
              {" "}
              Vibrant Developers <br />
              Community
            </p>
            <p className="lg: font-sora font-normal text-[16px] leading-6 text-black">
              2. Follow our structured <br />
              curriculum that covers all the <br />
              essential topics and concepts.
            </p>
          </div>
        </div>
      </div>
      {/* Fifth Container starts here */}

      <div className="lg:h-[932px]  bg-[#FFFFFF] pt-72 pl-[128px] pr-[128px] gap-16">
        <div className="lg: h-[156px] ">
          <p className="lg: text-[#184CD1] text-[16px]">
            WE LEARN, WE EXPLORE, WE CODE AND WE PLAY
          </p>
          <p className="lg: text-[#184CD1] w-[1184px] text-5xl font-clash-display-variable font-bold leading-[57.6px] tracking-normal ">
            Explore our vibrant learning environment <br />
            and student achievements
          </p>
        </div>
        <div className="lg:pt-16 lg:gap-8 lg:flex flex-row justify-between overflow-x-scroll overflow-hidden">
          <img
            className="lg:h-[392px] w-[392px]"
            src="/images/placeholderimage.png"
          />
          <img
            className="lg:h-[392px] w-[392px]"
            src="/images/placeholderimage.png"
          />
          <img
            className="lg:h-[392px] w-[392px]"
            src="/images/placeholderimage.png"
          />
          <img
            className="lg:h-[392px] w-[392px]"
            src="/images/placeholderimage.png"
          />
        </div>
        {/* div for the four images should come into here */}
      </div>
      {/* Sixth Container starts here */}
      <div className="lg: bg-[#FFFFFF] h-[602px]  pt-28  pb-28 pl-[128px] pr-[128px] gap-2">
        <div className=" lg: h-[378px] justify-between lg:flex flex-row ">
          <div className=" lg:flex flex-col">
            <p className="lg: text-[16px] text-black">Empower</p>
            <p className="lg: text-[#184CD1] text-5xl font-clash-display-variable font-bold leading-[57.6px] tracking-normal">
              Transform Your <br />
              Career with Panthera <br />
              Tech School
            </p>
          </div>
          <div className="  lg: h-[378px] gap-6 text-black lg:flex flex-col">
            <p className="">
              Join our community of over 1000 successful graduates who <br />
              have transformed their careers in the tech industry.
            </p>
            <div className=" lg: h-[130px] pt-2 pb-2 gap-6 lg:flex flex-row">
              <div className="lg: w-[264px] h-[114px] gap-2 lg:flex flex-col">
                <p className="lg: font-sora font-bold text-3xl leading-[57.6px] text-black">
                  85%
                </p>
                <p className="lg: font-sora font-normal text-[16px] leading-6 text-black">
                  Graduates Securing High-
                  <br />
                  Paying Tech Jobs
                </p>
              </div>
              <div className="lg: w-[264px] h-[114px] gap-2 flex flex-col">
                <p className="lg: font-sora font-bold text-3xl leading-[57.6px] text-black">
                  50%
                </p>
                <p className="lg: font-sora font-normal text-[16px] leading-6 text-black">
                  Graduates Building Innovative <br />
                  Tech Solutions
                </p>
              </div>
            </div>
            <div className=" lg: h-[130px] pt-2 pb-2 gap-6 lg:flex flex-row">
              <div className="lg: w-[264px] h-[114px] gap-2 lg:flex flex-col">
                <p className="flg: ont-sora font-bold text-3xl leading-[57.6px] text-black">
                  3000+
                </p>
                <p className="lg: font-sora font-normal text-[16px] leading-6 text-black">
                  Students Enrolled And Trained <br />
                  Into Our Tech Training Class.
                </p>
              </div>
              <div className="lg: w-[264px] h-[114px] gap-2 lg:flex flex-col">
                <p className="lg: font-sora font-bold text-3xl leading-[57.6px] text-black">
                  20+
                </p>
                <p className="lg: font-sora font-normal text-[16px] leading-6 text-black">
                  Cohorts Already Completed Over <br />
                  The 2 Years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Seventh Container code starts here */}
      <div className="lg:  h-[757px]  pt-28 pl-[128px] pr-[128px] pb-28  gap-4 bg-[#66D440]">
        <div className="  ">
          <div className="lg:  h-[174px] gap-[240px] lg:flex flex-row ">
            <div>
              <p className="lg: text-[#184CD1] gap-0 text-5xl font-clash-display-variable font-bold leading-[57.6px] tracking-normal ">
                We have touched lives <br />
                and they sign our <br />
                praise
              </p>
            </div>
            <div>
              <p className="text-sora font-normal text-lg leading-snug text-black">
                We don't just tell you what we want you to believe <br />
                about us but we have
              </p>
            </div>
          </div>
          <div className="lg: h-[174px] pt-16 gap-24 flex flex-row justify-between">
            <div className="lg: h-[200px] lg:flex flex-col gap-8">
              <p className="lg:font-sora font-bold text-xl leading-tight text-black">
                Panthera tech School has provided me with the skills <br />
                and knowledge I needed to excel in the tech industry. <br />
                The training program was comprehensive and the <br />
                instructors were highly knowledgeable.
              </p>
              <div className="lg: pt-8 gap-5 lg:flex flex-row">
                <img
                  className="lg: h-[56px] w-[56px]"
                  src="/images/Avatargirl.png "
                />
                <div className="lg: h-11 lg:flex flex-col">
                  <p className="lg: text-sora font-semibold text-lg leading-6 tracking-normal">
                    Name Surname
                  </p>
                  <p>Position, Company name</p>
                </div>
              </div>
            </div>
            <div className="lg: h-[172px] lg:flex flex-col gap-8">
              <p className="lg: font-sora font-bold text-lg leading-7 tracking-normal text-black">
                I am grateful for the education I received at Panthera <br />
                tech School. It has opened up many opportunities for <br />
                me in the tech industry.
              </p>
              <div className="lg: pt-8 gap-5 lg:flex flex-row">
                <img
                  className="lg: h-[56px] w-[56px]"
                  src="/images/Avatarboy.png "
                />
                <div className="lg: h-11 lg:flex flex-col">
                  <p className="lg: text-sora font-semibold text-lg leading-6 tracking-normal">
                    Name Surname
                  </p>
                  <p>Position, Company name</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Eight Container code starts here */}
      <div className="lg:h-[645px]  pt-28 pr-12 pb-28 pl-12 gap-2 bg-white lg:flex justify-center">
        <div className="lg: w-[1260px] h-[422px]  rounded-3xl p-16 bg-[#184CD1] lg:flex flex-row justify-between">
          <div className="lg: h-[344px] gap-8 flex flex-col">
            <p className="lg: text-[#FFFFFF] text-5xl font-clash-display-variable font-bold leading-[57.6px] tracking-normal">
              Join us today and acquire <br />
              in-demand tech skills
            </p>{" "}
            <p className="text-white">
              Now that you have seen what you stand to benefit for <br />
              participating in this bootcamp
            </p>
            <div className="lg:flex gap-6 pt-[44px]">
              <button className="lg: bg-[#66d440] rounded-lg shadow-none text-[#000000] text-sm w-[160px] h-[56px] p-4 pl-8 pr-8 border border-solid ">
                RegisterNow
              </button>
              <button className="lg: bg-[#ffffff] rounded-lg shadow-none text-[#66d440] text-sm w-[157px] h-[56px] p-4 pl-8 pr-8 border border-solid ]">
                Learn More
              </button>
            </div>
          </div>
          <img
            className="lg: w-[365.57px] h-[252.82px] rotate-[-6.66deg]"
            src="/images/graphic.png"
          />
        </div>
      </div>
      {/* Ninth container starts here */}
      <div className="lg: h-[1276px] pt-28 pr-[128px] pb-28 pl-[128px] gap-16 bg-white lg:flex flex-col justify-centre">
        <div className="lg:  h-28 gap-16 lg:flex flex-row justify-between">
          <p className="lg: text-[#184CD1] text-5xl font-clash-display-variable font-bold leading-[57.6px] tracking-normal">
            Frequently Asked <br />
            Questions
          </p>
          <p className="text-sora font-normal text-lg leading-snug text-black">
            We have curated some frequently asked questions you <br />
            might need answers to. Here we listed the most <br />
            recurring of them to give you a quick answers so, you <br />
            can make a timely decision about our programs.
          </p>
        </div>
        <div className="lg: w-[768px] h-[647px] pl-[336px] gap-12 text-black flex flex-col justify-centre ">
          <div className="lg: w-[768px] h-28 gap-4 lg:flex flex-col">
            <p className="lg: font-sora font-bold text-lg leading-7">
              How do I enroll?
            </p>
            <p className="lg: font-sora font-normal text-base leading-6">
              To enroll in our courses, simply visit our website and choose the
              course you are interested in. <br />
              Follow the instructions to complete the enrollment process.
            </p>
          </div>
          <div className="lg: w-[768px] h-28 gap-4 lg:flex flex-col">
            <p className="lg: font-sora font-bold text-lg leading-7">
              What are the course fees?
            </p>
            <p className="lg: font-sora font-normal text-base leading-6">
              The course fees vary depending on the specific course you choose.
              Please visit our website or <br />
              contact our team for more information on pricing.
            </p>
          </div>
          <div className="lg: w-[768px] h-28 gap-4 lg:flex flex-col">
            <p className="lg: font-sora font-bold text-lg leading-7">
              Are there any prerequisites?
            </p>
            <p className="lg: font-sora font-normal text-base leading-6">
              Some of our courses may have prerequisites, while others are open
              to beginners. Please check <br />
              the course details on our website for specific requirements.
            </p>
          </div>
          <div className="lg: w-[768px] h-28 gap-4 lg:flex flex-col">
            <p className="lg: font-sora font-bold text-lg leading-7">
              How long are the courses?
            </p>
            <p className="lg: font-sora font-normal text-base leading-6">
              The duration of our courses varies depending on the specific
              course. Most courses range from <br />a few weeks to a few months.
              Please check the course details for more information.
            </p>
          </div>
          <div className="lg: w-[768px] h-28 gap-4 flex flex-col">
            <p className="lg: font-sora font-bold text-lg leading-7">
              Do you offer job placement?
            </p>
            <p className="lg: font-sora font-normal text-base leading-6">
              Yes, we offer job placement assistance to our students. We have
              partnerships with various <br />
              companies and provide support in finding job opportunities.
            </p>
          </div>
        </div>
        <div className="lg:  h-[157px] pl-[40px] gap-6 lg:flex flex-col">
          <p className="text-clash font-bold text-2xl leading-tight text-center text-black">
            Still have a question?
          </p>
          <p className="lg:text-roboto font-normal text-base leading-snug text-center text-black">
            Contact our team for further assistance.
          </p>
          <div className="lg: pl-[540px]">
            <button className="w-[104px] h-[48px] pt-3 pr-6 pb-3 pl-6 gap-2 border border-black bg-white text-black">
              Contact
            </button>
          </div>
        </div>
      </div>
      <Adminfooter />
    </div>
  );
}
