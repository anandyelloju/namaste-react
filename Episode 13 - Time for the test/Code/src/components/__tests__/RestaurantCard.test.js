import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Theobroma");
  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with Non-Veg label", () => {
  // Home Work - test HOC : withNonVegLabel()
  // render(<RestaurantCard resData={MOCK_DATA} />);
  // const label = screen.getByText("Non-VEG");
  // expect(label).toBeInTheDocument();
});
