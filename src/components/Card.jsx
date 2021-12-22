import React, { useRef } from 'react'
import { useDrag, useDrop } from 'react-dnd'
import ItemTypes from './ItemTypes'
import CKEditor from '@ckeditor/ckeditor5-react'
import InlineEditor from '@ckeditor/ckeditor5-build-inline'
const style = {
	border: '1px dashed gray',
	padding: '0.5rem 1rem',
	marginBottom: '.5rem',
	backgroundColor: 'white',
	cursor: 'move',
}
const Card = ({ id, text, index, moveCard }) => {
	const ref = useRef(null)
	const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.CARD,
		drop(item, monitor) {
			if (!ref.current) {
				return
			}
			const dragIndex = item.index
			const hoverIndex = index
			// Don't replace items with themselves
			if (dragIndex !== hoverIndex) {
				moveCard(dragIndex, hoverIndex)
			}
		},
		collect: monitor => ({
			isOver: monitor.isOver(),
		}),
	})
	const [, drag] = useDrag({
		item: { type: ItemTypes.CARD, id, index },
	})
	drag(drop(ref))
	return (
		<>
			{/* <div style={{ border: `1px solid ${isOver ? "blue" : "transparent"}` }} /> */}
			<div ref={ref} className="bg-white shadow-2xl w-1/2 border-2 px-3 py-2">
				<CKEditor
					editor={InlineEditor}
					data={text}
					className="w-full"
				/>
			</div>

		</>
	)
}
export default Card
