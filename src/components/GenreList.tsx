import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedIMage from "../services/image-url";
import GenerListSkeleton from "./GenerListSkeleton";

interface Props {
  onSelectGenre: (genere: Genre) => void;
  selectedGener: Genre | null;
}

function GenreList({ selectedGener, onSelectGenre }: Props) {
  const { data: genres, isLoading } = useGenres();
  const skeletons = Array.from({ length: 13 }, (_, index) => index + 1);

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      {isLoading && <GenerListSkeleton skeletons={skeletons} />}
      <List>
        {genres.map((genre) => (
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
                fontWeight={genre.id === selectedGener?.id ? "bold" : "normal"}
                fontSize="lg"
                variant="link"
                onClick={() => onSelectGenre(genre)}
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
