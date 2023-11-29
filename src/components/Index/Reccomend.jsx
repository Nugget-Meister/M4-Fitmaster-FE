import React, { useEffect, useState } from 'react';

const Reccomend = ({clothes}) => {
    const min = 65
    const max = 85

    const [thermal, setThermal] = useState({
        min: 0,
        max: 0,
    })

    // console.log(clothes)
    useEffect(() => {
        let cooling = 0
        let insulation = 0
        console.log(thermal)
            for(let cloth of clothes) {
                cooling += Number(cloth.cold);
                insulation += Number(cloth.heat)
            }
            console.log(insulation, cooling)
            setThermal({
                min: min - insulation,
                max: max + cooling
            })
    },[clothes])


    return (
        <div 
            className='Reccommend d-flex'
        >
            Temp Range: {thermal.min} - {thermal.max}F
        </div>
    );
}

export default Reccomend;
