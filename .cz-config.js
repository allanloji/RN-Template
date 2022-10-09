module.exports = {
    types: [
      { value: ':sparkles:', name: '✨ Introduce new features.' },
      {
        value: ':lipstick:',
        name: '💄 Add or update the UI and style files.'
      },
      {
        value: ':white_check_mark:',
        name: '✅ Add, update, or pass tests.'
      },
      { value: ':camera_flash:', name: '📸 Add or update snapshots.' },
      {
        value: ':globe_with_meridians:',
        name: '🌐 Internationalization and localization.'
      },
      {
        value: ':triangular_flag_on_post:',
        name: '🚩 Add, update, or remove feature flags.'
      },
      { value: ':iphone:', name: '📱 Work on responsive design.' },
      { value: ':clown_face:', name: '🤡 Mock things.' },
      { value: ':recycle:', name: '♻️ Refactor code.' },
      { value: ':coffin:', name: '⚰️ Remove dead code.' },
      { value: ':zap:', name: '⚡️ Improve performance.' },
      { value: ':fire:', name: '🔥 Remove code or files.' },
      {
        value: ':truck:',
        name: '🚚 Move or rename resources (e.g.: files, paths, routes).'
      },
      {
        value: ':art:',
        name: '🎨 Improve structure / format of the code.'
      },
      { value: ':mute:', name: '🔇 Remove logs.' },
      { value: ':pencil2:', name: '✏️ Fix typos.' },
      { value: ':bug:', name: '🐛 Fix a bug.' },
      { value: ':ambulance:', name: '🚑️ Critical hotfix.' },
      {
        value: ':adhesive_bandage:',
        name: '🩹 Simple fix for a non-critical issue.'
      },
      { value: ':memo:', name: '📝 Add or update documentation.' },
      { value: ':construction:', name: '🚧 Work in progress.' },
      {
        value: ':poop:',
        name: '💩 Write bad code that needs to be improved.'
      },
      {
        value: ':see_no_evil:',
        name: '🙈 Add or update a .gitignore file.'
      },
      {
        value: ':technologist:',
        name: '🧑‍💻 Improve developer experience'
      },
      { value: ':arrow_down:', name: '⬇️ Downgrade dependencies.' },
      { value: ':arrow_up:', name: '⬆️ Upgrade dependencies.' },
      { value: ':rocket:', name: '🚀 Deploy stuff.' },
      { value: ':tada:', name: '🎉 Begin a project.' },
      { value: ':lock:', name: '🔒️ Fix security issues.' },
      {
        value: ':closed_lock_with_key:',
        name: '🔐 Add or update secrets.'
      },
      { value: ':bookmark:', name: '🔖 Release / Version tags.' },
      {
        value: ':rotating_light:',
        name: '🚨 Fix compiler / linter warnings.'
      },
      { value: ':green_heart:', name: '💚 Fix CI Build.' },
      {
        value: ':pushpin:',
        name: '📌 Pin dependencies to specific versions.'
      },
      {
        value: ':construction_worker:',
        name: '👷 Add or update CI build system.'
      },
      {
        value: ':chart_with_upwards_trend:',
        name: '📈 Add or update analytics or track code.'
      },
      { value: ':heavy_plus_sign:', name: '➕ Add a dependency.' },
      { value: ':heavy_minus_sign:', name: '➖ Remove a dependency.' },
      { value: ':wrench:', name: '🔧 Add or update configuration files.' },
      { value: ':hammer:', name: '🔨 Add or update development scripts.' },
      { value: ':rewind:', name: '⏪️ Revert changes.' },
      { value: ':twisted_rightwards_arrows:', name: '🔀 Merge branches.' },
      {
        value: ':package:',
        name: '📦️ Add or update compiled files or packages.'
      },
      {
        value: ':alien:',
        name: '👽️ Update code due to external API changes.'
      },
      { value: ':page_facing_up:', name: '📄 Add or update license.' },
      { value: ':boom:', name: '💥 Introduce breaking changes.' },
      { value: ':bento:', name: '🍱 Add or update assets.' },
      { value: ':wheelchair:', name: '♿️ Improve accessibility.' },
      {
        value: ':bulb:',
        name: '💡 Add or update comments in source code.'
      },
      { value: ':beers:', name: '🍻 Write code drunkenly.' },
      {
        value: ':speech_balloon:',
        name: '💬 Add or update text and literals.'
      },
      {
        value: ':card_file_box:',
        name: '🗃️ Perform database related changes.'
      },
      { value: ':loud_sound:', name: '🔊 Add or update logs.' },
  
      {
        value: ':busts_in_silhouette:',
        name: '👥 Add or update contributor(s).'
      },
      {
        value: ':children_crossing:',
        name: '🚸 Improve user experience / usability.'
      },
      {
        value: ':building_construction:',
        name: '🏗️ Make architectural changes.'
      },
      { value: ':egg:', name: '🥚 Add or update an easter egg.' },
      { value: ':alembic:', name: '⚗️ Perform experiments.' },
      { value: ':mag:', name: '🔍️ Improve SEO.' },
      { value: ':label:', name: '🏷️ Add or update types.' },
      { value: ':seedling:', name: '🌱 Add or update seed files.' },
      { value: ':goal_net:', name: '🥅 Catch errors.' },
      {
        value: ':dizzy:',
        name: '💫 Add or update animations and transitions.'
      },
      {
        value: ':wastebasket:',
        name: '🗑️ Deprecate code that needs to be cleaned up.'
      },
      {
        value: ':passport_control:',
        name: '🛂 Work on code related to authorization, roles and permissions.'
      },
      { value: ':monocle_face:', name: '🧐 Data exploration/inspection.' },
      { value: ':test_tube:', name: '🧪 Add a failing test.' },
      { value: ':necktie:', name: '👔 Add or update business logic' },
      { value: ':stethoscope:', name: '🩺 Add or update healthcheck.' },
      { value: ':bricks:', name: '🧱 Infrastructure related changes.' },
      {
        value: ':money_with_wings:',
        name: '💸 Add sponsorships or money related infrastructure.'
      },
      {
        value: ':thread:',
        name: '🧵 Add or update code related to multithreading or concurrency.'
      }
    ],
    scopes: [],
    
    allowCustomScopes: true,
    skipEmptyScopes: false,
    allowTicketNumber: false,
    isTicketNumberRequired: false,
  
    ticketNumberPrefix: 'TICKET-',
    ticketNumberRegExp: '\\d{1,5}',
  
    // override the messages, defaults are as follows
    messages: {
      type: "Select the type of change that you're committing\n",
      customScope:
        'What is the scope of this change (e.g. component or file name): (press enter to skip)\n',
      subject:
        'Write a short, imperative tense description of the change (max 94 chars):\n',
      confirmCommit: 'Are you sure you want to proceed with the commit above?',
    },
  
    // skip any questions you want
    skipQuestions: ['body', 'breaking', 'footer'],
  
  
    // limit subject length
    subjectLimit: 100,
  };
  