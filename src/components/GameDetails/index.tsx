import { Apple, Windows, Linux } from "@styled-icons/fa-brands";

import MediaMatch from "@/components/MediaMatch";
import Heading from "@/components/Heading";
import * as S from "./GameDetails.styles";

type Platform = "windows" | "linux" | "mac";

type Rating = "BR0" | "BR10" | "BR12" | "BR14" | "BR16" | "BR18";

export type GameDetailsProps = {
  developer: string;
  platforms: Platform[];
  releaseDate: string;
  publisher: string;
  rating: Rating;
  gender: string[];
};

function GameDetails({
  platforms,
  developer,
  releaseDate,
  publisher,
  rating,
  gender,
}: GameDetailsProps) {
  const platformIcons = {
    linux: <Linux title="Linux" size={18} />,
    mac: <Apple title="mac" size={18} />,
    windows: <Windows title="windows" size={18} />,
  };

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading className="heading" lineLeft lineColor="secondary">
          GameDetails
        </Heading>
      </MediaMatch>
      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>{developer}</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Description>
            {new Intl.DateTimeFormat("en-us", {
              day: "numeric",
              month: "short",
              year: "numeric",
            }).format(new Date(releaseDate))}
          </S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.IconsWrapper>
            {platforms.map((item) => (
              <S.Icon key={item}>{platformIcons[item]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>
        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>{publisher}</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>
            {rating === "BR0" ? "FREE" : `${rating.replace("BR", "")}+`}
          </S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>{gender.join(" / ")}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  );
}

export default GameDetails;
