

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";

export default function BarberSite() {
  const [booking, setBooking] = useState({ name: '', date: '', service: '' });
  const [products] = useState([
    { name: 'FreshFade Shampoo', price: '$15' },
    { name: 'ClipperGuard Spray', price: '$12' },
    { name: 'SlickBack Pomade', price: '$18' },
  ]);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 md:p-10 space-y-10">
      <h1 className="text-4xl font-bold text-center">PK With The Clipper</h1>

      <Tabs defaultValue="book">
        <TabsList className="grid grid-cols-4 gap-2">
          <TabsTrigger value="book">Book</TabsTrigger>
          <TabsTrigger value="gallery">Gallery</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="pay">Pay</TabsTrigger>
        </TabsList>

        {/* Booking Section */}
        <TabsContent value="book">
          <Card>
            <CardContent className="space-y-4">
              <h2 className="text-xl font-semibold">Schedule an Appointment</h2>
              <Input placeholder="Your Name" onChange={e => setBooking({ ...booking, name: e.target.value })} />
              <Input type="date" onChange={e => setBooking({ ...booking, date: e.target.value })} />
              <Input placeholder="Service (Fade, Beard Trim, etc)" onChange={e => setBooking({ ...booking, service: e.target.value })} />
              <Button onClick={() => alert('Appointment booked!')}>Book Now</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Gallery Section */}
        <TabsContent value="gallery">
          <Card>
            <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <motion.img 
                  key={i} 
                  src={`/gallery/${i}.jpg`} 
                  alt={`Style ${i}`} 
                  className="rounded-2xl shadow-md hover:scale-105 transition-transform duration-300" 
                />
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Products Section */}
        <TabsContent value="products">
          <Card>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((product, index) => (
                <motion.div key={index} whileHover={{ scale: 1.05 }} className="p-4 border rounded-xl text-center">
                  <h3 className="font-semibold text-lg">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.price}</p>
                  <Button className="mt-2">Buy</Button>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Payment Section */}
        <TabsContent value="pay">
          <Card>
            <CardContent className="space-y-4">
              <h2 className="text-xl font-semibold">Complete Your Payment</h2>
              <p className="text-gray-500">Coming soon: payment integration</p>
              <Button disabled>Pay Now</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
