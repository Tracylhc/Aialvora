import { Tool } from '../types';

const toolTranslations: Record<string, {
  description: string;
  category: string;
  tags: string[];
  features: string[];
  useCases: string[];
  pros: string;
  cons: string;
  priceInfo: string;
  pricing: string;
}> = {
  chatgpt: {
    description: 'A large language model developed by OpenAI, capable of intelligent conversation, content creation, code generation and more.',
    category: 'AI Chat',
    tags: ['AI Chat', 'Content Creation', 'Code Generation'],
    features: ['AI Chat', 'Content Creation', 'Data Analysis', 'Code Generation'],
    useCases: ['Writing', 'Office Assistant', 'Study Help'],
    pros: 'Powerful features, multi-language support, comprehensive ecosystem',
    cons: 'Response speed can be slow at times, some features require payment',
    priceInfo: 'Free: Basic features; Plus: GPT-4 advanced model',
    pricing: 'Free/Paid'
  },
  claude: {
    description: 'An AI assistant developed by Anthropic, known for safety and long context understanding.',
    category: 'AI Chat',
    tags: ['Long Context', 'Safe', 'Document Understanding'],
    features: ['Long Document Processing', 'Safe Conversation', 'Multimodal Support'],
    useCases: ['Document Analysis', 'Academic Research', 'Creative Writing'],
    pros: 'Excellent long context handling, high security',
    cons: 'Relatively limited features, ecosystem not as rich as ChatGPT',
    priceInfo: 'Free: 100K token context; Claude 3: Larger models',
    pricing: 'Free/Paid'
  },
  gemini: {
    description: 'Google\'s multimodal AI model supporting text, image, audio, and video understanding.',
    category: 'AI Chat',
    tags: ['Multimodal', 'Google Ecosystem', 'Visual Understanding'],
    features: ['Multimodal Understanding', 'Real-time Info', 'Code Execution'],
    useCases: ['Image Analysis', 'Video Understanding', 'Programming Assistance'],
    pros: 'Strong multimodal capabilities, integrates Google services',
    cons: 'Response speed can be unstable',
    priceInfo: 'Free: Basic features; Gemini Advanced: Advanced model',
    pricing: 'Free/Paid'
  },
  midjourney: {
    description: 'Leading AI image generation tool, famous for high-quality artistic styles.',
    category: 'AI Art',
    tags: ['Art Generation', 'High Quality', 'Diverse Styles'],
    features: ['Text to Image', 'Image Variations', 'Stylized Art'],
    useCases: ['Art Creation', 'Design', 'Concept Art'],
    pros: 'High-quality outputs, vast style library',
    cons: 'Requires Discord, paid subscription',
    priceInfo: 'Basic: $10/month; Pro: $30/month; Enterprise: Custom',
    pricing: 'Paid'
  },
  flux: {
    description: 'AI image generation model with high quality outputs.',
    category: 'AI Art',
    tags: ['Image Generation', 'High Quality', 'AI'],
    features: ['Text to Image', 'High Resolution', 'Fast Generation'],
    useCases: ['Art', 'Design', 'Content Creation'],
    pros: 'Excellent image quality, fast generation',
    cons: 'Limited availability',
    priceInfo: 'API access available',
    pricing: 'Paid'
  },
  stablediffusion: {
    description: 'Open-source AI image generation model.',
    category: 'AI Art',
    tags: ['Open Source', 'Image Generation', 'Customizable'],
    features: ['Text to Image', 'Image to Image', 'ControlNet'],
    useCases: ['Art Creation', 'Research', 'Custom Models'],
    pros: 'Open source, highly customizable',
    cons: 'Requires setup and resources',
    priceInfo: 'Free; Commercial licenses available',
    pricing: 'Free'
  },
  runway: {
    description: 'AI video editing and generation platform.',
    category: 'AI Video',
    tags: ['Video Editing', 'AI', 'Content Creation'],
    features: ['Text to Video', 'Video Editing', 'Generative Fill'],
    useCases: ['Video Production', 'Content Creation', 'Marketing'],
    pros: 'Professional tools, innovative features',
    cons: 'Expensive subscription',
    priceInfo: 'Pro: $12/month; Pro+: $20/month; Enterprise: Custom',
    pricing: 'Paid'
  },
  pika: {
    description: 'AI video generation tool for creative content.',
    category: 'AI Video',
    tags: ['Video Generation', 'AI', 'Creative'],
    features: ['Text to Video', 'Image to Video', 'Style Transfer'],
    useCases: ['Social Media', 'Content Creation', 'Animation'],
    pros: 'Easy to use, creative outputs',
    cons: 'Limited free usage',
    priceInfo: 'Free: Limited; Pro: $10/month',
    pricing: 'Free/Paid'
  },
  cursor: {
    description: 'AI-powered code editor.',
    category: 'AI Coding',
    tags: ['Code Editor', 'AI', 'Coding'],
    features: ['AI Chat', 'Code Generation', 'Refactoring'],
    useCases: ['Programming', 'Development', 'Learning'],
    pros: 'Built-in AI, fast and lightweight',
    cons: 'Relatively new',
    priceInfo: 'Free',
    pricing: 'Free'
  },
  'github-copilot': {
    description: 'GitHub Copilot AI pair programmer.',
    category: 'AI Coding',
    tags: ['Coding', 'AI', 'GitHub'],
    features: ['Code Completion', 'Code Generation', 'Refactoring'],
    useCases: ['Programming', 'Development', 'Learning'],
    pros: 'Excellent code suggestions, integrates with IDE',
    cons: 'Occasional incorrect suggestions',
    priceInfo: 'Free for students; $10/month for individuals; $19/user/month for teams',
    pricing: 'Paid'
  },
  canva: {
    description: 'Graphic design platform with AI features.',
    category: 'AI Art',
    tags: ['Design', 'AI', 'Templates'],
    features: ['AI Design', 'Templates', 'Collaboration'],
    useCases: ['Design', 'Social Media', 'Marketing'],
    pros: 'Easy to use, vast template library',
    cons: 'Advanced features require Pro',
    priceInfo: 'Free: Basic; Pro: $12.99/month; Teams: $14.99/month',
    pricing: 'Free/Paid'
  },
  'notion-ai': {
    description: 'AI features integrated with Notion workspace.',
    category: 'AI Office',
    tags: ['Notion', 'AI', 'Productivity'],
    features: ['AI Writing', 'Summarization', 'Database AI'],
    useCases: ['Note Taking', 'Productivity', 'Writing'],
    pros: 'Integrates with Notion',
    cons: 'Requires Notion subscription',
    priceInfo: 'Included with Notion Plus/Enterprise',
    pricing: 'Paid'
  },
  deepseek: {
    description: 'AI chatbot with strong reasoning capabilities.',
    category: 'AI Chat',
    tags: ['AI Chat', 'Reasoning', 'Code'],
    features: ['AI Chat', 'Code Generation', 'Math Reasoning'],
    useCases: ['Programming', 'Problem Solving', 'Learning'],
    pros: 'Strong reasoning, good at coding',
    cons: 'Limited features',
    priceInfo: 'Free: Basic; API: Pay-as-you-go',
    pricing: 'Free/Paid'
  },
  windsurf: {
    description: 'AI-powered search and research tool.',
    category: 'AI Chat',
    tags: ['Search', 'Research', 'AI'],
    features: ['AI Search', 'Research', 'Summary'],
    useCases: ['Research', 'Learning', 'Information'],
    pros: 'Good search results',
    cons: 'Limited features',
    priceInfo: 'Free',
    pricing: 'Free'
  },
  elevenlabs: {
    description: 'AI voice generation with natural sounding voices.',
    category: 'AI Audio',
    tags: ['Voice Generation', 'AI', 'Natural'],
    features: ['Text to Speech', 'Voice Cloning', 'Multilingual'],
    useCases: ['Voiceovers', 'Podcasts', 'Accessibility'],
    pros: 'Most natural voices, good cloning',
    cons: 'Expensive for heavy usage',
    priceInfo: 'Starter: $5/month; Creator: $22/month; Enterprise: Custom',
    pricing: 'Paid'
  },
  'copy-ai': {
    description: 'AI-powered copywriting tool.',
    category: 'AI Writing',
    tags: ['Copywriting', 'AI', 'Marketing'],
    features: ['Content Generation', 'Templates', 'AI Chat'],
    useCases: ['Marketing', 'Content Creation', 'Social Media'],
    pros: 'Great for marketing copy',
    cons: 'Can be repetitive',
    priceInfo: 'Free: Limited; Pro: $36/month; Enterprise: Custom',
    pricing: 'Free/Paid'
  },
  agentgpt: {
    description: 'AI Agent that can accomplish tasks autonomously.',
    category: 'AI Agent',
    tags: ['AI Agent', 'Autonomous', 'Task'],
    features: ['Task Planning', 'Execution', 'Feedback'],
    useCases: ['Productivity', 'Research', 'Automation'],
    pros: 'Autonomous task completion',
    cons: 'Can make mistakes',
    priceInfo: 'Free: Limited; Pro: $20/month',
    pricing: 'Free/Paid'
  },
  langchain: {
    description: 'Framework for building AI applications.',
    category: 'AI Agent',
    tags: ['Framework', 'AI', 'Development'],
    features: ['Chaining', 'Agents', 'Integrations'],
    useCases: ['Development', 'AI Apps', 'Research'],
    pros: 'Powerful framework, good ecosystem',
    cons: 'Steep learning curve',
    priceInfo: 'Free',
    pricing: 'Free'
  },
  doubao: {
    description: 'AI assistant developed by ByteDance with multimodal capabilities.',
    category: 'AI Chat',
    tags: ['AI Chat', 'Multimodal', 'ByteDance'],
    features: ['AI Chat', 'Content Creation', 'Multimodal', 'Life Services'],
    useCases: ['Daily Chat', 'Study', 'Productivity', 'Life'],
    pros: 'Good Chinese support, fast response',
    cons: 'Limited international features',
    priceInfo: 'Free: Basic; Premium: Advanced features',
    pricing: 'Free/Paid'
  },
  qianwen: {
    description: 'Large language model by Alibaba Cloud, focused on Chinese scenarios.',
    category: 'AI Chat',
    tags: ['AI Chat', 'Chinese', 'Alibaba'],
    features: ['AI Chat', 'Content Creation', 'Code Generation', 'Enterprise'],
    useCases: ['Chinese Writing', 'Knowledge', 'Enterprise'],
    pros: 'Strong Chinese understanding, enterprise security',
    cons: 'Basic features',
    priceInfo: 'Free: Basic; Enterprise: Custom',
    pricing: 'Free/Paid'
  },
  kimi: {
    description: 'AI assistant by Moonshot AI with long context capabilities.',
    category: 'AI Chat',
    tags: ['AI Chat', 'Long Context', 'Document'],
    features: ['Long Document', 'Code Analysis', 'Multimodal'],
    useCases: ['Document Analysis', 'Code Review', 'Research'],
    pros: 'Excellent long context, good code analysis',
    cons: 'Slow response',
    priceInfo: 'Free: 200K tokens; Pro: Larger context',
    pricing: 'Free/Paid'
  },
  'doubao-writing': {
    description: 'AI writing assistant by Doubao.',
    category: 'AI Writing',
    tags: ['Writing', 'AI', 'Productivity'],
    features: ['AI Writing', 'Polishing', 'Format', 'Creative'],
    useCases: ['Writing', 'Copywriting', 'Reports', 'Emails'],
    pros: 'Easy to use, many scenarios',
    cons: 'Basic features',
    priceInfo: 'Free: Basic; Premium: Advanced',
    pricing: 'Free/Paid'
  },
  'nano-banana': {
    description: 'Fast AI image generation tool.',
    category: 'AI Art',
    tags: ['Image Generation', 'Fast', 'Quality'],
    features: ['Text to Image', 'Fast Generation', 'High Quality'],
    useCases: ['Fast Creation', 'Design', 'Social Media'],
    pros: 'Fast generation, good quality',
    cons: 'Limited features',
    priceInfo: 'Free: Limited; Pro: Unlimited',
    pricing: 'Free/Paid'
  },
  leonardo: {
    description: 'Professional AI image generation platform.',
    category: 'AI Art',
    tags: ['Image Generation', 'Professional', 'Quality'],
    features: ['Text to Image', 'Style Transfer', 'Model Training'],
    useCases: ['Art', 'Game Assets', 'Design'],
    pros: 'Professional quality, many styles',
    cons: 'Expensive',
    priceInfo: 'Free: Basic; Pro: $12/month',
    pricing: 'Free/Paid'
  },
  ideogram: {
    description: 'AI image generation with text capabilities.',
    category: 'AI Art',
    tags: ['Image Generation', 'Text', 'Logo'],
    features: ['Text in Image', 'Logo Design', 'Brand Assets'],
    useCases: ['Logo', 'Posters', 'Brand'],
    pros: 'Excellent text generation',
    cons: 'Limited features',
    priceInfo: 'Free: Basic; Pro: Advanced',
    pricing: 'Free/Paid'
  },
  civitai: {
    description: 'AI model sharing platform for Stable Diffusion.',
    category: 'AI Art',
    tags: ['Models', 'Community', 'Open Source'],
    features: ['Model Download', 'Community', 'Training'],
    useCases: ['Model Exploration', 'Customization', 'Research'],
    pros: 'Large model library, free',
    cons: 'Requires technical knowledge',
    priceInfo: 'Free',
    pricing: 'Free'
  },
  keling: {
    description: 'AI video generation by Tencent.',
    category: 'AI Video',
    tags: ['Video Generation', 'Tencent', 'Short Video'],
    features: ['Text to Video', 'Style Transfer', 'Editing'],
    useCases: ['Short Video', 'Marketing', 'Social'],
    pros: 'Quality stable, Tencent product',
    cons: 'Basic features',
    priceInfo: 'Free: Basic; Premium: More quota',
    pricing: 'Free/Paid'
  },
  jianying: {
    description: 'Video editing tool by TikTok with AI features.',
    category: 'AI Video',
    tags: ['Video Editing', 'TikTok', 'AI'],
    features: ['Editing', 'AI Effects', 'Auto Captions', 'Templates'],
    useCases: ['Short Video', 'Vlog', 'Content'],
    pros: 'Easy to use, powerful features',
    cons: 'Some features require payment',
    priceInfo: 'Free: Basic; Premium: Advanced effects',
    pricing: 'Free/Paid'
  },
  jimeng: {
    description: 'AI video generation tool for creative content.',
    category: 'AI Video',
    tags: ['Video Generation', 'Creative', 'AI'],
    features: ['Text to Video', 'Style Transfer', 'HD Output'],
    useCases: ['Creative Video', 'Advertising', 'Education'],
    pros: 'Creative tool, many styles',
    cons: 'Unstable response',
    priceInfo: 'Free: Limited; Pro: More features',
    pricing: 'Free/Paid'
  },
  heygen: {
    description: 'Professional AI video platform with digital humans.',
    category: 'AI Video',
    tags: ['Video Generation', 'Digital Human', 'Professional'],
    features: ['Digital Human', 'Multilingual', 'Video Synthesis'],
    useCases: ['Virtual Host', 'Education', 'Enterprise'],
    pros: 'Professional quality',
    cons: 'Expensive',
    priceInfo: 'Starter: $29/month; Enterprise: Custom',
    pricing: 'Paid'
  },
  'sora-2': {
    description: 'Next generation video model by OpenAI.',
    category: 'AI Video',
    tags: ['Video Generation', 'OpenAI', 'High Quality'],
    features: ['Long Video', 'High Quality', 'Complex Scenes'],
    useCases: ['Filmmaking', 'Advertising', 'Content'],
    pros: 'Cutting-edge quality',
    cons: 'Not yet released',
    priceInfo: 'Not yet announced',
    pricing: 'Coming Soon'
  },
  'veo-3': {
    description: 'AI video generation by Veo AI.',
    category: 'AI Video',
    tags: ['Video Generation', 'Quality', 'Creative'],
    features: ['High Quality', 'Style Transfer', 'Editing'],
    useCases: ['Creative Video', 'Art', 'Advertising'],
    pros: 'High quality output',
    cons: 'Limited features',
    priceInfo: 'Free: Basic; Pro: Advanced',
    pricing: 'Free/Paid'
  },
  suno: {
    description: 'AI music generation with lyrics.',
    category: 'AI Audio',
    tags: ['Music Generation', 'Lyrics', 'AI'],
    features: ['Music Generation', 'Lyrics', 'Styles'],
    useCases: ['Music Creation', 'Soundtracks', 'Songs'],
    pros: 'High quality music',
    cons: 'Limited free usage',
    priceInfo: 'Free: 5 songs/month; Pro: $9/month',
    pricing: 'Free/Paid'
  },
  gamma: {
    description: 'AI-powered presentation tool.',
    category: 'AI Office',
    tags: ['Presentation', 'AI', 'Productivity'],
    features: ['PPT Generation', 'Documents', 'Collaboration'],
    useCases: ['Presentations', 'Reports', 'Team'],
    pros: 'Easy to use, beautiful design',
    cons: 'Limited features',
    priceInfo: 'Free: 3 docs; Pro: $19/month',
    pricing: 'Free/Paid'
  },
  'napkin-ai': {
    description: 'AI-powered mind mapping tool.',
    category: 'AI Office',
    tags: ['Mind Mapping', 'AI', 'Creative'],
    features: ['Mind Mapping', 'Creative', 'Collaboration'],
    useCases: ['Brainstorming', 'Planning', 'Knowledge'],
    pros: 'Creative tool, collaborative',
    cons: 'Simple features',
    priceInfo: 'Free: Basic; Pro: $12/month',
    pricing: 'Free/Paid'
  },
  grammarly: {
    description: 'AI-powered writing assistant.',
    category: 'AI Office',
    tags: ['Writing', 'Grammar', 'AI'],
    features: ['Grammar Check', 'Style', 'Plagiarism'],
    useCases: ['Writing', 'Editing', 'Academic'],
    pros: 'Powerful, multi-platform',
    cons: 'Expensive',
    priceInfo: 'Free: Basic; Premium: $12/month',
    pricing: 'Free/Paid'
  },
  'claude-code': {
    description: 'AI coding assistant by Anthropic.',
    category: 'AI Coding',
    tags: ['Coding', 'AI', 'Anthropic'],
    features: ['Code Generation', 'Explanation', 'Debugging'],
    useCases: ['Programming', 'Code Review', 'Learning'],
    pros: 'Good code quality, secure',
    cons: 'Limited IDE integration',
    priceInfo: 'Free: Basic; Pro: Advanced',
    pricing: 'Free/Paid'
  },
  manus: {
    description: 'AI Agent platform for task automation.',
    category: 'AI Agent',
    tags: ['AI Agent', 'Automation', 'Workflow'],
    features: ['Task Planning', 'Automation', 'Tools'],
    useCases: ['Automation', 'Workflow', 'Productivity'],
    pros: 'Good automation',
    cons: 'Relatively new',
    priceInfo: 'Free: Basic; Pro: Advanced',
    pricing: 'Free/Paid'
  },
  genspark: {
    description: 'Enterprise AI Agent platform.',
    category: 'AI Agent',
    tags: ['Enterprise', 'AI Agent', 'Workflow'],
    features: ['Enterprise Workflow', 'Custom', 'Security'],
    useCases: ['Enterprise Automation', 'Workflow', 'Support'],
    pros: 'Enterprise features, secure',
    cons: 'Expensive',
    priceInfo: 'Custom pricing',
    pricing: 'Paid'
  },
  n8n: {
    description: 'Open-source workflow automation tool.',
    category: 'AI Agent',
    tags: ['Workflow', 'Open Source', 'Automation'],
    features: ['Workflow Automation', 'Nodes', 'AI'],
    useCases: ['Automation', 'Integration', 'Business'],
    pros: 'Open source, powerful',
    cons: 'Steep learning curve',
    priceInfo: 'Free; Cloud: $24/month',
    pricing: 'Free/Paid'
  },
  openclaw: {
    description: 'AI Agent framework with multimodal support.',
    category: 'AI Agent',
    tags: ['AI Agent', 'Multimodal', 'Framework'],
    features: ['Multimodal', 'Tools', 'Autonomous'],
    useCases: ['AI Assistant', 'Research', 'Apps'],
    pros: 'Powerful, open source',
    cons: 'Relatively new',
    priceInfo: 'Free',
    pricing: 'Free'
  },
  sonus: {
    description: 'AI music creation tool with intelligent songwriting, composition and music production.',
    category: 'AI Audio',
    tags: ['AI Music', 'Composition', 'Music Production', 'Songwriting'],
    features: ['AI Composition', 'Lyrics Generation', 'Arrangement', 'Multiple Styles'],
    useCases: ['Music Creation', 'Song Production', 'Soundtrack', 'Inspiration'],
    pros: 'Easy to use, high quality music',
    cons: 'Limited free usage',
    priceInfo: 'Free: Limited; Pro: Unlimited',
    pricing: 'Free/Paid'
  }
};

export function getToolTranslation(toolId: string, lang: string) {
  if (lang === 'en' && toolTranslations[toolId]) {
    return toolTranslations[toolId];
  }
  return null;
}

export function getLocalizedTool(tool: Tool, lang: string): Tool {
  if (lang !== 'en') return tool;
  const translation = toolTranslations[tool.id];
  if (!translation) return tool;
  return {
    ...tool,
    description: translation.description,
    category: translation.category || tool.category,
    tags: translation.tags,
    features: translation.features,
    useCases: translation.useCases,
    pros: translation.pros,
    cons: translation.cons,
    priceInfo: translation.priceInfo,
    pricing: translation.pricing || tool.pricing
  };
}