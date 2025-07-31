import { http, HttpResponse } from 'msw';
import { response } from './response';

export const handlers = [
  http.get('http://api.spacexdata.com/v3/launches?launch_year=2020', () => {
    return HttpResponse.json(response);
  }),
];
