import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PersonalLoan = () => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [isOTPSent, setIsOTPSent] = useState(false);
    const [isOTPFieldVisible, setIsOTPFieldVisible] = useState(false);

    const handleApplyNow = () => {
        if (validateMobileNumber(mobileNumber)) {
            sendOTP(mobileNumber);
        } else {
            alert('Please enter a valid mobile number.');
        }
    };

    const validateMobileNumber = (number) => {
        const regex = /^[6-9]\d{9}$/;
        return regex.test(number);
    };

    const sendOTP = (number) => {
        console.log(`Sending OTP to ${number}`);
        setIsOTPSent(true);
        setTimeout(() => {
            setIsOTPSent(false);
            setIsOTPFieldVisible(true);
            alert('OTP sent for verification.');
        }, 2000); // Simulate a 2-second delay for OTP sending
    };

    const handleOTPSubmit = () => {
        if (otp.length === 6) {
            console.log(`Verifying OTP: ${otp}`);
            alert('OTP verified successfully.');
        } else {
            alert('Please enter a valid OTP.');
        }
    };

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            padding: '20px',
            backgroundColor: '#f7fafc',
            height: 'calc(100vh - 60px)', // Adjust height to account for navbar
            boxSizing: 'border-box'
        },
        formContainer: {
            textAlign: 'left',
            padding: '20px',
            width: '40%'
        },
        imgContainer: {
            textAlign: 'center',
            width: '60%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
        img: {
            maxWidth: '100%',
            height: 'auto',
            maxHeight: '90vh',
            objectFit: 'contain'
        },
        title: {
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '10px',
            color: '#333'
        },
        subtitle: {
            fontSize: '20px',
            marginBottom: '20px',
            color: '#555'
        },
        input: {
            padding: '10px',
            fontSize: '16px',
            marginBottom: '10px',
            width: '100%',
            borderRadius: '5px',
            border: '1px solid #ccc',
            boxSizing: 'border-box'
        },
        button: {
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '100%',
            boxSizing: 'border-box'
        },
        subText: {
            marginTop: '10px',
            color: '#666',
            fontSize: '14px'
        },
        navbar: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px 40px',
            backgroundColor: '#2c5c4c',
            color: '#fff',
        },
        logo: {
            fontSize: '1.5em',
            fontWeight: 'bold',
        },
        navLinks: {
            listStyleType: 'none',
            display: 'flex',
            gap: '20px',
        },
        navLinkItem: {
            cursor: 'pointer',
            color: '#fff',
        },
    };

    return (
        <div>
            <nav style={styles.navbar}>
                <div style={styles.logo}>moneyview</div>
                <ul style={styles.navLinks}>
                    <li><Link to="/personal-loan" style={styles.navLinkItem}>Personal Loan</Link></li>
                    <li><Link to="/credit-tracker" style={styles.navLinkItem}>Credit Tracker</Link></li>
                    <li style={styles.navLinkItem}>Calculators</li>
                    <li style={styles.navLinkItem}>Contact Us</li>
                </ul>
            </nav>
            <div style={styles.container}>
                <div style={styles.formContainer}>
                    <h1 style={styles.title}>Get up to ₹10 lakhs in 10 mins!</h1>
                    <p style={styles.subtitle}>Personal loans made just for you</p>
                    <input
                        type="text"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        style={styles.input}
                        placeholder="+91 Enter Mobile Number"
                    />
                    <button onClick={handleApplyNow} style={styles.button}>
                        {isOTPSent ? 'Sending OTP...' : 'Apply now'}
                    </button>
                    {isOTPFieldVisible && (
                        <>
                            <input
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                style={styles.input}
                                placeholder="Enter OTP"
                            />
                            <button onClick={handleOTPSubmit} style={styles.button}>
                                Submit OTP
                            </button>
                        </>
                    )}
                    <p style={styles.subText}>
                        <input type="checkbox" /> By proceeding, you agree to our Terms & Conditions & Privacy Policy
                    </p>
                    <p style={styles.subText}>
                        <input type="checkbox" /> I agree to receive updates on WhatsApp
                    </p>
                </div>
                <div style={styles.imgContainer}>
                    <img src="ranbirpl.png" alt="approved" style={styles.img} />
                </div>
            </div>
        </div>
    );
};

export default PersonalLoan;
