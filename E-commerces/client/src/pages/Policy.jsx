import React from "react";
import Layout from "../components/layout/Layout";

const Policy = () => {
  return (
    <Layout>
 <div style={{maxWidth: 800, margin: '0 auto', backgroundColor: 'white', padding: 30, borderRadius: 8, boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
  <h1 style={{color: '#2c3e50', textAlign: 'center', borderBottom: '2px solid #eee', paddingBottom: 10}}>Privacy Policy</h1>
  
  <div style={{marginTop: 30}}>
    <h2 style={{color: '#2c3e50', fontSize: 20, borderBottom: '2px solid #eee', paddingBottom: 5}}>Introduction</h2>
    <p style={{color: '#333', fontSize: 14}}>
      Welcome to [Your Company Name]'s Privacy Policy. We are committed to protecting your personal 
      information and your right to privacy. If you have any questions or concerns about this 
      privacy notice, please contact us at [contact email].
    </p>
  </div>
  <div style={{marginTop: 25}}>
    <h2 style={{color: '#2c3e50', fontSize: 20, borderBottom: '2px solid #eee', paddingBottom: 5}}>Information We Collect</h2>
    <p style={{color: '#333', fontSize: 14}}>
      We collect personal information that you voluntarily provide to us when you register on 
      the website, express an interest in obtaining information about us or our products and 
      services, or otherwise when you contact us.
    </p>
  </div>
  <div style={{marginTop: 25}}>
    <h2 style={{color: '#2c3e50', fontSize: 20, borderBottom: '2px solid #eee', paddingBottom: 5}}>How We Use Your Information</h2>
    <p style={{color: '#333', fontSize: 14}}>
      We use personal information collected through our website for a variety of business purposes, 
      including to:
    </p>
    <ul style={{paddingLeft: 20, color: '#333', fontSize: 14}}>
      <li style={{marginBottom: 8}}>Provide and operate our services</li>
      <li style={{marginBottom: 8}}>Improve user experience</li>
      <li style={{marginBottom: 8}}>Send marketing communications</li>
      <li style={{marginBottom: 8}}>Prevent fraud and enhance security</li>
    </ul>
  </div>
  <div style={{marginTop: 25}}>
    <h2 style={{color: '#2c3e50', fontSize: 20, borderBottom: '2px solid #eee', paddingBottom: 5}}>Cookies and Tracking</h2>
    <p style={{color: '#333', fontSize: 14}}>
      We may use cookies and similar tracking technologies to access or store information. 
      Most web browsers are set to accept cookies by default. You can choose to set your 
      browser to remove or reject cookies.
    </p>
  </div>
  <div style={{marginTop: 25}}>
    <h2 style={{color: '#2c3e50', fontSize: 20, borderBottom: '2px solid #eee', paddingBottom: 5}}>Third-Party Sharing</h2>
    <p style={{color: '#333', fontSize: 14}}>
      We only share information with third parties when absolutely necessary for service provision, 
      and we ensure these parties adhere to similar privacy standards.
    </p>
  </div>
  <div style={{marginTop: 25}}>
    <h2 style={{color: '#2c3e50', fontSize: 20, borderBottom: '2px solid #eee', paddingBottom: 5}}>Security Measures</h2>
    <p style={{color: '#333', fontSize: 14}}>
      We implement appropriate technical and organizational security measures to protect 
      the security of your personal information.
    </p>
  </div>
  <div style={{marginTop: 25}}>
    <h2 style={{color: '#2c3e50', fontSize: 20, borderBottom: '2px solid #eee', paddingBottom: 5}}>Your Rights</h2>
    <p style={{color: '#333', fontSize: 14}}>
      You have the right to access, update, or delete your personal information. Please 
      contact us to exercise these rights.
    </p>
  </div>
  <div style={{marginTop: 25, backgroundColor: '#f8f9fa', padding: 15, borderRadius: 5, borderLeft: '4px solid #3498db'}}>
    <h3 style={{color: '#2c3e50', marginTop: 0, fontSize: 16}}>Contact Us</h3>
    <p style={{color: '#333', fontSize: 14, marginBottom: 0}}>
      For any questions regarding this privacy policy, contact us at:<br />
      Email: [your@email.com]<br />
      Address: [Your Physical Address]
    </p>
  </div>
</div>

    </Layout>
  );
};

export default Policy;
