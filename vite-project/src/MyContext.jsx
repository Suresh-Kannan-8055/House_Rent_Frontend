import React, { useState, createContext } from "react";

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [units, setUnits] = useState([
    {
      id: 1,
      image: "/unit.jpeg",
      name: "Jumeirah Estate1",
      price: 1200,
      discountprice: 900,
      location: "Jumeirah Golf Estate",
      unit_number:"UNT-1234",
      address:"Rubix Apartment, K Tower, Floor 1",
      size: 2000,
      rooms: 2,
      bathrooms: 2,
      bhk: 2,
      discountApplied: true,
      images: [
        {
          id: 1,
          name: "/house2.jpeg",
        },
        {
          id: 2,
          name: "/house2.jpeg",
        },
        {
          id: 3,
          name: "/house3.jpeg",
        },
        {
          id: 5,
          name: "/house4.jpeg",
        },
      ],
    },
    {
      id: 2,
      image: "/unit.jpeg",
      name: "Jumeirah Estate2",
      price: 1200,
      discountprice: 0,
      unit_number:"UNT-1234",
      address:"Rubix Apartment, K Tower, Floor 1",
      location: "Jumeirah Golf Estate",
      size: 2000,
      rooms: 2,
      bathrooms: 2,
      bhk: 2,
      discountApplied: true,
      images: [
        {
          id: 1,
          name: "/house2.jpeg",
        },
        {
          id: 2,
          name: "/house2.jpeg",
        },
        {
          id: 3,
          name: "/house3.jpeg",
        },
        {
          id: 5,
          name: "/house4.jpeg",
        },
      ],
    },
    {
      id: 3,
      image: "/unit.jpeg",
      name: "Jumeirah Estate3",
      price: 1200,
      discountprice: 0,
      unit_number:"UNT-1234",
      address:"Rubix Apartment, K Tower, Floor 1",
      location: "Jumeirah Golf Estate",
      size: 2000,
      rooms: 2,
      bathrooms: 2,
      bhk: 3,
      discountApplied: false,
      images: [
        {
          id: 1,
          name: "/house2.jpeg",
        },
        {
          id: 2,
          name: "/house2.jpeg",
        },
        {
          id: 3,
          name: "/house3.jpeg",
        },
        {
          id: 5,
          name: "/house4.jpeg",
        },
      ],
    },
  ]);

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [anchorEls, setAnchorEls] = useState({});

  return (
    <MyContext.Provider
      value={{
        isCollapsed,
        setIsCollapsed,
        units,
        setUnits,
        selectedUnit,
        setSelectedUnit,
        openModal,
        setOpenModal,
        anchorEls,
        setAnchorEls,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
