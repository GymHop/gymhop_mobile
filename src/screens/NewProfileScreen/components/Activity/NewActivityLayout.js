import React from 'react';
import {NewProfileVisits} from './NewProfileVisits';
import {NewProfileStats} from './NewProfileStats';
import {NewProfileMonthly} from './NewProfileMonthly';
import {NewProfileHistory} from './NewProfileHistory';

export const NewActivityLayout = props => {
  return (
    <>
      <NewProfileVisits />
      <NewProfileStats />
      <NewProfileMonthly />
      <NewProfileHistory />
    </>
  );
};
