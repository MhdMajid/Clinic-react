import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import axios from 'axios';
import { MDBBtn } from 'mdb-react-ui-kit';

function Logout() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    setIsLoading(true);

    try {
      // Retrieve the token from local storage
      const token = localStorage.getItem('token'); // Adjust the key based on how you store the token

      // Make sure to use the correct URL with http:// or https://
      const response = await axios.post('http://127.0.0.1:8000/api/logout', {}, {
        headers: {
          'Authorization': `Bearer ${token}`, // Set the Authorization header
        },
      });

      // Handle successful logout response
      if (response.status === 200) {
        toast.success('تم تسجيل الخروج بنجاح');
        // Clear local storage and redirect to login page
        localStorage.clear();
        window.location.href = '/login'; // Replace with your login page URL
      } else {
        toast.error('فشلت العملية، حاول مجدداً');
      }
    } catch (error) {
      // Handle error
      console.error('Logout error:', error); // Log the error for debugging
      toast.error('فشلت العملية ، حاول مجدداً');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <MDBBtn 
        rounded 
        className="mx-2" 
        size="lg" 
        color='warning' 
        onClick={handleLogout} // Attach the click handler
        disabled={isLoading} // Disable button while loading
      >
        {isLoading ? 'جار تسجيل الخروج...' : 'تسجيل خروج'}
      </MDBBtn>
      
      <ToastContainer /> {/* Ensure ToastContainer is included to display notifications */}
    </>
  );
}

export default Logout;