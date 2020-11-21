import React from 'react'
import HeadDetail from './HeadDetail/HeadDetail'
import HeadBackgroud from './HeadBackgroud/HeadBackgroud'
import HeadContent from './HeadContent/HeadContent';
import Navbar from '../Navbar/index';
function Detail() {
  return (
    <React.Fragment>
      <Navbar />
      <HeadDetail />
      <HeadBackgroud />
      <HeadContent />
    </React.Fragment>
  )
}
export default Detail;
