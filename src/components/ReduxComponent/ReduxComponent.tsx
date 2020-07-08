import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { ApplicationState } from '../../lib/Redux/Store';
import { Example } from '../../lib/Types';
import { loadExample, LoadExampleResult } from '../../lib/Redux/Actions/example';
import { ReduxComponentContainer, Loading, Content, ExampleItem } from './ReduxComponentStyles';

const ReduxComponent: FC<ReduxComponentProps> = ({ loading, examples, onLoadExample }) => {
  useEffect(() => {
    onLoadExample('123');
  }, []);

  return (
    <ReduxComponentContainer>
      {loading ? (
        <Loading />
      ) : (
        <Content>
          {examples.map((item) => (
            <ExampleItem key={item.id} />
          ))}
        </Content>
      )}
    </ReduxComponentContainer>
  );
};

export interface ReduxComponentProps {
  loading: boolean;
  examples: Example[];
  onLoadExample: (exampleId: string | number) => LoadExampleResult;
}

const mapStateToProps = ({ loadingState, exampleState }: ApplicationState) => ({
  loading: loadingState.apiLoading,
  examples: exampleState.examples,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      onLoadExample: loadExample as any,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent);
