import { http, HttpResponse } from 'msw';
import { response } from './response';

export const handlers = [
  http.get('http://api.spacexdata.com/v3/launches', () => {
    return HttpResponse.json(response);
  }),
];
