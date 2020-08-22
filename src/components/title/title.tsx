import React from 'react';

import { TitleProps } from './types';

import './title.css';

const Title: React.FC<TitleProps> = ({
  title = 'Simple title',
}): React.ReactElement<TitleProps> => <h1 className="title">{title}</h1>;

export default Title;
