import type { Preview } from '@storybook/react-webpack5'

import '../css/font.css'
import '../css/reset.css'
import '../css/tokens.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       date: /Date$/i,
      },
    },
    options: {
      storySort: (a, b) => {
        // Order Docs tab last        
        if(a.name === 'Docs') {
          return 1
        }

        if(b.name === 'Docs') {
          return -1
        }

        return 0
      },
    },
  },
};

export default preview;