import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectPlatformId?: number;
}

function PlatformSelector({ onSelectPlatform, selectPlatformId }: Props) {
  const { data } = usePlatforms();
  const platform = data?.results.find((p) => p.id === selectPlatformId);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name ?? "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results?.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default PlatformSelector;
