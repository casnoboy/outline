// @flow
import * as React from 'react';
import Frame from './components/Frame';

const URL_REGEX = /^https:\/\/realtimeboard.com\/app\/board\/(.*)$/;

type Props = {
  url: string,
  matches: string[],
};

export default class RealtimeBoard extends React.Component<Props> {
  static ENABLED = [URL_REGEX];

  render() {
    const { matches } = this.props;
    const boardId = matches[1];

    return (
      <Frame
        src={`https://realtimeboard.com/app/embed/${boardId}`}
        title={`RealtimeBoard (${boardId})`}
      />
    );
  }
}
