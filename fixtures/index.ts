import { test as baseTest } from '@playwright/test'

type Fixtures = {}

type JsonData = {}

export const test = baseTest.extend<Fixtures & JsonData>({})
export { expect } from '@playwright/test'
