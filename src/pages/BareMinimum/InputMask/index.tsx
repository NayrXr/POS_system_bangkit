import React, { useEffect } from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import { useNavigate } from 'react-router-dom';
import InputMask from './InputMask'

const TambahItem = () => {

    const navigate = useNavigate();
    useEffect(() => navigate("/additem"), [navigate]);

    return (
        <React.Fragment>
            <BreadCrumb title='Tambah Item' pageTitle='Dashboards' />
            <div>
                < InputMask />
            </div>
        </React.Fragment>
    );
};

export default TambahItem;