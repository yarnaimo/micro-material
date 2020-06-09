import initStoryshots from '@storybook/addon-storyshots'
import serializer from 'jest-emotion'

initStoryshots({ snapshotSerializers: [serializer] })
