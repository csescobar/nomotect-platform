export const InlineAIPromptSampleOrder = [
    { 'path': 'inline-ai-prompt/ai-overview',
        'component': 'Overview',
        'name': 'Overview',
        'description': 'Demonstrates the Inline AI Prompt component in an email draft assistant scenario with AI-powered editing capabilities.',
        'order': '01',
        'category': 'Inline AI Prompt',
        'api': '{"InlineAIPrompt": ["promptRequest", "relateTo", "commandSettings", "responseSettings"] }',
        'sourceFiles': [
            { 'displayName': 'ai-overview.tsx', 'path': 'src/inline-ai-prompt/ai-overview.tsx' },
            { 'displayName': 'ai-overview.jsx', 'path': 'src/inline-ai-prompt/ai-overview.jsx' },
            { 'displayName': 'ai-overview.css', 'path': 'src/inline-ai-prompt/ai-overview.css' }
        ]
    },
    { 'path': 'inline-ai-prompt/ai-rich-text-editor',
        'component': 'RichTextEditor',
        'name': 'Rich-Text-editor',
        'description': 'Demonstrates the Inline AI Prompt component in an email draft assistant scenario with AI-powered editing capabilities.',
        'order': '01',
        'category': 'Inline AI Prompt',
        'api': '{"InlineAIPrompt": ["promptRequest", "relateTo", "commandSettings", "responseSettings", "responseMode"] }',
        'sourceFiles': [
            { 'displayName': 'ai-rich-text-editor.tsx', 'path': 'src/inline-ai-prompt/ai-rich-text-editor.tsx' },
            { 'displayName': 'ai-rich-text-editor.jsx', 'path': 'src/inline-ai-prompt/ai-rich-text-editor.jsx' },
            { 'displayName': 'ai-rich-text-editor.css', 'path': 'src/inline-ai-prompt/ai-rich-text-editor.css' }
        ]
    }
];
