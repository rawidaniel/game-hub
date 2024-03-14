import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

function SortSelector() {
  const sortOrders = [
    {
      label: "Relevance",
      value: "",
    },
    {
      label: "Date added",
      value: "-added",
    },
    {
      label: "Name",
      value: "name",
    },
    {
      label: "Release date",
      value: "-release",
    },
    {
      label: "Popularity",
      value: "-metacritic",
    },
    {
      label: "Average rating",
      value: "-rating",
    },
  ];

  const sortOrder = useGameQueryStore((store) => store.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore((store) => store.setSortOrder);

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => setSortOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
