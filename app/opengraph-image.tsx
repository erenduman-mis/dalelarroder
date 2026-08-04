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
			<img src='/blob.png' width={430} height={430} alt='' />

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
