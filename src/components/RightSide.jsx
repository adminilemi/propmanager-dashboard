import React from 'react';
import '../Pages/Auth/Auths.scss';

function RightSide({ title, className }) {
  return (
    <section className={className ? className : 'right d-none d-lg-flex'}>
      <h2>{title}</h2>
    </section>
  );
}

export default RightSide;
