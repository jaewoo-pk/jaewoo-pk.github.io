export type Project = {
  /** Unique, URL-friendly identifier, also used for links like /projects#my-project. */
  id: string
  title: string
  description: string
  /** Free-form date: "2025", "June 2025", or "2024 – Present". */
  date?: string
  /** Optional labeled details: role, collaborators, client, status, or impact. */
  details?: { label: string; value: string }[]
  tags?: string[]
  photos?: {
    /** Path relative to public/, e.g. "projects/my-project.jpg". */
    filename: string
    alt: string
    width: number
    height: number
    caption?: string
  }[]
  links?: { label: string; href: string }[]
}

// Edit this object to update the projects page. Projects appear in array order.
export const projectsPage: {
  title?: string
  description?: string
  projects: Project[]
} = {
  projects: [
    {
      id: 'moshi-silence',
      title: 'Teaching Moshi when to stay silent',
      description:
        'How much synthetic fine-tuning data does it take to teach a full-duplex speech model (Kyutai\'s Moshi) to stay quiet on instruction and speak again at the right moment? "Give me ten seconds, then ask me again", "stay quiet until I\'m back", "let me describe all three options first". I built a synthetic-conversation generator, LoRA fine-tuned moshiko-7B on 1 h to 50 h of data, and measured hold/resume behavior on held-out scripts, wording, voices, distractors and my own recorded voice. The demo plays the same unseen conversations to the base model and the 45 h fine-tune.',
      date: 'October 2025',
      details: [
        { label: 'Model', value: 'kyutai/moshiko-pytorch-bf16 + LoRA r=64 (moshi-finetune)' },
        { label: 'Result', value: 'Behavior score 0.32 → 0.86 on fully held-out conversations; 0.33 → 0.83 on my own voice' },
      ],
      tags: ['Speech', 'Fine-tuning', 'Synthetic data', 'PyTorch'],
      links: [
        { label: 'Interactive demo (listen)', href: '/moshi-demo/' },
        { label: 'Code and report (GitHub)', href: 'https://github.com/jaewoo-pk/moshi-silence' },
      ],
    },
  ],
}
