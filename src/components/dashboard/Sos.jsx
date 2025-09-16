'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function SosButton() {
  const [loading, setLoading] = useState(false);

  const handlePanic = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token'); // your stored token

      const res = await fetch('http://127.0.0.1:8000/panic', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
      console.log('SOS Response:', data);
      alert('SOS Sent!'); // simple feedback
    } catch (err) {
      console.error(err);
      alert('Failed to send SOS');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] p-4">
      <Button
        variant="destructive"
        size="lg"
        onClick={handlePanic}
        disabled={loading}
      >
        {loading ? 'Sending SOS...' : 'PANIC BUTTON'}
      </Button>
    </div>
  );
}
