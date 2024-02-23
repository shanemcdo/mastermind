const colorCount = 5;

function calculateColors(): Array<string> {
	const result: Array<string> = [];
	for(let i = 0; i < colorCount ; i++) {
		const hue = (360 / colorCount) * i;
		result.push(`hsl(${hue}, 100%, 50%)`);
	}
	return result;
}

export const grey = 'grey';
export const colors = calculateColors();

export function getRandomColor(): string {
	return colors[Math.floor(colors.length * Math.random())];
};
