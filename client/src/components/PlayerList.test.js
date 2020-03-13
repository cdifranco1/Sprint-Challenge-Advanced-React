import React from "react";
import { PlayerList } from "./PlayerList";
import { render, wait, fireEvent } from "@testing-library/react";

const dummyData =   [
  { name: "Alex Morgan", country: "United States", searches: 100 },
  { name: "Megan Rapinoe", country: "United States", searches: 99 },
  { name: "Marta", country: "Brazil", searches: 18 },
  { name: "Rose Lavelle", country: "United States", searches: 11 },
  { name: "Carli Lloyd", country: "United States", searches: 9 },
  { name: "Julie Ertz", country: "United States", searches: 8 }
]
const searchTerm = '';


test('correct amount of players rendered', () => {

  const { getAllByText } = render(<PlayerList players={dummyData} searchTerm={searchTerm} />)

  expect(getAllByText(/name/i)).toHaveLength(6)
})


