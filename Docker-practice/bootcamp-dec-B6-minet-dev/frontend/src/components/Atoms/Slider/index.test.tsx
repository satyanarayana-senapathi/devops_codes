import { SliderBar } from ".";
import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('slider atom',()=>{
      
      it("renders a Slider element with correct props", () => {
        const props = {
          value: 50,
          min: 0,
          max: 100,
        };
        render(<SliderBar {...props} />);
        const slider = screen.getByRole("slider");
        expect(slider).toHaveAttribute("value");
        expect(slider).toHaveAttribute("min");
        expect(slider).toHaveAttribute("max");
      });

      it('renders a slider with onChange values',()=>{
        const onChange=jest.fn()
        render(<SliderBar value={50} onChange={onChange}/>)
        const slider=screen.getByRole('slider')
        userEvent.click(slider)
        expect(onChange).toHaveBeenCalled();
      })
      
      it("disables the Slider", () => {
        render(<SliderBar disabled />);
        const slider = screen.getByRole("slider");
        expect(slider).toBeDisabled();
      });
      
})