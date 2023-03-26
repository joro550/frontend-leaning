
function App() {
  return (
    <div className='bg-blue-200 min-h-screen'>
      <div className='flex container min-h-screen mx-auto my-auto'>
        <div className="w-60 mx-auto my-auto bg-white rounded-lg ">
          <div className='p-3 container'>
            <img
              
              className='h-auto mx-auto rounded-lg'
              src='images/image-qr-code.png'
              />
          </div>

          <div className='container mx-auto'>
            <p className='text-center text-lg font-bold text-black p-1'>
              Improve your front-end skills by building projects
            </p>
            <p className='text-center text-sm text-gray-400 p-1 pb-5 m-2'>
              Scan the QR code to visit Frontend Mentor and take 
              your coding skills to the next level
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
