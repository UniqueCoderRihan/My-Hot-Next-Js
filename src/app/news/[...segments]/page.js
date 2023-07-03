import React from 'react';

const page = ({params}) => {
    console.log(params.segments);
    const [year,author] = params.segments;
    return (
        <div>
            <h2 className="text-3xl">Hello Bro YOur Curent Route Information is : Year Is {year} and Also Author Name {author}  </h2>
        </div>
    );
};

export default page;