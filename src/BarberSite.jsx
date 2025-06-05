// pkwiththeclipper.me - Barber Website v3.1 (Enhanced with Animations)

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function BarberSite() {
  const [booking, setBooking] = useState({ name: '', date: '', service: '' });
  const products = [
    { name: 'FreshFade Shampoo', price: '$15' },
    { name: 'ClipperGuard Spray', price: '$12' },
    { name: 'SlickBack Pomade', price: '$18' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white text-gray-900 font-sans">
      <header className="bg-white shadow-md p-6 flex justify-between items-center sticky top-0 z-50">
        <nav className="space-x-6 text-sm font-medium">
          <a href="#booking" className="hover:text-blue-500 transition-colors">Book</a>
          <a href="#products" className="hover:text-blue-500 transition-colors">Products</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">
        <motion.section 
          id="booking"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl font-semibold mb-6"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.1 }}
          >
            Schedule Your Cut
          </motion.h2>
          <motion.div 
            className="bg-white shadow-md p-8 rounded-2xl space-y-5"
            whileHover={{ scale: 1.01 }}
          >
            <motion.input 
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
              onChange={e => setBooking({ ...booking, name: e.target.value })}
              whileFocus={{ scale: 1.02 }}
            />
            <input 
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="date"
              onChange={e => setBooking({ ...booking, date: e.target.value })}
            />
            <input 
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Service (Fade, Beard Trim, etc)"
              onChange={e => setBooking({ ...booking, service: e.target.value })}
            />
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ backgroundColor: "#1f2937" }}
              onClick={() => alert("Appointment booked!")}
              className="bg-black text-white py-2 px-6 rounded-md transition"
            >
              Book Now
            </motion.button>
          </motion.div>
        </motion.section>

        <motion.section 
          id="products"
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6">Haircare Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 shadow-md rounded-2xl flex flex-col justify-between"
                whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div>
                  <h3 className="font-semibold text-lg mb-1">{p.name}</h3>
                  <p className="text-gray-500 mb-4">{p.price}</p>
                </div>
                <motion.button
                  className="bg-blue-600 text-white py-2 px-4 rounded-md"
                  whileHover={{ backgroundColor: "#2563eb" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Buy
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section 
          id="contact"
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md text-gray-700"
            whileHover={{ scale: 1.01 }}
          >
            <p className="text-sm">DM <span className="text-blue-600 font-medium">@pkwiththeclipper</span> on Instagram or call <span className="font-semibold">555-CLIPPK</span></p>
          </motion.div>
        </motion.section>
      </main>

      <footer className="text-center text-sm text-gray-400 py-6 border-t mt-16">
        © {new Date().getFullYear()} PK With The Clipper. All rights reserved.
      </footer>
    </div>
  );
}
