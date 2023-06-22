import { screen, render} from "@testing-library/react";
import { ImageAvatar } from "./index";

describe('Avatar image', () => {
    test('Avatar rendered correctly', () => {
        render(<ImageAvatar src='https://randomuser.me/api/portraits/women/79.jpg' alt='image'/>)
        const image = screen.getByRole('img')
        expect(image).toBeInTheDocument()
    })
    test('alt test', () => {
        render(<ImageAvatar src='https://randomuser.me/api/portraits/women/79.jpg' alt='image'/>)
        const alttext= screen.getByAltText('image')
        expect(alttext).toBeInTheDocument()
    })
})
