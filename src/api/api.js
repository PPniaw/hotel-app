import axios from 'axios';

const roomRequest = axios.create({
  baseURL: 'https://challenge.thef2e.com/api/thef2e2019/stage6/',
  headers: {
    Authorization: `Bearer OxWgaH3NXZ1iDLoRmm3YZAE1zIkSg142asehhYYpw2Eh3LpVLFbyo6gkhmTA`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export const apiGetAllRooms = () => roomRequest.get('/rooms');
export const apiGetSingleRoom = id => roomRequest.get(`/room/${id}`);
export const apiPostBookingData = (id, data) => roomRequest.post(`/room/${id}`, data);
