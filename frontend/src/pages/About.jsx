import React from 'react';
import Title from '../components/Title';

const About = () => {
  return (
    <div className="px-8 py-16 max-w-5xl mx-auto text-gray-800">
      {/* Page Title */}
      <div className="text-4xl font-extrabold pt-8 border-t border-gray-200">
        <Title text1="ABOUT" text2="US" />
      </div>

      {/* About Us Content */}
      <div className="my-16 flex flex-col md:flex-row gap-20">
        
        {/* Our Story */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded in 2010, we started as a small family-owned business with a big dream: to make quality office supplies accessible and affordable for businesses of all sizes. Over the years, our dedication to quality and customer service has turned us into a trusted partner for companies nationwide.
          </p>
        </div>

        {/* Our Values */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Values</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At our core, we believe in reliability, quality, and customer satisfaction. We handpick our products to ensure they meet the highest standards, so you can focus on what really matters—growing your business. Every order is packed with care, aiming for 100% customer satisfaction with every purchase.
          </p>
        </div>
      </div>

      {/* Commitment to Customer Service */}
      <div className="my-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Commitment to You</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We understand the importance of reliable office supplies in keeping your business running smoothly. That’s why our team is always here to help, whether it’s answering product questions or providing personalized recommendations. Our customer service team is available around the clock to support your needs.
        </p>
      </div>

      {/* Vision Statement */}
      <div className="my-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Our Vision</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We envision a future where every office, from the home workspace to the corporate headquarters, has access to the highest quality supplies, delivered with ease and at fair prices. We're here to equip every work environment with the tools it needs to inspire productivity.
        </p>
      </div>
      
      {/* Team Statement */}
      <div className="my-16 mb-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Meet the Team</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Our team is made up of experienced professionals dedicated to sourcing the best office products and ensuring that you have everything you need to get the job done. We’re passionate about our work and committed to providing the best service possible.
        </p>
      </div>
    </div>
  );
};

export default About;
