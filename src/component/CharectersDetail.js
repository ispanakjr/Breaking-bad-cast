import React from 'react';

const CharectersDetail = ({ card }) => {
    return (
        <div>
            <div className='card'>
                <div className='card-inner'>
                    <div className='card-front'>
                        <img src={card.img} alt='' />
                    </div>
                    <div className='card-back'>
                        <h1>{card.name}</h1>
                        <ul>
                            <li>
                                <strong>Actor Name:</strong> {card.portrayed}
                            </li>
                            <li>
                                <strong>Nickname:</strong> {card.nickname}
                            </li>
                            <li>
                                <strong>Birthday:</strong> {card.birthday}
                            </li>
                            <li>
                                <strong>Status:</strong> {card.status}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharectersDetail
