import * as React from 'react';


type Props = {
  children?: React.ReactNode;
};

export const FunctionComponent: React.FC<Props> = (
  {children} :Props
): JSX.Element => {
  return (<>{children}</>);
}
