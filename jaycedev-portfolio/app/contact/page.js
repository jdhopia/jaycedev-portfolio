// Contact Page (app/contact.js)
export default function Contact() {
  return (
    <div className="min-h-screen bg-white p-6 text-center">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <p className="mt-4">Get in touch with us for any inquiries!</p>
      <form className="mt-6 max-w-md mx-auto space-y-4">
        <input className="w-full p-2 border rounded" type="text" placeholder="Your Name" required />
        <input className="w-full p-2 border rounded" type="email" placeholder="Your Email" required />
        <textarea className="w-full p-2 border rounded" placeholder="Your Message" rows="4" required></textarea>
        <button className="w-full bg-blue-600 text-white p-2 rounded">Send Message</button>
      </form>
    </div>
  );
}