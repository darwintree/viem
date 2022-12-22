import { expect, test } from 'vitest'

import { publicClient, testClient } from '../../../test'

import { getBlockNumber } from '../block'
import { mine } from './mine'

test('mines 1 block', async () => {
  const currentBlockNumber = await getBlockNumber(publicClient)
  await mine(testClient, { blocks: 1 })
  const nextBlockNumber = await getBlockNumber(publicClient)
  expect(nextBlockNumber).toEqual(currentBlockNumber + 1n)
})

test('mines 5 blocks', async () => {
  const currentBlockNumber = await getBlockNumber(publicClient)
  await mine(testClient, { blocks: 5 })
  const nextBlockNumber = await getBlockNumber(publicClient)
  expect(nextBlockNumber).toEqual(currentBlockNumber + 5n)
})
