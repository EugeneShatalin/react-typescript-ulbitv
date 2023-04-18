import React, {FC, useState} from 'react';

export enum CardVariant{
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width: string
    height: string
    variant: CardVariant
    onClick: (num: number) => void
}

const Card: FC<CardProps> = ({width, height, variant, onClick}) => {
    const [num, setNum] = useState(22)
    return (
        <div style={{width,
            height,
            border: variant === CardVariant.outlined ? '15px solid lightgray' : 'none',
            background: variant === CardVariant.primary ? 'lightgray' : 'none',
        }}
             onClick={() => onClick(num)}
        >

        </div>
    );
};

export default Card;