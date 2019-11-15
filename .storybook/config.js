import { addDecorator, configure } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { StorybookWrapper } from './StoryWrapper'

configure([require.context('../src/stories', true, /\.tsx$/)], module)
addDecorator(withInfo)
addDecorator(StorybookWrapper)
addDecorator(withA11y)
addDecorator(withKnobs)
