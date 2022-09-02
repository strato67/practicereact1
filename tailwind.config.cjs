module.exports = {
    
    content: ['./src/**/*.{js,jsx}', './dist/index.html'],

    daisyui: {
        themes: [
          {
            mytheme: {
            
   "primary": "#99efa2",
            
   "secondary": "#04c4ce",
            
   "accent": "#9bc8f7",
            
   "neutral": "#221B31",
            
   "base-100": "#F7F2F8",
            
   "info": "#2750F1",
            
   "success": "#1CA08D",
            
   "warning": "#DE7A17",
            
   "error": "#EB6F7A",
            },
          },
        ],
      },
    plugins: [require("daisyui")],
};
