import Modal from "./Modal";
import {fireEvent, render} from "@testing-library/react";
import {screen} from "@testing-library/react";
import '@testing-library/jest-dom'

test('scénario d\'exemple', function () {
	const functionModal = () => {
		alert("on ferme la modal")
	}
	render(<Modal openModal={true} functionCloseBtn={functionModal}>
		coucou les loulous
	</Modal>)
	const text = screen.getByTestId("modal")
	const background = screen.getByTestId("backgroundModal")
	const closeBtn = screen.getByTestId("closeModalBtn")
	expect(text).toBeInTheDocument()
	expect(text).toHaveTextContent("coucou les loulous")
	expect(background).toBeInTheDocument()
	// fireEvent.click(closeBtn)

})