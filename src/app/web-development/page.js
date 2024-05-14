import Image from "next/image";

export default function webDevelopment() {
  return (
    // navbar section
    <body className="w-80 h-[5049px] sm:w-[767px] sm:h-[5040px]">
      <main
        className="w-80 h-[5049px] relative bg-neutral-600 
        sm:bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900 sm:w-[767px] sm:h-[5040px] 
        md:bg-zinc-700"
      >
        <div
          className="w-80 h-[52px] relative 
                        sm:w-[767px] sm:h-[50px] sm:py-[7px] sm:flex-col sm:justify-start sm:items-start sm:gap-2.5 sm:inline-flex"
        >
          <div
            className="w-80 h-[52px] left-0 top-0 absolute bg-neutral-800 border-b border-white
                          sm:w-[767px] sm:bg-neutral-800"
          />
          <div
            className="w-[36%] h-[25px] left-[33%] top-[13.77px] absolute
                          sm:w-[200px] sm:h-[40px] sm:left-[1rem] sm:top-[10px]"
          >
            <div
              className="left-0 top-0 absolute text-white text-opacity-90 text-lg font-normal font-['Open Sans']
                          sm:text-[30px] sm:left-0 sm:text-white sm:font-bold sm:mb-10px"
            >
              load of pixels
            </div>
            <div
              className="w-[84px] left-[84px] top-[27px] absolute text-white text-[5.50px] font-medium font-['Poppins']
                            sm:w-[85px] sm:left-[118px] sm:top-[29px] sm:text-[7px]"
            >
              design and development
            </div>
          </div>

          <div
            className="left-[92%] top-[23%] absolute flex-col justify-start items-start gap-[3px] inline-flex
                          sm:left-[96%]"
          >
            <div className="w-[18px] h-[1.91px] bg-white" />
            <div className="w-[18px] h-[1.91px] bg-white" />
            <div className="w-[18px] h-[1.91px] bg-white" />
          </div>
        </div>

        {/* home section */}
        <section>
          <div className="w-75 h-[134px] left-[1rem] top-[6rem] absolute flex-col justify-start items-start gap-4 inline-flex">
            <div
              className="w-[190px] h-[30px] justify-center items-center inline-flex
                            sm:w-[220px]"
            >
              <div
                className="text-fuchsia-200 text-opacity-90 text-[28px] font-semibold font-['Open Sans']
                              sm:text-[32px]"
              >
                Load of pixels
              </div>
            </div>
            <div className="w-75 h-[88px] justify-center items-center inline-flex">
              <div
                className="text-white text-[36px] font-bold font-['Poppins']
                              sm:text-white sm:text-[4rem] relative sm:top-[3rem] sm:font-semibold sm:font-['Inter']"
              >
                Web development
                <br />
                UX/UI design
              </div>
            </div>
          </div>

          <div
            className="w-72 h-[172.55px] left-[1rem] top-[16rem] absolute flex-col justify-center items-start gap-[18.55px] inline-flex
                          sm:w-[682px] sm:h-[241px] sm:relative sm:top-[14.5rem]"
          >
            <div className="text-white text-base font-normal font-['Open Sans']">
              I specialize in utilizing a range of technologies to create
              dynamic and engaging websites.
            </div>
            <div className="text-white text-base font-normal font-['Open Sans']">
              Proficient in JavaScript Html and Css i employ these foundational
              languages to craft interactive and visually appealing user
              interfaces.
            </div>
          </div>

          <div
            className="w-[114px] h-8 absolute left-[66%] top-[28rem] px-1.5 py-1 bg-fuchsia-200 bg-opacity-90 rounded-[3px] justify-center items-center gap-2 inline-flex
                          sm:w-[108.60px] sm:h-[36.60px] sm:left-[80%] sm:p-[8.80px] sm:bg-opacity-0 sm:rounded-sm sm:border sm:border-white sm:border-opacity-90 sm:justify-center sm:items-center sm:gap-[8.80px] sm:inline-flex"
          >
            <div
              className="text-black text-xs font-semibold font-['Open Sans']
                            sm:text-white"
            >
              Get in touch
            </div>
          </div>
        </section>

        {/* web and cloud section */}
        <div>
          <div className="w-[190px] h-[59px] absolute left-[1rem] top-[32rem] justify-center items-center inline-flex">
            <div className="text-fuchsia-200 text-opacity-90 text-[22px] font-semibold font-['Open Sans']">
              Web and Cloud Development
            </div>
          </div>

          <div className="w-75 h-[88px] absolute left-[1rem] top-[35.5rem] pr-[42px] justify-start items-center inline-flex">
            <div className="text-white text-[36px] font-bold font-['Poppins']">
              using AWS and
              <br />
              Microsoft Azure
            </div>
          </div>

          <img
            className="w-80 h-[248.57px] absolute left-[1rem] top-[41rem] rounded-[3px] border border-gray-300 max-w-[90%]
            sm:w-[98%] sm:h-[328.12px] sm:absolute sm:left-[5%] mb-4 sm:rounded-[1.02px] sm:border sm:border-black-700 sm:border-opacity-90"
            src="/cloud.jpg"
            alt="cloud-infrastructure"
          />

          <div className="w-72 h-[173px] absolute left-[1rem] top-[64rem] flex-col justify-end items-start gap-[4.55px] inline-flex">
            <div className="text-white text-[1rem] font-normal font-['Open Sans']">
              With knowledge of Amazon web services and Microsoft Azure i
              leverage the power of the cloud to manage and secure my clients
              infrastructure.
              <br />
              <br />
            </div>
            <div className="text-white text-[1rem] font-normal font-['Open Sans']">
              Using the power of Nodes.js i develop scalable and efficient
              server-side applications. Using React and Next.js i build rebust
              and responsive web applications providing seamless user
              experiences across various devices.
            </div>
          </div>
          <div className="w-[114px] h-8 absolute left-[66%] top-[75rem] px-1.5 py-1 bg-fuchsia-200 bg-opacity-90 rounded-[3px] justify-center items-center gap-2 inline-flex">
            <div className="text-black text-xs font-semibold font-['Open Sans']">
              Get in touch
            </div>
          </div>

          <div className="w-[294.48px] h-[953.71px] absolute left-[13%] top-[81rem] flex-col justify-start items-center gap-[33px] inline-flex">
            <div className="w-[247px] h-11 justify-center items-center inline-flex">
              <div className="text-white text-[29px] font-bold font-['Poppins']">
                Popular services
              </div>
            </div>
            <img
              className="w-[294.48px] h-[248.57px] rounded-md border border-gray-300"
              src="/server.jpg"
              alt="server-infrastructure"
            />
            <img
              className="w-[294.48px] h-[248.57px] rounded-md border border-gray-300"
              src="/cloud-cpu.jpg"
              alt="cloud-computer"
            />
            <img
              className="w-[294.48px] h-[248.57px] rounded-md border border-gray-300"
              src="/AI-image.jpg"
              alt="AI-assistant"
            />
            <div className="px-2.5 py-2 bg-fuchsia-200 bg-opacity-90 rounded-[5px] justify-center items-center gap-2 inline-flex">
              <div className="text-black text-xs font-semibold font-['Open Sans']">
                View services
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
