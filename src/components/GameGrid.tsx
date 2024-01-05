import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import CardContainer from "./CardContainer";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = Array.from({ length: 20 }, (_, index) => index + 1);

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 3,
      }}
      margin={{
        base: 4,
        md: 6,
        lg: 8,
        xl: 10,
      }}
      spacing={{
        base: 4,
        md: 6,
        lg: 8,
        xl: 10,
      }}
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
  );
};

export default GameGrid;
