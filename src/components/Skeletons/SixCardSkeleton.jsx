import { Center, SimpleGrid } from '@mantine/core'
import React from 'react'
import CardSkeleton from './CardSkeleton'

const SixCardSkeleton = () => {
  const properties = [...Array(6).keys()]?.map((property, index) => {
    return <CardSkeleton key={index} />
  })

  return (
    <Center>
      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: 'xs', cols: 1 },
          { maxWidth: 'sm', cols: 2 },
          { maxWidth: 'md', cols: 2 },
          { maxWidth: 'lg', cols: 2 },
          { maxWidth: 'xl', cols: 3 },
        ]}
      >
        {properties}
      </SimpleGrid>
    </Center>
  )
}

export default SixCardSkeleton
