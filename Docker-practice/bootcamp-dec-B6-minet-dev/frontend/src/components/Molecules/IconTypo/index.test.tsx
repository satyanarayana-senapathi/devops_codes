import { screen, render} from "@testing-library/react";
import { IconTypo } from "./index";

describe('Avatar image', () => {
    test('Avatar rendered correctly', () => {
        render(<IconTypo image="../../../../public/assets/images/delivery.svg" firstText="Deliver" secondText="0.01BTC"/>)
        const test = screen.getByTestId('iconTypo')
        expect(test).toBeInTheDocument()
    })

})
