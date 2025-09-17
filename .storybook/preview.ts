
import '../src/css/font.css'
import '../src/css/reset.css'
import '../src/css/tokens.css'

export default {
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

