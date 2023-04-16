import { Dispatch, FC, SetStateAction } from 'react';
import { charactersAPI } from '@/store/service';
import './style.scss';

interface CharacterModalProps {
  setCharId: Dispatch<SetStateAction<number | null>>;
  id: number;
}

export const CharacterModal: FC<CharacterModalProps> = ({ setCharId, id }) => {
  const { data } = charactersAPI.useFetchCharacterQuery(id);

  const episodeArr = data && data.episode.map((i) => i.slice(i.lastIndexOf('/') + 1));

  return (
    <>
      <div className="bg" onClick={() => setCharId(null)}></div>
      <div className="character" data-testid="char-modal">
        <button className="close-btn" onClick={() => setCharId(null)}>
          &#10006;
        </button>
        <h3 className="character__name">{data?.name}</h3>
        <div className="character__info">
          <div className="image-wrapper">
            <img className="character__img" src={data?.image} alt="character image" />
          </div>
          <div className="info-wrapper">
            <span>gender: {data?.gender}</span>
            <span>location: {data?.location.name}</span>
            <span>species: {data?.species}</span>
            <span>status: {data?.status}</span>
            {data?.type && <span>{`type: ${data?.type}`}</span>}
            {data?.origin && <span>{`origin: ${data?.origin.name}`}</span>}
          </div>
        </div>
        <div className="character__episodes">
          <span>episodes: </span>
          <div>{episodeArr?.join(', ')}</div>
        </div>
      </div>
    </>
  );
};
