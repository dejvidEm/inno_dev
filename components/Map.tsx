'use client';

export default function GoogleMap() {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <iframe
        title="Barbershop Location"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps?q=Ivanská%20cesta%2016733/15%2C%20821%2004%20Bratislava&output=embed"
      ></iframe>
    </div>
  );
}