import Image from "next/image";

export default function Home() {
  return (
    // navbar section
    <body className="w-full min-h-screen sm:w-full md:w-full lg:w-full xl:w-full">
      <main
        className="w-full min-h-screen overflow-auto relative bg-zinc-900 
        sm:bg-zinc-900 sm:w-full  
        md:w-full md:bg-blue-500
        lg:w-full lg:bg-green-500
        xl:w-full xl:bg-zinc-800"
      >
        <div className="navBar w-[100vw] left-0 border-b border-white">
          <div className="logoFrame w-[10.5rem] lg:w-64 h-11 lg:top-3 relative ml-[7px] flex-col justify-start items-start inline-flex">
            <div className="LoadOfPixel text-left text-zinc-200 text-2xl lg:text-3xl font-semi-bold ">
              Load of pixel
            </div>
            <div className="bracketOfSet w-4 h-4 lg:w-5 lg:h-5 relative">
              <img
                className="bracketFrame w-6 h-6 left-[228px] top-[-34px] absolute"
                src="/orange-brackets.svg"
                alt="orange-brackets"
              />

              <div className=" w-[10.5rem] h-3 left-[57px] top-[-1.2rem] lg:left-[97px] lg:mt-3 relative justify-center items-start inline-flex">
                <div className="CloudAndWebDevelopment text-white text-[5.8px] lg:text-[7px] font-normal font-['Open Sans'] leading-3">
                  cloud and web development
                </div>
              </div>
            </div>
          </div>

          <div
            className="burger-menu w-4 h-4 absolute right-[0.1rem] top-[0.3rem] border border-white border-opacity-90 rounded-[3px] justify-center items-center gap-2 inline-flex
            xl:hidden"
            src="/vector.svg"
            alt="Menu-icon"
          ></div>

          <div
            className="MobileSocial w-20 h-3.5 absolute top-[1.8rem] right-0 pb-px justify-center items-start gap-[2px] inline-flex
          lg:right-8 lg:top-5 lg:w-40 lg:h-9 lg:pt-1 lg:justify-center lg:items-start lg:gap-1 lg:inline-flex"
          >
            <div className="FollowUs w-30 xl:w-40 text-neutral-200 text-[11px] left-1 xl:text-zinc-400 xl:text-[18px] font-medium font-['Poppins']">
              Follow us
            </div>
            <img
              className="Linkedin w-3 h-3 xl:w-6 xl:h-6 relative flex-col justify-start items-start flex"
              src="/linkedin.svg"
              alt="Linkedin-icon"
            />
            <img
              className="Github w-3 h-3 xl:w-6 xl:h-6  relative flex-col justify-start items-start flex"
              src="/github.svg"
              alt="Github-icon"
            />
            <img
              className="Microsoft w-3 h-3 xl:w-6 xl:h-6  relative flex-col justify-start items-start flex"
              src="/microsoft.svg"
              alt="Microsoft-icon"
            />
          </div>
          {/* <!-- New navigation bar --> */}
          <div className="flex justify-center items-center text-white relative top-[-42px]">
            <ul className="hidden md:flex">
              <li className="mr-4">Home</li>
              <li className="mr-4">Web development</li>
              <li className="mr-4">UX/UI design</li>
              <li className="mr-4">Web design</li>
              <li className="mr-4">Contact</li>
            </ul>
          </div>
        </div>

        {/* home section */}
        <section className="lg:px-20 lg:py-10 lg:top-5 left-0 top-[-2.75rem] relative xl:mt-1 xl:ml-2">
          <div className="w-75 h-[134px] left-[1rem] top-[6rem] absolute flex-col justify-start items-start gap-4 inline-flex lg:relative lg:top-auto lg:left-auto lg:w-full lg:h-auto">
            <div className="w-[190px] h-[30px] justify-center items-center inline-flex sm:w-[220px] lg:w-auto lg:text-4xl">
              <div className="text-orange-500 text-opacity-90 text-[28px] font-semibold font-['Open Sans'] sm:text-[32px] lg:text-4xl">
                Load of pixels
              </div>
            </div>
            <div className="w-75 h-[88px] justify-center items-center inline-flex lg:w-auto lg:text-5xl lg:mt-6">
              <div className="text-white text-[36px] font-bold font-['Poppins'] sm:text-white sm:text-[4rem] relative sm:top-[3rem] sm:font-semibold sm:font-['Inter'] lg:text-8xl xl:mb-6">
                Web development
                <br />
                UX/UI design
              </div>
            </div>
          </div>

          <div className="w-70 h-[172.55px] left-[1rem] top-[17rem] absolute flex-col justify-center items-start gap-[18.55px] inline-flex sm:w-[682px] sm:h-[241px] sm:relative sm:top-[14.5rem] lg:relative lg:top-16 lg:left-auto lg:w-full lg:h-auto lg:text-lg lg:mt-10">
            <div className="text-white text-base font-normal font-['Open Sans'] lg:text-base">
              I specialize in utilizing a range of technologies to create
              dynamic and engaging websites.
            </div>
            <div className="text-white text-base font-normal font-['Open Sans'] lg:text-base">
              Proficient in JavaScript Html and Css i employ these foundational
              languages to craft interactive and visually appealing user
              interfaces.
            </div>
          </div>

          <div className="w-[114px] h-8 absolute left-[60%] xl:left[76%] top-[30rem] xl:top-[4rem] px-1.5 py-1 bg-fuchsia-200 bg-opacity-90 rounded-[3px] justify-center items-center gap-2 inline-flex sm:w-[108.60px] sm:h-[36.60px] sm:left-[80%] sm:p-[8.80px] sm:bg-opacity-0 sm:rounded-sm sm:border sm:border-white sm:border-opacity-90 sm:justify-center sm:items-center sm:gap-[8.80px] sm:inline-flex lg:relative lg:top-auto lg:left-[82%] lg:w-auto lg:text-base lg:mt-10">
            <div className="text-black text-xs font-semibold font-['Open Sans'] sm:text-white lg:text-base">
              Get in touch
            </div>
          </div>
        </section>

        {/* web and cloud section */}
        <div>
          <div className="w-[190px] h-[30px] justify-center items-center inline-flex sm:w-[220px] lg:w-auto lg:text-4xl left-[1rem] top-[32rem] absolute">
            <div className="text-orange-500 text-opacity-90 text-[28px] font-semibold font-['Open Sans'] sm:text-[32px] lg:text-4xl">
              Web and Cloud Development
            </div>
          </div>

          <div className="w-75 h-[88px] justify-center items-center inline-flex lg:w-auto lg:text-5xl lg:mt-6 left-[1rem] top-[35.5rem] absolute pr-[42px]">
            <div className="text-white text-[36px] font-bold font-['Poppins'] sm:text-white sm:text-[4rem] relative sm:top-[3rem] sm:font-semibold sm:font-['Inter'] lg:text-8xl xl:mb-6">
              using AWS and
              <br />
              Microsoft Azure
            </div>
          </div>

          <img
            className="w-80 h-[248.57px] xl:w-[100%] xl:h-[350px] absolute left-[1rem] top-[41rem] rounded-[3px] border border-gray-300 max-w-[90%]
    sm:w-[98%] sm:h-[328.12px] sm:absolute sm:left-[5%] mb-4 sm:rounded-[1.02px] sm:border sm:border-black-700 sm:border-opacity-90"
            src="/cloud.jpg"
            alt="cloud-infrastructure"
          />

          <div className="w-72 h-[172.55px] left-[1rem] top-[64rem] absolute flex-col justify-center items-start gap-[18.55px] inline-flex sm:w-[682px] sm:h-[241px] sm:relative sm:top-[14.5rem] lg:relative lg:top-16 lg:left-auto lg:w-full lg:h-auto lg:text-lg lg:mt-10">
            <div className="text-white text-base font-normal font-['Open Sans'] lg:text-base">
              With knowledge of Amazon web services and Microsoft Azure i
              leverage the power of the cloud to manage and secure my clients
              infrastructure.
              <br />
              <br />
            </div>
            <div className="text-white text-base font-normal font-['Open Sans'] lg:text-base">
              Using the power of Nodes.js i develop scalable and efficient
              server-side applications. Using React and Next.js i build dynamic
              and responsive web applications providing seamless user
              experiences across various devices.
            </div>
          </div>

          <div className="w-[114px] h-8 absolute left-[60%] xl:left[76%] top-[75rem] px-1.5 py-1 bg-fuchsia-200 bg-opacity-90 rounded-[3px] justify-center items-center gap-2 inline-flex sm:w-[108.60px] sm:h-[36.60px] sm:left-[80%] sm:p-[8.80px] sm:bg-opacity-0 sm:rounded-sm sm:border sm:border-white sm:border-opacity-90 sm:justify-center sm:items-center sm:gap-[8.80px] sm:inline-flex lg:relative lg:top-auto lg:left-[82%] lg:w-auto lg:text-base lg:mt-10">
            <div className="text-black text-xs font-semibold font-['Open Sans'] sm:text-white lg:text-base">
              Get in touch
            </div>
          </div>

          <div className="w-[294.48px] h-[953.71px] absolute left-[13%] top-[81rem] flex-col justify-start items-center gap-[33px] inline-flex">
            <div className="w-[247px] h-11 justify-center items-center inline-flex">
              <div className="text-white text-[29px] font-bold font-['Poppins']">
                Popular services
              </div>
            </div>
          </div>
        </div>

        {/* web design section */}
        <section className="web-apps-section">
          <div className="web-apps w-[215px] h-[59px] absolute left-[1rem] top-[133rem] justify-center items-center inline-flex">
            <div className="text-fuchsia-200 text-opacity-90 text-[22px] font-semibold font-['Open Sans']">
              Google UX Designer and web design
            </div>
          </div>

          <div className="w-75 h-[88px] absolute left-[1rem] top-[136.5rem] pr-[42px] justify-start items-center inline-flex">
            <div className="text-white text-[36px] font-bold font-['Poppins']">
              Design and develop
              <br />
              custom web apps
            </div>
          </div>

          <img
            className="web-apps-image w-80 h-[248.57px] absolute left-[1rem] top-[142rem] rounded-[3px] border border-gray-300 max-w-[90%]"
            src="/mobile-wireframe.jpeg"
          />

          <div className="web-apps-para w-72 h-[173px] absolute left-[1rem] top-[168rem] flex-col justify-end items-start gap-[4.55px] inline-flex">
            <div className="text-white text-[1rem] font-normal font-['Open Sans']">
              Our approach to web design is characterized by a dynamic fusion of
              cutting-edge tools and technologies to craft responsive websites
              and web applications that stand out in the digital landscape.
              <br />
              <br />
            </div>
            <div className="text-white text-[1rem] font-normal font-['Open Sans']">
              At the core of our design process, we harness the power of two
              industry- leading design platforms: Figma and Adobe XD. These
              versatile tools allow us to conceptualize, prototype, and refine
              our designs with precision and efficiency.
            </div>
          </div>
          <div className="web-apps-btn w-[114px] h-8 absolute left-[66%] top-[178rem] px-1.5 py-1 bg-fuchsia-200 bg-opacity-90 rounded-[3px] justify-center items-center gap-2 inline-flex">
            <div className="text-black text-xs font-semibold font-['Open Sans']">
              Get in touch
            </div>
          </div>
        </section>

        <div className="w-[292.43px] h-[434.97px] relative left-[1rem] top-[182rem]">
          <div className="top-0 absolute text-white text-[29px] font-bold font-['Poppins']">
            ready to explore
          </div>
          <div className="w-[325px] top-[68.43px] absolute text-white text-base font-normal font-['Open Sans']">
            We use Figma to design custom web apps and HTML CSS and JavaScript
            to build fully responsive websites.
            <br />
            <br />
            Harnessing the power of node.js and Next.js to build and deploy
            scalable and efficient web applications
            <br />
            <br />
            We also use Microsoft Azure and AWS to manage and secure our clients
            infrastructure.
            <br />
            <br />
            Feel free to contact us for a free consultation.
          </div>

          <div className="hidden w-[292.43px] h-[33.83px] relative">
            <div className="w-[89.82px] h-[33.65px] px-[10.41px] py-[8.33px] left-[202.61px] top-0 absolute bg-fuchsia-200 bg-opacity-90 rounded-md justify-center items-center gap-[8.33px] inline-flex">
              <div className="text-black text-xs font-semibold font-['Open Sans']">
                Get started
              </div>
            </div>
            <div className="w-[193.51px] h-[33.83px] left-0 top-0 absolute rounded-md flex-col justify-start items-start inline-flex">
              <div className="w-[193.51px] h-[33.83px] bg-zinc-800 rounded border border-zinc-900 border-opacity-50" />
              <div className="text-white text-xs font-light font-['Open Sans']">
                enter your email
              </div>
            </div>
          </div>
        </div>

        {/* services section */}
        <div className="w-[176.96px] h-[120.56px] relative left-[1rem] top-[193rem] text-white">
          <span className="text-base font-bold font-[Open Sans]">
            Services
            <br />
          </span>
          <span className="text-base font-normal font-[Open Sans] underline text-gray-300">
            Web development
            <br />
          </span>
          <span className="text-base font-normal font-[Open Sans] underline text-gray-300">
            UX/UI design
            <br />
          </span>
          <span className="text-base font-normal font-[Open Sans] underline text-gray-300">
            Web design
            <br />
          </span>
          <span className="text-base font-normal font-[Open Sans] underline text-gray-300">
            Software development
          </span>
        </div>

        <div className="w-[176.96px] h-[120.56px] relative left-[1rem] top-[199rem] text-white">
          <span className="text-white text-base font-bold font-[Open Sans]">
            About
            <br />
          </span>
          <span className="text-white text-base font-normal font-[Open Sans] underline text-gray-300">
            Our story
            <br />
            benefits
            <br />
            team
            <br />
            careers
          </span>
        </div>

        <div className="w-[176.96px] h-[120.56px] relative left-[1rem] top-[203rem] text-white">
          <span className="text-white text-base font-bold font-[Open Sans]">
            Help
            <br />
          </span>
          <span className="text-white text-base font-normal font-[Open Sans] underline text-gray-300">
            FAQS
            <br />
            Contact
          </span>
        </div>

        {/* copyright */}
        <div className="w-[280px] h-[25.18px] relative left-[3rem] top-[207.5rem] text-white text-base font-normal font-['Open Sans']">
          Copyright load of pixels 2024
        </div>
      </main>
    </body>
  );
}
