import React, { Suspense } from 'react';
const AdminPageLazy = React.lazy(() => import('./AdminProfile'));

const AdminPageWrapper = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AdminPageLazy />
        </Suspense>
    );
};

export default AdminPageWrapper;