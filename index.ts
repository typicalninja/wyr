import axios, { AxiosRequestConfig } from 'axios';
import { load } from 'cheerio';
const BASE_URL = 'http://either.io/'

function getQuestion(options: { requestOptions: AxiosRequestConfig; } = { requestOptions: {} }) {
	return new Promise((resolve, reject) => {
		axios.get(BASE_URL, options.requestOptions || {}).then((response) => {
			const $ = load(response.data);
			const questions: any = $('.option-text').contents();
   			const counts: any = $('.count').contents();
			
			if(!questions || !counts || !questions.length || !counts.length) return reject('DATA_ERROR: Did not receive a valid response');

			const Data = {
				"blue": {
					question: questions[0].data,
					count: counts[0].data
				},
				"red": {
					question: questions[1].data,
					count: counts[1].data
				},
				"raw:": {
					questions: questions,
					counts: counts
				}
			}

			return resolve(Data);
		})
	});
}

export default getQuestion;