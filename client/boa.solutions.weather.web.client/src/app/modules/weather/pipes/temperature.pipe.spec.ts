import { TemperaturePipe } from './temperature.pipe';

describe('TemperaturePipe', () => {
	it('create an instance', () => {
		const pipe = new TemperaturePipe();
		expect(pipe).toBeTruthy();
	});

	it('return empty string if forecast is not set', () => {
		const pipe = new TemperaturePipe();
		expect(pipe.transform(null)).toEqual('');
	});

	it('return formatted forecast', () => {
		const pipe = new TemperaturePipe();
		expect(pipe.transform({	date: null, temperatureMin: -10, temperatureMax: 20, temperatureUnit: 'F'})).toEqual('From -10 to 20 ℉');
	});
});
