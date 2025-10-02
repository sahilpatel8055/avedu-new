import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import thankyouImage from "@/assets/thankyou.webp";

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-20 bg-gray-50">
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Thank You Image */}
            <div className="w-full md:w-2/5 flex justify-center">
              <img 
                src={thankyouImage} 
                alt="Thank You" 
                className="w-64 h-64 object-contain"
              />
            </div>

            {/* Thank You Content */}
            <div className="w-full md:w-3/5 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4">
                Thank You!
              </h1>
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                Your form has been successfully submitted. We will get in touch with you shortly. Meanwhile, feel free to explore our programs or contact us for more details.
              </p>
              <button
                onClick={() => navigate("/")}
                className="custom-btn-bg text-white px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Explore
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
