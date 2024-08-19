import React, { Suspense } from 'react';
const StuPageLazy = React.lazy(() => import('./StuProfile'));

const StuPageWrapper = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <StuPageLazy />
        </Suspense>
    );
};

export default StuPageWrapper;