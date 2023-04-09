import { Character, DataInterface } from '@/utils/interfaces';
import axios from 'axios';

const $host = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

const fetchAllCharacters = async (): Promise<DataInterface> => {
  const { data } = await $host.get('/character');

  return data;
};

const filterCharacters = async (value: string): Promise<DataInterface> => {
  const { data } = await $host.get(`/character/?name=${value}`);

  return data;
};

const fetchCharacter = async (id: number): Promise<Character> => {
  const { data } = await $host.get(`/character/${id}`);

  return data;
};

export { fetchAllCharacters, filterCharacters, fetchCharacter };
