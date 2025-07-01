const SkipToContent = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 
                 bg-blue-600 text-white px-4 py-2 rounded-md z-50 
                 font-medium text-sm transition-all duration-200
                 focus:ring-2 focus:ring-blue-300 focus:ring-offset-2
                 hover:bg-blue-700"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const mainContent = document.getElementById('main-content');
          if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }}
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;