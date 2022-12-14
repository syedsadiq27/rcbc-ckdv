import React, { FunctionComponent } from 'react';

import withIconContainer from './withIconContainer';

const IconCardDankort: FunctionComponent = () => (
    <svg
        aria-labelledby="iconCardDankortTitle"
        height="240"
        role="img"
        version="1.0"
        viewBox="0 0 300 180"
        width="400"
        xmlns="http://www.w3.org/2000/svg"
    >
        <title id="iconCardDankortTitle">Dankort</title>
        <rect fill="#FFF" height="180" rx="12" width="300" />
        <path d="M75.7 1C31.9 8.6 0 46.2 0 90.2c0 27 13.4 54.4 34.5 70.5 8.7 6.7 22.5 13.6 33 16.6 8 2.2 8.4 2.2 82.5 2.2 74.3 0 74.5 0 82.5-2.3 25.3-7.1 45.7-23.4 57.1-45.7 14.1-27.4 14-56.1-.3-83.6-11.1-21.4-30.3-36.9-55-44.6L225.5.5 153 .4C113.1.3 78.3.6 75.7 1zM224 3.1c28 4.5 54.4 24.6 66.1 50.5 5.8 12.7 7.4 20.5 7.4 36.4 0 12-.4 15.8-2.3 22.3-9.5 33.1-34.9 57-67.7 63.8-8.3 1.7-14.6 1.9-77.5 1.9s-69.2-.2-77.5-1.9c-32.8-6.8-58.2-30.7-67.7-63.8-3.2-11.2-3.2-33.4 0-44.6C14.6 33.5 41.7 8.8 75.8 3c7.3-1.2 140.6-1.2 148.2.1z" />
        <path
            d="M72.8 19c-12 3-27.4 11.6-35.1 19.8l-2.8 3 49.3.5c52.2.5 57.2 1 68.5 5.8 9.9 4.2 17.5 13.4 18.9 22.8l.7 4.5 1.9-2.5c1.1-1.3 8.3-8.8 16.1-16.7l14-14.2h61l-2.4-2.6c-8.1-8.7-23.5-17.4-36.2-20.4-7.8-1.9-11.8-2-77.2-1.9-64.3 0-69.5.2-76.7 1.9zM249.5 65.9l-18.9 19 2.1 2.3c1.1 1.3 9.8 11.5 19.3 22.8s17.6 20.6 18.1 20.8c.4.2 2.8-3.9 5.3-9 7.3-15.2 9.3-30.5 6-46.6-1.6-7.8-7.5-21.8-11-26l-1.9-2.3-19 19zM64.5 87.2c-2.7 7.3-5 13.9-5.3 14.5-.6 1.7 43.4 1.8 49.3.2 8.7-2.4 15.3-15.7 11.5-23-2.4-4.3-5.6-4.9-28.8-4.9H69.3l-4.8 13.2zM169.6 98.2c-2.2 11.8-12.7 24.6-24.8 30.3-13 6.1-17.5 6.5-67.3 6.5H33l1.7 2.7c5.7 8.7 26.5 20.9 40.5 23.7 11.5 2.4 138.1 2.4 149.6 0 14-2.8 34.8-15 40.5-23.7l1.7-2.7h-63.7l-15.9-20c-8.7-11-16.2-20-16.5-20-.4 0-1 1.5-1.3 3.2z"
            fill="#e41e29"
        />
    </svg>
);

export default withIconContainer(IconCardDankort);
