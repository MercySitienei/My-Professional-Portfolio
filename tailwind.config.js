/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'black':'#151515',
      'green':'#4EE1A0',
      'light-black':'#242424',
      'white':'#FFFFFF',
      'gray': '#d9d9d9',

    },
    fontFamily:{
      SpaceGrotesk:["Space Grotesk", 'sans-serif']
    },
    extend: {
      backgroundImage: (theme) => ({
        'countries_app': "url('/assets/countriesAPP.png')",
        'audiophile': "url('/assets/audiophileProject.png')",
        'todo_project': "url('/assets/TodoProject.png')",
        'edusity': "url('/assets/edusityProject.png')",
      })
    },
  },
  plugins: [],
}

