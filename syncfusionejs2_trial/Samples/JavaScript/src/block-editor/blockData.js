window.blockDataAPI = [
  {
    blockType: 'Heading',
    properties: { level: 2 },
    content: [
      { contentType: 'Text', content: 'Why Do We Need APIs for Web UI Components?' }
    ]
  },
  // Paragraph: Introduction to APIs
  {
    blockType: 'Paragraph',
    content: [
      {
        contentType: 'Text',
        content:
          'APIs (Application Programming Interfaces) are critical for modern web UI components because they:'
      }
    ]
  },
  // Bullet List: Benefits of APIs
  {
    blockType: 'BulletList',
    content: [
      {
        contentType: 'Text',
        content: 'Enable Customization: ',
        properties: { styles: { bold: true } }
      },
      {
        contentType: 'Text',
        content:
          'Enable Customization: Developers can tailor components to match application requirements without altering the core code.'
      }
    ]
  },
  {
    blockType: 'BulletList',
    content: [
      {
        contentType: 'Text',
        content: 'Improve Maintainability: ',
        properties: { styles: { bold: true } }
      },
      {
        contentType: 'Text',
        content:
          'Clear APIs separate logic from presentation, making updates and debugging easier.'
      }
    ]
  },
  {
    blockType: 'BulletList',
    content: [
      {
        contentType: 'Text',
        content: 'Enhance Integration: ',
        properties: { styles: { bold: true } }
      },
      {
        contentType: 'Text',
        content:
          'APIs allow components to interact seamlessly with other parts of the application or external services.'
      }
    ]
  },
  {
    blockType: 'BulletList',
    content: [
      {
        contentType: 'Text',
        content: 'Boost Productivity: ',
        properties: { styles: { bold: true } }
      },
      {
        contentType: 'Text',
        content:
          'Predefined properties, methods, and events reduce development time by providing ready-to-use functionality.'
      }
    ]
  },
  // H3: Usage of Properties, Methods
  {
    blockType: 'Heading',
    properties: { level: 3 },
    content: [{ contentType: 'Text', content: 'Usage of properties and methods' }]
  },
  {
    blockType: 'Paragraph',
    content: [
      {
        contentType: 'Text',
        content: 'APIs in UI components typically expose properties and methods'
      }
    ]
  },
  // H4: Properties
  {
    blockType: 'Heading',
    properties: { level: 4 },
    content: [{ contentType: 'Text', content: 'Properties' }]
  },
  {
    blockType: 'Paragraph',
    content: [
      {
        contentType: 'Text',
        content: 'Properties define the state or configuration of the component.'
      }
    ]
  },
  {
    blockType: 'Paragraph',
    content: [
      {
        contentType: 'Text',
        content: 'Example Use Cases:',
        properties: { styles: { bold: true } }
      }
    ]
  },
  // Bullet List: Properties Use Cases
  {
    blockType: 'BulletList',
    content: [{ contentType: 'Text', content: 'Set the editor’s read-only mode.' }]
  },
  {
    blockType: 'BulletList',
    content: [
      {
        contentType: 'Text',
        content:
          'Enable or disable persisting component’s state between page reloads.'
      }
    ]
  },
  // Code Block: Properties Example
  {
    blockType: 'Code',
    content: [
      {
        contentType: 'Text',
        content:
          'blockEditor.readOnly = true;\nblockEditor.enablePersistence = true;'
      }
    ]
  },
  // H4: Methods
  {
    blockType: 'Heading',
    properties: { level: 4 },
    content: [{ contentType: 'Text', content: 'Methods' }]
  },
  {
    blockType: 'Paragraph',
    content: [
      {
        contentType: 'Text',
        content: 'Methods perform actions on the component dynamically.'
      }
    ]
  },
  {
    blockType: 'Paragraph',
    content: [
      {
        contentType: 'Text',
        content: 'Example Use Cases:',
        properties: { styles: { bold: true } }
      }
    ]
  },
  // Bullet List: Methods Use Cases
  {
    blockType: 'BulletList',
    content: [{ contentType: 'Text', content: 'Add or remove blocks programmatically.' }]
  },
  {
    blockType: 'BulletList',
    content: [
      { contentType: 'Text', content: 'Retrieve JSON data content from the editor.' }
    ]
  },
  // Code Block: Methods Example
  {
    blockType: 'Code',
    content: [
      {
        contentType: 'Text',
        content:
          "const newBlock: BlockModel = {\nid: 'new-block', \nblockType: 'Paragraph',\ncontent: [ { \ncontentType: 'Text', content: 'This is a newly added block'}]\n};\neditor.addBlock(newBlock,'target-block-id');\nconst blockData = editor.getDataAsJson('new-block');"
      }
    ]
  },
  { blockType: 'Paragraph' }
];

// Command menu (updated: uses blockType for items)
window.BlockcommandMenu = {
  popupWidth: '298px',
  popupHeight: '400px',
  enableTooltip: false,
  // Custom command items
  commands: [
    {
      id: 'bullet-list-command',
      blockType: 'BulletList',
      groupHeader: 'General',
      label: 'Bullet List',
      tooltip: 'Create a bullet list',
      iconCss: 'e-icons e-list-unordered',
      shortcut: 'Ctrl+Shift+8'
    },
    {
      id: 'numbered-list-command',
      blockType: 'NumberedList',
      groupHeader: 'General',
      label: 'Numbered List',
      tooltip: 'Create a numbered list',
      iconCss: 'e-icons e-list-ordered',
      shortcut: 'Ctrl+Shift+9'
    },
    {
      id: 'divider-command',
      blockType: 'Divider',
      groupHeader: 'General',
      label: 'Divider',
      tooltip: 'Add a horizontal line',
      iconCss: 'e-icons e-be-divider',
      shortcut: 'Ctrl+Shift+-'
    },
    {
      id: 'code-command',
      blockType: 'Code',
      groupHeader: 'Insert',
      label: 'Code',
      tooltip: 'Insert a code block',
      iconCss: 'e-icons e-insert-code',
      shortcut: 'Ctrl+Alt+k'
    },
    {
      id: 'table-command',
      blockType: 'Table',
      groupHeader: 'Insert',
      label: 'Table',
      tooltip: 'Insert a table block',
      iconCss: 'e-icons e-table',
      shortcut: 'Ctrl+Alt+T'
    },
    {
      id: 'paragraph-command',
      blockType: 'Paragraph',
      groupHeader: 'Text Styles',
      label: 'Paragraph',
      tooltip: 'Add a paragraph',
      iconCss: 'e-icons e-be-paragraph',
      shortcut: 'Ctrl+Alt+P'
    },
    {
      id: 'heading1-command',
      blockType: 'Heading',
      groupHeader: 'Text Styles',
      label: 'Heading 1',
      tooltip: 'Page title or main heading',
      iconCss: 'e-icons e-be-h1',
      shortcut: 'Ctrl+Alt+1'
    },
    {
      id: 'heading2-command',
      blockType: 'Heading',
      groupHeader: 'Text Styles',
      label: 'Heading 2',
      tooltip: 'Section heading',
      iconCss: 'e-icons e-be-h2',
      shortcut: 'Ctrl+Alt+2'
    },
    {
      id: 'heading3-command',
      blockType: 'Heading',
      groupHeader: 'Text Styles',
      label: 'Heading 3',
      tooltip: 'Subsection heading',
      iconCss: 'e-icons e-be-h3',
      shortcut: 'Ctrl+Alt+3'
    },
    {
      id: 'heading4-command',
      blockType: 'Heading',
      groupHeader: 'Text Styles',
      label: 'Heading 4',
      tooltip: 'Smaller heading for nested content',
      iconCss: 'e-icons e-be-h4',
      shortcut: 'Ctrl+Alt+4'
    },
    {
      id: 'quote-command',
      blockType: 'Quote',
      groupHeader: 'Text Styles',
      label: 'Quote',
      tooltip: 'Insert a quote block',
      iconCss: 'e-icons e-blockquote',
      shortcut: 'Ctrl+Alt+Q'
    }
  ]
};

// Overview content
window.blockDataOverview = [
  {
    blockType: 'Heading',
    properties: { level: 2 },
    content: [{ contentType: 'Text', content: 'Welcome to the Block Editor Demo!' }]
  },
  {
    blockType: 'Paragraph',
    content: [
      { contentType: 'Text', content: 'Welcome to the ' },
      { contentType: 'Text', content: 'Block Editor', properties: { styles: { bold: true } } },
      {
        contentType: 'Text',
        content:
          '! This demo highlights all supported block types and inline formatting options. Each section below explains the purpose of the block and shows how it appears in the editor.'
      }
    ]
  },
  {
    blockType: 'Heading',
    properties: { level: 3 },
    content: [{ contentType: 'Text', content: 'Paragraph' }]
  },
  {
    blockType: 'Paragraph',
    content: [
      {
        contentType: 'Text',
        content:
          'Paragraph blocks are used for writing regular text. They are the most common block type and support inline formatting to enhance readability and emphasis.'
      }
    ]
  },
  {
    blockType: 'Heading',
    properties: { level: 3 },
    content: [{ contentType: 'Text', content: 'Inline Formatting' }]
  },
  // Core emphasis styles combined
  {
    blockType: 'Paragraph',
    content: [
      { contentType: 'Text', content: 'Use ' },
      { contentType: 'Text', content: 'bold', properties: { styles: { bold: true } } },
      { contentType: 'Text', content: ', ' },
      { contentType: 'Text', content: 'italic', properties: { styles: { italic: true } } },
      { contentType: 'Text', content: ', and ' },
      { contentType: 'Text', content: 'underline', properties: { styles: { underline: true } } },
      { contentType: 'Text', content: ' for emphasis; or ' },
      {
        contentType: 'Text',
        content: 'strikethrough',
        properties: { styles: { strikethrough: true } }
      },
      { contentType: 'Text', content: ' to indicate removals or outdated text.' }
    ]
  },
  // Technical/semantic styles together
  {
    blockType: 'Paragraph',
    content: [
      { contentType: 'Text', content: 'Math and chemistry: E = mc' },
      { contentType: 'Text', content: '2', properties: { styles: { superscript: true } } },
      { contentType: 'Text', content: ', H' },
      { contentType: 'Text', content: '2', properties: { styles: { subscript: true } } },
      { contentType: 'Text', content: 'O - with superscript and subscript. Add inline code ' },
      { contentType: 'Code', content: 'const x = 10;' },
      { contentType: 'Text', content: ' and helpful ' },
      {
        contentType: 'Link',
        content: 'links',
        properties: {
          url: 'https://ej2.syncfusion.com/documentation/block-editor/getting-started'
        }
      },
      { contentType: 'Text', content: ' for quick references.' }
    ]
  },
  // Transform and color styles, plus mention/label in one line
  {
    blockType: 'Paragraph',
    content: [
      { contentType: 'Text', content: 'Transform text to ' },
      { contentType: 'Text', content: 'uppercase', properties: { styles: { uppercase: true } } },
      { contentType: 'Text', content: ' or ' },
      { contentType: 'Text', content: 'LOWERCASE', properties: { styles: { lowercase: true } } },
      { contentType: 'Text', content: '. Add ' },
      { contentType: 'Text', content: 'color', properties: { styles: { color: 'green' } } },
      { contentType: 'Text', content: ' or ' },
      {
        contentType: 'Text',
        content: 'background highlights',
        properties: { styles: { backgroundColor: '#FEF3C7', color: '#92400E' } }
      },
      { contentType: 'Text', content: ' as needed. Mention ' },
      { contentType: 'Mention', properties: { userId: 'user1' } },
      { contentType: 'Text', content: ' and tag with ' },
      { contentType: 'Label', properties: { labelId: 'progress' } },
      { contentType: 'Text', content: ' to add context.' }
    ]
  },
  {
    blockType: 'Heading',
    content: [{ contentType: 'Text', content: 'Table' }],
    properties: { level: 3, placeholder: 'Heading 3' },
    indent: 0
  },
  {
    blockType: 'Paragraph',
    content: [
      {
        contentType: 'Text',
        content:
          'Table blocks organize data in rows and columns for easy comparison or presentation. They support headers, alignment, and basic styling'
      }
    ]
  },
  {
    blockType: 'Table',
    properties: {
      width: '100%',
      enableHeader: true,
      enableRowNumbers: true,
      readOnly: false,
      columns: [
        { contentType: 'Text', headerText: 'Column 1' },
        { contentType: 'Text', headerText: 'Column 2' }
      ],
      rows: [
        {
          cells: [
            { blocks: [{ blockType: 'Paragraph' }] },
            { blocks: [{ blockType: 'Paragraph' }] }
          ]
        },
        {
          cells: [
            { blocks: [{ blockType: 'Paragraph' }] },
            { blocks: [{ blockType: 'Paragraph' }] }
          ]
        }
      ]
    }
  },
  { blockType: 'Paragraph' },
  {
    blockType: 'Heading',
    properties: { level: 3 },
    content: [{ contentType: 'Text', content: 'Image Block' }]
  },
  {
    blockType: 'Paragraph',
    content: [
      {
        contentType: 'Text',
        content:
          'Image blocks allow you to insert visuals to support or enhance your content.'
      }
    ]
  },
  {
    blockType: 'Image',
    properties: {
      src: 'https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png',
      alt: 'Block Editor Image'
    }
  },
  {
    blockType: 'Heading',
    properties: { level: 3 },
    content: [{ contentType: 'Text', content: 'Checklist' }]
  },
  {
    blockType: 'Paragraph',
    content: [{ contentType: 'Text', content: 'Checklists help track tasks or steps:' }]
  },
  {
    blockType: 'Checklist',
    properties: { isChecked: true },
    content: [{ contentType: 'Text', content: 'Apply inline formatting' }]
  },
  {
    blockType: 'Checklist',
    content: [
      { contentType: 'Text', content: 'Invite reviewer ' },
      { contentType: 'Mention', properties: { userId: 'user-john' } }
    ]
  },
  {
    blockType: 'Checklist',
    content: [
      { contentType: 'Text', content: 'Publish guide and share ' },
      {
        contentType: 'Link',
        content: 'the link',
        properties: {
          url: 'https://ej2.syncfusion.com/documentation/block-editor/getting-started'
        }
      }
    ]
  },
  {
    blockType: 'Heading',
    properties: { level: 3 },
    content: [{ contentType: 'Text', content: 'Lists' }]
  },
  {
    blockType: 'Paragraph',
    content: [{ contentType: 'Text', content: 'Lists organize information clearly:' }]
  },
  {
    blockType: 'BulletList',
    content: [
      {
        contentType: 'Text',
        content: 'Unordered List',
        properties: { styles: { bold: true } }
      }
    ]
  },
  {
    blockType: 'BulletList',
    indent: 1,
    content: [{ contentType: 'Text', content: 'Concise points for quick scanning' }]
  },
  {
    blockType: 'BulletList',
    indent: 1,
    content: [{ contentType: 'Text', content: 'Great for features or tips' }]
  },
  {
    blockType: 'BulletList',
    indent: 1,
    content: [{ contentType: 'Text', content: 'Easy to reorder and nest' }]
  },
  {
    blockType: 'NumberedList',
    content: [
      {
        contentType: 'Text',
        content: 'Ordered List',
        properties: { styles: { bold: true } }
      }
    ]
  },
  {
    blockType: 'NumberedList',
    indent: 1,
    content: [{ contentType: 'Text', content: 'Start a new document' }]
  },
  {
    blockType: 'NumberedList',
    indent: 1,
    content: [{ contentType: 'Text', content: 'Add structure with headings' }]
  },
  {
    blockType: 'NumberedList',
    indent: 1,
    content: [{ contentType: 'Text', content: 'Fill in content and review' }]
  },
  {
    blockType: 'Heading',
    properties: { level: 3 },
    content: [{ contentType: 'Text', content: 'Headings' }]
  },
  {
    blockType: 'Paragraph',
    content: [
      { contentType: 'Text', content: 'Headings help organize content into sections. Use different levels ' },
      { contentType: 'Text', content: '(h1, h2, h3 or h4)', properties: { styles: { bold: true } } },
      { contentType: 'Text', content: ' to create a hierarchy:' }
    ]
  },
  {
    blockType: 'Heading',
    properties: { level: 3 },
    content: [{ contentType: 'Text', content: 'Quote' }]
  },
  {
    blockType: 'Paragraph',
    content: [
      {
        contentType: 'Text',
        content: 'Use quote blocks to emphasize important statements or references.'
      }
    ]
  },
  {
    blockType: 'Quote',
    content: [
      { contentType: 'Text', content: '“Quotes are perfect for highlighting key messages or testimonials.”' }
    ]
  },
  {
    blockType: 'Heading',
    properties: { level: 3 },
    content: [{ contentType: 'Text', content: 'Callout' }]
  },
  {
    blockType: 'Paragraph',
    content: [
      {
        contentType: 'Text',
        content: 'Callouts are great for tips, warnings, or notes that need attention.'
      }
    ]
  },
  {
    blockType: 'Callout',
    properties: {
      children: [
        {
          blockType: 'Paragraph',
          content: [
            { contentType: 'Text', content: 'Tip: ', properties: { styles: { bold: true } } },
            { contentType: 'Text', content: 'Use the ' },
            { contentType: 'Code', content: '/ ' },
            {
              contentType: 'Text',
              content: 'command to quickly insert blocks like headings, lists, or code.'
            }
          ]
        }
      ]
    }
  },
  {
    blockType: 'Heading',
    properties: { level: 3 },
    content: [{ contentType: 'Text', content: 'Code Block' }]
  },
  {
    blockType: 'Paragraph',
    content: [
      {
        contentType: 'Text',
        content:
          'Use code blocks to display syntax-highlighted code snippets for technical documentation or tutorials.'
      }
    ]
  },
  {
    blockType: 'Code',
    content: [
      { contentType: 'Text', content: "function greet(name) {\n  return `Hello, ${name}!`;\n}" }
    ]
  },
  {
    blockType: 'Heading',
    properties: { level: 3 },
    content: [{ contentType: 'Text', content: 'Toggle Block' }]
  },
  {
    blockType: 'Paragraph',
    content: [
      {
        contentType: 'Text',
        content: 'Toggle blocks are interactive and help manage long or optional content.'
      }
    ]
  },
  {
    blockType: 'CollapsibleParagraph',
    content: [
      { contentType: 'Text', content: 'Click to expand', properties: { styles: { bold: true } } }
    ],
    properties: {
      isExpanded: false,
      children: [
        {
          blockType: 'Paragraph',
          content: [
            {
              contentType: 'Text',
              content:
                'This is a toggle block. You can hide or show content as needed. Useful for FAQs or detailed sections.'
            }
          ]
        }
      ]
    }
  },
  {
    blockType: 'Heading',
    properties: { level: 3 },
    content: [{ contentType: 'Text', content: 'Divider' }]
  },
  {
    blockType: 'Paragraph',
    content: [
      {
        contentType: 'Text',
        content:
          'Dividers are horizontal lines used to separate sections or indicate a break in content.'
      }
    ]
  },
  { blockType: 'Divider' },
  { blockType: 'Paragraph' }
];

// Events content
window.blockDataEvents = [
  {
    blockType: 'Heading',
    properties: { level: 2 },
    content: [{ contentType: 'Text', content: 'Block Editor Event Handling' }]
  },
  // Paragraph: Introduction
  {
    blockType: 'Paragraph',
    content: [
      {
        contentType: 'Text',
        content:
          'The Block Editor provides a comprehensive event system that allows developers to track user interactions and customize workflows. Events are essential for implementing real-time updates, analytics, and advanced features.'
      }
    ]
  },
  // H3: Why Events Matter
  {
    blockType: 'Heading',
    properties: { level: 3 },
    content: [{ contentType: 'Text', content: 'Why events matter' }]
  },
  // Collapsible: Events enable you to...
  {
    blockType: 'CollapsibleHeading',
    content: [{ contentType: 'Text', content: 'Events enable you to:' }],
    properties: {
      level: 4,
      isExpanded: true,
      children: [
        {
          blockType: 'BulletList',
          content: [{ contentType: 'Text', content: 'Respond to content changes instantly.' }]
        },
        {
          blockType: 'BulletList',
          content: [{ contentType: 'Text', content: 'Track user focus and engagement.' }]
        },
        {
          blockType: 'BulletList',
          content: [
            { contentType: 'Text', content: 'Monitor block-level actions for better control.' }
          ]
        },
        {
          blockType: 'BulletList',
          content: [{ contentType: 'Text', content: 'Implement custom behaviors and analytics.' }]
        }
      ]
    }
  },
  // Callout: Tip
  {
    blockType: 'Callout',
    properties: {
      children: [
        {
          blockType: 'Paragraph',
          content: [
            {
              contentType: 'Text',
              content: 'Tip: ',
              properties: { styles: { bold: true, color: '#047857' } }
            },
            {
              contentType: 'Text',
              content:
                'Use events wisely — avoid unnecessary listeners to maintain optimal performance.'
            }
          ]
        }
      ]
    }
  },
  // H3: Core Events
  {
    blockType: 'Heading',
    properties: { level: 3 },
    content: [{ contentType: 'Text', content: 'Core events' }]
  },
  // Bullet List: Core Events
  {
    blockType: 'BulletList',
    content: [
      { contentType: 'Text', content: 'blockChanged: ', properties: { styles: { bold: true } } },
      {
        contentType: 'Text',
        content: 'Detect when blocks are added, removed, transformed or updated.'
      }
    ]
  },
  {
    blockType: 'BulletList',
    content: [
      { contentType: 'Text', content: 'focus: ', properties: { styles: { bold: true } } },
      { contentType: 'Text', content: 'Track active blocks when the editor gains focus.' }
    ]
  },
  // H4: Basic Usage
  {
    blockType: 'Heading',
    properties: { level: 4 },
    content: [{ contentType: 'Text', content: 'Basic usage' }]
  },
  // Code Block: Basic Event Registration
  {
    blockType: 'Code',
    content: [
      {
        contentType: 'Text',
        content:
          'const editor = new BlockEditor({ \nfocus: (args: FocusEventArgs) => { \n// Custom actions when the editor gains focus\n} \nblockChanged: (args: BlockChangedEventArgs) {\n //Custom actions on a block are added, removed, transformed, or updated. \n}});'
      }
    ]
  },
  // H3: Event Usage in the Block Editor
  {
    blockType: 'Heading',
    properties: { level: 3 },
    content: [{ contentType: 'Text', content: 'Event usage in the Block Editor' }]
  },
  // Paragraph: Common use cases
  {
    blockType: 'Paragraph',
    content: [{ contentType: 'Text', content: 'Events are commonly used for:' }]
  },
  // Bullet List: Practical Use Cases
  {
    blockType: 'BulletList',
    content: [
      { contentType: 'Text', content: 'Autosave: ', properties: { styles: { bold: true } } },
      { contentType: 'Text', content: 'Trigger blockChanged to save content periodically.' }
    ]
  },
  {
    blockType: 'BulletList',
    content: [
      { contentType: 'Text', content: 'Collaboration: ', properties: { styles: { bold: true } } },
      { contentType: 'Text', content: 'Sync changes in real-time using blockChanged.' }
    ]
  },
  // H3: Cases to Avoid When Binding Events
  {
    blockType: 'Heading',
    properties: { level: 3 },
    content: [{ contentType: 'Text', content: 'Cases to avoid when binding events' }]
  },
  // Numbered List: Anti-patterns
  {
    blockType: 'NumberedList',
    content: [
      {
        contentType: 'Text',
        content: 'High-frequency events without throttling Example: ',
        properties: { styles: { bold: true } }
      },
      {
        contentType: 'Text',
        content:
          'Binding heavy logic to blockChanged without debouncing can cause performance issues.'
      }
    ]
  },
  {
    blockType: 'NumberedList',
    content: [
      {
        contentType: 'Text',
        content: 'Duplicate listeners: ',
        properties: { styles: { bold: true } }
      },
      {
        contentType: 'Text',
        content:
          'Adding multiple listeners for the same event can lead to memory leaks and unexpected behavior.'
      }
    ]
  },
  {
    blockType: 'NumberedList',
    content: [
      {
        contentType: 'Text',
        content: 'Unnecessary global listeners: ',
        properties: { styles: { bold: true } }
      },
      {
        contentType: 'Text',
        content: 'Avoid binding events that are not relevant to your workflow.'
      }
    ]
  },
  {
    blockType: 'NumberedList',
    content: [
      {
        contentType: 'Text',
        content: 'Complex operations inside event callbacks: ',
        properties: { styles: { bold: true } }
      },
      {
        contentType: 'Text',
        content:
          'Heavy DOM manipulation or API calls inside frequent events can degrade the user experience.'
      }
    ]
  },
  // H3: Best Practices
  {
    blockType: 'Heading',
    properties: { level: 3 },
    content: [{ contentType: 'Text', content: 'Best practices' }]
  },
  // Bullet List: Best Practices
  {
    blockType: 'BulletList',
    content: [{ contentType: 'Text', content: 'Use debouncing for frequent events like blockChanged.' }]
  },
  {
    blockType: 'BulletList',
    content: [{ contentType: 'Text', content: 'Remove listeners when they are no longer needed.' }]
  },
  {
    blockType: 'BulletList',
    content: [{ contentType: 'Text', content: 'Keep event callbacks lightweight and efficient.' }]
  },
  {
    blockType: 'BulletList',
    content: [{ contentType: 'Text', content: 'Combine events for analytics without impacting UX.' }]
  },
  // Quote: Italic style
  {
    blockType: 'Quote',
    content: [
      {
        contentType: 'Text',
        content: '“Every interaction tells a story — listen carefully.”',
        properties: { styles: { italic: true } }
      }
    ]
  },
  { blockType: 'Paragraph' }
];

// Users (updated paths and variable name)
window.users = [
  {
    avatarUrl: './assets/block-editor/images/andrew.png',
    id: 'user1',
    user: 'Andrews'
  },
  {
    avatarUrl: './assets/block-editor/images/charlie.png',
    id: 'user2',
    user: 'Charlie'
  },
  {
    avatarUrl: './assets/block-editor/images/laura.png',
    id: 'user3',
    user: 'Laura'
  }
];

// Paste content
window.blockDataPaste = [
  {
    blockType: 'Heading',
    properties: { level: 2 },
    content: [{ contentType: 'Text', content: 'Smart Paste Cleanup' }]
  },
  // Paragraph: Introduction
  {
    blockType: 'Paragraph',
    content: [
      {
        contentType: 'Text',
        content:
          'Pasting content from external sources often introduces unwanted styles and inconsistent formatting. The Block Editor provides a powerful cleanup mechanism with customization options to maintain consistency and security.'
      }
    ]
  },
  // H3: Features
  {
    blockType: 'Heading',
    properties: { level: 3 },
    content: [{ contentType: 'Text', content: 'Features' }]
  },
  // Bullet List: Features
  {
    blockType: 'BulletList',
    content: [{ contentType: 'Text', content: 'Removes inline styles for cleaner markup.' }]
  },
  {
    blockType: 'BulletList',
    content: [
      { contentType: 'Text', content: 'Preserves semantic structure like headings and paragraphs.' }
    ]
  },
  {
    blockType: 'BulletList',
    content: [{ contentType: 'Text', content: 'Converts rich text into clean blocks for easy editing.' }]
  },
  {
    blockType: 'BulletList',
    content: [{ contentType: 'Text', content: 'Extracts links and mentions without clutter.' }]
  },
  // H3: Customization Options
  {
    blockType: 'Heading',
    properties: { level: 3 },
    content: [{ contentType: 'Text', content: 'Customization options' }]
  },
  // Paragraph: Config intro
  {
    blockType: 'Paragraph',
    content: [
      {
        contentType: 'Text',
        content: 'You can configure paste cleanup behavior using the following settings:'
      }
    ]
  },
  // Code Block: pasteCleanupOptions
  {
    blockType: 'Code',
    content: [
      {
        contentType: 'Text',
        content:
          "const editor = new BlockEditor({\n  allowedStyles: ['color', 'font-weight'], // Styles to keep\n  deniedTags: ['script', 'iframe'],        // Tags to remove\n  keepFormat: true,                        // Keep original formatting\n  plainPaste: false                        // Force plain text paste\n});"
      }
    ]
  },
  // H3: Events
  {
    blockType: 'Heading',
    properties: { level: 3 },
    content: [{ contentType: 'Text', content: 'Events' }]
  },
  // Paragraph: Event hooks
  {
    blockType: 'Paragraph',
    content: [{ contentType: 'Text', content: 'Hooks for before and after paste actions:' }]
  },
  // Code Block: beforePaste & afterPaste
  {
    blockType: 'Code',
    content: [
      {
        contentType: 'Text',
        content:
          'const editor = new BlockEditor({ \n afterPasteCleanup: (args: AfterPasteEventArgs) => {    \n  // Process pasted content or update UI  \n  } \n beforePasteCleanup: (args: BeforePasteEventArgs) => { \n  // Modify content before cleanup if needed  \n  } \n});'
      }
    ]
  },
  // Collapsible Header: Paste Modes
  {
    blockType: 'CollapsibleHeading',
    content: [{ contentType: 'Text', content: 'Paste modes' }],
    properties: {
      level: 4,
      isExpanded: true,
      children: [
        {
          blockType: 'BulletList',
          content: [
            { contentType: 'Text', content: 'Keep Format: ', properties: { styles: { bold: true } } },
            { contentType: 'Text', content: 'Retains allowed styles and structure.' }
          ]
        },
        {
          blockType: 'BulletList',
          content: [
            { contentType: 'Text', content: 'Plain Paste: ', properties: { styles: { bold: true } } },
            { contentType: 'Text', content: 'Strips all styles and converts to plain text.' }
          ]
        }
      ]
    }
  },
  // H3: Why Cleanup Matters
  {
    blockType: 'Heading',
    properties: { level: 3 },
    content: [{ contentType: 'Text', content: 'Why cleanup matters' }]
  },
  // Paragraph: Benefits intro
  {
    blockType: 'Paragraph',
    content: [{ contentType: 'Text', content: 'Clean content improves:' }]
  },
  // Bullet List: Benefits
  {
    blockType: 'BulletList',
    content: [
      { contentType: 'Text', content: 'Readability: ', properties: { styles: { bold: true } } },
      { contentType: 'Text', content: 'No distracting styles.' }
    ]
  },
  {
    blockType: 'BulletList',
    content: [
      { contentType: 'Text', content: 'Accessibility: ', properties: { styles: { bold: true } } },
      { contentType: 'Text', content: 'Proper semantic tags.' }
    ]
  },
  {
    blockType: 'BulletList',
    content: [
      { contentType: 'Text', content: 'Consistency: ', properties: { styles: { bold: true } } },
      { contentType: 'Text', content: 'Uniform styling across platforms.' }
    ]
  },
  {
    blockType: 'BulletList',
    content: [
      { contentType: 'Text', content: 'Security: ', properties: { styles: { bold: true } } },
      { contentType: 'Text', content: 'Prevents malicious scripts or embeds.' }
    ]
  },
  // Callout: Tip
  {
    blockType: 'Callout',
    properties: {
      children: [
        {
          blockType: 'Paragraph',
          content: [
            {
              contentType: 'Text',
              content: 'Tip: ',
              properties: { styles: { bold: true, color: '#047857' } }
            },
            {
              contentType: 'Text',
              content:
                'Use paste cleanup to remove inline styles while retaining semantic structure.'
            }
          ]
        },
        {
          blockType: 'Paragraph',
          content: [
            {
              contentType: 'Text',
              content: '        Clean content is clear content.',
              properties: { styles: { italic: true } }
            }
          ]
        }
      ]
    }
  },
  // H3: Workflow
  {
    blockType: 'Heading',
    properties: { level: 3 },
    content: [{ contentType: 'Text', content: 'Workflow' }]
  },
  // Numbered List: Paste Workflow
  {
    blockType: 'NumberedList',
    content: [{ contentType: 'Text', content: 'Paste content from external sources.' }]
  },
  {
    blockType: 'NumberedList',
    content: [{ contentType: 'Text', content: 'Review the cleaned output.' }]
  },
  {
    blockType: 'NumberedList',
    content: [{ contentType: 'Text', content: 'Apply additional formatting if needed.' }]
  },
  {
    blockType: 'NumberedList',
    content: [{ contentType: 'Text', content: 'Save and publish.' }]
  },
  { blockType: 'Paragraph', content: [] }
];

// Template gallery (now uses blockType + contentType + properties consistently)
window.blockTemplate = [
  {
    name: 'Template Gallery',
    type: 'page',
    page: [
      {
        icon: '📃',
        name: 'Blank Page',
        subtitle: 'Start from scratch',
        type: 'page',
        blocks: [{ blockType: 'Paragraph' }]
      },
      {
        icon: '📝️',
        name: 'Project Brief',
        subtitle: 'Plan, organize, and track',
        type: 'page',
        blocks: [
          {
            blockType: 'Heading',
            content: [{ contentType: 'Text', content: '🎯 Objectives' }],
            properties: { level: 4, placeholder: 'Heading 4' }
          },
          {
            blockType: 'Paragraph',
            content: [
              {
                contentType: 'Text',
                content:
                  'Define the intended outcomes or goals of a task, project, or initiative.'
              }
            ]
          },
          { blockType: 'Paragraph' },
          {
            blockType: 'Heading',
            content: [{ contentType: 'Text', content: '✅ Scope' }],
            properties: { level: 4, placeholder: 'Heading 4' }
          },
          {
            blockType: 'Paragraph',
            content: [
              {
                contentType: 'Text',
                content:
                  'Outline the boundaries, inclusions, and exclusions of the work to be performed.'
              }
            ]
          },
          { blockType: 'BulletList' },
          { blockType: 'Paragraph' },
          {
            blockType: 'Heading',
            content: [{ contentType: 'Text', content: '🚩 Deliverables' }],
            properties: { level: 4, placeholder: 'Heading 4' }
          },
          { blockType: 'Checklist' },
          { blockType: 'Paragraph' },
          {
            blockType: 'Heading',
            content: [{ contentType: 'Text', content: '⭐ Milestones' }],
            properties: { level: 4, placeholder: 'Heading 4' }
          },
          {
            blockType: 'Table',
            properties: {
              columns: [{ headerText: 'MileStones' }, { id: 'col2', headerText: 'Status' }],
              rows: [
                {
                  cells: [
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Planned Items' } }] },
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Update Status' } }] }
                  ]
                },
                {
                  cells: [
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Planned Items' } }] },
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Update Status' } }] }
                  ]
                },
                {
                  cells: [
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Planned Items' } }] },
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Update Status' } }] }
                  ]
                }
              ]
            }
          },
          { blockType: 'Paragraph' },
          {
            blockType: 'Heading',
            content: [{ contentType: 'Text', content: '📊 Success Criteria' }],
            properties: { level: 4, placeholder: 'Heading 4' }
          },
          {
            blockType: 'Paragraph',
            content: [
              {
                contentType: 'Text',
                content:
                  'Establish measurable standards to evaluate whether the objectives have been met.'
              }
            ]
          },
          { blockType: 'NumberedList' },
          { blockType: 'Paragraph' }
        ]
      },
      {
        icon: '🦄',
        name: 'Team Decisions',
        subtitle: 'Ideate and decide',
        type: 'page',
        blocks: [
          {
            blockType: 'Heading',
            content: [{ contentType: 'Text', content: '📜 Context & Background' }],
            properties: { level: 4, placeholder: 'Heading 4' }
          },
          {
            blockType: 'Paragraph',
            content: [
              {
                contentType: 'Text',
                content:
                  'Provide the relevant history, situation, and key information leading to the decision.'
              }
            ]
          },
          { blockType: 'Paragraph' },
          {
            blockType: 'Heading',
            content: [{ contentType: 'Text', content: '✅ Decision Statement' }],
            properties: { level: 4, placeholder: 'Heading 4' }
          },
          {
            blockType: 'Paragraph',
            content: [
              {
                contentType: 'Text',
                content: 'Clearly articulate the specific question or problem that needs to be resolved.'
              }
            ]
          },
          { blockType: 'Paragraph' },
          {
            blockType: 'Heading',
            content: [{ contentType: 'Text', content: '⚖️ Options Considered' }],
            properties: { level: 4, placeholder: 'Heading 4' }
          },
          { blockType: 'NumberedList' },
          { blockType: 'Paragraph' },
          {
            blockType: 'Heading',
            content: [{ contentType: 'Text', content: '🏆 Final Decision' }],
            properties: { level: 4, placeholder: 'Heading 4' }
          },
          {
            blockType: 'Table',
            properties: {
              columns: [{ headerText: 'Ideas' }, { headerText: 'Pros' }, { headerText: 'Cons' }],
              rows: [
                {
                  cells: [
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: "What's your Idea?" } }] },
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Add items' } }] },
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Add items' } }] }
                  ]
                },
                {
                  cells: [
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: "What's your Idea?" } }] },
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Add items' } }] },
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Add items' } }] }
                  ]
                },
                {
                  cells: [
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: "What's your Idea?" } }] },
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Add items' } }] },
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Add items' } }] }
                  ]
                }
              ]
            }
          },
          { blockType: 'Paragraph' },
          {
            blockType: 'Heading',
            content: [{ contentType: 'Text', content: '🚀 Action Items' }],
            properties: { level: 4, placeholder: 'Heading 4' }
          },
          { blockType: 'Checklist' },
          { blockType: 'Paragraph' }
        ]
      },
      {
        icon: '💎',
        name: 'Project Planning',
        subtitle: 'Collaborate',
        type: 'page',
        blocks: [
          {
            blockType: 'Heading',
            content: [{ contentType: 'Text', content: '💫 Project Overview' }],
            properties: { level: 4, placeholder: 'Heading 4' }
          },
          {
            blockType: 'Paragraph',
            content: [
              {
                contentType: 'Text',
                content:
                  'A short summary that explains what the project is about and what it aims to achieve'
              }
            ]
          },
          { blockType: 'Paragraph' },
          {
            blockType: 'Heading',
            content: [{ contentType: 'Text', content: '🎯 Goals & Objectives' }],
            properties: { level: 4, placeholder: 'Heading 4' }
          },
          { blockType: 'Checklist' },
          { blockType: 'Paragraph' },
          {
            blockType: 'Heading',
            content: [{ contentType: 'Text', content: '✅ Scope Definition' }],
            properties: { level: 4, placeholder: 'Heading 4' }
          },
          {
            blockType: 'Paragraph',
            content: [
              {
                contentType: 'Text',
                content:
                  'Define what is included and explicitly excluded from the project to set clear boundaries.'
              }
            ]
          },
          { blockType: 'Paragraph' },
          {
            blockType: 'Heading',
            content: [{ contentType: 'Text', content: '🧑‍💻 Resource Plan' }],
            properties: { level: 4, placeholder: 'Heading 4' }
          },
          {
            blockType: 'Table',
            properties: {
              columns: [{ headerText: 'Name' }, { headerText: 'Role' }, { headerText: 'Allocated Teams' }],
              rows: [
                {
                  cells: [
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Full Name' } }] },
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Enter role here' } }] },
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Team Names' } }] }
                  ]
                },
                {
                  cells: [
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Full Name' } }] },
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Enter role here' } }] },
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Team Names' } }] }
                  ]
                },
                {
                  cells: [
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Full Name' } }] },
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Enter role here' } }] },
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Team Names' } }] }
                  ]
                }
              ]
            }
          },
          { blockType: 'Paragraph' }
        ]
      },
      {
        icon: '✏️',
        name: 'Meeting Notes',
        subtitle: 'Sync and share',
        type: 'page',
        blocks: [
          {
            blockType: 'Heading',
            content: [{ contentType: 'Text', content: '👥 Attendees' }],
            properties: { level: 4, placeholder: 'Heading 4' }
          },
          {
            blockType: 'Table',
            properties: {
              columns: [{ headerText: 'Name' }, { headerText: 'Role' }],
              rows: [
                {
                  cells: [
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Add your name' } }] },
                    {
                      blocks: [
                        { blockType: 'Paragraph', properties: { placeholder: 'Add your Designation' } }
                      ]
                    }
                  ]
                },
                {
                  cells: [
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Add your name' } }] },
                    {
                      blocks: [
                        { blockType: 'Paragraph', properties: { placeholder: 'Add your Designation' } }
                      ]
                    }
                  ]
                },
                {
                  cells: [
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Add your name' } }] },
                    {
                      blocks: [
                        { blockType: 'Paragraph', properties: { placeholder: 'Add your Designation' } }
                      ]
                    }
                  ]
                }
              ]
            }
          },
          { blockType: 'Paragraph' },
          {
            blockType: 'Heading',
            content: [{ contentType: 'Text', content: '📑 Agenda' }],
            properties: { level: 4, placeholder: 'Heading 4' }
          },
          { blockType: 'BulletList' },
          { blockType: 'Paragraph' },
          {
            blockType: 'Heading',
            content: [{ contentType: 'Text', content: '✅ Decisions Made' }],
            properties: { level: 4, placeholder: 'Heading 4' }
          },
          { blockType: 'NumberedList' },
          { blockType: 'Paragraph' },
          {
            blockType: 'Heading',
            content: [{ contentType: 'Text', content: '🚀 Action Items' }],
            properties: { level: 4, placeholder: 'Heading 4' }
          },
          {
            blockType: 'Table',
            properties: {
              columns: [{ headerText: 'Tasks' }, { headerText: 'Assigned to' }, { headerText: 'Discussions' }],
              rows: [
                {
                  cells: [
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Task name' } }] },
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Assignee' } }] },
                    { blocks: [{ blockType: 'BulletList', properties: { placeholder: 'Clarify requirements' } }] }
                  ]
                },
                {
                  cells: [
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Task name' } }] },
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Assignee' } }] },
                    { blocks: [{ blockType: 'BulletList', properties: { placeholder: 'Clarify requirements' } }] }
                  ]
                },
                {
                  cells: [
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Task name' } }] },
                    { blocks: [{ blockType: 'Paragraph', properties: { placeholder: 'Assignee' } }] },
                    { blocks: [{ blockType: 'BulletList', properties: { placeholder: 'Clarify requirements' } }] }
                  ]
                }
              ]
            }
          },
          { blockType: 'Paragraph' }
        ]
      }
    ],
    blocks: [{ blockType: 'Paragraph' }]
  }
];