import axios, { AxiosRequestConfig } from 'axios';
import { load } from 'cheerio';
const BASE_URL_HTTP = 'http://either.io/';
const BASE_URL_HTTPS = 'https://either.io/';

function getQuestion(options: { requestOptions: AxiosRequestConfig; useHttps: boolean } = { requestOptions: {}, useHttps: true }) {
	return new Promise((resolve, reject) => {
		axios.get(options.useHttps === true ? BASE_URL_HTTPS : BASE_URL_HTTP, options.requestOptions || {}).then((response) => {
			const $ = load(response.data);
			const questions: any = $('.option-text').contents();
   			const votes: any = $('.count').contents();
			
			if(!questions || !votes || !questions.length || !votes.length) return reject('DATA_ERROR: Did not receive a valid response');

			const Data = {
				"blue": {
					question: questions[0].data,
					votes: votes[0].data
				},
				"red": {
					question: questions[1].data,
					votes: votes[1].data
				},
				"raw:": {
					questions: questions,
					votes: votes
				}
			}

			return resolve(Data);
		}).catch(reject)
	});
}

export default getQuestion;