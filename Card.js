import React from 'react';

const Card = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img className="w-full" src="https://www.voguefashioninstitute.com/wp-content/uploads/2021/03/vogue.jpg" alt="Vogue Magazine Cover" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">Card Title</div>
                <p className="text-gray-700 text-base">
                    Vogue's tagline, 'before it's in fashion, it's in Vogue', is ultimately a synonym for its enduring relevance, but the title has had to adapt to the changing world around it over the years, and its focus these days is on multiplatform storytelling.
                </p>
            </div>
        </div>
    );
}

export default Card;

