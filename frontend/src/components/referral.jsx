import React, { useState, useEffect } from 'react';

export default function ReferralComponent({ userId }) {
    const [referralCode, setReferralCode] = useState('');
    const [userReferralCode, setUserReferralCode] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchUserReferralCode();
    }, [userId]);

    const fetchUserReferralCode = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/user-referral-code/${userId}`);
            if (response.ok) {
                const data = await response.json();
                setUserReferralCode(data.referralCode);
            } else {
                setMessage('Failed to fetch your referral code');
            }
        } catch (error) {
            console.error('Error fetching referral code:', error);
            setMessage('Error fetching your referral code');
        }
    };

    const handleReferralSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:3000/api/submit-referral', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, referralCode }),
            });

            if (response.ok) {
                setMessage('Referral code submitted successfully!');
                setReferralCode('');
            } else {
                const errorData = await response.json();
                setMessage(errorData.error || 'Failed to submit referral code');
            }
        } catch (error) {
            console.error('Error submitting referral code:', error);
            setMessage('Error submitting referral code');
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Referral System</h2>

            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Your Referral Code</h3>
                <div className="bg-gray-100 p-3 rounded">
                    <code className="text-lg">{userReferralCode || 'Loading...'}</code>
                </div>
            </div>

            <form onSubmit={handleReferralSubmit}>
                <h3 className="text-lg font-semibold mb-2">Enter Referral Code</h3>
                <input
                    type="text"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    placeholder="Enter referral code"
                    required
                />
                <button
                    type="submit"
                    className="bg-blue-900 text-white font-bold py-2 px-4 rounded hover:bg-blue-800"
                >
                    Submit Referral
                </button>
            </form>

            {message && (
                <p className="mt-4 text-center font-semibold">
                    {message}
                </p>
            )}
        </div>
    );
}