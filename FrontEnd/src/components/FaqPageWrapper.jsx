import React, { Suspense } from 'react';
const FAQPageLazy = React.lazy(() => import('./faq'));

const FAQPageWrapper = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <FAQPageLazy />
        </Suspense>
    );
};

export default FAQPageWrapper;
