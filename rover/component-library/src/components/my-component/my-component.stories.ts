import { storiesOf } from '@storybook/html';

storiesOf('Button', module)
  .add('Fred Flintstone', () => `
    <my-component first="Fred" last="Flintstone">
    </my-component>
  `)
  .add('George Jetson', () => `
    <my-component first="George" last="Jetson">
    </my-component>
  `);