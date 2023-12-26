import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const badgeColor = score >= 80 ? "green" : score >= 60 ? "yellow" : "red";
  return (
    <Badge
      fontSize={"md"}
      paddingX={2}
      borderRadius={5}
      colorScheme={badgeColor}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
