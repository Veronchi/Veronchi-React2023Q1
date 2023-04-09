import { Dispatch, FC, SetStateAction } from 'react';
import { Character } from '@/utils/interfaces';
import './style.scss';

interface CharacterModalProps {
  data: Character;
  setModalData: Dispatch<SetStateAction<Character | null>>;
}

export const CharacterModal: FC<CharacterModalProps> = ({ data, setModalData }) => {
  const { name, image, gender, location, species, status, type, episode } = data;

  const episodeArr = episode.map((i) => i.slice(i.lastIndexOf('/') + 1));

  return (
    <>
      <div className="bg" onClick={() => setModalData(null)}></div>
      <div className="character">
        <button className="close-btn" onClick={() => setModalData(null)}>
          &#10006;
        </button>
        <h3 className="character__name">{name}</h3>
        <div className="character__info">
          <div className="image-wrapper">
            <img className="character__img" src={image} alt="character image" />
          </div>
          <div className="info-wrapper">
            <span>gender: {gender}</span>
            <span>location: {location.name}</span>
            <span>species: {species}</span>
            <span>status: {status}</span>
            <span>type: {type}</span>
          </div>
        </div>
        <div className="character__episodes">
          <span>episodes: </span>
          <div>{episodeArr.join(', ')}</div>
        </div>
      </div>
    </>
  );
};
