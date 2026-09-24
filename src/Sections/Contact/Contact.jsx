import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaLinkedin, FaGithub, FaClock } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // show success state
    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative text-body">
      
      {/* Ambient Glows */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-sage-light/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-clay/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Section Top Center Badge */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-xs font-bold tracking-widest text-sage-dark uppercase bg-sand/80 px-4 py-2 rounded-full inline-block border border-stone shadow-sm">
            Get In Touch
          </span>
        </div>

        {/* Clean Modern Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Title & Sleek Form */}
          <div className="lg:col-span-6 space-y-8" data-aos="fade-right">
            
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-ink">
                Let's start a{" "}
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-sage-dark via-sage to-clay"
                  style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700, fontSize: "1.15em" }}
                >
                  conversation
                </span>
              </h2>
              
              <p className="text-body text-base max-w-md">
                Have a project or partnership in mind? Drop a message below and I'll get back to you soon.
              </p>
            </div>

            {/* Interactive Form Card */}
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-stone shadow-xl shadow-sage-dark/10">
              {submitted ? (
                <div className="text-center py-10 space-y-3">
                  <div className="w-14 h-14 bg-gradient-to-tr from-sage-dark to-sage text-white rounded-2xl flex items-center justify-center mx-auto text-xl shadow-lg shadow-sage-dark/30">
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-ink">Message Sent Successfully!</h3>
                  <p className="text-body text-sm">Thank you for reaching out.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-3 px-6 py-2 rounded-xl bg-sage-dark text-white text-sm font-semibold hover:bg-ink transition-all cursor-pointer shadow-md"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-sage-dark mb-2">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/80 border border-stone focus:outline-none focus:border-sage-dark focus:ring-2 focus:ring-sage/20 text-ink placeholder-body/65 text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-sage-dark mb-2">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/80 border border-stone focus:outline-none focus:border-sage-dark focus:ring-2 focus:ring-sage/20 text-ink placeholder-body/65 text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-sage-dark mb-2">Message</label>
                    <textarea
                      rows="4"
                      required
                      placeholder="What's on your mind..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-2xl bg-white/80 border border-stone focus:outline-none focus:border-sage-dark focus:ring-2 focus:ring-sage/20 text-ink placeholder-body/65 text-sm transition-all resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-sage-dark to-sage text-white font-bold text-sm flex items-center justify-center gap-2 hover:from-ink hover:to-sage-dark transition-all shadow-lg shadow-sage-dark/30 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <FaPaperPlane className="text-xs" />
                  </button>
                </form>
              )}
            </div>

          </div>

          {/* Elegant Structured Contact Information */}
          <div className="lg:col-span-6 lg:pl-12 flex flex-col justify-center space-y-6 pt-4" data-aos="fade-left">
            
            {/* Address */}
            <div className="flex items-start gap-5 p-5 rounded-2xl bg-white/50 border border-stone hover:bg-white/85 transition-all group shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-sand border border-stone flex items-center justify-center text-sage-dark shrink-0">
                <FaMapMarkerAlt />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-widest text-sage-dark">Address</h4>
                <p className="text-ink text-base font-semibold">Faisalabad, Pakistan</p>
                <p className="text-body text-sm">University of Agriculture Faisalabad</p>
              </div>
            </div>

            {/* Freelance / Response Time Status */}
            <div className="flex items-start gap-5 p-5 rounded-2xl bg-white/50 border border-stone hover:bg-white/85 transition-all group shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-sand border border-stone flex items-center justify-center text-sage-dark shrink-0">
                <FaClock />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-widest text-sage-dark">Freelance / Support</h4>
                <p className="text-ink text-base font-semibold">Available 24/7</p>
                <p className="text-body text-sm">Fast response within 24 hours</p>
              </div>
            </div>

            {/* Mail */}
            <div className="flex items-start gap-5 p-5 rounded-2xl bg-white/50 border border-stone hover:bg-white/85 transition-all group shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-sand border border-stone flex items-center justify-center text-sage-dark shrink-0">
                <FaEnvelope />
              </div>
              <div className="space-y-1">
                <h4 className="text-xs font-bold uppercase tracking-widest text-sage-dark">Mail</h4>
                <a href="mailto:hamnat992@gmail.com" className="text-ink text-base font-semibold hover:text-sage-dark transition-colors block">
                  hamnat992@gmail.com
                </a>
              </div>
            </div>

            {/* Social Follow */}
            <div className="flex items-center justify-between p-5 rounded-2xl bg-white/50 border border-stone shadow-sm">
              <h4 className="text-xs font-bold uppercase tracking-widest text-sage-dark">Social Profiles</h4>
              <div className="flex items-center gap-3">
                <a href="https://github.com/HamnaTanveer" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-sand border border-stone flex items-center justify-center text-ink hover:bg-gradient-to-r hover:from-sage-dark hover:to-sage hover:text-white transition-all">
                  <FaGithub className="text-sm" />
                </a>
                <a href="https://www.linkedin.com/in/hamna-tanveer01/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-sand border border-stone flex items-center justify-center text-ink hover:bg-gradient-to-r hover:from-sage-dark hover:to-sage hover:text-white transition-all">
                  <FaLinkedin className="text-sm" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}