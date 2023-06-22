import  Image  from ".";
import { render,screen } from "@testing-library/react";
import { userEvent } from "@storybook/testing-library";

describe('Image atom',()=>{
    it("renders an img element with  src attribute", () => {
        const src = "logo512.png";
        render(<Image src={src} alt={""} />);
        const img = screen.getByRole("img");
        expect(img).toHaveAttribute("src", src);
      });

      it("renders an img element with alt attribute", () => {
        const alt = "logo image";
        render(<Image src="logo512.png" alt={alt} />);
        const img = screen.getByRole("img");
        expect(img).toHaveAttribute("alt", alt);
      });
      
      it("renders an img element with width and height", () => {
        const width = "100px";
        const height = "200px";
        render(<Image src="logo512.png" width={width} height={height} alt={""} />);
        const img = screen.getByRole("img");
        expect(img).toHaveAttribute("width", width);
        expect(img).toHaveAttribute("height", height);
      });

      it("calls the onClick prop when the img element is clicked", () => {
        const onClick = jest.fn();
        render(<Image src="logo512.png" onClick={onClick} alt={""} />);
        const img = screen.getByRole("img");
        userEvent.click(img);
        expect(onClick).toHaveBeenCalled();
      });
      
      it('does not render the onClick prop if it is not provided', () => {
        render(<Image src='logo512.png' alt={""} />);
        const img = screen.getByRole('img');
        expect(img).not.toHaveAttribute('onClick');
      });
    
      it('does not render the width and height props if they are not provided', () => {
        render(<Image src='logo512.png' alt={""} />);
        const img = screen.getByRole('img');
        expect(img).not.toHaveAttribute('width');
        expect(img).not.toHaveAttribute('height');
      });
    
      it('renders the default alt text if alt prop is not provided', () => {
        render(<Image src='logo512.png' alt=''/>);
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('alt', '');
      });
      
})