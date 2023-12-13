import React from 'react';
import bitcoinQRCode from './bitcoin-qr-code.svg';
import bitcoinLogo from './bitcoin-logo.svg'; // Assuming you have a Bitcoin logo SVG
import { Navbar } from '../../components/Navbar';

const BitcoinPage: React.FC = () => {
    const bitcoinAddress = 'bc1qxnf3v8e9jfavfuyp2f70z03h7ncq8ju7efv3jm';
    return (
        <div className="bg-gray-200 min-w-screen">
            <Navbar title="Brian Sunter's Blog" />
            <div className="lg:container lg:mx-auto lg:px-8 ">
                <div className="flex flex-col items-center">
                    <img src={bitcoinLogo} alt="Bitcoin Logo" className="w-32 h-32 mb-4" />
                    <h1 className="text-6xl font-extrabold mb-4">Bitcoin Donation</h1>
                    <p className="text-xl text-gray-600 mb-4">Scan the QR code below or click the link to donate Bitcoin to Brian&nbsp;Sunter:</p>
                    <a href={`bitcoin:${bitcoinAddress}`} className="text-blue-500 hover:underline mb-4">{bitcoinAddress}</a>
                    <a href={`bitcoin:${bitcoinAddress}`} className="">
                        <img src={bitcoinQRCode} alt="Bitcoin QR Code" className="w-64 h-64" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default BitcoinPage;