// pkwiththeclipper.me - Barber Website v3 (Enhanced Styling)

import { useState } from 'react';

export default function BarberSite() {
  const [booking, setBooking] = useState({ name: '', date: '', service: '' });

  const handleBooking = () => {
    alert('Appointment booked!');
    setBooking({ name: '', date: '', service: '' });
  };
  const products = [
    { name: 'FreshFade Shampoo', price: '$15' },
    { name: 'ClipperGuard Spray', price: '$12' },
    { name: 'SlickBack Pomade', price: '$18' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white text-gray-900 font-sans">
      <header className="bg-white shadow-md p-6 flex justify-between items-center sticky top-0 z-50">
<h1 className="text-6xl text-pink-600 underline">TAILWIND IS ALIVE</h1>

        <nav className="space-x-6 text-sm font-medium">
          <a href="#booking" className="hover:text-blue-500 transition-colors">Book</a>
          <a href="#products" className="hover:text-blue-500 transition-colors">Products</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">
        <section id="booking">
          <h2 className="text-2xl font-semibold mb-6">Schedule Your Cut</h2>
          <div className="bg-white shadow-md p-8 rounded-2xl space-y-5">
            <input
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
              value={booking.name}
              onChange={(e) => setBooking({ ...booking, name: e.target.value })}
            />
            <input
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="date"
              value={booking.date}
              onChange={(e) => setBooking({ ...booking, date: e.target.value })}
            />
            <input
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Service (Fade, Beard Trim, etc)"
              value={booking.service}
              onChange={(e) =>
                setBooking({ ...booking, service: e.target.value })
              }
            />
            <button
              onClick={handleBooking}
              className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition"
            >
              Book Now
            </button>
          </div>
        </section>

        <section id="products">
          <h2 className="text-2xl font-semibold mb-6">Haircare Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <div key={i} className="bg-white p-6 shadow-md rounded-2xl flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-lg mb-1">{p.name}</h3>
                  <p className="text-gray-500 mb-4">{p.price}</p>
                </div>
                <button className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">Buy</button>
              </div>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <div className="bg-white p-6 rounded-xl shadow-md text-gray-700">
            <p className="text-sm">DM <span className="text-blue-600 font-medium">@pkwiththeclipper</span> on Instagram or call <span className="font-semibold">555-CLIPPK</span></p>
          </div>
        </section>
      </main>

      <footer className="text-center text-sm text-gray-400 py-6 border-t mt-16">
        © {new Date().getFullYear()} PK With The Clipper. All rights reserved.
      </footer>
    </div>
  );
}
