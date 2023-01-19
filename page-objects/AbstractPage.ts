import type { Page } from '@playwright/test'
import Collection from 'lariat'

export abstract class AbstractPage extends Collection<Page> {}
