import React, { useEffect, useState } from 'react';

const fetchData = async () => {
    const response = await fetch('https://ps01rfm-g463lwzijq-et.a.run.app/api/customer-segments-table');
    const dataMBA = await response.json();
    return dataMBA;
};

export default fetchData;