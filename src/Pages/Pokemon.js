import React from 'react'

const Pokemon = ({result}) => {
    const time = new Date()
    const imgUrl = result?.sprites.front_default
    const names = result?.name
    const numberId = result?.id
    const base = result?.base_experience


    return (
        <div className="card text-break colorr">
            <div className='div1'>{time.getHours()}:{time.getMinutes()} {time.getMonth()}.{time.getFullYear()}</div>
            <img src={imgUrl} className="card-img-top" alt="..."/>
            <h3 className='card-text text-center '>
                <strong className='strong1'>
                    {names}
                    <sup className='sup1'>{numberId}</sup>
                </strong>
            </h3>
            <li className='li1'> Struggle: {base} (Normal)</li>
        </div>
    )
}

export default Pokemon