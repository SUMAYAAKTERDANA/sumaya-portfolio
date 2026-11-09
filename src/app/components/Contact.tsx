import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contact <span className="text-blue-500">Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Info Left Side */}
          <div className="md:w-1/3 space-y-6">
            <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg border border-gray-700">
              <FaEnvelope className="text-blue-500 text-2xl" />
              <div>
                <h4 className="font-semibold text-gray-300">Email</h4>
                <p className="text-sm text-gray-400">info.sumaya935@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg border border-gray-700">
              <FaPhoneAlt className="text-blue-500 text-2xl" />
              <div>
                <h4 className="font-semibold text-gray-300">Phone</h4>
                <p className="text-sm text-gray-400">+880 1300279556</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-lg border border-gray-700">
              <FaMapMarkerAlt className="text-blue-500 text-2xl" />
              <div>
                <h4 className="font-semibold text-gray-300">Location</h4>
                <p className="text-sm text-gray-400">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Contact Form Right Side */}
          <div className="md:w-2/3 bg-gray-800 p-8 rounded-lg border border-gray-700">
           
            <form 
              action="mailto:info.sumaya935@gmail.com" 
              method="POST" 
              encType="text/plain"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="Name"
                  placeholder="Your Name" 
                  className="w-full bg-gray-900 text-white p-3 rounded border border-gray-700 focus:outline-none focus:border-blue-500"
                  required
                />
                <input 
                  type="email" 
                  name="Email"
                  placeholder="Your Email" 
                  className="w-full bg-gray-900 text-white p-3 rounded border border-gray-700 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <input 
                type="text" 
                name="Subject"
                placeholder="Subject" 
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-700 focus:outline-none focus:border-blue-500"
                required
              />
              <textarea 
                rows={4}
                name="Message"
                placeholder="Your Message" 
                className="w-full bg-gray-900 text-white p-3 rounded border border-gray-700 focus:outline-none focus:border-blue-500"
                required
              ></textarea>
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}