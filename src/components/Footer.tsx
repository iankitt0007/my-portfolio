// components/Footer.tsx
const Footer: React.FC = () => {
  return (
    <footer className="footer py-10 bg-gray-900 text-white text-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-800 opacity-90 pointer-events-none"></div>
      <div className="absolute -top-5 -left-5 w-32 h-32 bg-blue-500 rounded-full blur-2xl opacity-20"></div>
      <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-purple-500 rounded-full blur-2xl opacity-20"></div>

      {/* Footer Content */}
      <p className="text-sm sm:text-base font-light">
        &copy; 2024 <span className="font-semibold">Ankit Sirswa</span>. All
        rights reserved.
      </p>
      <p className="mt-2 text-xs sm:text-sm font-light">Built with ❤️</p>
    </footer>
  );
};

export default Footer;
