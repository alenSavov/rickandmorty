import React from 'react';

function CharacterCardExtendInfo({ characters }) {
    return (
        <div>
            {characters.map(c => (
                <div key={`${ c.id + 1 }`}>
                    <h1>{c.origin}</h1>
                </div>
            ))}
        </div>
    )
}

export default CharacterCardExtendInfo
