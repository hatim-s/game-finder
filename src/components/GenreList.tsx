import { Button, Heading, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedUImageUrl from "../services/images";

interface Props {
  selectedGenre: Genre | null;
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data } = useGenres();

  return (
    <>
      <Heading fontSize="2xl" marginBottom={2}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <Button
              variant={selectedGenre?.id === genre.id ? "solid" : "ghost"}
              minWidth="100%"
              onClick={() => {
                onSelectGenre(genre);
              }}
              display="flex"
              flexDirection="row"
              justifyContent="flex-start"
            >
              <Image
                boxSize="2em"
                objectFit="cover"
                borderRadius={8}
                src={getCroppedUImageUrl(genre.image_background)}
              />
              <Text
                fontSize="lg"
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                paddingX="10px"
              >
                {genre.name}
              </Text>
            </Button>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
