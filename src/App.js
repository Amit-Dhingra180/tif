import './App.css'


function App() {
  return (
    <div> 

      <div className='w-full h-[804px]'>
      
      <img src='truck.jpg' className='w-[107px] h-[83px] absolute top-[33px] left-[100px]'></img>

      <p className='main-text text-[#0E2368]'>Discover the <span className='text-[#E23744]'>Best</span> Food and Drinks</p>

      <p className='absolute w-[345px] h-[55px] top-[460px] left-[100px] text-[16.44px] line-height-27px font-sans'>Naturally made Healthcare Products for the better care & support of your body.</p>

      <button className='bg-[#E23744] absolute w-[190px] h-[63px] top-[556px] left-[97px] rounded-[34px]'><span className='text-white font-[700] text-[18px] font-sans'>Explore Now!</span></button>

      <img src='pizza.jpg' className='absolute top-[5px] right-1 w-[735px] h-[804px]'></img>

      <svg width="752" height="836" className='absolute right-0' viewBox="0 0 752 839" fill="none" xmlns="http://www.w3.org/2000/svg">
<       path d="M111.512 36.3371C40.9348 45.1719 7.76349 15.7936 0 0L752 1.42498V835.396C484.285 867.417 547.679 676.51 560.03 640.173C572.381 603.836 657.779 365.152 547.679 190.591C437.579 16.031 199.733 25.2934 111.512 36.3371Z" fill="#E23744"/>
      </svg>

      </div>

      <div className='w-full h-[653px] relative'>
        <div className='absolute w-full h-[467px] bg-gray-100 bottom-0'>
          <img src='wooden-spoon.jpg' className='absolute w-[384px] h-[468px] left-[205px]'></img>
          <div className='absolute w-[447px] h-[254px] top-[107px] left-[789px] space-y-[21px]'>
            <h1 className='text-[45px] font-[600] text-[#0E2368]'>About Us</h1>
            <p className=' font-sans text-[15px] line-height-27px text-[#444957] font-[400]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
            <button className='w-[132px] h-[42px] bg-[#E23744] font-[600] text-white rounded-[21px]'>Read More</button>
          </div>
        </div>
      </div>

      <div className='relative w-full h-[995px] bg-red-100'>

      </div>

      <div className='relative w-full h-[362px] bg-blue-100'>
        <img src='truck.jpg' className='absolute w-[161px] h-[125px] left-[103px] top-[123px]'></img>
        <div className='absolute w-[232px] h-[186px] top-[84px] left-[474px] space-y-[15px]'>
          <h1 className='text-[19px] text-[#0E2368] font-[600]'>Contact Us</h1>
          <p className='text-[15px] font-[400] text-[#646874]'>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
          <p className='text-[15px] font-[400] text-[#646874]'>example2020@gmail.com</p>
          <p  className='text-[15px] font-[400] text-[#646874]'>(904) 443-0343</p>
        </div>
      </div>
      
    </div>
  );
}

export default App;
