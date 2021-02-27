import React from 'react'

const Pokemon = ({result}) => {

    const imgUrl = result?.sprites.front_default
    const names = result?.name
    const numberId = result?.id

    return (
        <div className="card text-break colorr">
            <img src={imgUrl} className="card-img-top" alt="..."/>
            <div className='card-img-overlay'>
            <h3 className='card-text text-center font1'>
                <strong className='strong1'>
                    {names}
                    <sup className='sup1'>{numberId}</sup>
                </strong>
            </h3>
            </div>
        </div>
    )
}

export default Pokemon