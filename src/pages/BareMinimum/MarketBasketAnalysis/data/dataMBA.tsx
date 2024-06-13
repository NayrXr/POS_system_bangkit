import React, { useEffect, useState } from 'react';

const fetchData = async () => {
    const response = await fetch('https://ps01mba-g463lwzijq-et.a.run.app/api/mba-dataframe');
    const dataMBA = await response.json();
    return dataMBA;
};

export default fetchData;

const dataMBA1 = [
    {
      "antecedent support": 0.041,
      "antecedents": [
        "Hoodie Polos Navy Blue",
        "Tas Laptop Eiger",
        "Lampu Meja LED Philips"
      ],
      "confidence": 0.024390243902439,
      "consequent support": 0.001,
      "consequents": [
        "Canon EOS 1500D",
        "Meja Kantor Ergonomis"
      ],
      "conviction": 1.023975,
      "count": 1,
      "leverage": 0.000959,
      "lift": 24.390243902439,
      "support": 0.001,
      "zhangs_metric": 1
    },  
]
export {dataMBA1}
