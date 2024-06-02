import React, { useState } from 'react';
import ContactUsModal from './ContactUsModal';

const ContactUsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative gap-4 h-screen w-full flex flex-wrap items-center justify-center">
        <div className='flex flex-col space-y-6 border-black w-[450px] sm:items-start items-center'>
            <h3 className='text-[#FF3147] text-2xl font-light text-center sm:text-left sm:mt-0 mt-12'>AWARD WINNING</h3>
            <h1 className='text-black text-4xl font-semibold text-center sm:text-left'>DIGITAL MARKETING AGENCY</h1>
            <p className='text-black text-[13px] font-light text-center sm:text-left'>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum</p>
        <button
        onClick={handleOpenModal}
        className="bg-[#FF3147] text-xs text-white px-4 py-2 w-32"
      >
        CONTACT US
      </button>
        </div>
        <div>
        <img src={`${process.env.PUBLIC_URL}/hero.png`} alt='hero_Image' className='sm:w-[300px] w-full h-auto'/>
        </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 sm:px-0 px-6">
          <ContactUsModal closeModal={handleCloseModal} />
        </div>
      )}
    </div>
  );
};

export default ContactUsPage;
