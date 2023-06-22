import { screen, render} from "@testing-library/react";
import { TextDot } from "./index";

describe('Avatar image', () => {
    test('Avatar rendered correctly', () => {
        render(<TextDot variant1="body1" variant2="overline" firstText="total" secondText="$24,000" fontWeight="500"/>)
        const test = screen.getByTestId('textDot')
        expect(test).toBeInTheDocument()
    })

})
