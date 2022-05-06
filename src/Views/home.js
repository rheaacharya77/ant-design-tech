import React from 'react'
import AppAbout from '../components/home/about'
import AppContact from '../components/home/contact'
import AppFaq from '../components/home/faq'
import AppFeature from '../components/home/feature'
import AppHero from '../components/home/hero'
import AppPricing from '../components/home/pricing'
import AppWorks from '../components/home/works'

export default function Apphome() {
  return (
    <div className='main'>
        <AppHero/>
        <AppAbout/>
        <AppFeature/>
        <AppWorks/>
        <AppFaq/>
        <AppPricing/>
        <AppContact/>
    </div>
  )
}
