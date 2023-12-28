import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedUImageUrl from "../services/images";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data } = useGenres();

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedUImageUrl(genre.image_background)}
            />
            <Button
              fontSize={selectedGenre?.id === genre.id ? "lg" : "md"}
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              variant={"link"}
              onClick={() => {
                onSelectGenre(genre);
              }}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
