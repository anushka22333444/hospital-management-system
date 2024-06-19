import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          At ZeeCare, we are committed to providing exceptional healthcare services with a patient-centric approach. Located in the heart of [Raipur/CG], our hospital is equipped with state-of-the-art facilities and staffed by a team of dedicated and experienced healthcare professionals.
<br></br>
<br></br>
Our Mission
<br></br>
 
Our mission is to deliver high-quality, compassionate care to our community. We strive to enhance the health and well-being of our patients through comprehensive medical services, innovative treatments, and a commitment to excellence.
<br></br>
<br></br>
Our Services
<br></br>
 
We offer a wide range of medical services to meet the diverse needs of our patients, including but not limited to:
<br></br>
Emergency Care: 24/7 emergency services with a team of highly trained emergency medicine specialists.<br></br>
Outpatient Services: Comprehensive outpatient care including diagnostics, consultations, and minor procedures.<br></br>
Inpatient Services: Comfortable inpatient facilities with personalized care plans for each patient.<br></br>
Surgical Services: Advanced surgical procedures performed by expert surgeons in our state-of-the-art operating theaters.<br></br>
Maternity and Child Care: Comprehensive maternity services, including prenatal and postnatal care, as well as pediatric services.<br></br>
            </p>
        </div>
      </div>
    </>
  );
};

export default Biography;
