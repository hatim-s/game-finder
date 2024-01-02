import heartEyes from "../assets/heart-eyes.ico";
import fire from "../assets/fire.ico";
import star from "../assets/star.ico";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: star, alt: "Great", boxSize: "35px" },
    4: { src: heartEyes, alt: "Good", boxSize: "30px" },
    5: { src: fire, alt: "Awesome", boxSize: "25px" },
  };
  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
