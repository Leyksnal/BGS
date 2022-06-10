import React from 'react'
import Hero from '../Hero/Hero'
import Whatwedo from '../WhatWeDo/Whatwedo'
import WhyComp from '../Whyus/WhyComp'
import Whyus from '../Whyus/Whyus'
import Impact from './Impact'
import Partner from './Partner'
import Project from './Project'
import Team from './Team'

export default function View() {
  return (
    <div>
      <Hero/>
      <Whatwedo/>
      <WhyComp/>
      <Project btname="View more projects"/>
      <Impact/>
      <Team/>
      <Partner/>
    </div>
  )
}
