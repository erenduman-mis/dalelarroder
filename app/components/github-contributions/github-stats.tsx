import { format, isValid } from 'date-fns';
import AnimatedNumber from '../animated-number';
import StatItem from '../stat-item';
import {
	type ContributionCalendar,
	getBestDay,
	getContributionStreak,
	getDaysFromContribution,
} from './github';

interface Props {
	contributions: ContributionCalendar;
}

export default function GithubStats({ contributions }: Props) {
	const { weeks, totalContributions } = contributions;

	const bestDay = getBestDay(weeks);

	const daysFromContribution = Math.max(getDaysFromContribution(weeks), 1);

	const streak = getContributionStreak(
		weeks.flatMap((week) => week.contributionDays),
	);

	const averageContribution = totalContributions / daysFromContribution;

	const bestDayDate = bestDay.day ? new Date(bestDay.day) : null;

	const hasValidBestDay =
		bestDayDate && isValid(bestDayDate) && bestDay.count > 0;

	return (
		<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
			<StatItem title='This year'>
				<AnimatedNumber number={totalContributions} />
				<span> contributions</span>
			</StatItem>

			<StatItem title='Longest Streak'>
				<AnimatedNumber number={streak.longestStreak} />
				<span> days</span>
			</StatItem>

			<StatItem title='Best day'>
				{hasValidBestDay ? (
					<>
						<span>{format(bestDayDate, 'PP')} — </span>
						<AnimatedNumber number={bestDay.count} />
						<span> contributions</span>
					</>
				) : (
					<span>No contributions</span>
				)}
			</StatItem>

			<StatItem title='Average'>
				<AnimatedNumber number={Number(averageContribution.toFixed(2))} />
				<span> contributions / day</span>
			</StatItem>
		</div>
	);
}
