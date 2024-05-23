

export const ContactMe = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        
        <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <form className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-[#404040] font-bold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-[#404040] font-bold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg focus:outline-none" />
            </div>
            <div className="mb-4">
              <label htmlFor="page" className="block text-[#404040] font-bold mb-2">Page (if exist)</label>
              <input type="text" id="page" name="page" className="w-full px-3 py-2 border rounded-lg focus:outline-none" />
            </div>
            <div className="mb-4">
              <label htmlFor="help" className="block text-[#404040] font-bold mb-2">How can I help?</label>
              <textarea id="help" name="help" className="w-full px-3 py-2 border rounded-lg focus:outline-none" rows={4}></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-black text-white py-2 rounded-lg">Submit</button>
            </div>
          </form>
        </div>
        
        <div className="w-full md:w-1/2 md:pl-8 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Let's Talk Together</h2>
          <p className="text-lg text-[#404040] mb-4">
            I'm excited to collaborate on new projects and help bring your ideas to life. Whether you have a question or just want to say hi, feel free to reach out.
          </p>
          <p className="text-lg text-[#404040]">
        <a href="mailto:your.email@example.com" className="text-black font-bold">aalan.dev8@gmail.com</a>
          </p>
        </div>
        
      </div>
    </section>
  );
};