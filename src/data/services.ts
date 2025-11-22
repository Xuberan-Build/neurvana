import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'neural-reset',
    title: 'Neural Reset Session',
    duration: '90 minutes',
    price: '$150–$165',
    theme: 'Recalibration of the body\'s internal balance',
    description: 'A 90-minute immersive neurosomatic session designed to interrupt chronic tension loops and restore your body\'s homeostatic balance. Using targeted massage, breath regulation, and vagal activation techniques, this session calms overactive neural pathways and reprograms the stress response.',
    benefits: [
      'Interrupts chronic tension loops',
      'Calms overactive neural pathways',
      'Restores homeostatic balance',
      'Reprograms stress response patterns'
    ],
    idealFor: 'Clients who feel stuck in "go mode" and need a structured reset',
    featured: true
  },
  {
    id: 'neurosomatic-realignment',
    title: 'Neurosomatic Realignment',
    duration: '2 hours',
    price: '$220–$240',
    theme: 'Deep recalibration of the body\'s bio-neural structure',
    description: 'A 2-hour precision-based session that integrates advanced neurosomatic mapping with structural release work to bring your body back into coherence. This treatment optimizes muscular symmetry, nervous system flow, and emotional grounding. Expect profound clarity, better mobility, and a sense of internal regulation.',
    benefits: [
      'Optimizes muscular symmetry',
      'Enhances nervous system flow',
      'Promotes emotional grounding',
      'Improves mobility and clarity',
      'Establishes internal regulation'
    ],
    idealFor: 'High-performance clients, chronic pain, or stress-driven professionals',
    featured: true
  },
  {
    id: 'homeostasis-membership',
    title: 'Homeostasis Membership',
    duration: 'Monthly Program',
    price: '$300–$350/month',
    theme: 'Maintenance of neural balance and long-term regulation',
    description: 'A 30-day program for sustained neurosomatic health. Members receive ongoing recalibration sessions paired with guided nervous system education, optional virtual check-ins, and self-regulation tools to extend the effects between sessions.',
    benefits: [
      '2 × 90-min Neural Reset Sessions OR 1 × 2-hr Realignment',
      'Nervous system tracking check-in',
      'Personalized regulation plan',
      'Priority booking',
      'Educational resources'
    ],
    idealFor: 'Clients committed to sustained nervous system health and long-term transformation',
    featured: true
  }
];
