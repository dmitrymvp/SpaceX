import { useEffect, useReducer } from 'react';
import { getLaunchData } from './model/getLaunchData';
import { Flex } from '@mantine/core';
import { initialState, reducer } from './model/reducer';
import LaunchCard from '../entities/LauchCard';
import LaunchDetails from '../features/LaunchDetails';
import type { launchType } from './types/launchTypes';

const LaunchList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getLaunchData().then((launchData) => {
      dispatch({
        type: 'data',
        payload: launchData,
      });
    });
  }, []);

  const onClose = () => {
    dispatch({
      type: 'isOpenModal',
      payload: false,
    });
  };

  const showLaunchDetails = (id: launchType['id']) => {
    const findElem = state.data.find((item: launchType) => item.id === id);

    dispatch({
      type: 'isOpenModal',
      payload: true,
    });

    dispatch({
      type: 'currentLaunch',
      payload: findElem ?? null,
    });
  };

  return (
    <Flex gap={24} justify="flex-start" align="flex-start" wrap="wrap">
      {state.data?.map((item: launchType) => {
        return (
          <LaunchCard
            key={item.id}
            missionName={item.missionName}
            rocketName={item.rocketName}
            image={item.imageSmall}
            showLaunchDetails={() => showLaunchDetails(item.id)}
          />
        );
      })}

      {state.isOpenModal && (
        <LaunchDetails
          onClose={onClose}
          missionName={state.currentLaunch?.missionName}
          rocketName={state.currentLaunch?.rocketName}
          image={state.currentLaunch?.image}
          details={state.currentLaunch?.details}
        />
      )}
    </Flex>
  );
};

export default LaunchList;
