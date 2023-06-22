import { fireEvent, render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import NavBar from ".";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("NavBar", () => {
  it("renders all icons", () => {
    render(
    
      <MemoryRouter>
         <Routes>
            <Route path="/" element={ <NavBar/>}/>
         </Routes>
        </MemoryRouter>

      );
    const dashboard=screen.getByAltText('DashBoard')
    expect(dashboard).toBeInTheDocument();
    const portfolio=screen.getByAltText('My portfolio')
    expect(portfolio).toBeInTheDocument();
    const trade=screen.getByAltText('trade')
    expect(trade).toBeInTheDocument();
    const notifications=screen.getByAltText('notifications')
    expect(notifications).toBeInTheDocument();
  });

  it('should display tooltips on hover', async () => {
    render(
    
      <MemoryRouter>
      <Routes>
         <Route path="/" element={ <NavBar/>}/>
      </Routes>
     </MemoryRouter>
    
      );
    const dashIcon = screen.getByAltText('DashBoard');
    fireEvent.mouseOver(dashIcon);
    expect(await screen.findByText('DashBoard')).toBeInTheDocument();

    const portfolioIcon = screen.getByAltText('My portfolio');
    fireEvent.mouseOver(portfolioIcon);
    expect(await screen.findByText('My portfolio')).toBeInTheDocument();

    const tradeIcon = screen.getByAltText('trade');
    fireEvent.mouseOver(tradeIcon);
    expect(await screen.findByText('trade')).toBeInTheDocument();

    const notificationIcon = screen.getByAltText('notifications');
    fireEvent.mouseOver(notificationIcon);
    expect(await screen.findByText('notifications')).toBeInTheDocument();
  });
  test("clickHandler function is called when icon button is clicked", () => {
    render(
    
      <MemoryRouter>
      <Routes>
         <Route path="/" element={ <NavBar/>}/>
      </Routes>
     </MemoryRouter>
    
      );
    const handler=screen.getByTestId("Dashboard")
    fireEvent.click(handler);
    expect(handler).toBeInTheDocument();
    const handler2=screen.getByAltText("trade")
  fireEvent.click(handler2);
  expect(handler).not.toBeInTheDocument();
  });
});

