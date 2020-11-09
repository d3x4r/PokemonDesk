import React from 'react';
import cn from 'classnames';
import s from './Heading.module.scss';

type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  as?: HeadingTypes;
  className?: string;
}

type HeadingsListTypes = {
  [key in HeadingTypes]: React.FC<{ className?: string }>;
};

const HeadingList: HeadingsListTypes = {
  h1: ({ children, className }) => <h1 className={cn(s.heading, s['heading-h1'], className)}>{children}</h1>,
  h2: ({ children, className }) => <h2 className={cn(s.heading, s['heading-h2'], className)}>{children}</h2>,
  h3: ({ children, className }) => <h3 className={cn(s.heading, s['heading-h3'], className)}>{children}</h3>,
  h4: ({ children, className }) => <h4 className={cn(s.heading, s['heading-h4'], className)}>{children}</h4>,
  h5: ({ children, className }) => <h5 className={cn(s.heading, s['heading-h5'], className)}>{children}</h5>,
  h6: ({ children, className }) => <h6 className={cn(s.heading, s['heading-h6'], className)}>{children}</h6>,
};

const Heading: React.FC<HeadingProps> = ({ children, as, className }) => {
  const HeadingComponent = as ? HeadingList[as] : HeadingList.h1;
  return <HeadingComponent className={className}>{children}</HeadingComponent>;
};

export default Heading;
