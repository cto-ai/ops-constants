import { test } from 'tapx'
import * as constants from '../index.js'

test('exports MANIFEST_NAME', async ({ ok }) => {
  ok(constants.MANIFEST_NAME)
})
