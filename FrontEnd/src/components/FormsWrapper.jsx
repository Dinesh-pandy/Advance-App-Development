import React, { Suspense } from 'react';
const FormPageLazy = React.lazy(() => import('./AdForm'));

const FormPageWrapper = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <FormPageLazy />
        </Suspense>
    );
};

export default FormPageWrapper;