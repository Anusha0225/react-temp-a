import React from 'react'
import { memo } from 'react'
function Child1() {
  return (
    <div>Child1</div>
  )
}

export default memo(Child1)