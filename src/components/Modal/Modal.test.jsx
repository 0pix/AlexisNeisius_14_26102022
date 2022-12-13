import Modal from "./Modal";
import {fireEvent, render} from "@testing-library/react";
import {screen} from "@testing-library/react";
import '@testing-library/jest-dom'


test('Open modal', function () {
	render(<Modal openModal={true}>
		coucou les loulous
	</Modal>)
	const modal = screen.getByTestId("modal")
	const background = screen.getByTestId("backgroundModal")
	expect(modal).toHaveTextContent("coucou les loulous")
	expect(background).toBeInTheDocument()
})

test('Close modal', function () {

	const handleClick = jest.fn()

	render(<Modal openModal={true} setOpenModal={() => {
	}}
								functionCloseBtn={handleClick}/>)
	const closeBtn = screen.queryByTestId("closeModalBtn")

	fireEvent.click(closeBtn)
	expect(handleClick).toHaveBeenCalled()

})