import { useState } from 'react';

export default function BarberSite() {
  const [booking, setBooking] = useState({ name: '', date: '', service: '' });
  const products = [
    { name: 'FreshFade Shampoo', price: '$15' },
    { name: 'ClipperGuard Spray', price: '$12' },
    { name: 'SlickBack Pomade', price: '$18' },
  ];

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1 style={{ fontSize: '2rem', textAlign: 'center' }}>PK With The Clipper</h1>

      <h2>Book an Appointment</h2>
      <input placeholder="Your Name" onChange={e => setBooking({ ...booking, name: e.target.value })} /><br />
      <input type="date" onChange={e => setBooking({ ...booking, date: e.target.value })} /><br />
      <input placeholder="Service (Fade, Beard Trim, etc)" onChange={e => setBooking({ ...booking, service: e.target.value })} /><br />
      <button onClick={() => alert("Appointment booked!")}>Book Now</button>

      <h2 style={{ marginTop: '2rem' }}>Products</h2>
      <ul>
        {products.map(p => (
          <li key={p.name}>
            {p.name} - {p.price} <button>Buy</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
