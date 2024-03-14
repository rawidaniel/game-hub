import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedIMage from "../services/image-url";
import GenerListSkeleton from "./GenerListSkeleton";
import useGameQueryStore from "../store";

function GenreList() {
  const { data: genres, isPending } = useGenres();
  const skeletons = Array.from({ length: 13 }, (_, index) => index + 1);
  const genreId = useGameQueryStore((store) => store.gameQuery.genreId);
  const setGenreId = useGameQueryStore((store) => store.setGenreId);

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      {isPending && <GenerListSkeleton skeletons={skeletons} />}
      <List>
        {genres?.results?.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                src={getCroppedIMage(genre.image_background)}
                borderRadius={8}
              />
              <Button
                whiteSpace="normal"
                textAlign="left"
                objectFit="cover"
                fontWeight={genre.id === genreId ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
                onClick={() => setGenreId(genre.id)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default GenreList;
