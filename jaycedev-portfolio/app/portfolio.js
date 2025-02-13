// Portfolio Page (app/portfolio.js)
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white p-6 text-center">
      <h1 className="text-3xl font-bold">Portfolio</h1>
      <p className="mt-4">Here are some of the projects we have worked on:</p>
      <ul className="mt-6 space-y-4">
        <li className="text-lg">📌 Project 1 - Custom CRM Dashboard</li>
        <li className="text-lg">📌 Project 2 - AI Chatbot for Customer Support</li>
        <li className="text-lg">📌 Project 3 - Online Booking System for Salons</li>
      </ul>
    </div>
  );
}