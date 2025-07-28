import { useEffect, useReducer } from 'react';
import LaunchCard from '../entities/LauchCard';
import axios from 'axios';
import { Flex } from '@mantine/core';
import LaunchDetails from '../features/LaunchDetails';

const initialState = {
  data: [],
  isOpenModal: false,
  currentLaunch: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'data':
      return {
        ...state,
        data: action.payload,
      };
    case 'isOpenModal':
      return {
        ...state,
        isOpenModal: action.payload,
      };
    case 'currentLaunch':
      return {
        ...state,
        currentLaunch: action.payload,
      };
    default:
      return state
  }
}

const LaunchList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://api.spacexdata.com/v3/launches?launch_year=2020',
        );

        dispatch({
          type: 'data',
          payload: response.data,
        });
        console.log(response.data);
      } catch {
        console.error('Error');
      }
    };

    fetchData();
  }, []);

  const onClose = () => {
    dispatch ({
      type: 'isOpenModal',
      payload: false
    })
  }

  const showLaunchDetails = (id) => {
    const findElem = state.data.find(item => item.launch_date_unix === id )
    console.log(findElem)

    dispatch({
      type: 'isOpenModal',
      payload: true,
    })

    dispatch({
      type: 'currentLaunch',
      payload: findElem
      
    })
  }

  return (
    <Flex
      w={700}
      mih={50}
      gap={24}
      justify="flex-start"
      align="flex-start"
      wrap="wrap"
    >
      {state.data.map((item) => {
        return (
          <LaunchCard
            key={item.launch_date_unix}
            missionName={item.mission_name}
            rocketName={item.rocket.rocket_name}
            image={item.links.mission_patch_small}
            showLaunchDetails={() => showLaunchDetails(item.launch_date_unix)}
          />
        );
      })}
{state.isOpenModal &&
      <LaunchDetails 
        isOpenModal={state.isOpenModal} 
        onClose={onClose}
        missionName={state.currentLaunch?.mission_name}
        rocketName={state.currentLaunch?.rocket.rocket_name}
        image={state.currentLaunch?.links.mission_patch_small}/>}
    </Flex>
  );
};

export default LaunchList;
