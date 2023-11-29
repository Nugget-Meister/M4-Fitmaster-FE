import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const Reccomend = ({clothes}) => {

    clothes = clothes || []

    const min = 65
    const max = 85

    const [thermal, setThermal] = useState({
        min: 0,
        max: 0,
        insulation: 0,
        cooling: 0
    })

    // console.log(clothes)
    useEffect(() => {
        let cooling = 0
        let insulation = 0
        // console.log(thermal)
            for(let cloth of clothes) {
                cooling += Number(cloth.cold);
                insulation += Number(cloth.heat)
            }
            // console.log(insulation, cooling)
            setThermal({
                min: min - insulation,
                max: max + cooling,
                insulation: [insulation],
                cooling: [cooling]
            })
    },[clothes])


    return (
        <div 
            className='Reccommend d-flex justify-content-center font-timmana fs-2'
        >
            <div>       
                <Row>
                    <Col className='d-flex justify-content-center'>
                        Temp Range: {thermal.min} - {thermal.max} F
                    </Col>
                </Row>
                <Row className='d-flex'>
                    <Col className='d-flex justify-content-end'>
                        <Col className='fs-4 d-flex justify-content-start'>
                            Insulation: 
                            <span className='fc-deep-red px-2'>
                                {thermal.insulation}
                            </span>
                        </Col>
                        <Col className='fs-4 d-flex justify-content-end'>
                            Cooling: 
                            <span className='fc-artic-blue px-2'>
                                {thermal.cooling} 
                            </span>
                            </Col>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Reccomend;
