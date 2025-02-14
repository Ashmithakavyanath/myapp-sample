import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-green-600 p-4"> 
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-white text-lg font-semibold">
                       Sample
                    </div>
                    <div className="space-x-4">
                        <a href="#" className="text-white">Home</a>
                        <a href="#" className="text-white">About</a>
                        <a href="#" className="text-white">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
