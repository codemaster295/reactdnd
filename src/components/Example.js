import React, { useState, useCallback } from 'react'
import Card from './Card'
import update from 'immutability-helper'
const Container = () => {
    {
        const [cards, setCards] = useState([
            {
                id: 1,
                text: 'You can write anything here',
            },
            {
                id: 2,
                text: 'You can write anything here',
            },
            {
                id: 3,
                text: 'You can write anything here',
            },
            {
                id: 4,
                text: 'You can write anything here',
            },
            {
                id: 5,
                text:
                    'You can write anything here',
            },
            {
                id: 6,
                text: 'You can write anything here',
            },
            {
                id: 7,
                text: 'You can write anything here',
            },
        ])
        const moveCard = useCallback(
            (dragIndex, hoverIndex) => {
                const dragCard = cards[dragIndex]
                setCards(
                    update(cards, {
                        $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
                    }),
                )
            },
            [cards],
        )
        const renderCard = (card, index) => {
            return (
                <Card
                    key={card.id}
                    index={index}
                    id={card.id}
                    text={card.text}
                    moveCard={moveCard}
                />
            )
        }
        return (
            <div className="space-y-36">
            <h1 className="text-center text-purple-800 font-bold text-4xl">Sample Drag and drop</h1>
                <div className="flex flex-col justify-center  items-center space-y-5" >

                    {cards.map((card, i) => renderCard(card, i))}
                </div>
            </div>
        )
    }
}
export default Container
