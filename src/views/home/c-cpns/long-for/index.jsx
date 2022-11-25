import PropTypes from 'prop-types'
import React, { memo } from 'react'


import LongForWarpper from './style'
import SectionHeader from '@/components/section-header'
import ScrollView from '@/base-ui/scroll-view'
import LongforItem from '@/components/longfor-item'
const LongFor = memo((props) => {

  return (
    <LongForWarpper>
      <SectionHeader title={props.info?.title} subtitle={props.info?.subtitle}/>
      <ScrollView>
        <div className='longfor'>
          {props.info?.list?.map(i => (<LongforItem key={i.city} data={i}/>))}
        </div>
      </ScrollView>
    </LongForWarpper>
  )
})

LongFor.propTypes = {}

export default LongFor