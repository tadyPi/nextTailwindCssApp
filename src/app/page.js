// Component: Home
// Description: This is the home page of the website.
// It contains the navbar, home section, web and cloud section,
// web design section, services section, and the footer section.

export default function Home() {
  return (
    // navbar section
    <body className="w-full min-h-screen sm:w-full md:w-full lg:w-full xl:w-full">
      <main
        className="w-full min-h-screen overflow-auto relative bg-zinc-600 
        sm:bg-zinc-900 sm:w-full  
        md:w-full md:bg-blue-500
        lg:w-full lg:bg-green-500
        xl:w-full xl:bg-zinc-800"
      >
        <div
          className="navBar w-[100vw] h-15 left-0 border-b border-zinc-500
          sm:h-[50px]
          md:h-[55px] 
        xl:h-[60px]"
        >
          <div
            className="logoFrame w-[10.5rem] mt-[0.3rem] h-11 relative ml-2 flex-col justify-start items-start inline-flex
          lg:w-64 lg:top-3
          xl:w-72 xl:h-14 xl:top-0"
          >
            <div
              className="LoadOfPixel text-left text-zinc-200 text-2xl font-semi-bold
            lg:text-3xl "
            >
              Load of pixel
            </div>
            <div
              className="bracketOfSet w-4 h-4 relative
            lg:w-5 lg:h-5"
            >
              <img
                className="bracketFrame w-6 h-6 left-[182px] top-[-34px] absolute
                lg:left-[228px] lg:top-[-40.5px] lg:w-8 lg:h-8"
                src="/orange-brackets.svg"
                alt="orange-brackets"
              />

              <div
                className=" w-[10.5rem] h-3 left-[57px] top-[-1.2rem] relative justify-center items-start inline-flex
              lg:left-[97px] lg:mt-3"
              >
                <div
                  className="CloudAndWebDevelopment text-white text-[5.8px] font-normal font-['Open Sans'] leading-3
                lg:text-[7px]"
                >
                  cloud and web development
                </div>
              </div>
            </div>
          </div>

          <div
            className="burger-menu w-4 h-4 bg-cover absolute ml-[72px] top-[0.3rem] border border-white border-opacity-90 rounded-[3px] justify-center items-center gap-2 inline-flex
            sm:right-1 sm:w-4 sm:h-4
            xl:hidden"
            src="/vector.svg"
            alt="Menu-icon"
          ></div>

          <div
            className="MobileSocial w-20 h-3.5 absolute top-[1.6rem] right-[1px] justify-center items-start gap-[2px] inline-flex
            sm:top-[0.6rem] sm:right-[28px] sm:pb-px 
            lg:right-8 lg:top-5 lg:w-40 lg:h-9 lg:pt-1 lg:justify-center lg:items-start lg:gap-1 lg:inline-flex
            xl:right-[1rem] xl:top-3"
          >
            <div
              className="FollowUs w-30 relative text-neutral-200 text-[11px] left-1 font-medium font-['Poppins']
                sm:left-[-0.25rem]
            xl:w-40 xl:text-zinc-400 xl:text-[18px] xl:left-4"
            >
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
          <div
            className="flex justify-center items-center text-white relative top-[-42px]
            sm:top-[-36px] sm:justify-start sm:items-start
          xl:top-[-59px] xl:justify-center xl:items-center xl:text-[32px]"
          >
            <ul
              className="hidden mt-1 
              sm:flex sm:text-[12px] sm:relative sm:left-[11.7rem]
              md:left-[12.7rem] md:text-[16px]
            xl:text-[20px] xl:w-[100vw] xl:left-[31%]"
            >
              <li className="mr-4">Home</li>
              <li className="mr-4">Web development</li>
              <li className="mr-4">UX/UI design</li>
              <li className="mr-4">Web design</li>
              <li className="mr-4">Contact</li>
            </ul>
          </div>
        </div>

        {/* home section */}
        <section
          className="left-[-10px] top-[-3.75rem] relative 
        lg:px-20 lg:py-10 lg:top-5
        xl:mt-1 xl:ml-12 xl:pl:-7 xl:top-7"
        >
          <div className="w-75 h-[134px] left-[1rem] top-[6rem] absolute flex-col justify-start items-start gap-4 inline-flex lg:relative lg:top-auto lg:left-auto lg:w-full lg:h-auto">
            <div className="w-[190px] h-[30px] justify-center items-center inline-flex sm:w-[220px] lg:w-auto lg:text-4xl">
              <div className="text-orange-500 text-opacity-90 text-[28px] font-semibold font-['Open Sans'] sm:text-[32px] lg:text-4xl">
                Load of pixels
              </div>
            </div>
            <div className="w-75 h-[88px] justify-center items-center inline-flex lg:w-auto lg:text-5xl lg:mt-6">
              <div className="text-white text-[36px] font-bold font-['Poppins'] sm:text-white sm:text-[3.8rem] relative sm:top-[3rem] sm:font-semibold sm:font-['Inter'] lg:text-8xl xl:mb-6">
                Web development
                <br />
                UX/UI design
              </div>
            </div>
          </div>

          <div className="w-70 h-[172.55px] left-[1rem] top-[17rem] absolute flex-col justify-center items-start gap-[18.55px] inline-flex sm:w-[640px] sm:h-[241px] sm:relative sm:top-[17.5rem] lg:relative lg:top-16 lg:left-auto lg:w-full lg:h-auto lg:text-lg lg:mt-10">
            <div className="text-white sm:top-4 text-base font-normal font-['Open Sans'] lg:text-base">
              I specialize in utilizing a range of technologies to create
              dynamic and engaging websites.
            </div>
            <div className="text-white text-base font-normal font-['Open Sans'] lg:text-base">
              Proficient in JavaScript Html and Css i employ these foundational
              languages to craft interactive and visually appealing user
              interfaces.
            </div>
          </div>

          <div
            className="w-[114px] h-8 absolute left-[60%] top-[30rem] px-1 py-1 bg-fuchsia-600 bg-opacity-90 rounded-[3px] justify-center items-center gap-2 inline-flex
          sm:-[78%] sm:top[28rem] sm:w-[108.60px] sm:h-[36.60px] sm:left-[70%] sm:p-[8.80px] sm:bg-opacity-0 sm:rounded-sm sm:border sm:border-white sm:border-opacity-90 sm:justify-center sm:items-center sm:gap-[8.80px] sm:inline-flex
          lg:relative lg:top-auto lg:left-[82%] lg:w-auto lg:text-base lg:mt-10
          xl:left[76%] xl:top-[4rem]"
          >
            <div className="text-white text-xs font-semibold font-['Open Sans'] sm:text-white lg:text-base">
              Get in touch
            </div>
          </div>
        </section>

        {/* web and cloud section */}
        <div>
          <div
            className="w-[100%] h-[30px] left-[10px] top-[36rem] absolute justify-center items-center inline-flex 
          sm:w-[450px] sm:top-[60rem] sm:justify-center sm:items-center sm:flex
          lg:w-auto lg:text-4xl"
          >
            <div
              className="text-orange-500 text-opacity-90 text-[28px] font-semibold font-['Open Sans'] 
            sm:text-[32px] 
            lg:text-4xl
            xl:top-2"
            >
              Web and Cloud Development
            </div>
          </div>

          <div
            className="w-75 h-[88px] left-[10px] top-[39rem] absolute pr-[42px] justify-center items-center inline-flex 
          lg:w-auto lg:text-5xl lg:mt-6 "
          >
            <div className="text-white text-[36px] font-bold font-['Poppins'] sm:text-white sm:text-[4rem] relative sm:top-[3rem] sm:font-semibold sm:font-['Inter'] lg:text-8xl xl:mb-6">
              using AWS and
              <br />
              Microsoft Azure
            </div>
          </div>

          <img
            className="w-80 h-[248.57px] absolute left-[1rem] top-[41rem] rounded-[3px] mb-4 border border-gray-300 max-w-[90%]
            sm:w-[98%] sm:h-[328.12px] sm:absolute sm:left-[5%] sm:top-[34rem] sm:rounded-[1.02px] sm:border sm:border-black-700 sm:border-opacity-90
            xl:w-[100%] xl:h-[350px] xl:top-[39rem]"
            src="/cloud.jpg"
            alt="cloud-infrastructure"
          />

          <div
            className="w-72 h-[172.55px] left-[1rem] top-[64rem] absolute flex-col justify-center items-start gap-[18.55px] inline-flex 
          sm:w-[682px] sm:h-[241px] sm:relative sm:top-[50rem] 
          lg:relative lg:top-16 lg:left-auto lg:w-full lg:h-auto lg:text-lg lg:mt-10
          xl:top-90"
          >
            <div
              className="text-white text-[16px] font-light font-['Open Sans'] 
            lg:text-base"
            >
              With knowledge of Amazon web services and Microsoft Azure i
              leverage the power of the cloud to manage and secure my clients
              infrastructure.
              <br />
              <br />
            </div>
            <div
              className="text-white text-base font-normal font-['Open Sans'] 
            lg:text-base"
            >
              Using the power of Nodes.js i develop scalable and efficient
              server-side applications. Using React and Next.js i build dynamic
              and responsive web <br />
              applications providing seamless user experiences across various
              devices.
            </div>
          </div>

          <div
            className="w-[114px] h-8 absolute left-[60%] xl:left[76%] top-[75rem] px-1.5 py-1 bg-fuchsia-200 bg-opacity-90 rounded-[3px] justify-center items-center gap-2 inline-flex 
          sm:w-[108.60px] sm:h-[36.60px] sm:left-[78%] sm:p-[8.80px] sm:bg-opacity-0 sm:rounded-sm sm:border sm:border-white sm:border-opacity-90 sm:justify-center sm:items-center sm:gap-[8.80px] sm:inline-flex 
          lg:relative lg:top-auto lg:left-[82%] lg:w-auto lg:text-base lg:mt-10"
          >
            <div
              className="text-black text-xs font-semibold font-['Open Sans'] 
            sm:text-white 
            lg:text-base"
            >
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
