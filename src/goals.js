import GoalIcon from './assets/goal.png';
import TrainingPlanIcon from './assets/trainingIcon.png';
import WorkHardIcon from './assets/WorkHard.png';
import ResultIcon from './assets/ResultIcon.png';
export const goals = [
    {
        icon: GoalIcon,
        title: 'DEFINE YOUR GOAL',
        description: 'Whether you want to lose weight, tone up, gain muscle or improve strength.',
    },
    {
        icon: TrainingPlanIcon,
        title: 'GET A TRAINING PLAN',
        description: 'Our professional trainers are on hand to get you going on a fitness program that is right for you.',
    },
    {
        icon: WorkHardIcon,
        title: 'WORK HARD WITH US',
        description: 'All Smart Gyms have a huge selection of equipment and FREE Group Fitness Classes to help you achieve your fitness goals.',
        link: { text: 'VIEW THE FACILITIES', url: '/location' },
    },
    {
        icon: ResultIcon,
        title: 'ENJOY THE RESULT',
        description: 'Making a commitment to a healthy lifestyle is a tremendous achievement, even if your fitness goal is a little harder to reach than you first thought. Celebrate your achievements, no matter how small, and keep it going.',
        link: { text: 'BECOME A MEMBER', url: '/contact' },
    },
];

