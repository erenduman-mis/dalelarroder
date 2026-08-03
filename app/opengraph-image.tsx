import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Eren Duman';

export const size = {
	width: 1200,
	height: 630,
};

export const contentType = 'image/png';

export default function OpengraphImage() {
	return new ImageResponse(
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				background: '#000',
				position: 'relative',
				overflow: 'hidden',
				fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
			}}
		>
			{/* Purple blob */}
			<div
				style={{
					position: 'absolute',
					top: -150,
					right: -100,
					width: 560,
					height: 560,
					borderRadius: 9999,
					background:
						'radial-gradient(circle, rgba(168,85,247,0.95) 0%, rgba(139,92,246,0.45) 45%, rgba(0,0,0,0) 80%)',
				}}
			/>

			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'flex-start',
					paddingLeft: 90,
					paddingRight: 90,
					marginTop: -10,
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						color: '#fff',
						fontSize: 84,
						fontWeight: 700,
						lineHeight: 1.08,
						letterSpacing: '-3px',
						maxWidth: 760,
					}}
				>
					<span>Welcome to my</span>
					<span>corner of the web.</span>
				</div>

				<div
					style={{
						display: 'flex',
						marginTop: 36,
						color: '#9ca3af',
						fontSize: 34,
					}}
				>
					I'm Eren Duman.
				</div>
			</div>
		</div>,
		size,
	);
}
