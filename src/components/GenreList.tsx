import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedIMage from "../services/image-url";
import GenerListSkeleton from "./GenerListSkeleton";

function GenreList() {
  const { data: genres, isLoading } = useGenres();
  const skeletons = Array.from({ length: 13 }, (_, index) => index + 1);

  // if (isLoading) return <Spinner />;
  if (isLoading) {
    return <GenerListSkeleton skeletons={skeletons} />;
  }
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              src={getCroppedIMage(genre.image_background)}
              borderRadius={8}
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList;
