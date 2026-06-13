export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'Pogo FrankenPHP Plugins'
  },
  header: {
    title: 'Pogo Docs',
    to: '/',
    logo: {
      alt: 'Pogo documentation',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/y-l-g/pogo',
      'target': '_blank',
      'aria-label': 'Pogo on GitHub'
    }]
  },
  footer: {
    credits: `Pogo FrankenPHP Plugins • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/y-l-g/queue',
      'target': '_blank',
      'aria-label': 'Queue on GitHub'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/y-l-g/scheduler',
      'target': '_blank',
      'aria-label': 'Scheduler on GitHub'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/y-l-g/upload',
      'target': '_blank',
      'aria-label': 'Upload on GitHub'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/y-l-g/websocket',
      'target': '_blank',
      'aria-label': 'WebSocket on GitHub'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Resources',
      edit: undefined,
      links: [{
        icon: 'i-simple-icons-github',
        label: 'Queue',
        to: 'https://github.com/y-l-g/queue',
        target: '_blank'
      }, {
        icon: 'i-simple-icons-github',
        label: 'Pogo',
        to: 'https://github.com/y-l-g/pogo',
        target: '_blank'
      }, {
        icon: 'i-simple-icons-github',
        label: 'Upload',
        to: 'https://github.com/y-l-g/upload',
        target: '_blank'
      }, {
        icon: 'i-simple-icons-github',
        label: 'WebSocket',
        to: 'https://github.com/y-l-g/websocket',
        target: '_blank'
      }]
    }
  }
})
