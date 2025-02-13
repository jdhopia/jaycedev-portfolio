// Services Page (app/services.js)
export default function Services() {
  return (
    <div className="min-h-screen bg-white p-6 text-center">
      <h1 className="text-3xl font-bold">Our Services</h1>
      <div className="mt-6 space-y-4">
        <div>
          <h2 className="text-xl font-semibold">Custom Web Apps</h2>
          <p>We build modern web applications tailored to your business needs.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Online Booking Systems</h2>
          <p>Seamless booking solutions to streamline customer appointments.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Automation & AI Chatbots</h2>
          <p>Enhance efficiency with AI-driven automation tools.</p>
        </div>
      </div>
    </div>
  );
}