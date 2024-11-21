import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { MDBBtn} from 'mdb-react-ui-kit';
import { Axios } from '../../Axios';


const ChangePassword = () => {




  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = async () => {
    
    if (newPassword !== confirmPassword) {
      setError('كلمتي السر لا تتطابق');
      return;
    }
    if (newPassword.length < 8) {
      setError('يجب أن تكون كلمة السر 8 أحرف على الأقل');
      return;
    }

    try {
      
      const response = await Axios.post('change-password', {
        newPassword,
      });

      if (response.status === 200) {
        toast.success('تم تغيير كلمة المرور بنجاح');
        setNewPassword('');
        setConfirmPassword('');
      } else {
        toast.error('حدث خطأ أثناء تغيير كلمة المرور');
      }
    } catch (error) {
      console.error('Error changing password:', error);
      toast.error('حدث خطأ غير متوقع');
    }
  };

  return (
    <div className="w-75" dir="rtl">
      <h3 className="text-primary">تغيير كلمة المرور</h3>
      <br/>
      <div className="mb-3">
        <label htmlFor="newPassword">كلمة السر الجديدة</label>
        <input
          type="password"
          id="newPassword"
          className="form-control"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <br/>
        <label htmlFor="confirmPassword">تأكيد كلمة السر</label>
        <input
          type="password"
          id="confirmPassword"
          className="form-control"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br/>
        {error && <div className="text-danger">{error}</div>}
        
        <MDBBtn rounded  className="mx-2"  size="lg"  color='primary'

          onClick={handlePasswordChange}


        >حفظ التغييرات
        </MDBBtn>
      </div>
    </div>
  );
};

export default ChangePassword;