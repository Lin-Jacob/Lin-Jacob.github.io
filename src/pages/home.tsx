import MyButton from "../components/button";

const HomePage = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen w-full bg-primary gap-1'>
      <MyButton type="primary" size="large" text="Testing"/>
      <MyButton type="secondary" size="large" text="Testing" />
      <MyButton type="tertiary" size="large" text="Testing" />
      <div className="bg-primary">123</div>
      <div className="bg-secondary">123</div>
      <div className="bg-tertiary">123</div>
      <div className="bg-accent">123</div>
      <div className="text-black">BIG TESTING NOW  </div>
      <button onClick={toggleDarkMode} className="text-black"> Toggle Dark Mode</button>
    </div>
  );
};

export default HomePage;