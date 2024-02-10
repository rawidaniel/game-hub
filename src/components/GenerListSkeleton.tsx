import { List, ListItem, SkeletonText } from "@chakra-ui/react";

interface Props {
  skeletons: number[];
}
function GenerListSkeleton({ skeletons }: Props) {
  return (
    <List>
      {skeletons.map((skeleton) => (
        <ListItem key={skeleton} paddingY="10px">
          <SkeletonText></SkeletonText>
        </ListItem>
      ))}
    </List>
  );
}

export default GenerListSkeleton;
