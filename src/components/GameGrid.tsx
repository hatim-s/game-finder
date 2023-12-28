import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import CardContainer from "./CardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={"10px"}
        padding={"10px"}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <CardContainer key={skeleton}>
              <GameCardSkeleton />
            </CardContainer>
          ))}
        {!isLoading &&
          data.map((game) => (
            <CardContainer key={game.id}>
              <GameCard game={game} />
            </CardContainer>
          ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
