'use client';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_09yk8c4',        // e.g. service_xyz
        'template_tdm6f6s',       // e.g. template_abc
        form.current,
        'ypEE9_8MmjeMW4rlj'         // e.g. EoHu12345Abc
      )
      .then(
        () => {
          alert('Confirmation email sent to you!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send confirmation email. Try again.');
        }
      );
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-6 font-poppins">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Contact Me
          </h1>
          <div className="w-24 h-1 bg-green-400 mx-auto rounded-full"></div>
          <p className="text-neutral-400 mt-6 text-lg">
            Let's start a conversation. I'd love to hear from you.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-800 overflow-hidden">
          <div className="p-6 md:p-4">
            <form ref={form} onSubmit={sendEmail} className="space-y-8">
              {/* Name Field */}
              <div className="group">
                <label 
                  htmlFor="from_name" 
                  className="block text-sm font-medium text-green-400 mb-3 transition-colors"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="from_name"
                  required
                  className="w-full px-4 py-4 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 hover:border-neutral-600"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Field */}
              <div className="group">
                <label 
                  htmlFor="to_email" 
                  className="block text-sm font-medium text-green-400 mb-3 transition-colors"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="to_email"
                  id="to_email"
                  required
                  className="w-full px-4 py-4 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 hover:border-neutral-600"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Field */}
              <div className="group">
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium text-green-400 mb-3 transition-colors"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="6"
                  required
                  className="w-full px-4 py-4 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent transition-all duration-300 hover:border-neutral-600 resize-vertical"
                  placeholder="Tell me what's on your mind..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-green-400 hover:bg-green-500 text-neutral-900 font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-green-400/20 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-neutral-900 active:scale-[0.98]"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center mt-8">
          <p className="text-neutral-500 text-sm">
            I'll get back to you as soon as possible
          </p>
        </div>
      </div>
    </div>
  );
}