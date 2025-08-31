import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle, XCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        'service_dkm5xhk',      // ✅ Service ID
        'template_4e0chij',     // ✅ Template ID
        {
          to_name: 'Prince',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'j4O36qQfI6S5Xvyo5'     // ✅ Public Key
      )
      .then(
        () => {
          setStatus({ type: 'success', message: 'Message sent successfully!' });
          setFormData({ name: '', email: '', message: '' });

          setTimeout(() => setStatus(null), 4000); // auto-hide after 4s
        },
        () => {
          setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
          setTimeout(() => setStatus(null), 4000);
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'dipppu65@gmail.com',
      href: 'mailto:dipppu65@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9123696678',
      href: 'tel:+9123696678'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'India',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, name: 'GitHub', href: '#', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: Linkedin, name: 'LinkedIn', href: '#', color: 'hover:text-blue-600' },
    { icon: Twitter, name: 'Twitter', href: '#', color: 'hover:text-blue-400' }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 relative">
      {/* ✅ Popup Notification */}
      {status && (
        <div
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
                      w-[90%] sm:w-auto px-6 py-3 rounded-lg shadow-lg flex items-center 
                      space-x-2 text-white transition-all duration-500 ease-in-out
                      ${status.type === 'success' ? 'bg-green-500 animate-fadeSlide' : 'bg-red-500 animate-fadeSlide'}`}
        >
          {status.type === 'success' ? (
            <CheckCircle className="h-5 w-5" />
          ) : (
            <XCircle className="h-5 w-5" />
          )}
          <span className="text-sm sm:text-base">{status.message}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Let's discuss your next project or how we can work together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a friendly chat about technology and development. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, title, value, href }) => (
                <a
                  key={title}
                  href={href}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800 
                           hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 
                           dark:hover:from-gray-700 dark:hover:to-gray-600 
                           transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full 
                                  flex items-center justify-center text-white group-hover:scale-110 
                                  transition-transform duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h4>
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, name, href, color }) => (
                  <a
                    key={name}
                    href={href}
                    className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 
                              dark:text-gray-400 ${color} transform hover:scale-110 
                              transition-all duration-300 shadow-lg hover:shadow-xl`}
                    aria-label={name}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                           focus:ring-2 focus:ring-cyan-400 focus:border-transparent 
                           transition-all duration-200"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                           focus:ring-2 focus:ring-cyan-400 focus:border-transparent 
                           transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white 
                           focus:ring-2 focus:ring-cyan-400 focus:border-transparent 
                           transition-all duration-200 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white 
                         font-semibold py-3 px-6 rounded-lg hover:from-cyan-500 hover:to-blue-600 
                         transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl 
                         flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ✅ Animation Keyframes for Toast */}
      <style>{`
        @keyframes fadeSlide {
          0% { opacity: 0; transform: translate(-50%, -20px); }
          100% { opacity: 1; transform: translate(-50%, 0); }
        }
        .animate-fadeSlide {
          animation: fadeSlide 0.4s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Contact;
