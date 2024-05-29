

export const ContactMe = () => {
  return (
    <section className="py-12 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <form className=" p-6 ">
            <div className="mb-4">
              <input type="text" id="name" name="name" placeholder="Your name" className="w-full px-3 py-2 border-2 border-black rounded-lg focus:outline-none" />
            </div>
            <div className="mb-4">
              <input type="email" placeholder="Email" id="email" name="email" className="w-full px-3 py-2 border-2 border-black rounded-lg focus:outline-none" />
            </div>
            <div className="mb-4">
              <input type="text" placeholder="Your page (if exist)" id="page" name="page" className="w-full px-3 py-2 border-2 border-black rounded-lg focus:outline-none" />
            </div>
            <div className="mb-4">
              <textarea id="help" name="help" placeholder="How can i Help?*" className="w-full px-3 py-2 border-2 border-black rounded-lg focus:outline-none" rows={4}></textarea>
            </div>
            <div>
              <button type="submit" className="px-8 z-30 py-4 bg-black rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#404040] after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-500 after:transition-all after:duration-500 transition-all duration-500 text-2xl">Submit</button>
            </div>
          </form>
        </div>
        
        <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Let&#8217;s <span className="border-text">Talk </span>for <br></br> Something special</h2>
          <p className="text-lg text-[#404040] mb-4">
            I'm excited to collaborate on new projects and help bring your ideas to life. Whether you have a question or just want to say hi, feel free to reach out.
          </p>
          <p className="text-lg text-[#404040]">
        <a href="mailto:aalan.dev8@gmail.com" className="text-black font-bold underline">aalan.dev8@gmail.com</a>
          </p>
        </div>
        
      </div>
    </section>
  );
};